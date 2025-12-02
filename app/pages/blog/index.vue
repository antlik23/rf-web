<template>
  <div class="min-h-screen bg-white text-black">
    <!-- Header/Hero Section -->
    <section class="py-20 px-4 text-center">
      <h1 class="text-5xl md:text-7xl font-bold mb-6 text-black">
        Novinky
      </h1>
      <p class="text-xl text-gray-400 max-w-2xl mx-auto">
        Aktuální dění v klubu Royal Flush Brno
      </p>
    </section>

    <!-- News Grid -->
    <section class="container mx-auto px-4 pb-20">
      <div class="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        <NuxtLink 
          v-for="item in newsItems" 
          :key="item.slug"
          :to="`/blog/${item.slug}`"
          class="group bg-zinc-900 rounded-xl overflow-hidden hover:transform hover:scale-[1.02] transition-all duration-300"
        >
          <!-- Image -->
          <div class="aspect-video relative overflow-hidden">
            <img 
              :src="item.image" 
              :alt="item.title"
              class="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
              onerror="this.src='https://placehold.co/600x400/1a1a1a/white?text=Royal+Flush'"
            >
            <div class="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-60"></div>
          </div>
          
          <!-- Content -->
          <div class="p-6">
            <div class="flex items-center text-sm text-gray-400 mb-3">
              <span>{{ item.date }}</span>
            </div>
            <h2 class="text-2xl text-white font-bold mb-3 group-hover:text-yellow-500 transition-colors">
              {{ item.title }}
            </h2>
            <p class="text-gray-400 line-clamp-3">
              {{ item.description }}
            </p>
            <div class="mt-4 flex items-center text-yellow-500 font-medium">
              Číst více
              <svg class="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M17 8l4 4m0 0l-4 4m4-4H3" />
              </svg>
            </div>
          </div>
        </NuxtLink>
      </div>
    </section>
  </div>
</template>

<script setup>
const newsItems = [
  {
    slug: 'spoustime-eshop',
    title: 'Spouštíme vlastní ESHOP!',
    description: 'Otevíráme vlastní eshop. Na e-shopu najdete náš merch od společnosti MASITA. Trička, mikiny, tepláky, batoh nebo třeba taška Royalu.',
    date: '1. 12. 2025',
    image: '/images/blog/new-eshop/header.png'
  },
  {
    slug: 'spoustime-novy-web',
    title: 'Spouštíme nový web!',
    description: 'Vítejte na nových stránkách klubu Royal Flush Brno. Připravili jsme pro vás moderní design a přehledné informace o našem klubu.',
    date: '28. 11. 2025',
    image: '/images/royal-flush-logo.jpg'
  }
]

useHead({
  title: 'Novinky | Royal Flush Brno',
  meta: [
    { name: 'description', content: 'Aktuální novinky a dění v klubu Royal Flush Brno.' }
  ]
})
</script>