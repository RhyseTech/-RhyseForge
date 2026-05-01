<template>
  <div class="min-h-screen flex items-center py-8 px-4 sm:px-6 lg:px-8 transition-colors duration-300 relative overflow-hidden z-[1]">
    <div class="pointer-events-none absolute inset-0">
      <div class="absolute -top-20 -left-8 w-80 h-80 rounded-full bg-cyan-300/30 blur-[120px] dark:bg-cyan-500/18"></div>
      <div class="absolute top-14 right-0 w-96 h-96 rounded-full bg-indigo-300/25 blur-[130px] dark:bg-indigo-500/18"></div>
    </div>

    <div class="mx-auto w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-6 relative z-10">
      <div class="rounded-3xl border border-white/60 dark:border-white/10 bg-white/60 dark:bg-slate-900/45 backdrop-blur-xl shadow-[0_24px_50px_-30px_rgba(36,30,100,0.7)] p-7 md:p-10">
        <NuxtLink to="/" class="inline-flex items-center gap-2 mb-6">
          <div class="bg-gradient-to-br from-indigo-600 to-blue-600 rounded-lg p-1.5 shadow-md shadow-indigo-500/30">
            <UIcon name="i-heroicons-bolt-20-solid" class="text-white text-xl" />
          </div>
          <span class="text-xl font-black text-indigo-600 dark:text-indigo-300">RhyseForge</span>
        </NuxtLink>
        <h2 class="text-3xl sm:text-4xl font-black text-slate-900 dark:text-white tracking-tight">
          Start Your Royal Learning Journey
        </h2>
        <p class="mt-3 text-sm text-slate-600 dark:text-slate-300">
          Create your account to unlock high-impact mock exams, ranked practice, and device-secure progress.
        </p>
        <div class="mt-6 grid gap-3">
          <div class="rounded-2xl border border-white/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/45 px-4 py-3">
            <p class="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Fast Setup</p>
            <p class="text-sm font-semibold text-slate-700 dark:text-slate-200">Get started in under 2 minutes</p>
          </div>
          <div class="rounded-2xl border border-white/70 dark:border-white/10 bg-white/70 dark:bg-slate-900/45 px-4 py-3">
            <p class="text-[10px] uppercase tracking-[0.2em] font-black text-slate-400">Security First</p>
            <p class="text-sm font-semibold text-slate-700 dark:text-slate-200">Device-linked account protection</p>
          </div>
        </div>
      </div>

      <UCard class="rounded-3xl border border-white/60 dark:border-white/10 bg-white/65 dark:bg-slate-900/50 backdrop-blur-xl shadow-[0_24px_50px_-30px_rgba(36,30,100,0.7)] p-2">
        <h3 class="text-xl font-black text-slate-900 dark:text-white px-4 pt-4">Create Account</h3>
        <p class="text-sm text-slate-500 dark:text-slate-300 px-4 pb-3">Set up your profile and begin practicing today.</p>

        <form class="space-y-4" @submit.prevent="handleRegister">
          <UFormGroup label="Full Name" name="name">
            <UInput v-model="formData.name" placeholder="John Doe" size="lg" class="rounded-xl" required />
          </UFormGroup>

          <UFormGroup label="Email Address" name="email">
            <UInput v-model="formData.email" type="email" placeholder="you@example.com" size="lg" class="rounded-xl" required />
          </UFormGroup>

          <UFormGroup label="Phone Number (optional)" name="phone">
            <UInput v-model="formData.phone" type="tel" placeholder="+91 98765 43210" size="lg" class="rounded-xl" />
          </UFormGroup>

          <UFormGroup label="Password" name="password" hint="Min. 6 characters">
            <UInput v-model="formData.password" type="password" placeholder="********" size="lg" class="rounded-xl" required />
          </UFormGroup>

          <UFormGroup label="Confirm Password" name="confirmPassword">
            <UInput v-model="formData.confirmPassword" type="password" placeholder="********" size="lg" class="rounded-xl" required />
          </UFormGroup>

          <div v-if="errorMsg" class="p-3 bg-red-50 dark:bg-red-900/20 border border-red-200 dark:border-red-800 rounded-xl">
            <p class="text-sm text-red-600 dark:text-red-400 font-medium flex items-center gap-2">
              <UIcon name="i-heroicons-exclamation-triangle" />
              {{ errorMsg }}
            </p>
          </div>

          <div v-if="successMsg" class="p-3 bg-green-50 dark:bg-green-900/20 border border-green-200 dark:border-green-800 rounded-xl">
            <p class="text-sm text-green-600 dark:text-green-400 font-medium flex items-center gap-2">
              <UIcon name="i-heroicons-check-circle" />
              {{ successMsg }}
            </p>
          </div>

          <UButton
            type="submit"
            block
            color="primary"
            size="xl"
            class="rounded-xl h-12 font-black"
            :loading="loading"
          >
            Create Account
          </UButton>
        </form>

        <div class="mt-6 text-center border-t border-slate-200/80 dark:border-slate-700/70 pt-6">
          <p class="text-sm text-gray-500">
            Already have an account?
            <NuxtLink to="/login" class="font-bold text-primary-500 hover:text-primary-600">Sign In</NuxtLink>
          </p>
        </div>

        <div class="mt-4 text-center">
          <NuxtLink to="/" class="text-sm font-medium text-gray-400 hover:text-primary-500 transition-colors">Back to home</NuxtLink>
        </div>
      </UCard>

      <div class="lg:col-span-2 p-4 bg-blue-50/60 dark:bg-blue-900/10 rounded-2xl border border-blue-100 dark:border-blue-900/30 text-center">
        <div class="flex items-center justify-center gap-2 text-blue-600 dark:text-blue-400 mb-1">
          <UIcon name="i-heroicons-finger-print" class="text-lg" />
          <span class="text-xs font-black uppercase tracking-widest">Device Protection</span>
        </div>
        <p class="text-[11px] text-blue-500/80">
          Your account will be securely linked to this device. This prevents unauthorized credential sharing and protects your subscription.
        </p>
      </div>
    </div>
  </div>
</template>

<script setup>
definePageMeta({ layout: false })

const { signIn } = useAuth()
const { getDeviceId } = useDeviceFingerprint()

const formData = reactive({
  name: '',
  email: '',
  phone: '',
  password: '',
  confirmPassword: ''
})

const errorMsg = ref('')
const successMsg = ref('')
const loading = ref(false)

const handleRegister = async () => {
  errorMsg.value = ''
  successMsg.value = ''
  loading.value = true

  try {
    if (formData.password !== formData.confirmPassword) {
      throw new Error('Passwords do not match')
    }

    if (formData.password.length < 6) {
      throw new Error('Password must be at least 6 characters')
    }

    const deviceId = getDeviceId()

    await $fetch('/api/auth/register', {
      method: 'POST',
      body: {
        name: formData.name,
        email: formData.email,
        phone: formData.phone || null,
        password: formData.password,
        deviceId
      }
    })

    successMsg.value = 'Account created successfully! Signing you in...'

    await signIn(
      { email: formData.email, password: formData.password, deviceId },
      { callbackUrl: '/dashboard' }
    )
  } catch (e) {
    errorMsg.value =
      e?.data?.statusMessage ||
      e?.message ||
      'Registration failed. Please try again.'
  } finally {
    loading.value = false
  }
}
</script>