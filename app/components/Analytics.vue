<template>
  <!-- Analytics tracking component for Royal Flush Brno -->
  <div></div>
</template>

<script setup lang="ts">
interface Props {
  enableAnalytics?: boolean
}

const props = withDefaults(defineProps<Props>(), {
  enableAnalytics: true
})

const { trackPageView } = useAnalytics()
const route = useRoute()

// Track page view on component mount
onMounted(() => {
  if (props.enableAnalytics) {
    trackPageView()
  }
})

// Watch for route changes to track page views
watch(() => route.path, () => {
  if (props.enableAnalytics) {
    // Small delay to ensure title is updated
    setTimeout(() => {
      trackPageView()
    }, 100)
  }
})
</script>