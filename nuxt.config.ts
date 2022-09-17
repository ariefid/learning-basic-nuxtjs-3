import { defineNuxtConfig } from "nuxt/config";

// https://v3.nuxtjs.org/api/configuration/nuxt.config
export default defineNuxtConfig({
    ssr: false,
    typescript: {
        strict: true,
    },
    vue: {
        compilerOptions: {
            isCustomElement: (tag) => tag === "iconify-icon",
        },
    },
    runtimeConfig: {
        apiSecret: "",
        public: {
            apiBase: "",
            appName: `${process.env.NUXT_APP_NAME}`,
        },
    },
    app: {
        baseURL: "/",
        cdnURL: "",
        head: {
            htmlAttrs: {
                lang: "en",
            },
            title: `${process.env.NUXT_APP_NAME}`,
            charset: "utf-8",
            meta: [
                {
                    name: "viewport",
                    content: "width=device-width, initial-scale=1",
                },
                { name: "twitter:card", content: "summary" },
            ],
            link: [],
            style: [],
            script: [],
            noscript: [{ children: "Javascript is required" }],
        },
    },
    modules: [
        "@nuxtjs/color-mode", // https://color-mode.nuxtjs.org/
        "@nuxtjs/tailwindcss",
        "@nuxtjs/google-fonts",
        "@nuxt/content",
        "@nuxtjs-alt/proxy",
        "@pinia/nuxt",
        "@vueuse/nuxt",
    ],
    tailwindcss: {
        // https://tailwindcss.nuxtjs.org/
        cssPath: "~/assets/css/tailwind.css",
        configPath: "~/tailwind.config.js",
        exposeConfig: false,
        injectPosition: 0,
        viewer: `${process.env.NUXT_APP_DEBUG}` === "true",
    },
    content: {
        // https://content.nuxtjs.org/
    },
    googleFonts: {
        // https://google-fonts.nuxtjs.org/
        families: {
            Poppins: true,
        },
        display: "swap", // "auto" | "block" | "swap" | "fallback" | "optional"
        text: `${process.env.NUXT_APP_NAME}`,
        useStylesheet: true,
    },
});
