<template>
  <div class="min-h-screen transition-colors duration-300 py-8 relative overflow-hidden z-[1]">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-24 -left-12 w-80 h-80 rounded-full bg-cyan-300/25 blur-[120px] dark:bg-cyan-500/18"></div>
      <div class="absolute top-6 right-0 w-96 h-96 rounded-full bg-indigo-300/25 blur-[130px] dark:bg-indigo-500/18"></div>
    </div>
    <UContainer>
      <div class="relative z-10 rounded-3xl border border-white/65 dark:border-white/10 bg-white/65 dark:bg-slate-900/50 backdrop-blur-xl shadow-[0_24px_46px_-28px_rgba(37,31,98,0.6)] p-6 md:p-8 mb-8">
        <div class="flex justify-between items-center mb-4">
        <div>
          <h1 class="text-3xl md:text-4xl font-black tracking-tight text-slate-900 dark:text-white">My Royal Dashboard</h1>
          <p class="text-sm text-slate-600 dark:text-slate-300 mt-1">Track your mastery, momentum, and certification readiness.</p>
        </div>
        <div class="flex gap-2">
          <UButton color="white" class="rounded-xl font-bold" variant="soft" to="/profile" icon="i-heroicons-user">Profile</UButton>
          <UButton color="primary" class="rounded-xl font-bold" variant="soft" to="/">Browse Catalog</UButton>
          </div>
        </div>
        <div class="grid grid-cols-1 sm:grid-cols-3 gap-3">
          <div class="rounded-2xl border border-white/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/45 p-3">
            <p class="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Current Streak</p>
            <p class="text-xl font-black text-slate-900 dark:text-white">{{ studyStreak }} days</p>
          </div>
          <div class="rounded-2xl border border-white/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/45 p-3">
            <p class="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Sessions Logged</p>
            <p class="text-xl font-black text-slate-900 dark:text-white">{{ sessions?.length || 0 }}</p>
          </div>
          <div class="rounded-2xl border border-white/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/45 p-3">
            <p class="text-[10px] font-black uppercase tracking-[0.18em] text-slate-400">Average Score</p>
            <p class="text-xl font-black text-slate-900 dark:text-white">{{ avgScore }}%</p>
          </div>
        </div>
      </div>

      <div class="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8 relative z-10">
        <!-- Streak Widget -->
        <UCard class="bg-gradient-to-br from-amber-500 to-orange-600 text-white border-none rounded-3xl shadow-[0_24px_40px_-24px_rgba(194,95,18,0.8)]">
          <div class="flex items-center space-x-4">
            <UIcon name="i-heroicons-fire" class="text-5xl opacity-80" />
            <div>
              <p class="text-orange-100 text-sm font-medium">Study Streak</p>
              <h2 class="text-4xl font-extrabold">{{ studyStreak }} Days</h2>
            </div>
          </div>
        </UCard>
        
        <!-- Total Attempts -->
        <UCard class="bg-gradient-to-br from-indigo-600 to-blue-700 text-white border-none rounded-3xl shadow-[0_24px_40px_-24px_rgba(32,57,153,0.8)]">
          <div class="flex items-center space-x-4">
            <UIcon name="i-heroicons-academic-cap" class="text-5xl opacity-80" />
            <div>
              <p class="text-blue-100 text-sm font-medium">Exams Taken</p>
              <h2 class="text-4xl font-extrabold">{{ sessions?.length || 0 }}</h2>
            </div>
          </div>
        </UCard>

        <!-- Average Score -->
        <UCard class="bg-gradient-to-br from-emerald-500 to-green-600 text-white border-none rounded-3xl shadow-[0_24px_40px_-24px_rgba(18,128,89,0.8)]">
          <div class="flex items-center space-x-4">
            <UIcon name="i-heroicons-chart-bar" class="text-5xl opacity-80" />
            <div>
              <p class="text-green-100 text-sm font-medium">Average Score</p>
              <h2 class="text-4xl font-extrabold">{{ avgScore }}%</h2>
            </div>
          </div>
        </UCard>
      </div>

      <div class="grid grid-cols-1 lg:grid-cols-3 gap-6 relative z-10">
        <!-- Recent History -->
        <UCard class="lg:col-span-2 rounded-3xl border border-white/65 dark:border-white/10 bg-white/65 dark:bg-slate-900/50 backdrop-blur-xl">
          <template #header>
            <h3 class="text-xl font-black text-slate-900 dark:text-white">Recent Activity</h3>
          </template>
          
          <div v-if="pending" class="flex justify-center p-4">
            <UIcon name="i-heroicons-arrow-path" class="animate-spin text-2xl text-primary-500" />
          </div>
          
          <div v-else-if="!sessions || sessions.length === 0" class="text-center p-8 text-slate-500 dark:text-slate-400">
            No exams taken yet. Start practicing!
          </div>

          <UTable v-else :columns="historyColumns" :rows="recentSessions">
            <template #exam-data="{ row }">
              <span class="font-medium text-gray-900 dark:text-white">{{ row.exam.title }}</span>
            </template>
            <template #score-data="{ row }">
              <span :class="row.passed ? 'text-green-600 font-bold' : 'text-red-500'">{{ row.score !== null ? row.score.toFixed(1) + '%' : 'N/A' }}</span>
            </template>
            <template #date-data="{ row }">
              {{ new Date(row.endTime || row.startTime).toLocaleDateString() }}
            </template>
          </UTable>
        </UCard>

        <!-- Certification Readiness -->
        <UCard class="rounded-3xl border border-white/65 dark:border-white/10 bg-white/65 dark:bg-slate-900/50 backdrop-blur-xl">
          <template #header>
            <h3 class="text-xl font-black text-slate-900 dark:text-white">Certification Readiness</h3>
          </template>
          
          <div v-if="examMastery.length === 0" class="flex flex-col items-center justify-center py-10 opacity-40">
             <UIcon name="i-heroicons-document-magnifying-glass" class="text-5xl mb-2" />
             <p class="text-xs font-black uppercase tracking-widest">No Exam Data Yet</p>
          </div>

          <div v-else class="space-y-6">
            <div v-for="exam in examMastery" :key="exam.title">
              <div class="flex justify-between mb-2">
                <span class="text-xs font-black text-slate-400 uppercase tracking-tight truncate max-w-[150px]">{{ exam.title }}</span>
                <span class="text-xs font-black" :class="scoreTextClass(exam.color)">{{ Math.round(exam.score) }}%</span>
              </div>
              <UProgress :value="exam.score" :color="exam.color" size="sm" class="rounded-full" />
            </div>
          </div>
          
          <div class="mt-8 text-center">
            <UButton block color="gray" variant="soft" icon="i-heroicons-arrow-path" class="rounded-xl font-bold" @click="refresh()">Update Stats</UButton>
          </div>
        </UCard>
      </div>
    </UContainer>
  </div>
</template>

<script setup>
import { computed, watchEffect } from 'vue'
import { useFetch, useRouter } from '#app'

const { status, data: authData } = useAuth()
const router = useRouter()

// Redirect admins to their specific board if they land here
watchEffect(() => {
  if (status.value === 'authenticated' && authData.value?.user?.role === 'ADMIN') {
    router.push('/admin/dashboard')
  } else if (status.value === 'unauthenticated') {
    router.push('/login')
  }
})

const historyColumns = [
  { key: 'exam', label: 'Exam' },
  { key: 'mode', label: 'Mode' },
  { key: 'score', label: 'Score' },
  { key: 'date', label: 'Date' }
]

const { data: sessions, pending, refresh } = useFetch('/api/sessions/me')

const recentSessions = computed(() => {
  if (!sessions.value) return []
  return sessions.value.slice(0, 10)
})

const avgScore = computed(() => {
  if (!sessions.value || sessions.value.length === 0) return 0
  const total = sessions.value.reduce((acc, s) => acc + (s.score || 0), 0)
  return (total / sessions.value.length).toFixed(1)
})

const examMastery = computed(() => {
  if (!sessions.value) return []
  
  const examMap = {}
  sessions.value.forEach(s => {
    if (!examMap[s.exam.title] || examMap[s.exam.title].score < s.score) {
      examMap[s.exam.title] = {
        title: s.exam.title,
        score: s.score || 0,
        color: s.score >= 70 ? 'green' : s.score >= 50 ? 'yellow' : 'red'
      }
    }
  })
  
  return Object.values(examMap).slice(0, 4)
})

const studyStreak = computed(() => {
  if (!sessions.value || sessions.value.length === 0) return 0

  const daySet = new Set(
    sessions.value
      .map((s) => new Date(s.endTime || s.startTime).toISOString().slice(0, 10))
  )

  const sortedDays = [...daySet].sort((a, b) => b.localeCompare(a))
  let streak = 0
  let cursor = new Date()
  cursor.setHours(0, 0, 0, 0)

  for (const day of sortedDays) {
    const dayStr = cursor.toISOString().slice(0, 10)
    if (day === dayStr) {
      streak++
      cursor.setDate(cursor.getDate() - 1)
    } else if (day > dayStr) {
      continue
    } else {
      break
    }
  }
  return streak
})

const scoreTextClass = (color) => {
  if (color === 'green') return 'text-green-500'
  if (color === 'yellow') return 'text-amber-500'
  return 'text-red-500'
}
</script>

<style scoped>
/* Add any specific animations if needed */
</style>
