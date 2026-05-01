<template>
  <div class="min-h-screen relative overflow-hidden transition-colors duration-500 bg-[linear-gradient(140deg,_#dff2ff_0%,_#f8f2ff_45%,_#d6e0ff_100%)] dark:bg-[linear-gradient(140deg,_#0c1027_0%,_#18163a_48%,_#1a2a4f_100%)]">
    <!-- Ambient Layers -->
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-24 -left-20 h-72 w-72 rounded-full bg-cyan-300/35 blur-[110px] dark:bg-cyan-500/20"></div>
      <div class="absolute -top-16 right-0 h-80 w-80 rounded-full bg-indigo-300/35 blur-[120px] dark:bg-indigo-500/25"></div>
      <div class="absolute bottom-0 left-1/2 h-96 w-96 -translate-x-1/2 rounded-full bg-violet-300/30 blur-[130px] dark:bg-violet-500/20"></div>
      <div class="absolute inset-0 bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.6),_rgba(255,255,255,0.05)_42%,_transparent_70%)] dark:bg-[radial-gradient(circle_at_top,_rgba(255,255,255,0.08),_rgba(8,10,25,0.08)_42%,_transparent_70%)]"></div>
    </div>

    <UContainer class="relative z-10 py-12 md:py-20">
      <!-- Hero Section -->
      <div class="text-center mb-14 md:mb-20 px-4">
        <div class="inline-flex items-center gap-2 rounded-full border border-white/65 dark:border-white/20 bg-white/65 dark:bg-white/10 px-5 py-2 text-indigo-700 dark:text-indigo-100 shadow-sm backdrop-blur-md">
          <UIcon name="i-heroicons-sparkles" />
          <span class="text-[10px] font-extrabold uppercase tracking-[0.26em]">Simple, Transparent Pricing</span>
        </div>

        <h1 class="mt-6 text-4xl sm:text-5xl md:text-7xl font-black tracking-tight leading-[1.04] text-slate-900 dark:text-slate-100">
          Built for Every
          <span class="text-transparent bg-clip-text bg-gradient-to-r from-indigo-700 to-violet-700 dark:from-indigo-300 dark:to-violet-300">
            Certification Goal
          </span>
        </h1>
        <p class="mt-4 text-base sm:text-lg max-w-2xl mx-auto font-medium text-slate-600 dark:text-slate-300">
          No hidden fees. Pick your learning path and grow with AI-powered practice, analytics, and exam-ready workflows.
        </p>

        <div v-if="currentPlan && currentPlan !== 'FREE'" class="mt-6 inline-flex items-center gap-2 rounded-full border border-emerald-200/80 dark:border-emerald-500/30 bg-emerald-50/90 dark:bg-emerald-500/15 px-5 py-2.5 text-emerald-700 dark:text-emerald-200 backdrop-blur-md">
          <UIcon name="i-heroicons-check-badge" class="text-lg" />
          <span class="text-sm font-black">Your current plan: {{ currentPlan }}</span>
        </div>
      </div>

      <!-- Critical Purchase Disclaimer -->
      <div class="max-w-5xl mx-auto px-4 mb-10">
        <div class="rounded-3xl border border-white/60 dark:border-white/10 bg-white/55 dark:bg-slate-900/45 p-6 md:p-8 shadow-[0_18px_45px_-22px_rgba(46,32,102,0.45)] backdrop-blur-xl">
          <div class="flex items-start gap-4">
            <div class="w-11 h-11 rounded-xl bg-amber-500/15 dark:bg-amber-300/15 flex items-center justify-center flex-shrink-0">
              <UIcon name="i-heroicons-shield-exclamation" class="text-2xl text-amber-700 dark:text-amber-300" />
            </div>
            <div>
              <h2 class="text-lg md:text-xl font-black text-slate-900 dark:text-slate-100">Please Read Before Payment</h2>
              <ul class="mt-3 space-y-1.5 text-sm text-slate-700 dark:text-slate-300">
                <li>1. Questions are for practice and may include previous exam-style patterns.</li>
                <li>2. Passing the real certification exam is not guaranteed.</li>
                <li>3. Relying only on this question bank is your own decision and risk.</li>
                <li>4. After plan activation, payments are generally non-refundable unless required by law or billing error.</li>
              </ul>
              <p class="mt-3 text-xs text-slate-600 dark:text-slate-400">
                See full details in
                <NuxtLink to="/terms-of-service" class="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline">Terms of Service</NuxtLink>
                and
                <NuxtLink to="/privacy-policy" class="font-semibold text-indigo-700 dark:text-indigo-300 hover:underline">Privacy Policy</NuxtLink>.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- Pricing Cards -->
      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto px-4 mb-20">

        <!-- BEGINNING Plan -->
        <div class="rounded-[2rem] border border-white/70 dark:border-white/10 bg-white/55 dark:bg-slate-900/45 p-6 sm:p-8 shadow-[0_28px_48px_-30px_rgba(44,37,115,0.55)] backdrop-blur-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col">
          <div class="mb-8">
            <div class="w-12 h-12 rounded-2xl bg-indigo-100/85 dark:bg-indigo-400/15 flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-academic-cap" class="text-2xl text-indigo-600 dark:text-indigo-300" />
            </div>
            <h3 class="text-xl font-black text-slate-900 dark:text-slate-100 mb-1">Beginning</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Access a single certification module</p>
          </div>

          <div class="mb-8">
            <div class="flex items-baseline gap-1">
              <span class="text-4xl sm:text-5xl font-black text-slate-900 dark:text-slate-100">&#8377;200</span>
              <span class="text-slate-500 dark:text-slate-300 font-bold text-sm">/module</span>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">One-time purchase</p>
          </div>

          <div class="space-y-4 mb-8 flex-1">
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-emerald-500 dark:text-emerald-300 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-slate-700 dark:text-slate-200">Access to <strong>1 Certification Exam</strong> module of your choice</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-emerald-500 dark:text-emerald-300 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-slate-700 dark:text-slate-200">Unlimited practice & mock exams</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-emerald-500 dark:text-emerald-300 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-slate-700 dark:text-slate-200">Detailed explanations for every question</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-emerald-500 dark:text-emerald-300 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-slate-700 dark:text-slate-200">Personal performance dashboard</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-x-circle" class="text-slate-400 dark:text-slate-500 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-slate-500 dark:text-slate-400">No access to other modules</span>
            </div>
          </div>

          <UButton
            block
            color="gray"
            variant="solid"
            size="xl"
            class="rounded-2xl h-14 font-black"
            :loading="purchasingPlan === 'BEGINNING'"
            :disabled="isCurrentOrLower('BEGINNING')"
            @click="handlePurchase('BEGINNING')"
          >
            {{ isCurrentOrLower('BEGINNING') ? 'Current Plan' : 'Get Started - INR 200' }}
          </UButton>
        </div>

        <!-- ADVANCED Plan (Featured) -->
        <div class="rounded-[2rem] border border-violet-300/70 dark:border-violet-300/25 bg-gradient-to-b from-indigo-900/95 via-violet-900/95 to-indigo-950/95 p-6 sm:p-8 shadow-[0_34px_60px_-28px_rgba(44,22,127,0.85)] backdrop-blur-xl hover:-translate-y-2 transition-all duration-500 flex flex-col relative overflow-hidden">
          <div class="absolute inset-0 bg-[radial-gradient(circle_at_15%_10%,_rgba(255,255,255,0.25),_transparent_40%),radial-gradient(circle_at_85%_65%,_rgba(137,180,255,0.22),_transparent_45%)]"></div>

          <div class="absolute top-0 right-0 bg-white/90 text-violet-900 px-4 py-1.5 rounded-bl-2xl text-[10px] font-black uppercase tracking-widest">
            Best Value
          </div>

          <div class="relative mb-8">
            <div class="w-12 h-12 rounded-2xl bg-white/20 flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-fire" class="text-2xl text-white" />
            </div>
            <h3 class="text-xl font-black text-white mb-1">Advanced</h3>
            <p class="text-sm text-indigo-100">Lifetime access to all exam modules</p>
          </div>

          <div class="relative mb-8">
            <div class="flex items-baseline gap-1">
              <span class="text-4xl sm:text-5xl font-black text-white">&#8377;500</span>
              <span class="text-indigo-200 font-bold text-sm">/lifetime</span>
            </div>
            <p class="text-xs text-indigo-200 mt-1">Pay once, access forever</p>
          </div>

          <div class="relative space-y-4 mb-8 flex-1">
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-white text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-white/90"><strong>All current & future</strong> certification modules</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-white text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-white/90">Unlimited practice & mock exams</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-white text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-white/90">Priority access to new exam content</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-white text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-white/90">Advanced analytics & weak area drills</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-white text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-white/90">Global Leaderboard ranking</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-white text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-white/90">Email support</span>
            </div>
          </div>

          <UButton
            block
            color="white"
            size="xl"
            class="relative rounded-2xl h-14 font-black text-violet-800"
            :loading="purchasingPlan === 'ADVANCED'"
            :disabled="isCurrentOrLower('ADVANCED')"
            @click="handlePurchase('ADVANCED')"
          >
            {{ isCurrentOrLower('ADVANCED') ? 'Current Plan' : 'Unlock All Exams - INR 500' }}
          </UButton>
        </div>

        <!-- ENTERPRISE Plan -->
        <div class="rounded-[2rem] border border-white/70 dark:border-white/10 bg-white/55 dark:bg-slate-900/45 p-6 sm:p-8 shadow-[0_28px_48px_-30px_rgba(44,37,115,0.55)] backdrop-blur-xl hover:-translate-y-1.5 transition-all duration-500 flex flex-col">
          <div class="mb-8">
            <div class="w-12 h-12 rounded-2xl bg-cyan-100/85 dark:bg-cyan-400/15 flex items-center justify-center mb-4">
              <UIcon name="i-heroicons-building-office-2" class="text-2xl text-cyan-600 dark:text-cyan-300" />
            </div>
            <h3 class="text-xl font-black text-slate-900 dark:text-slate-100 mb-1">Enterprise</h3>
            <p class="text-sm text-slate-600 dark:text-slate-300">Your own branded exam platform</p>
          </div>

          <div class="mb-8">
            <div class="flex items-baseline gap-1">
              <span class="text-4xl sm:text-5xl font-black text-slate-900 dark:text-slate-100">&#8377;5,000</span>
              <span class="text-slate-500 dark:text-slate-300 font-bold text-sm">/license</span>
            </div>
            <p class="text-xs text-slate-500 dark:text-slate-400 mt-1">Full source code + deployment</p>
          </div>

          <div class="space-y-4 mb-8 flex-1">
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-emerald-500 dark:text-emerald-300 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-slate-700 dark:text-slate-200"><strong>Complete source code</strong> of the platform</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-emerald-500 dark:text-emerald-300 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-slate-700 dark:text-slate-200">Custom branding & white-label license</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-emerald-500 dark:text-emerald-300 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-slate-700 dark:text-slate-200">AI-powered question parser included</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-emerald-500 dark:text-emerald-300 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-slate-700 dark:text-slate-200">Admin panel, user management, analytics</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-emerald-500 dark:text-emerald-300 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-slate-700 dark:text-slate-200">Deploy on your own infrastructure</span>
            </div>
            <div class="flex items-start gap-3">
              <UIcon name="i-heroicons-check-circle" class="text-emerald-500 dark:text-emerald-300 text-lg flex-shrink-0 mt-0.5" />
              <span class="text-sm text-slate-700 dark:text-slate-200">1-on-1 setup assistance & training</span>
            </div>
          </div>

          <UButton
            block
            color="gray"
            variant="outline"
            size="xl"
            class="rounded-2xl h-14 font-black"
            :loading="purchasingPlan === 'ENTERPRISE'"
            :disabled="isCurrentOrLower('ENTERPRISE')"
            @click="handlePurchase('ENTERPRISE')"
          >
            {{ isCurrentOrLower('ENTERPRISE') ? 'Current Plan' : 'Get Enterprise - INR 5,000' }}
          </UButton>
        </div>
      </div>

      <!-- Device Protection Info -->
      <div class="max-w-3xl mx-auto px-4 mb-16">
        <div class="rounded-3xl border border-white/65 dark:border-white/10 bg-white/55 dark:bg-slate-900/45 p-6 md:p-8 shadow-[0_18px_45px_-22px_rgba(46,32,102,0.45)] backdrop-blur-xl">
          <div class="flex items-start gap-4">
            <div class="w-12 h-12 rounded-2xl bg-cyan-500/15 dark:bg-cyan-300/20 flex items-center justify-center flex-shrink-0">
              <UIcon name="i-heroicons-shield-check" class="text-2xl text-cyan-700 dark:text-cyan-300" />
            </div>
            <div>
              <h3 class="text-lg font-black text-slate-900 dark:text-slate-100 mb-2">Device-Locked Security</h3>
              <p class="text-sm text-slate-700 dark:text-slate-300 leading-relaxed">
                All subscriptions are securely bound to your <strong>User ID + Device ID</strong>. Even if someone gets your login
                credentials, they <strong>cannot access your subscription from another device</strong>. This protects your investment
                and ensures fair usage. Need to change devices? Contact our support team.
              </p>
            </div>
          </div>
        </div>
      </div>

      <!-- FAQ Section -->
      <div class="max-w-3xl mx-auto px-4">
        <h2 class="text-2xl md:text-3xl font-black text-center text-slate-900 dark:text-slate-100 mb-10">Frequently Asked Questions</h2>
        <UAccordion :items="faqItems" :ui="{ wrapper: 'space-y-4' }">
          <template #default="{ item, open }">
            <UButton color="gray" variant="ghost" class="w-full rounded-2xl px-6 py-5 bg-white/50 dark:bg-white/5 border border-white/60 dark:border-white/10 backdrop-blur-lg" :ui="{ rounded: 'rounded-2xl' }">
              <span class="font-bold text-left flex-1 text-slate-800 dark:text-slate-200">{{ item.label }}</span>
              <UIcon :name="open ? 'i-heroicons-chevron-up' : 'i-heroicons-chevron-down'" class="flex-shrink-0 text-slate-600 dark:text-slate-300" />
            </UButton>
          </template>
          <template #item="{ item }">
            <div class="px-6 pb-4 text-sm text-slate-600 dark:text-slate-300 leading-relaxed">
              {{ item.content }}
            </div>
          </template>
        </UAccordion>
      </div>
    </UContainer>

    <!-- Purchase Confirmation Modal -->
    <UModal v-model="showConfirmModal">
      <UCard class="rounded-2xl">
        <template #header>
          <div class="flex items-center gap-3">
            <div class="w-10 h-10 rounded-xl bg-primary-100 dark:bg-primary-900/30 flex items-center justify-center">
              <UIcon name="i-heroicons-credit-card" class="text-xl text-primary-500" />
            </div>
            <div>
              <h3 class="text-lg font-black text-gray-900 dark:text-white">Confirm Purchase</h3>
              <p class="text-xs text-gray-500">Subscription locked to your device</p>
            </div>
          </div>
        </template>

        <div class="space-y-4">
          <div class="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-700">
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-bold text-gray-600 dark:text-gray-300">Plan</span>
              <span class="text-sm font-black text-gray-900 dark:text-white">{{ selectedPlanDetails?.name }}</span>
            </div>
            <div class="flex justify-between items-center mb-2">
              <span class="text-sm font-bold text-gray-600 dark:text-gray-300">Price</span>
              <span class="text-xl font-black text-primary-500">INR {{ selectedPlanDetails?.price?.toLocaleString('en-IN') }}</span>
            </div>
            <div class="flex justify-between items-center">
              <span class="text-sm font-bold text-gray-600 dark:text-gray-300">Device Bound</span>
              <span class="text-xs font-mono text-gray-500">{{ maskedDeviceId }}</span>
            </div>
          </div>

          <div v-if="selectedPlan === 'BEGINNING'" class="p-4 rounded-2xl bg-blue-50 dark:bg-blue-900/10 border border-blue-200 dark:border-blue-800">
            <p class="text-xs font-black text-blue-600 dark:text-blue-400 uppercase tracking-widest mb-2">Select Your Module</p>
            <USelect
              v-model="selectedBeginningExamId"
              :options="beginningModuleOptions"
              option-attribute="label"
              value-attribute="value"
              placeholder="Choose one certification module"
            />
            <p class="text-[11px] text-blue-600/80 mt-2">Beginning plan will unlock only this module.</p>
          </div>

          <div class="p-3 rounded-xl bg-amber-50 dark:bg-amber-900/10 border border-amber-200 dark:border-amber-800">
            <p class="text-xs text-amber-700 dark:text-amber-400 flex items-start gap-2">
              <UIcon name="i-heroicons-exclamation-triangle" class="flex-shrink-0 mt-0.5" />
              <span>This subscription will be permanently bound to your current device. It cannot be transferred to another device without contacting support.</span>
            </p>
          </div>

          <div v-if="purchaseError" class="p-3 rounded-xl bg-red-50 dark:bg-red-900/10 border border-red-200 dark:border-red-800">
            <p class="text-xs text-red-600 dark:text-red-400 flex items-start gap-2">
              <UIcon name="i-heroicons-x-circle" class="flex-shrink-0 mt-0.5" />
              <span>{{ purchaseError }}</span>
            </p>
          </div>
        </div>

        <template #footer>
          <div class="flex gap-3">
            <UButton
              color="gray"
              variant="ghost"
              class="flex-1 rounded-xl"
              @click="showConfirmModal = false"
            >
              Cancel
            </UButton>
            <UButton
              color="primary"
              class="flex-1 rounded-xl font-black"
              :loading="confirmingPurchase"
              @click="confirmPurchase"
            >
              Confirm & Pay INR {{ selectedPlanDetails?.price?.toLocaleString('en-IN') }}
            </UButton>
          </div>
        </template>
      </UCard>
    </UModal>

    <!-- Success Modal -->
    <UModal v-model="showSuccessModal">
      <UCard class="rounded-2xl text-center">
        <div class="py-6">
          <div class="w-20 h-20 rounded-full bg-green-100 dark:bg-green-900/30 flex items-center justify-center mx-auto mb-4">
            <UIcon name="i-heroicons-check-circle" class="text-4xl text-green-500" />
          </div>
          <h3 class="text-2xl font-black text-gray-900 dark:text-white mb-2">Request Submitted!</h3>
          <p class="text-sm text-gray-500 mb-6">
            Your <strong>{{ selectedPlanDetails?.name }}</strong> request is pending admin approval.
          </p>
          <UButton color="primary" size="lg" class="rounded-xl font-black px-8" to="/dashboard">
            Go to Dashboard
          </UButton>
        </div>
      </UCard>
    </UModal>
  </div>
</template>

<script setup>
useHead({
  title: 'Pricing — Choose Your Forge Plan',
  meta: [
    { name: 'description', content: 'Explore RhyseForge pricing plans. From single module access to lifetime all-access passes and enterprise licenses.' }
  ]
})

const { status, data, getSession } = useAuth()
const { getDeviceId } = useDeviceFingerprint()
const toast = useToast()

const PLANS = {
  BEGINNING:  { price: 200,  name: 'Beginning' },
  ADVANCED:   { price: 500,  name: 'Advanced' },
  ENTERPRISE: { price: 5000, name: 'Enterprise' }
}

const PLAN_RANK = { FREE: 0, BEGINNING: 1, ADVANCED: 2, ENTERPRISE: 3 }
const { data: examCatalog } = useFetch('/api/exams', { params: { limit: 100 } })

const currentPlan = computed(() => data.value?.user?.plan || 'FREE')
const purchasingPlan = ref('')
const selectedPlan = ref('')
const selectedBeginningExamId = ref('')
const showConfirmModal = ref(false)
const showSuccessModal = ref(false)
const confirmingPurchase = ref(false)
const purchaseError = ref('')

const selectedPlanDetails = computed(() =>
  selectedPlan.value ? PLANS[selectedPlan.value] : null
)

const beginningModuleOptions = computed(() => {
  const exams = examCatalog.value?.exams || []
  return exams.map((exam) => ({
    label: `${exam.title} (${exam.certificationCode || 'N/A'})`,
    value: exam.id
  }))
})

const maskedDeviceId = computed(() => {
  if (typeof window === 'undefined') return 'â€¢â€¢â€¢â€¢â€¢â€¢â€¢â€¢'
  const id = getDeviceId()
  return 'â€¢â€¢â€¢â€¢' + id.slice(-4)
})

const isCurrentOrLower = (plan) => {
  const currentRank = PLAN_RANK[currentPlan.value] || 0
  const checkRank = PLAN_RANK[plan] || 0
  return checkRank <= currentRank && currentRank > 0
}

const handlePurchase = (plan) => {
  // If not logged in, redirect to register
  if (status.value !== 'authenticated') {
    navigateTo('/register')
    return
  }

  selectedPlan.value = plan
  selectedBeginningExamId.value = ''
  purchaseError.value = ''
  showConfirmModal.value = true
}

const confirmPurchase = async () => {
  confirmingPurchase.value = true
  purchaseError.value = ''
  purchasingPlan.value = selectedPlan.value

  try {
    const deviceId = getDeviceId()

    if (selectedPlan.value === 'BEGINNING' && !selectedBeginningExamId.value) {
      purchaseError.value = 'Please select one module for the Beginning plan.'
      confirmingPurchase.value = false
      purchasingPlan.value = ''
      return
    }

    await $fetch('/api/subscription/purchase', {
      method: 'POST',
      headers: {
        Authorization: `Bearer ${localStorage.getItem('auth:token')?.replace(/"/g, '') || ''}`
      },
      body: {
        plan: selectedPlan.value,
        deviceId,
        examId: selectedPlan.value === 'BEGINNING' ? selectedBeginningExamId.value : undefined
      }
    })

    showConfirmModal.value = false
    showSuccessModal.value = true

    // Refresh session to update the user's plan in the UI
    await getSession()

    toast.add({
      title: 'Request Sent!',
      description: `${PLANS[selectedPlan.value].name} plan request submitted for admin approval.`,
      icon: 'i-heroicons-check-circle',
      color: 'green'
    })
  } catch (e) {
    purchaseError.value =
      e?.data?.statusMessage ||
      e?.message ||
      'Purchase failed. Please try again.'
  } finally {
    confirmingPurchase.value = false
    purchasingPlan.value = ''
  }
}

const faqItems = [
  {
    label: 'What certifications are available?',
    content: 'RhyseForge currently supports Databricks Data Engineer Associate, AWS AI Practitioner, Databricks Gen AI Engineer, and SAP ABAP Cloud. New modules are added regularly and included free with the Advanced plan.',
    defaultOpen: true
  },
  {
    label: 'Why is my subscription locked to one device?',
    content: 'To prevent unauthorized credential sharing, each subscription is bound to your User ID + Device Fingerprint. This means even if someone gets your login credentials, they cannot use your subscription on a different device. This protects your investment and ensures fair pricing for everyone.'
  },
  {
    label: 'What if I get a new device?',
    content: 'Contact support@rhyseforge.com with your registered email. Our admin team can reset your device binding so you can log in from your new device. The process typically takes less than 24 hours.'
  },
  {
    label: 'Can I upgrade from Beginning to Advanced?',
    content: 'Yes! You can upgrade at any time directly from this page. Your subscription will be upgraded and the new plan will take effect immediately.'
  },
  {
    label: 'Is there a refund policy?',
    content: 'After subscription activation, payments are generally non-refundable except for duplicate payment or verified billing errors. If you have a billing issue, contact support@rhyseforge.com.'
  },
  {
    label: 'Are these real exam questions?',
    content: 'This platform provides practice questions, including prior exam-style patterns and training material. It is designed to improve preparation, but it does not guarantee exact real exam coverage or pass results.'
  },
  {
    label: 'How does the mock exam timer work?',
    content: 'Mock exams simulate real certification conditions with a countdown timer. When time runs out, your exam is automatically submitted â€” just like the real test. Practice mode has no time limit.'
  }
]
</script>


