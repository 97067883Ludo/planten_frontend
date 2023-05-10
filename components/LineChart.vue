<template>
    <client-only>
        <Line :data="data" :options="options" />
    </client-only>
</template>

<script lang="ts" setup>
import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
} from 'chart.js'
import { Line } from 'vue-chartjs'
import { useMoistureData } from "~/stores/MoistureData";

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

const props = defineProps({
    deviceId: String,
})

const moistureData = useMoistureData();
await moistureData.fill(props.deviceId);

const options = {
    maintainAspectRatio: false,
    responsive: true,
    pointHoverRadius: 5,
    plugins:{
        title: {
            display: true,
            text: 'Last 24 hours of Bobby'
        }
    }
}

const data = {
    labels: moistureData.timeStamp,
    datasets: [
        {
            label: 'Bobby',
            backgroundColor: '#f87979',
            data: moistureData.moisture,
            tension: 0.5,
        }
    ]
}
</script>
