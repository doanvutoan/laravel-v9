<template>
  <PageComponent title="Notify">
    <template v-slot:header>
      <div class="flex justify-between items-center">
        <h1 class="text-3xl font-bold text-gray-900">Guard</h1>
        <router-link :to="{name:'GuardCreate'}" class="py-2 px-3 flex justify-between items-center text-white bg-gray-100 rounded-md hover:bg-gray-700">
          <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor" stroke-width="2">
            <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6m0 0v6m0-6h6m-6 0H6" />
          </svg>
          Add new guard
        </router-link>
      </div>
    </template>
  </PageComponent>
</template>

<script setup>
import PageComponent from "../layouts/PageComponent";
</script>
