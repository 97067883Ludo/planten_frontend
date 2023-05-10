import { defineStore } from "pinia";
import axios from "axios";
export const useMoistureData = defineStore("MoistureData", {
    state: () => ({
            moisture: [],
            timeStamp: []
    }),

    actions: {
        async fill(deviceId) {
            this.moisture = []
            this.timeStamp = []
            await axios.get('http://localhost:5098/api/soilmoisture/' + deviceId)
                .then((request) => {
                    request.data.forEach( (value) => {
                        this.moisture.push(value.moisture)
                        this.timeStamp.push(value.createdAt)
                    })
                })
                .catch((err) => {
                    console.log(err)
                })
        },
    }
});