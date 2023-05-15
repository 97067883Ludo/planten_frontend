<template>
    <div class="h-[360px] bg-white p-2 rounded-xl mb-2" v-for="device in DeviceData.devices">
      <LineChart
        :device-id="device.id"
        :device-name="device.name"
      ></LineChart>
    </div>
</template>

<script setup>
import { useDeviceData } from "~/stores/DeviceData";

const DeviceData = useDeviceData()
DeviceData.getAllDevices()

</script>