import { defineStore } from "pinia";
import {makeRequest} from "~/Axios";


export const useDeviceData = defineStore("DeviceData", {
    state: () => ({
        devices: [],
    }),

    actions: {
        async getAllDevices() {
            await makeRequest.get("/device")
                .then((response) => {
                    this.devices = response.data
                    console.log(this.devices)
                })
        },
    }
})