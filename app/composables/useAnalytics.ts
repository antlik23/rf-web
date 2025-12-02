export const useAnalytics = () => {
    const config = useRuntimeConfig()

    // Track custom events function
    const trackEvent = (eventName: string, parameters?: Record<string, any>) => {
        // In a real app, check for consent or config here
        // if (!config.public.enableAnalytics) return

        console.log('📊 Analytics Event:', eventName, parameters)

        // Future: Add actual analytics tracking here
        // Google Analytics, Meta Pixel, etc.
        // if (typeof window !== 'undefined' && window.dataLayer) {
        //   window.dataLayer.push({ event: eventName, ...parameters })
        // }
    }

    // Track contact interactions
    const trackContact = (method: 'phone' | 'email' | 'instagram' | 'facebook') => {
        trackEvent('contact_click', {
            contact_method: method,
            page: useRoute().path
        })
    }

    // Track page view
    const trackPageView = () => {
        const route = useRoute()
        trackEvent('page_view', {
            page_title: document.title,
            page_path: route.path,
            page_type: route.path === '/' ? 'landing' : 'other'
        })
    }

    return {
        trackEvent,
        trackContact,
        trackPageView
    }
}
