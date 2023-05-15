<template>
  <div 
    class=" rounded-2xl p-3"
    :class="loading.state ? 'bg-gray-100 opacity-75' : 'bg-white'"
    >
      <form @submit.prevent>
          <div class="space-y-12">

              <div class="border-b border-gray-900/10 pb-12">
                  <h2 class="text-base font-semibold leading-7 text-gray-900">Device Information</h2>

                  <div class="mt-10 grid grid-cols-1 gap-x-6 gap-y-8 sm:grid-cols-6">
                      <div class="sm:col-span-3">
                          <label for="first-name" class="block text-sm font-medium leading-6 text-gray-900">Device name</label>
                          <div class="mt-2">
                              <input
                                      type="text"
                                      class="block w-full rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                      :class="loading.state ? 'bg-gray-200 text-gray-400' : 'text-gray-800'"
                                      :disabled="loading.state"
                                      v-model="deviceData.name"
                              >
                          </div>
                      </div>

                      <div class="sm:col-span-3">
                          <label for="last-name" class="block text-sm font-medium leading-6 text-gray-900">Ip adress</label>
                          <div class="mt-2">
                              <input
                                  type="text"
                                  class="block w-full rounded-md border-0 py-1.5 px-1.5 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6"
                                  v-model="deviceData.ip"
                                  :class="loading.state ? 'bg-gray-200 text-gray-400' : 'text-gray-800'"
                                  :disabled="loading.state"
                              >
                          </div>
                      </div>
                  </div>
              </div>
          </div>

          <div class="mt-6 flex items-center justify-end gap-x-6">
              <button
                  class="rounded-md px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
                  @click="saveChanges()"
                  :class="loading.state ? 'bg-gray-200 hover:bg-gray-200' : 'bg-indigo-600 '"
                  :disabled="loading.state"
              >Save</button>
          </div>
      </form>

  </div>

</template>

<script setup>
import { useSingleDeviceData } from "~/stores/SingleDeviceData";

const device = useSingleDeviceData();

const props = defineProps({
    deviceId: String
})

await device.getSingleDevice(props.deviceId);

const deviceData = reactive({
    id: device.singleDevice.id,
    name: device.singleDevice.name,
    ip: device.singleDevice.ip,
})

const loading = reactive({
    state: false
})

async function saveChanges() {
    loading.state = true;
    await device.saveChanges(deviceData);
    loading.state = false;
}

</script>