<script setup>
const config = useRuntimeConfig();
const route = useRoute();

const title = route.meta.title;

useHead({
    htmlAttrs: {
        class: "h-full",
    },
    title: title,
    titleTemplate: (title) => {
        return title
            ? `${title} - ${config.public.appName}`
            : `${config.public.appName}`;
    },
    meta: [
        {
            name: "twitter:title",
            content: title
                ? `${title} - ${config.public.appName}`
                : `${config.public.appName}`,
        },
        {
            property: "og:title",
            content: title
                ? `${title} - ${config.public.appName}`
                : `${config.public.appName}`,
        },
        {
            property: "og:site_name",
            content: title
                ? `${title} - ${config.public.appName}`
                : `${config.public.appName}`,
        },
    ],
    bodyAttrs: {
        class: "h-full",
    },
});
</script>

<template>
    <NuxtLayout>
        <NuxtLoadingIndicator />
        <NuxtPage />
    </NuxtLayout>
</template>
