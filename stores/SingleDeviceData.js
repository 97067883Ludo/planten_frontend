import { defineStore } from "pinia";
import axios from "axios";

export const useSingleDeviceData = defineStore("SingleDevice", {
    state: () => ({
        singleDevice: { }
    }),

    actions: {
        async getSingleDevice(device) {
            await axios.get("http://localhost:5098/api/device/" + device)
                .then((response) => {
                    this.singleDevice = response.data
                    // this.singleDevice.id = response.data.id
                    // this.singleDevice.name = response.data.name
                    // this.singleDevice.ip = response.data.ip
                    console.log(this.singleDevice.id)
                })
        },

        async saveChanges(device) {
            // console.log(device.name);
            await axios({
                method: 'put',
                url: 'http://localhost:5098/api/device/',
                headers: {
                    'Access-Control-Allow-Origin' : '*',
                    'Access-Control-Allow-Methods':'GET,PUT,POST,DELETE,PATCH,OPTIONS',
                }, 
                data: {
                    'id': device.id,
                    'name': device.name,
                    'ip': device.ip,
                }
            }).then(() => {})
        }
    }
})