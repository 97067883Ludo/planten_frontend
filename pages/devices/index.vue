<template>
    <div class="w-full flex flex-wrap">
        <device-card v-for="device in DeviceData.devices" class="mr-3"
               :key="device.id"
               :name="device.name"
               :ip="device.ip"
               :id="device.id"
        ></device-card>
    </div>
</template>

<script setup>
import { useDeviceData } from "~/stores/DeviceData";
import DeviceCard from "~/components/Devices/DeviceCard.vue";

const DeviceData = useDeviceData();
DeviceData.getAllDevices();

</script>
