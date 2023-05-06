// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
    ssr: false,
    target: "static",

    modules: ["nuxt-editorjs"],
  vite: {
    optimizeDeps: {
      include: ["@editorjs/editorjs"],
    },
  },

    css: [
        "~/global.css"
    ],

    tailwindcss: {
        config: {
            theme: {
                extend: {
                    colors: {
                        black: '#282c34',
                        white: '#abb2bf',
                        'light-red': '#e06c75',
                        'dark-red': '#be5046',
                        green: '#98c379',
                        'light-yellow': '#e5c07b',
                        'dark-yellow': '#d19a66',
                        blue: '#61afef',
                        magenta: '#c678dd',
                        cyan: '#56b6c2',
                        'gutter-grey': '#4b5263',
                        'comment-grey': '#5c6370',
                    },
                },
            },
        }

    }
})