<template>
  <div class="app-shell antialiased text-slate-900 dark:text-slate-100">
    <div class="app-ambient pointer-events-none" aria-hidden="true"></div>
    <NuxtLoadingIndicator color="repeating-linear-gradient(to right,#3b82f6 0%,#2dd4bf 50%,#3b82f6 100%)" :height="3" />
    <UNotifications />
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
.page-enter-active,
.page-leave-active {
  transition: all 0.25s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, transform;
}
.page-enter-from,
.page-leave-to {
  opacity: 0;
  transform: translateY(5px);
}

.layout-enter-active,
.layout-leave-active {
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  will-change: opacity, filter;
}
.layout-enter-from,
.layout-leave-to {
  opacity: 0;
  filter: blur(1rem);
}

/* Force smooth scrolling globally */
html {
  scroll-behavior: smooth;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body {
  background: transparent;
}

.app-shell {
  min-height: 100vh;
  position: relative;
  background: linear-gradient(155deg, #ebf6ff 0%, #f8f4ff 48%, #e3ecff 100%);
}

.dark .app-shell {
  background: linear-gradient(155deg, #080f23 0%, #151839 48%, #1a2a4d 100%);
}

.app-ambient {
  position: fixed;
  inset: 0;
  z-index: 0;
  background:
    radial-gradient(800px 380px at 6% -3%, rgba(63, 195, 255, 0.22), transparent 55%),
    radial-gradient(650px 320px at 94% 0%, rgba(133, 93, 255, 0.2), transparent 56%),
    radial-gradient(700px 400px at 50% 100%, rgba(80, 120, 255, 0.14), transparent 60%);
}

.dark .app-ambient {
  background:
    radial-gradient(800px 380px at 6% -3%, rgba(57, 171, 255, 0.18), transparent 55%),
    radial-gradient(650px 320px at 94% 0%, rgba(151, 112, 255, 0.15), transparent 56%),
    radial-gradient(700px 400px at 50% 100%, rgba(88, 132, 255, 0.12), transparent 60%);
}

/* Custom Scrollbar for Smooth Feeling */
::-webkit-scrollbar {
  width: 8px;
}
::-webkit-scrollbar-track {
  background: transparent;
}
::-webkit-scrollbar-thumb {
  background: #cbd5e1;
  border-radius: 10px;
}
.dark ::-webkit-scrollbar-thumb {
  background: #334155;
}
::-webkit-scrollbar-thumb:hover {
  background: #94a3b8;
}
</style>
