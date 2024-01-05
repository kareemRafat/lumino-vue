<template>
  <table class="table table-hover table-striped">
    <thead>
      <tr>
        <th>id</th>
        <th>username</th>
        <th>email</th>
        <th>website</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="item in data" :key="item.id">
        <th>{{ item.id }}</th>
        <th>{{ item.username }}</th>
        <th>{{ item.email }}</th>
        <th>{{ item.website }}</th>
      </tr>
    </tbody>
  </table>
  
</template>

<script setup>
import { ref } from "vue";


// await new Promise((resolve, reject) => {
//   setTimeout(resolve, 1000);
// });

const props = defineProps(["data"]);
</script>

<style>
</style>
