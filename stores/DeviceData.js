import { defineStore } from "pinia";
import axios from "axios";

export const useDeviceData = defineStore("DeviceData", {
    state: () => ({
        devices: []
    }),

    actions: {
        getAllDevices() {
            axios.get("http://localhost:5098/api/device")
                .then((response) => {
                    this.devices = response.data
                    console.log(this.devices)
                })
        }
    }
})