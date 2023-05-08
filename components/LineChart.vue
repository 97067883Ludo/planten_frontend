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
import * as chartConfig from '../chartConfig.js'

ChartJS.register(
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend
)

let data = chartConfig.data;
let options = chartConfig.options;

</script>
