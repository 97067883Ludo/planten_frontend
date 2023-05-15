<template>
    <div class="flex w-full flex-wrap flex-row mr-2 justify-between">
        <devices-device-detail class="w-[49%]"
                :device-id="route.params.id"
        />
    </div>
    
    <div
      class="h-[360px] bg-white p-2 rounded-xl mb-2 mt-2"
    >
      <line-chart
        :device-id="route.params.id"
      ></line-chart>
    </div>

</template>

<script setup>


const route = useRoute();

</script>
