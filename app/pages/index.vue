<template>
  <div class="min-h-screen">
    <!-- Analytics Component -->
    <Analytics ref="analytics" :enable-analytics="true" />
    
    <!-- Hero Section -->
    <section class="min-h-screen flex flex-col justify-center items-center text-white px-4">
      <div class="text-center max-w-4xl mx-auto">
        <!-- Royal Flush Logo -->
        <div class="mb-8">
          <img 
            src="/images/royal-flush-logo.jpg" 
            alt="Royal Flush Brno Logo" 
            class="w-64 h-64 mx-auto object-contain filter"
            onerror="this.style.display='none'; this.nextElementSibling.style.display='flex'"
          >
          <!-- Fallback if logo not found -->
          <div class="w-64 h-64 mx-auto bg-white/20 rounded-full flex items-center justify-center text-6xl" style="display:none;">
            👑
          </div>
        </div>
        
        <!-- Main Heading -->
        <h1 class="text-black text-5xl md:text-7xl font-bold mb-6;">
          Royal Flush
          <span class="block text-black">BRNO</span>
        </h1>

        <div class="mt-10 mb-12 flex flex-col items-center">
          <p class="text-black text-lg md:text-xl max-w-2xl mx-auto mb-8 font-medium leading-relaxed">
            Největší klub malého fotbalu v České republice.<br/>
            Domov šampionů s týmy pro všechny věkové kategorie od U8 po veterány.
          </p>
          
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
        </div>
        
        <!-- Contact Grid -->
        <div class="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-4xl mx-auto mb-12">
          <!-- Phone -->
          <a href="tel:+420778790537" @click="trackContactClick('phone')" class="bg-white/90 backdrop-blur-sm rounded-xl p-4 hover:bg-white transition-all duration-200 transform hover:scale-105 shadow-lg">
            <div class="flex flex-col items-center text-center">
              <div class="bg-black p-3 rounded-full mb-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                </svg>
              </div>
              <p class="font-bold text-gray-800 text-sm">Phone</p>
              <p class="text-gray-600 text-xs">778 790 537</p>
            </div>
          </a>
          
          <!-- Email -->
          <a href="mailto:royalflushbrno@seznam.cz" @click="trackContactClick('email')" class="bg-white/90 backdrop-blur-sm rounded-xl p-4 hover:bg-white transition-all duration-200 transform hover:scale-105 shadow-lg">
            <div class="flex flex-col items-center text-center">
              <div class="bg-black p-3 rounded-full mb-3">
                <svg class="w-6 h-6 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" 
                        d="M3 8l7.89 4.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                </svg>
              </div>
              <p class="font-bold text-gray-800 text-sm">Email</p>
              <p class="text-gray-600 text-xs">royalflushbrno@seznam.cz</p>
            </div>
          </a>
          
          <!-- Instagram -->
          <a href="https://instagram.com/royalflush_brno" @click="trackContactClick('instagram')" target="_blank" rel="noopener noreferrer" class="bg-white/90 backdrop-blur-sm rounded-xl p-4 hover:bg-white transition-all duration-200 transform hover:scale-105 shadow-lg">
            <div class="flex flex-col items-center text-center">
              <div class="bg-black p-3 rounded-full mb-3">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M12.017 0C8.396 0 7.989.013 7.041.048 6.094.082 5.48.204 4.955.388a5.426 5.426 0 0 0-1.962 1.277A5.426 5.426 0 0 0 1.716 3.627c-.184.525-.306 1.139-.34 2.086C1.341 6.661 1.328 7.068 1.328 10.69c0 3.621.013 4.028.048 4.975.034.947.156 1.561.34 2.086a5.426 5.426 0 0 0 1.277 1.962 5.426 5.426 0 0 0 1.962 1.277c.525.184 1.139.306 2.086.34.947.035 1.354.048 4.975.048 3.621 0 4.028-.013 4.975-.048.947-.034 1.561-.156 2.086-.34a5.426 5.426 0 0 0 1.962-1.277 5.426 5.426 0 0 0 1.277-1.962c.184-.525.306-1.139.34-2.086.035-.947.048-1.354.048-4.975 0-3.621-.013-4.028-.048-4.975-.034-.947-.156-1.561-.34-2.086a5.426 5.426 0 0 0-1.277-1.962A5.426 5.426 0 0 0 19.373 1.716c-.525-.184-1.139-.306-2.086-.34C16.34.013 15.933 0 12.312 0h-.295zm-.14 2.166h.295c3.557 0 3.97.013 4.897.048.92.042 1.42.196 1.753.326.44.171.754.375 1.084.705.33.33.534.644.705 1.084.13.333.284.833.326 1.753.035.927.042 1.34.042 4.897 0 3.557-.007 3.97-.042 4.897-.042.92-.196 1.42-.326 1.753a2.918 2.918 0 0 1-.705 1.084 2.918 2.918 0 0 1-1.084.705c-.333.13-.833.284-1.753.326-.927.035-1.34.042-4.897.042-3.557 0-3.97-.007-4.897-.042-.92-.042-1.42-.196-1.753-.326a2.918 2.918 0 0 1-1.084-.705 2.918 2.918 0 0 1-.705-1.084c-.13-.333-.284-.833-.326-1.753-.035-.927-.042-1.34-.042-4.897 0-3.557.007-3.97.042-4.897.042-.92.196-1.42.326-1.753.171-.44.375-.754.705-1.084a2.918 2.918 0 0 1 1.084-.705c.333-.13.833-.284 1.753-.326.927-.035 1.34-.042 4.897-.042z"/>
                  <path d="M12.017 5.838a4.852 4.852 0 1 0 0 9.704 4.852 4.852 0 0 0 0-9.704zm0 8.001a3.149 3.149 0 1 1 0-6.298 3.149 3.149 0 0 1 0 6.298z"/>
                  <circle cx="16.948" cy="5.155" r="1.134"/>
                </svg>
              </div>
              <p class="font-bold text-gray-800 text-sm">Instagram</p>
              <p class="text-gray-600 text-xs">@royalflush_brno</p>
            </div>
          </a>
          
          <!-- Facebook -->
          <a href="https://www.facebook.com/royalflushmalakopana" @click="trackContactClick('facebook')" target="_blank" rel="noopener noreferrer" class="bg-white/90 backdrop-blur-sm rounded-xl p-4 hover:bg-white transition-all duration-200 transform hover:scale-105 shadow-lg">
            <div class="flex flex-col items-center text-center">
              <div class="bg-black p-3 rounded-full mb-3">
                <svg class="w-6 h-6 text-white" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M24 12.073c0-6.627-5.373-12-12-12s-12 5.373-12 12c0 5.99 4.388 10.954 10.125 11.854v-8.385H7.078v-3.47h3.047V9.43c0-3.007 1.792-4.669 4.533-4.669 1.312 0 2.686.235 2.686.235v2.953H15.83c-1.491 0-1.956.925-1.956 1.874v2.25h3.328l-.532 3.47h-2.796v8.385C19.612 23.027 24 18.062 24 12.073z"/>
                </svg>
              </div>
              <p class="font-bold text-gray-800 text-sm">Facebook</p>
              <p class="text-gray-600 text-xs">Royal Flush</p>
            </div>
          </a>
        </div>

      </div>
    </section>


  </div>
</template>

<script setup>
// Analytics component reference
const analytics = ref()

// Track contact interactions
const trackContactClick = (method) => {
  analytics.value?.trackContact(method)
}

// SEO Meta tags
useHead({
  title: 'Royal Flush Brno',
  meta: [
    { name: 'description', content: 'Royal Flush Brno - Největší klub malého fotbalu v České republice s týmy pro všechny věkové kategorie od U8 po veterány.' },
    { name: 'keywords', content: 'malý fotbal, minifotbal, klub, Brno, Česká republika, mládežnické týmy, veteráni, profesionální trénink' },
    { name: 'author', content: 'Royal Flush Brno' },
    { property: 'og:title', content: 'Royal Flush Brno - Domov šampionů' },
    { property: 'og:description', content: 'Fotbalový klub v Brně s týmy pro všechny věkové kategorie od U8 po veterány.' },
    { property: 'og:type', content: 'website' },
    { property: 'og:image', content: '/images/royal-flush-logo.jpg' },
    { name: 'twitter:card', content: 'summary_large_image' },
    { name: 'twitter:title', content: 'Royal Flush Brno - Domov šampionů' },
    { name: 'twitter:description', content: 'Největší klub malého fotbalu v České republice s týmy pro všechny věkové kategorie od U8 po veterány.' }
  ],
  script: [
    {
      type: 'application/ld+json',
      innerHTML: JSON.stringify({
        '@context': 'https://schema.org',
        '@type': 'SportsOrganization',
        name: 'Royal Flush Brno',
        description: 'Fotbalový klub v Brně, Česká republika',
        url: 'https://royalflushbrno.com',
        logo: '/images/royal-flush-logo.jpg',
        address: {
          '@type': 'PostalAddress',
          addressLocality: 'Brno',
          addressCountry: 'CZ'
        },
        sport: 'Football/Soccer',
      })
    }
  ]
})
</script>