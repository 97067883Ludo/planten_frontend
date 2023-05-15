<template>
    <nuxt-link :to="test" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
        <div class="flex justify-between">
            <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">{{ device.name }}</h5>
        </div>
        <p class="font-normal text-gray-700 dark:text-gray-400">Ip: {{device.ip}}</p>
    </nuxt-link>
</template>

<script setup>
const device = defineProps({
    id: String,
    name: String,
    ip: String
})

const test = computed(() => {
    return '/devices/' + device.id
})

</script>