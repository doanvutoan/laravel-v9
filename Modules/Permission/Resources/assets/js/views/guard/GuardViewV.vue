<template>
  <PageComponent>
    <template v-slot:header>
      <div class="flex items-center justify-between">
        <h1 class="text-3xl font-bold text-gray-900">
          {{route.params.id ? model.guard_name:"create a guard"}}
        </h1>
        <button v-if="model" type="button" @click="deleteGuard(model)"
                class="p-0 h-6 v-8 flex items-center justify-center rounded-full border-transparent border text-sm text-red-600 focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fill-rule="evenodd"
                  d="M9 2a1 1 0 00-.894.553L7.382 4H4a1 1 0 000 2v10a2 2 0 002 2h8a2 2 0 002-2V6a1 1 0 100-2h-3.382l-.724-1.447A1 1 0 0011 2H9zM7 8a1 1 0 012 0v6a1 1 0 11-2 0V8zm5-1a1 1 0 00-1 1v6a1 1 0 102 0V8a1 1 0 00-1-1z"
                  clip-rule="evenodd"/>
          </svg>
        </button>
      </div>
    </template>
    <form @submit.prevent="saveGuard">
      {{model}}
    </form>
  </PageComponent>
</template>

<script setup>
import PageComponent from "../layouts/PageComponent";
import {computed, ref} from "vue";
import {useRoute,useRouter} from "vue-router";
import store from "../../controllers";
const route = useRoute();
const router = useRouter();
const guardLoading = computed(()=>store.state.guardController.currentGuard.loading);
/*get data when load page*/
if (route.params.id){
  store.dispatch('guardController/get',route.params.id);
}
/*get data from storex*/
const model = computed(() => store.state.guardController.currentGuard.data);
/*event submit form*/
function saveGuard(){
  store.dispatch("guardController/save",model.value).then(({data})=>{
    router.push({
      name:"GuardView",
      params:{id:data.data.id}
    })
  })
}
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
