<template>
  <header class="fixed top-0 left-0 right-0 z-50 bg-black/90 backdrop-blur-sm text-white border-b border-white/10">
    <div class="container mx-auto px-4 h-16 flex items-center justify-between">
      <!-- Left Side: Logo -->
      <NuxtLink to="/" class="flex items-center group" @click="isMenuOpen = false">
        <img 
          src="/images/royal-flush-logo.jpg" 
          alt="Royal Flush Logo" 
          class="h-10 w-10 rounded-full object-contain border border-white/20 group-hover:border-yellow-500 transition-colors" 
        />
      </NuxtLink>

      <!-- Right Side: Menu (Desktop) -->
      <nav class="hidden md:flex items-center space-x-8">
        <NuxtLink 
          to="/blog" 
          class="text-sm font-bold uppercase tracking-wider hover:text-yellow-500 transition-colors"
          active-class="text-yellow-500"
        >
          Novinky
        </NuxtLink>
      </nav>

      <!-- Mobile Menu Button (Right) -->
      <button 
        @click="isMenuOpen = !isMenuOpen" 
        class="md:hidden p-2 -mr-2 text-white hover:text-yellow-500 transition-colors"
        aria-label="Menu"
      >
        <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
          <path v-if="!isMenuOpen" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16" />
          <path v-else stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12" />
        </svg>
      </button>
    </div>

    <!-- Mobile Menu Dropdown -->
    <Transition
      enter-active-class="transition duration-200 ease-out"
      enter-from-class="transform -translate-y-4 opacity-0"
      enter-to-class="transform translate-y-0 opacity-100"
      leave-active-class="transition duration-150 ease-in"
      leave-from-class="transform translate-y-0 opacity-100"
      leave-to-class="transform -translate-y-4 opacity-0"
    >
      <div v-if="isMenuOpen" class="md:hidden bg-black border-b border-white/10">
        <nav class="flex flex-col p-4 space-y-4">
          <NuxtLink 
            to="/blog" 
            @click="isMenuOpen = false" 
            class="text-lg font-bold uppercase tracking-wider hover:text-yellow-500 transition-colors"
            active-class="text-yellow-500"
          >
            Blog
          </NuxtLink>
        </nav>
      </div>
    </Transition>
  </header>
</template>

<script setup>
const isMenuOpen = ref(false)

// Close menu when route changes
const route = useRoute()
watch(() => route.path, () => {
  isMenuOpen.value = false
})
</script>
