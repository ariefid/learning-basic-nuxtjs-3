<template>
    <div class="px-4 pt-16 pb-20 bg-white sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
        <div
            class="relative max-w-lg mx-auto divide-y-2 divide-gray-200 lg:max-w-7xl"
        >
            <div>
                <h2
                    class="text-3xl font-extrabold tracking-tight text-gray-900 sm:text-4xl"
                >
                    Press
                </h2>
                <div
                    class="mt-3 sm:mt-4 lg:grid lg:grid-cols-2 lg:gap-5 lg:items-center"
                >
                    <p class="text-xl text-gray-500">
                        Get weekly articles in your inbox on how to grow your
                        business.
                    </p>
                </div>
            </div>
            <div
                class="grid gap-16 pt-10 mt-6 lg:grid-cols-2 lg:gap-x-5 lg:gap-y-12"
            >
                <slot />
            </div>
        </div>
    </div>
</template>
