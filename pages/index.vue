<script setup>
const config = useRuntimeConfig();

useHead({
    layout: "default",
    title: "Home",
});

const { data: posts, pending } = useLazyAsyncData("posts", () =>
    $fetch(`${config.public.apiBase}`)
);

refreshNuxtData("posts");
</script>

<template>
    <div>
        <div v-if="pending">Loading ...</div>
        <div v-else>
            <div v-for="post in posts" :key="post.id">
                <div class="block mt-2">
                    <NuxtLink
                        :to="{ name: 'post-id', params: { id: post.id } }"
                        class="text-xl font-semibold text-gray-900"
                    >
                        {{ post.title }}
                    </NuxtLink>
                    <p
                        class="mt-3 text-base text-gray-500 truncate text-ellipsis"
                    >
                        {{ post.body }}
                    </p>
                </div>
                <div class="mt-3">
                    <NuxtLink
                        :to="{ name: 'post-id', params: { id: post.id } }"
                        class="text-base font-semibold text-indigo-600 hover:text-indigo-500"
                    >
                        Read full story
                    </NuxtLink>
                </div>
            </div>
        </div>
    </div>
</template>
