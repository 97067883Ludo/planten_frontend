import { defineStore } from "pinia";
import axios from "axios";
export const useMoistureData = defineStore("MoistureData", {
    state: () => ({
            moisture: [],
            timeStamp: [],
            deviceId: ''
    }),

    actions: {
        async fill(deviceId) {
            this.moisture = []
            this.timeStamp = []
            await axios.get('http://localhost:5098/api/soilmoisture/' + deviceId)
                .then((request) => {
                    request.data.forEach( (value) => {
                        this.moisture.push(value.moisture)
                        this.timeStamp.push(Date.parse(value.createdAt))
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        },
        // async fill(deviceId) {
        //     this.moisture = []
        //     this.timeStamp = []
        //     await $fetch('http://localhost:5098/api/soilmoisture/' + deviceId, {
        //         method: 'get'
        //     })
        //         .then((response) => {
        //             response.data.forEach( (value) => {
        //                 this.moisture.push(value.moisture)
        //                 this.timeStamp.push(Date.parse(value.createdAt))
        //             })
        //         })
        //         .catch((err) => {
        //             console.log(err)
        //         })
        // },
    }
});