<template>
  <div class="min-h-screen p-4 md:p-8 transition-colors duration-300 relative overflow-hidden z-[1]">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-20 -left-16 h-80 w-80 rounded-full bg-cyan-300/25 blur-[120px] dark:bg-cyan-500/15"></div>
      <div class="absolute top-16 right-0 h-96 w-96 rounded-full bg-indigo-300/25 blur-[130px] dark:bg-indigo-500/15"></div>
    </div>

    <div class="max-w-7xl mx-auto relative z-10">
      <div class="rounded-3xl border border-white/60 dark:border-white/10 bg-white/70 dark:bg-slate-900/55 backdrop-blur-xl shadow-[0_22px_46px_-28px_rgba(35,29,97,0.65)] p-6 md:p-8 mb-6 md:mb-8">
        <div class="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
          <div>
            <div class="inline-flex items-center gap-2 px-4 py-2 rounded-full border border-white/70 dark:border-white/10 bg-white/70 dark:bg-white/5 text-indigo-700 dark:text-indigo-200 mb-3">
              <UIcon name="i-heroicons-shield-check" />
              <span class="text-[10px] font-black uppercase tracking-[0.22em]">Admin Command Center</span>
            </div>
            <h1 class="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">Admin Dashboard</h1>
            <p class="text-sm text-slate-600 dark:text-slate-300 mt-2">Simple control panel for publishing, AI parsing, requests, and user operations.</p>
          </div>
          <UButton color="red" variant="soft" @click="signOut({ callbackUrl: '/login' })" class="w-full sm:w-auto rounded-xl font-bold">
            Logout
          </UButton>
        </div>
      </div>
      
      <div class="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-5 gap-3 md:gap-5 mb-6 md:mb-8">
        <UCard
          v-for="(stat, index) in stats"
          :key="index"
          class="rounded-2xl border border-white/60 dark:border-white/10 bg-white/65 dark:bg-slate-900/55 backdrop-blur-xl shadow-[0_18px_36px_-26px_rgba(33,28,96,0.7)]"
        >
          <div class="flex flex-col gap-2">
            <div class="inline-flex items-center gap-2 text-slate-500 dark:text-slate-300 text-xs font-bold uppercase tracking-wide">
              <UIcon :name="stat.icon" />
              <span>{{ stat.name }}</span>
            </div>
            <span class="text-3xl font-black text-slate-900 dark:text-white">
              {{ pending ? '...' : stat.value }}
            </span>
            <span class="text-[11px] font-semibold" :class="stat.hintColor">{{ stat.hint }}</span>
          </div>
        </UCard>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-2 gap-4 md:gap-6">
        <UCard class="rounded-3xl border border-white/60 dark:border-white/10 bg-white/65 dark:bg-slate-900/55 backdrop-blur-xl shadow-[0_22px_42px_-30px_rgba(35,29,97,0.7)]">
          <template #header>
            <div>
              <h2 class="text-xl font-black text-slate-900 dark:text-white">Quick Actions</h2>
              <p class="text-sm text-slate-500 dark:text-slate-300 mt-1">One-click access to frequent admin tasks.</p>
            </div>
          </template>
          <div class="grid grid-cols-1 sm:grid-cols-2 gap-3">
            <NuxtLink
              v-for="action in quickActions"
              :key="action.to"
              :to="action.to"
              class="group rounded-2xl border border-white/65 dark:border-white/10 bg-white/70 dark:bg-slate-900/45 p-4 hover:-translate-y-0.5 transition-all duration-300 hover:shadow-lg hover:shadow-indigo-500/10"
            >
              <div class="flex items-start gap-3">
                <div class="w-10 h-10 rounded-xl flex items-center justify-center" :class="action.iconWrap">
                  <UIcon :name="action.icon" class="text-lg" :class="action.iconColor" />
                </div>
                <div class="flex-1 min-w-0">
                  <p class="text-sm font-black text-slate-900 dark:text-white">{{ action.label }}</p>
                  <p class="text-xs text-slate-500 dark:text-slate-300 mt-1">{{ action.description }}</p>
                </div>
              </div>
            </NuxtLink>
          </div>
        </UCard>
        
        <UCard class="rounded-3xl border border-white/60 dark:border-white/10 bg-white/65 dark:bg-slate-900/55 backdrop-blur-xl shadow-[0_22px_42px_-30px_rgba(35,29,97,0.7)]">
          <template #header>
            <div>
              <h2 class="text-xl font-black text-slate-900 dark:text-white">Recent AI Parse Jobs</h2>
              <p class="text-sm text-slate-500 dark:text-slate-300 mt-1">Latest parser activity and ingestion queue status.</p>
            </div>
          </template>
          <div class="rounded-2xl border border-dashed border-slate-300/70 dark:border-slate-600/60 p-6 text-center bg-slate-50/70 dark:bg-slate-900/40">
            <UIcon name="i-heroicons-cloud-arrow-up" class="text-2xl text-slate-400 mx-auto mb-2" />
            <p class="text-sm font-semibold text-slate-700 dark:text-slate-200">No recent jobs found</p>
            <p class="text-xs text-slate-500 dark:text-slate-300 mt-1">Upload an exam image to start AI parsing.</p>
            <UButton to="/admin/upload" color="primary" variant="soft" class="mt-4 rounded-xl font-bold" icon="i-heroicons-arrow-up-tray">
              Open Upload Center
            </UButton>
          </div>
        </UCard>
      </div>
    </div>
  </div>
</template>

<script setup>
import { ref, watchEffect } from 'vue'
import { useRouter } from '#app'

const { status, data, signOut } = useAuth()
const router = useRouter()

// Strict admin-only protection
watchEffect(() => {
  if (status.value === 'unauthenticated') {
    router.push('/admin/login')
  } else if (status.value === 'authenticated' && data.value?.user?.role !== 'ADMIN') {
    router.push('/dashboard')
  }
})

const { data: realStats, pending } = useFetch('/api/admin/stats')

const stats = computed(() => [
  {
    name: 'Total Users',
    value: realStats.value?.userCount || '0',
    icon: 'i-heroicons-users',
    hint: 'Registered learners',
    hintColor: 'text-blue-600 dark:text-blue-300'
  },
  {
    name: 'Exams Published',
    value: realStats.value?.examCount || '0',
    icon: 'i-heroicons-book-open',
    hint: 'Live in catalog',
    hintColor: 'text-indigo-600 dark:text-indigo-300'
  },
  {
    name: 'Attempts Today',
    value: realStats.value?.sessionsToday || '0',
    icon: 'i-heroicons-bolt',
    hint: 'Daily engagement',
    hintColor: 'text-cyan-600 dark:text-cyan-300'
  },
  {
    name: 'Pass Rate',
    value: realStats.value?.passRate || '0%',
    icon: 'i-heroicons-check-badge',
    hint: 'Average outcomes',
    hintColor: 'text-emerald-600 dark:text-emerald-300'
  },
  {
    name: 'Open Requests',
    value: realStats.value?.pendingModuleRequests || '0',
    icon: 'i-heroicons-megaphone',
    hint: 'Pending module demand',
    hintColor: 'text-amber-600 dark:text-amber-300'
  }
])

const quickActions = [
  {
    label: 'Create New Exam',
    description: 'Publish a new certification module',
    to: '/admin/exams/create',
    icon: 'i-heroicons-plus',
    iconWrap: 'bg-emerald-100 dark:bg-emerald-900/30',
    iconColor: 'text-emerald-600 dark:text-emerald-300'
  },
  {
    label: 'Global Exam Catalog',
    description: 'Review and update all exam modules',
    to: '/admin/exams',
    icon: 'i-heroicons-book-open',
    iconWrap: 'bg-indigo-100 dark:bg-indigo-900/30',
    iconColor: 'text-indigo-600 dark:text-indigo-300'
  },
  {
    label: 'AI Parse Upload',
    description: 'Upload image files for AI parsing',
    to: '/admin/upload',
    icon: 'i-heroicons-cloud-arrow-up',
    iconWrap: 'bg-cyan-100 dark:bg-cyan-900/30',
    iconColor: 'text-cyan-600 dark:text-cyan-300'
  },
  {
    label: 'Module Request Inbox',
    description: 'Process incoming demand requests',
    to: '/admin/module-requests',
    icon: 'i-heroicons-megaphone',
    iconWrap: 'bg-amber-100 dark:bg-amber-900/30',
    iconColor: 'text-amber-600 dark:text-amber-300'
  },
  {
    label: 'Manage Users',
    description: 'User access and account controls',
    to: '/admin/users',
    icon: 'i-heroicons-users',
    iconWrap: 'bg-slate-100 dark:bg-slate-800/80',
    iconColor: 'text-slate-600 dark:text-slate-300'
  }
]
</script>
