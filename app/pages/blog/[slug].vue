<template>
  <div class="min-h-screen bg-black text-white">
    <div v-if="article">
      <!-- Hero Section -->
      <div class="relative h-[60vh] w-full">
        <img 
          :src="article.image" 
          :alt="article.title"
          class="w-full h-full object-cover"
          onerror="this.src='https://placehold.co/1200x800/1a1a1a/white?text=Royal+Flush'"
        >
        <div class="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent"></div>
        
        <div class="absolute bottom-0 left-0 right-0 p-4 md:p-12 container mx-auto">
          <NuxtLink to="/blog" class="inline-flex items-center text-yellow-500 hover:text-yellow-400 mb-6 transition-colors">
            <svg class="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            Zpět na novinky
          </NuxtLink>
          
          <h1 class="text-4xl md:text-6xl font-bold mb-4 leading-tight">
            {{ article.title }}
          </h1>
          
          <div class="flex items-center text-gray-300 space-x-4">
            <span>{{ article.date }}</span>
            <span>•</span>
            <span>{{ article.author }}</span>
          </div>
        </div>
      </div>

      <!-- Content -->
      <article class="container mx-auto px-4 py-12 max-w-4xl">
        <div class="prose prose-lg prose-invert mx-auto">
          <p class="lead text-xl text-gray-300 mb-8 font-medium leading-relaxed">
            {{ article.description }}
          </p>
          
          <div v-html="article.content"></div>
        </div>
      </article>
    </div>

    <!-- Not Found State -->
    <div v-else class="min-h-screen flex flex-col items-center justify-center p-4">
      <h1 class="text-4xl font-bold mb-4">Článek nenalezen</h1>
      <NuxtLink to="/blog" class="text-yellow-500 hover:underline">
        Zpět na seznam novinek
      </NuxtLink>
    </div>
  </div>
</template>

<script setup>
const route = useRoute()

// Hardcoded articles data
const articles = {
  'spoustime-novy-web': {
    title: 'Spouštíme nový web!',
    description: 'Vítejte na nových stránkách klubu Royal Flush Brno. Připravili jsme pro vás moderní design a přehledné informace o našem klubu.',
    date: '28. 11. 2025',
    author: 'Royal Flush Tým',
    image: '/images/royal-flush-logo.jpg', // Placeholder
    content: `
      <p>S radostí vám představujeme novou webovou prezentaci našeho fotbalového klubu Royal Flush Brno. Naším cílem bylo vytvořit moderní, přehledný a uživatelsky přívětivý web, kde najdete všechny důležité informace na jednom místě.</p>
      
      <h3>Co na novém webu v budoucnosti najdete?</h3>
      <ul>
        <li>Přehledné informace o všech našich týmech</li>
        <li>Aktuality a novinky z dění v klubu</li>
        <li>Kontakty na trenéry a vedení</li>
        <li>Fotogalerie ze zápasů a turnajů</li>
      </ul>

      <p>Web je plně responzivní, takže si ho pohodlně prohlédnete na počítači, tabletu i mobilním telefonu. Postupně budeme přidávat další funkce a obsah.</p>

      <p>Doufáme, že se vám nový web bude líbit a budete se na něj rádi vracet!</p>
    `
  },
  'spoustime-eshop': {
    title: 'Spouštíme nový e-shop!',
    description: 'Posíláme předčasný vánoční dárek všem lidem okolo našeho Royalu!',
    date: '1. 12. 2025',
    author: 'Royal Flush Tým',
    image: '/images/blog/new-eshop/header.png',
    content: `
      <p>Otevíráme vlastní eshop. Na e-shopu najdete náš merch od společnosti MASITA. Trička, mikiny, tepláky, batoh nebo třeba taška Royalu.</p>
      <p>Dodání je přes společnost PPL pouze za 69,- Kč. Dětské produkty jsou s písmeny 'JR'.</p>
      <p class="text-center">          
      <a 
            id="eshop-link"
            href="https://www.winnersport.cz/royal-flush-brno/" 
            target="_blank" 
            rel="noopener noreferrer"
            class="group relative inline-flex items-center justify-center px-8 py-4 text-lg font-bold text-white transition-all duration-200 bg-black rounded-full hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900 transform hover:scale-105 shadow-xl"
          >
            <span class="mr-2">Vstoupit do E-shopu</span>
            <svg class="w-5 h-5 transition-transform duration-200 group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M16 11V7a4 4 0 00-8 0v4M5 9h14l1 12H4L5 9z" />
            </svg>
          </a>
      </p>
      <p>V přípravě je i jedna novinka 😍</p>
      <p>PS: Objednávky do Vánoc stíháme!</p>
      <p>Na našem webu budeme postupně přidávat aktuální výsledky a statistiky, fotky, všechny novinky a také rozhovory. Tohle je další velký milník pro náš klub…, jsme vděční a šťastní.</p>
      <p>#WebRoyalu #SpoluJsmeRoyal 🖤🤍</p>
    `
  }
}

const article = computed(() => articles[route.params.slug])

useHead({
  title: article.value ? `${article.value.title} | Royal Flush Brno` : 'Článek nenalezen',
  meta: [
    { name: 'description', content: article.value?.description || 'Článek nenalezen' }
  ]
})
</script>

<style>
/* Custom prose styles for dark mode content */
.prose h3 {
  color: #fff;
  font-size: 1.5rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-weight: 700;
}

.prose p {
  margin-bottom: 1.5rem;
  line-height: 1.8;
  color: #d1d5db;
}

.prose ul {
  list-style-type: disc;
  padding-left: 1.5rem;
  margin-bottom: 1.5rem;
  color: #d1d5db;
}

.prose li {
  margin-bottom: 0.5rem;
}
</style>
