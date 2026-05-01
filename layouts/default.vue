<template>
  <div class="min-h-screen transition-colors duration-300 relative z-[1]">
    <nav class="sticky top-0 z-50 py-3">
      <UContainer>
        <div class="flex justify-between items-center rounded-2xl border border-white/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/55 backdrop-blur-xl px-4 md:px-6 h-16 shadow-[0_20px_40px_-24px_rgba(37,30,95,0.45)]">
          <div class="flex items-center gap-4 md:gap-8">
            <NuxtLink to="/" class="flex items-center gap-2 group flex-shrink-0">
              <div class="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg p-1.5 group-hover:rotate-12 transition-transform shadow-lg shadow-indigo-500/25">
                <UIcon name="i-heroicons-bolt-20-solid" class="text-white text-xl" />
              </div>
              <span class="text-lg md:text-xl font-black bg-clip-text text-transparent bg-gradient-to-r from-indigo-700 to-blue-700 dark:from-indigo-300 dark:to-cyan-200">
                RhyseForge
              </span>
            </NuxtLink>
            
            <!-- Desktop Nav -->
            <div class="hidden md:flex items-center gap-2">
              <UButton
                v-for="item in navItems"
                :key="item.to"
                variant="ghost"
                :color="route.path === item.to ? 'primary' : 'gray'"
                class="rounded-xl font-bold"
                :icon="item.icon"
                @click="handleAction(item.to)"
              >
                {{ item.label }}
              </UButton>
            </div>
          </div>

          <div class="flex items-center gap-2 md:gap-4">
            <ColorModeButton />
            
            <!-- Mobile Hamburger -->
            <UButton 
              class="md:hidden" 
              icon="i-heroicons-bars-3" 
              color="gray" 
              variant="ghost" 
              size="md"
              aria-label="Open mobile menu"
              @click="mobileMenuOpen = !mobileMenuOpen" 
            />
            
            <!-- Desktop Avatar -->
            <div class="hidden md:block">
              <UDropdown :items="userMenuItems" :popper="{ placement: 'bottom-end' }">
                <UAvatar 
                  :src="data?.user?.image || `https://api.dicebear.com/7.x/avataaars/svg?seed=${data?.user?.name || 'Felix'}`"
                  alt="User profile"
                  size="sm"
                  class="cursor-pointer border-2 border-primary-500/20"
                />
                
                <template #account="{ item }">
                  <div class="text-left">
                    <p>Signed in as</p>
                    <p class="truncate font-medium text-gray-900 dark:text-white">
                      {{ item.label }}
                    </p>
                  </div>
                </template>
              </UDropdown>
            </div>
          </div>
        </div>
      </UContainer>

      <!-- Mobile Slide-Down Menu -->
      <Transition name="slide">
        <div v-if="mobileMenuOpen" class="md:hidden mt-2">
          <UContainer>
            <div class="rounded-2xl border border-white/70 dark:border-white/10 bg-white/85 dark:bg-slate-900/75 backdrop-blur-xl shadow-2xl px-4 py-4 space-y-1">
            <button class="mobile-nav-link w-full text-left" @click="handleAction('/'); mobileMenuOpen = false">
              <UIcon name="i-heroicons-home" /> Home
            </button>
            <button v-if="data?.user?.role === 'ADMIN'" class="mobile-nav-link text-primary-500 w-full text-left" @click="handleAction('/admin/dashboard'); mobileMenuOpen = false">
              <UIcon name="i-heroicons-shield-check" /> Admin Panel
            </button>
            <button v-else class="mobile-nav-link w-full text-left" @click="handleAction('/dashboard'); mobileMenuOpen = false">
              <UIcon name="i-heroicons-squares-2x2" /> My Dashboard
            </button>
            <button class="mobile-nav-link w-full text-left" @click="handleAction('/leaderboard'); mobileMenuOpen = false">
              <UIcon name="i-heroicons-trophy" /> Leaderboard
            </button>
            <button class="mobile-nav-link w-full text-left" @click="handleAction('/pricing'); mobileMenuOpen = false">
              <UIcon name="i-heroicons-credit-card" /> Pricing
            </button>
            <button class="mobile-nav-link w-full text-left" @click="handleAction('/profile'); mobileMenuOpen = false">
              <UIcon name="i-heroicons-user" /> My Profile
            </button>
            <div class="pt-3 border-t border-gray-100 dark:border-gray-800 mt-3">
              <button class="mobile-nav-link text-red-500 w-full" @click="signOut({ callbackUrl: '/login' })">
                <UIcon name="i-heroicons-arrow-left-on-rectangle" /> Sign Out
              </button>
            </div>
          </div>
          </UContainer>
        </div>
      </Transition>
    </nav>

    <main>
      <slot />
    </main>

    <footer class="mt-20 py-8 md:py-12">
      <UContainer>
        <div class="rounded-3xl border border-white/60 dark:border-white/10 bg-white/65 dark:bg-slate-900/50 backdrop-blur-xl px-6 py-6 md:px-8 md:py-8 shadow-[0_24px_50px_-30px_rgba(39,33,98,0.6)] flex flex-col md:flex-row justify-between items-center gap-4 md:gap-8 text-sm text-slate-600 dark:text-slate-300">
          <div class="flex items-center gap-2">
            <UIcon name="i-heroicons-bolt-20-solid" class="text-indigo-500" />
            <span class="font-black text-slate-900 dark:text-white">RhyseForge</span>
            <span>&copy; 2026. All rights reserved.</span>
          </div>
          <div class="flex gap-4 md:gap-6 text-xs md:text-sm font-semibold">
            <NuxtLink to="/pricing" class="hover:text-indigo-500 transition-colors">Pricing</NuxtLink>
            <NuxtLink to="/privacy-policy" class="hover:text-indigo-500 transition-colors">Privacy Policy</NuxtLink>
            <NuxtLink to="/terms-of-service" class="hover:text-indigo-500 transition-colors">Terms of Service</NuxtLink>
          </div>
        </div>
      </UContainer>
    </footer>
  </div>
</template>

<script setup>
const { status, data, signOut } = useAuth()
const router = useRouter()
const route = useRoute()
const mobileMenuOpen = ref(false)

const isGuest = computed(() => status.value !== 'authenticated')

const navItems = computed(() => {
  const list = [{ label: 'Home', to: '/', icon: 'i-heroicons-home' }]

  if (data.value?.user?.role === 'ADMIN') {
    list.push({ label: 'Admin Panel', to: '/admin/dashboard', icon: 'i-heroicons-shield-check' })
  } else {
    list.push({ label: 'My Dashboard', to: '/dashboard', icon: 'i-heroicons-squares-2x2' })
  }

  list.push({ label: 'Leaderboard', to: '/leaderboard', icon: 'i-heroicons-trophy' })
  list.push({ label: 'Pricing', to: '/pricing', icon: 'i-heroicons-credit-card' })

  return list
})

const handleAction = (url) => {
  if (status.value === 'authenticated') {
    router.push(url)
  } else {
    router.push('/login')
  }
}

const userMenuItems = computed(() => {
  if (isGuest.value) return []

  const items = [
    [{
      label: data.value?.user?.email || '',
      slot: 'account',
      disabled: true
    }],
    [{
      label: 'My Profile',
      icon: 'i-heroicons-user',
      to: '/profile'
    }]
  ]

  const middleGroup = []
  
  if (data.value?.user?.role === 'ADMIN') {
    middleGroup.push({
      label: 'Admin Board',
      icon: 'i-heroicons-computer-desktop',
      to: '/admin/dashboard'
    })
    middleGroup.push({
      label: 'Module Requests',
      icon: 'i-heroicons-megaphone',
      to: '/admin/module-requests'
    })
  }

  middleGroup.push({
    label: 'Settings',
    icon: 'i-heroicons-cog-8-tooth',
    to: '/settings'
  })

  items.push(middleGroup)
  
  items.push([{
    label: 'Sign out',
    icon: 'i-heroicons-arrow-left-on-rectangle',
    click: () => signOut({ callbackUrl: '/login' })
  }])

  return items
})
</script>

<style scoped>
.mobile-nav-link {
  display: flex;
  align-items: center;
  gap: 0.75rem;
  padding: 0.875rem 1rem;
  border-radius: 1rem;
  font-weight: 700;
  font-size: 0.875rem;
  color: inherit;
  transition: background-color 0.2s;
}

.mobile-nav-link:hover {
  background-color: rgba(0, 0, 0, 0.04);
}

:root.dark .mobile-nav-link:hover {
  background-color: rgba(255, 255, 255, 0.06);
}

.slide-enter-active, .slide-leave-active {
  transition: all 0.3s ease;
  max-height: 500px;
  overflow: hidden;
}
.slide-enter-from, .slide-leave-to {
  max-height: 0;
  opacity: 0;
}
</style>
