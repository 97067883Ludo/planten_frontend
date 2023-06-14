import { defineStore } from "pinia";
import {makeRequest} from "~/Axios";

export const useSingleDeviceData = defineStore("SingleDevice", {
    state: () => ({
        singleDevice: { }
    }),

    actions: {
        async getSingleDevice(device) {
            await makeRequest.get("/device/" + device)
                .then((response) => {
                    this.singleDevice = response.data
                    // this.singleDevice.id = response.data.id
                    // this.singleDevice.name = response.data.name
                    // this.singleDevice.ip = response.data.ip
                    console.log(response.data)
                })
        },

        async saveChanges(device) {
            // console.log(device.name);
            await makeRequest({
                method: 'put',
                url: '/device/',
                data: {
                    'id': device.id,
                    'name': device.name,
                    'ip': device.ip,
                }
            }).then(() => {})
        },

        async activate() {
            await makeRequest({
                method: 'put',
                url: '/activate-device',
                data: {
                    'id': this.singleDevice.id,
                }
            }).then((response) => {
                this.singleDevice = response.data

                console.log(response.data)

            })
        }
    }
})