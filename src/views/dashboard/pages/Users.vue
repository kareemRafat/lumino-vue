<template>
  <div class="row">
    <div class="col-lg-12">
      <Suspense>
        <template #default>
          <div>
            <TheTable :data="users.users" />
            <Pagination v-if="users" :loop="users" @sendPageNum="getPage" />
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

onMounted(async () => {
  await fetchUsers();
});

const fetchUsers = async (page) => {
  const response = await fetch(
    `https://jsonplaceholder.typicode.com/users?_page=${page}&_limit=3`
  );
  users.value = {
    users: await response.json(),
    totalCount: response.headers.get("x-total-count"),
  };
};

const getPage = async (pageNum) => {
  await fetchUsers(pageNum);
};
// const Pagination = defineAsyncComponent(
//   () => import("@/components/dashboard/Pagination.vue")
// )
</script>

<style></style>
