<template>
  <!-- Analytics tracking component for Royal Flush Brno -->
  <div></div>
</template>

<script setup lang="ts">
interface Props {
  gtag?: string
  metaPixelId?: string
  enableAnalytics?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  enableAnalytics: true
})

// Track custom events function
const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
  if (!props.enableAnalytics) return
  
  console.log('📊 Analytics Event:', eventName, parameters)
  
  // Future: Add actual analytics tracking here
  // Google Analytics, Meta Pixel, etc.
}

// Track contact interactions
const trackContact = (method: 'phone' | 'email' | 'instagram' | 'facebook') => {
  trackEvent('contact_click', {
    contact_method: method,
    page: 'landing_page'
  })
}

// Track page view
const trackPageView = () => {
  trackEvent('page_view', {
    page_title: 'Royal Flush Brno - Home',
    page_type: 'landing'
  })
}

// Export functions for parent component
defineExpose({
  trackEvent,
  trackContact,
  trackPageView
})

// Track page view on component mount
onMounted(() => {
  if (props.enableAnalytics) {
    trackPageView()
  }
})
</script>