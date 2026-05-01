<template>
  <div class="min-h-screen flex flex-col py-8 md:py-12 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden z-[1]">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-20 -left-10 w-72 h-72 rounded-full bg-cyan-300/30 blur-[110px] dark:bg-cyan-500/20"></div>
      <div class="absolute top-8 right-0 w-80 h-80 rounded-full bg-violet-300/25 blur-[120px] dark:bg-violet-500/20"></div>
    </div>

    <div class="sm:mx-auto sm:w-full sm:max-w-7xl relative z-10">
      <div class="rounded-3xl border border-white/60 dark:border-white/10 bg-white/60 dark:bg-slate-900/45 backdrop-blur-xl shadow-[0_26px_50px_-30px_rgba(39,33,100,0.55)] p-6 md:p-10 mb-8">
        <div class="flex flex-col lg:flex-row justify-between items-start lg:items-end gap-5">
          <div class="max-w-3xl">
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/70 dark:border-white/15 bg-white/70 dark:bg-white/5 text-indigo-700 dark:text-indigo-200 mb-4">
              <UIcon name="i-heroicons-sparkles" />
              <span class="text-[10px] font-black uppercase tracking-[0.25em]">Royal Certification Studio</span>
            </div>
            <h2 class="text-3xl sm:text-4xl md:text-5xl font-black tracking-tight text-slate-900 dark:text-white">
              Build Exam Mastery Like an
              <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-blue-700 dark:from-indigo-300 dark:to-cyan-200">Elite Candidate</span>
            </h2>
            <p class="mt-3 text-sm sm:text-base text-slate-600 dark:text-slate-300">
              Access high-confidence practice modules, deep mock analysis, and rapid learning loops built for serious certification outcomes.
            </p>
          </div>
          <UButton
            color="primary"
            size="lg"
            variant="solid"
            icon="i-heroicons-megaphone"
            class="rounded-2xl h-12 font-black px-6 shadow-lg shadow-indigo-500/25"
            @click="openRequestModal"
          >
            Request Missing Module
          </UButton>
        </div>

        <div class="mt-6 grid grid-cols-1 md:grid-cols-3 gap-3">
          <div class="rounded-2xl border border-white/70 dark:border-white/10 bg-white/65 dark:bg-slate-900/55 px-4 py-3">
            <p class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Catalog Strength</p>
            <p class="text-xl font-black text-slate-900 dark:text-white mt-1">{{ data?.exams?.length || 0 }} Modules</p>
          </div>
          <div class="rounded-2xl border border-white/70 dark:border-white/10 bg-white/65 dark:bg-slate-900/55 px-4 py-3">
            <p class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Performance Focus</p>
            <p class="text-xl font-black text-slate-900 dark:text-white mt-1">Practice + Mock</p>
          </div>
          <div class="rounded-2xl border border-white/70 dark:border-white/10 bg-white/65 dark:bg-slate-900/55 px-4 py-3">
            <p class="text-[10px] font-black uppercase tracking-[0.2em] text-slate-400">Access Tiering</p>
            <p class="text-xl font-black text-slate-900 dark:text-white mt-1">Plan-Aware</p>
          </div>
        </div>
      </div>

      <div v-if="pending" class="flex justify-center my-12">
        <UIcon name="i-heroicons-arrow-path" class="animate-spin text-4xl text-primary-500" />
      </div>

      <div v-else-if="error" class="text-center text-red-500 my-12">
        Failed to load exams. Please check your database connection.
      </div>

      <div v-else-if="data?.exams" class="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
        <UCard v-for="exam in data.exams" :key="exam.id" class="flex flex-col h-full rounded-3xl border border-white/70 dark:border-white/10 bg-white/65 dark:bg-slate-900/50 backdrop-blur-xl shadow-[0_20px_36px_-24px_rgba(38,31,97,0.55)] hover:-translate-y-1.5 transition-all duration-500">
          <template #header>
            <div class="flex justify-between items-start">
              <UBadge color="gray" variant="solid" class="mb-2 rounded-full">{{ exam.provider || 'General' }}</UBadge>
              <UBadge v-if="exam.certificationCode" color="primary" variant="subtle" class="rounded-full">{{ exam.certificationCode }}</UBadge>
            </div>
            <h3 class="text-xl font-black mt-2 text-slate-900 dark:text-white">{{ exam.title }}</h3>
          </template>

          <div class="flex-grow">
            <div class="flex mt-2 mb-4 gap-2 flex-wrap">
              <UBadge v-for="tag in exam.categoryTags" :key="tag" color="gray" variant="soft" size="sm" class="rounded-full">
                {{ tag }}
              </UBadge>
            </div>
            
            <div class="text-sm border-t border-slate-200/70 dark:border-slate-700/70 pt-4 flex justify-between text-slate-600 dark:text-slate-300">
              <span class="flex items-center"><UIcon name="i-heroicons-document-text" class="mr-1" /> {{ exam._count?.questions || 0 }} Questions</span>
              <span class="flex items-center" v-if="exam.timeLimit"><UIcon name="i-heroicons-clock" class="mr-1" /> {{ exam.timeLimit }} min</span>
            </div>
          </div>

          <template #footer>
            <div class="flex flex-col sm:flex-row gap-2 w-full">
              <template v-if="(exam._count?.questions || 0) > 0 && exam.canAccess !== false">
                <UButton class="flex-1 rounded-xl font-bold" @click="handleAction(`/exam/${exam.id}?mode=practice`)" color="primary" variant="solid" icon="i-heroicons-play">
                  Practice
                </UButton>
                <UButton class="flex-1 rounded-xl font-bold" @click="handleAction(`/exam/${exam.id}?mode=mock`)" color="gray" variant="outline" icon="i-heroicons-academic-cap">
                  Mock Exam
                </UButton>
              </template>
              <template v-else-if="(exam._count?.questions || 0) > 0 && exam.canAccess === false">
                <UButton class="flex-1 rounded-xl font-bold" disabled color="gray" variant="soft" icon="i-heroicons-lock-closed">
                  Locked for Beginning Plan
                </UButton>
              </template>
              <template v-else>
                <UButton class="flex-1 rounded-xl font-bold" disabled color="gray" variant="soft" icon="i-heroicons-lock-closed">
                  Coming Soon
                </UButton>
              </template>
            </div>
          </template>
        </UCard>
      </div>
      
      <div v-if="data && Array.isArray(data.exams) && data.exams.length === 0" class="text-center py-12">
        <UIcon name="i-heroicons-inbox" class="text-6xl text-slate-300 dark:text-slate-600 mb-4" />
        <h3 class="text-xl text-slate-500 dark:text-slate-400">No published exams found.</h3>
        <p class="text-sm text-slate-400 mt-2">Log in as admin to create or extract exams from images.</p>
      </div>

      <UCard class="mt-10 rounded-3xl border border-indigo-200/40 dark:border-indigo-500/25 bg-gradient-to-r from-indigo-50/90 to-cyan-50/90 dark:from-indigo-900/20 dark:to-cyan-900/20">
        <div class="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h3 class="text-lg font-black text-slate-900 dark:text-white">Can’t find your certification module?</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300 mt-1">
              Submit a demand signal and we prioritize high-interest modules for fast release.
            </p>
          </div>
          <div class="flex flex-wrap gap-2">
            <UBadge color="green" variant="soft" class="rounded-full">Live Rankings</UBadge>
            <UBadge color="blue" variant="soft" class="rounded-full">Real Progress Dashboard</UBadge>
            <UButton color="primary" class="rounded-xl font-bold" icon="i-heroicons-paper-airplane" @click="openRequestModal">Submit Request</UButton>
          </div>
        </div>
      </UCard>
    </div>

    <UModal v-model="requestModalOpen">
      <UCard class="rounded-2xl">
        <template #header>
          <h3 class="text-lg font-black">Request a New Certification Module</h3>
        </template>

        <div class="space-y-4">
          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UFormGroup label="Your Name" required>
              <UInput v-model="requestForm.name" placeholder="Your full name" />
            </UFormGroup>
            <UFormGroup label="Email" required>
              <UInput v-model="requestForm.email" type="email" placeholder="you@email.com" />
            </UFormGroup>
          </div>

          <UFormGroup label="Certification / Module Name" required>
            <UInput v-model="requestForm.moduleName" placeholder="e.g. Azure AI Engineer Associate (AI-102)" />
          </UFormGroup>

          <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
            <UFormGroup label="Provider">
              <UInput v-model="requestForm.provider" placeholder="AWS / Azure / SAP / GCP..." />
            </UFormGroup>
            <UFormGroup label="Urgency">
              <USelect
                v-model="requestForm.urgency"
                :options="[
                  { label: 'Need ASAP', value: 'ASAP' },
                  { label: 'Need this month', value: 'THIS_MONTH' },
                  { label: 'Planning later', value: 'LATER' }
                ]"
                option-attribute="label"
                value-attribute="value"
              />
            </UFormGroup>
          </div>

          <UCheckbox v-model="requestForm.preorderReady" label="I am ready to pre-order this module if you launch it soon." />

          <UFormGroup label="Additional Details (optional)">
            <UTextarea v-model="requestForm.notes" :rows="3" placeholder="Share exam code, expected timeline, or what kind of practice you need." />
          </UFormGroup>

          <div v-if="requestError" class="text-sm text-red-500">{{ requestError }}</div>
          <div v-if="requestSuccess" class="text-sm text-green-600">{{ requestSuccess }}</div>
        </div>

        <template #footer>
          <div class="flex justify-end gap-2">
            <UButton color="gray" variant="ghost" @click="requestModalOpen = false">Cancel</UButton>
            <UButton color="primary" :loading="requesting" @click="submitModuleRequest">Submit Request</UButton>
          </div>
        </template>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
import { useFetch } from '#app'

useHead({
  title: 'RhyseForge — Elite Certification Exam Preparation',
  meta: [
    { name: 'description', content: 'Master AWS, Azure, Databricks, and SAP certifications with RhyseForge. AI-powered practice modules, mock exams, and performance tracking.' }
  ]
})

const { data, pending, error } = useFetch('/api/exams')
const { status, data: authData } = useAuth()
const router = useRouter()

const requestModalOpen = ref(false)
const requesting = ref(false)
const requestSuccess = ref('')
const requestError = ref('')
const requestForm = reactive({
  name: '',
  email: '',
  moduleName: '',
  provider: '',
  urgency: 'LATER',
  preorderReady: false,
  notes: ''
})

watchEffect(() => {
  if (authData.value?.user) {
    requestForm.name = authData.value.user.name || requestForm.name
    requestForm.email = authData.value.user.email || requestForm.email
  }
})

const handleAction = (url) => {
  if (status.value === 'authenticated') {
    router.push(url)
  } else {
    // Force login if not authenticated
    router.push('/login')
  }
}

const openRequestModal = () => {
  requestError.value = ''
  requestSuccess.value = ''
  requestModalOpen.value = true
}

const submitModuleRequest = async () => {
  requestError.value = ''
  requestSuccess.value = ''
  requesting.value = true

  try {
    const response = await $fetch('/api/module-requests', {
      method: 'POST',
      body: requestForm
    })
    requestSuccess.value = response.message || 'Request submitted successfully.'
    requestForm.moduleName = ''
    requestForm.provider = ''
    requestForm.notes = ''
    requestForm.preorderReady = false
  } catch (e) {
    requestError.value = e?.data?.statusMessage || 'Failed to submit request'
  } finally {
    requesting.value = false
  }
}
</script>
