<template>
  <div class="row">
    <div class="col-lg-12">
      <Suspense>
        <template #default>
          <div class="">
            <TheTable :data="users" />
            <Pagination v-if="users" :loop="users" @send-page-num="getPage" />
          </div>
        </template>
        <template #fallback>
          <Loader />
        </template>
      </Suspense>
    </div>
  </div>

  <!--/.row-->
</template>

<script setup>
import { defineAsyncComponent, onMounted, ref } from "vue";
import TheTable from "@/components/dashboard/TheTable.vue";
import Loader from "@/components/dashboard/Loader.vue";
import Pagination from "@/components/dashboard/Pagination.vue";
let users = ref("");

onMounted( () => {
  fetchUsers()
});

const fetchUsers = (page)=> {
  fetch(`https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`)
    .then((response) => response.json())
    .then((json) => (users.value = json));
}

const getPage = (pageNum)=> {
  fetchUsers(pageNum)
}
// const Pagination = defineAsyncComponent(
//   () => import("@/components/dashboard/Pagination.vue")
// )
</script>

<style></style>
