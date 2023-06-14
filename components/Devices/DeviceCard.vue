<template>
    <nuxt-link :to="detailPage" class="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
      <span v-if="!device.activeDevice && activatedAt == null" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 float-right z-10 ml-1">New</span>
      <span v-if="device.activeDevice" class="inline-flex items-center rounded-md bg-green-50 px-2 py-1 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20 float-right z-10 ml-1">Active</span>
      <span v-if="!device.activeDevice && activatedAt != null" class="inline-flex items-center rounded-md bg-red-50 px-2 py-1 text-xs font-medium text-red-700 ring-1 ring-inset ring-red-600/20 float-right z-10 ml-1">Inactive</span>
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
    ip: String,
    activeDevice: Boolean,
    activatedAt: String
})

const detailPage = computed(() => {
    return '/devices/' + device.id
})

</script>