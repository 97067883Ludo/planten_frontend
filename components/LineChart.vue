<template>
    <client-only>
        <Line :data="data" :options="options" />
    </client-only>
</template>

<script setup>
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
import axios from "axios";

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
    deviceName: String,
})

const state = {
    moisture: [],
    timeStamp: []
}

await axios.get('http://localhost:5098/api/soilmoisture/' + props.deviceId)
    .then((request) => {
        request.data.forEach( (value) => {
            state.moisture.push(value.moisture)
            state.timeStamp.push(value.createdAt)
        })
    })
    .catch((err) => { })

const options = {
    maintainAspectRatio: false,
    responsive: true,
    pointHoverRadius: 5,
    plugins:{
        title: {
            display: true,
            text: 'Last 24 hours of ' + props.deviceName
        }
    }
}

const data = {
    labels: state.timeStamp,
    datasets: [
        {
            label: props.deviceName,
            backgroundColor: '#f87979',
            data: state.moisture,
            tension: 0.5,
        }
    ]
}
</script>
