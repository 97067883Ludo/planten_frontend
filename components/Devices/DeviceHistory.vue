<template>
  <div 
    class=" rounded-2xl p-3"
    :class="loading.state ? 'bg-gray-100 opacity-75' : 'bg-white'"
    >

  </div>

</template>

<script setup>
import { useSingleDeviceData } from "~/stores/SingleDeviceData";

const loading = reactive({
    state: false
})

</script>