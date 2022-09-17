<script setup>
const config = useRuntimeConfig();
const route = useRoute();

useHead({
    layout: "default",
    title: `Post ID : ${route.params.id}`,
});

const { data: post, pending } = useLazyAsyncData("post", () =>
    $fetch(`${config.public.apiBase}/post/${route.params.id}`)
);

refreshNuxtData("post");
</script>

<template>
    <div>
        <div v-if="pending">Loading...</div>
        <div v-else>
            <div :key="post.id">
                <div class="block mt-2">
                    <p class="text-xl font-semibold text-gray-900">
                        {{ post.title }}
                    </p>
                    <p class="mt-3 text-base text-gray-500">
                        {{ post.body }}
                    </p>
                </div>
                <div class="mt-3">
                    <NuxtLink
                        :to="{ name: 'index' }"
                        class="text-base font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        Back
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
