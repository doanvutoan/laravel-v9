<template>
  <PageComponent title="Notify">
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Guard</h1>
        <router-link :to="{name:'GuardCreate'}"
                     class="py-2 px-3 flex justify-between items-center text-white bg-gray-100 rounded-md hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor"
               stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
          </svg>
          Add new guard
        </router-link>
      </div>
    </template>

    <div class="grid grid-cols-1 gap-3 sm:grid-cols-2 md:grid-cols-3">
      <div v-for="item in guards" :key="item.id" class="flex">
        <div>{{ item.id }}</div>
        <div>{{ item.user_id }}</div>
        <div>{{ item.guard_name }}</div>
        <div>
          <router-link :to="{name:'GuardView',params:{id:item.id}}"
                       class="flex py-2 px-4 border border-transparent text-sm rounded-md text-white bg-gray-800 hover:bg-indigo-700 focus:ring-2 focus:ring-offset-2 focus:bg-indigo-100">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path
                d="M13.586 3.586a2 2 0 112.828 2.828l-.793.793-2.828-2.828.793-.793zM11.379 5.793L3 14.172V17h2.828l8.38-8.379-2.83-2.828z"/>
            </svg>
            Edit
          </router-link>
          <button v-if="item.id" type="button" @click="deleteGuard(item)"
                  class="p-0 h-6 v-8 flex items-center justify-center rounded-full border-transparent border text-sm text-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
            <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
              <path fill-rule="evenodd"
                    d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                    clip-rule="evenodd"/>
            </svg>
          </button>
        </div>
      </div>
    </div>
  </PageComponent>
</template>

<script setup>
import PageComponent from "../layouts/PageComponent";
import store from "../../controllers";
import {computed} from "vue";
import {useRouter} from "vue-router";
const router = useRouter();
/*call api data*/
store.dispatch('guardController/list');
/*loading data*/
const guards = computed(() => store.state.guardController.guard.data);
/*event delete a item*/
function deleteGuard(item) {
  if (confirm(`Are you sure you want to delete this item? Operation can't be undone!!`)) {
    store.dispatch('guardController/delete',item.id).then(({data})=>{
      router.push({
        name:"Guard",
      })
    });
  }
}
</script>
