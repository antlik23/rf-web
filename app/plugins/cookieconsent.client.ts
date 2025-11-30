import 'vanilla-cookieconsent/dist/cookieconsent.css'
import * as CookieConsent from 'vanilla-cookieconsent'

declare global {
    interface Window {
        dataLayer: any[]
    }
}

export default defineNuxtPlugin((nuxtApp) => {
    // Helper to push to dataLayer
    const pushToDataLayer = (event: string, categories: string[]) => {
        if (typeof window !== 'undefined' && window.dataLayer) {
            window.dataLayer.push({
                event: event,
                consent_categories: categories,
                consent_analytics: categories.includes('analytics') ? 'granted' : 'denied',
                consent_marketing: categories.includes('marketing') ? 'granted' : 'denied'
            })
        }
    }

    CookieConsent.run({
        guiOptions: {
            consentModal: {
                layout: 'box',
                position: 'bottom left',
                equalWeightButtons: true,
                flipButtons: false
            },
            preferencesModal: {
                layout: 'box',
                position: 'right',
                equalWeightButtons: true,
                flipButtons: false
            }
        },
        categories: {
            necessary: {
                readOnly: true
            },
            analytics: {},
            marketing: {}
        },
        language: {
            default: 'cs',
            autoDetect: 'browser',
            translations: {
                en: {
                    consentModal: {
                        title: 'We use cookies!',
                        description: 'Hi, this website uses essential cookies to ensure its proper operation and tracking cookies to understand how you interact with it. The latter will be set only after consent.',
                        acceptAllBtn: 'Accept all',
                        acceptNecessaryBtn: 'Reject all',
                        showPreferencesBtn: 'Manage preferences',
                        footer: '<a href="#link">Privacy Policy</a>\n<a href="#link">Terms and conditions</a>'
                    },
                    preferencesModal: {
                        title: 'Consent Preferences Center',
                        acceptAllBtn: 'Accept all',
                        acceptNecessaryBtn: 'Reject all',
                        savePreferencesBtn: 'Save preferences',
                        closeIconLabel: 'Close modal',
                        serviceCounterLabel: 'Service|Services',
                        sections: [
                            {
                                title: 'Cookie Usage',
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.'
                            },
                            {
                                title: 'Strictly Necessary Cookies <span class="pm__badge">Always Enabled</span>',
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                                linkedCategory: 'necessary'
                            },
                            {
                                title: 'Analytics Cookies',
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                                linkedCategory: 'analytics'
                            },
                            {
                                title: 'Advertisement Cookies',
                                description: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.',
                                linkedCategory: 'marketing'
                            }
                        ]
                    }
                },
                cs: {
                    consentModal: {
                        title: 'Používáme cookies!',
                        description: 'Dobrý den, tato webová stránka používá nezbytné soubory cookie k zajištění správného fungování a sledovací soubory cookie, abychom pochopili, jak s ní interagujete. Ty budou nastaveny až po vašem souhlasu.',
                        acceptAllBtn: 'Přijmout vše',
                        acceptNecessaryBtn: 'Odmítnout vše',
                        showPreferencesBtn: 'Spravovat předvolby',
                        footer: '<a href="#link">Zásady ochrany osobních údajů</a>\n<a href="#link">Obchodní podmínky</a>'
                    },
                    preferencesModal: {
                        title: 'Centrum předvoleb souhlasu',
                        acceptAllBtn: 'Přijmout vše',
                        acceptNecessaryBtn: 'Odmítnout vše',
                        savePreferencesBtn: 'Uložit předvolby',
                        closeIconLabel: 'Zavřít okno',
                        serviceCounterLabel: 'Služba|Služby',
                        sections: [
                            {
                                title: 'Používání cookies',
                                description: 'Zde můžete nastavit své preference týkající se souborů cookie.'
                            },
                            {
                                title: 'Nezbytně nutné soubory cookie <span class="pm__badge">Vždy povoleno</span>',
                                description: 'Tyto soubory cookie jsou nezbytné pro správné fungování webových stránek a nelze je zakázat.',
                                linkedCategory: 'necessary'
                            },
                            {
                                title: 'Analytické soubory cookie',
                                description: 'Tyto soubory cookie shromažďují informace o tom, jak používáte naše webové stránky. Všechna data jsou anonymizovaná.',
                                linkedCategory: 'analytics'
                            },
                            {
                                title: 'Reklamní soubory cookie',
                                description: 'Tyto soubory cookie se používají k zobrazování reklam, které jsou pro vás relevantní.',
                                linkedCategory: 'marketing'
                            }
                        ]
                    }
                }
            }
        },
        onFirstConsent: ({ cookie }: { cookie: any }) => {
            pushToDataLayer('cookie_consent_update', cookie.categories)
        },
        onConsent: ({ cookie }: { cookie: any }) => {
            // onConsent fires on first consent AND on subsequent loads if consent is valid
            pushToDataLayer('cookie_consent_update', cookie.categories)
        },
        onChange: ({ cookie }: { cookie: any }) => {
            pushToDataLayer('cookie_consent_update', cookie.categories)
        }
    })
})
