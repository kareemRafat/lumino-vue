<template>
  <nav
    aria-label="Page navigation"
    style="display: flex; justify-content: center"
  >
    <ul class="pagination">
      <!-- first -->
      <li>
        <a
          :class="{ 'not-allowed': page < 2 }"
          href="#"
          @click.prevent="changePage(page - 1)"
          aria-label="Previous"
        >
          <span aria-hidden="true">&laquo;</span>
        </a>
      </li>
      <!-- total -->
      <li v-for="n in totalPages">
        <a href="#" @click.prevent="changePage(n)">{{ n }}</a>
      </li>
      <!-- last -->
      <li>
        <a
          :class="{ 'not-allowed': page == totalPages }"
          href="#"
          @click.prevent="changePage(page + 1)"
          aria-label="Next"
        >
          <span aria-hidden="true">&raquo;</span>
        </a>
      </li>
    </ul>
  </nav>
</template>

<script setup>
import { ref } from "vue";

const emit = defineEmits(["sendPageNum"]);
let page = ref();

const props = defineProps(["loop"]);
const totalPages = Math.ceil(+props.loop.totalCount / 3);

console.log(totalPages);

const changePage = (newPage) => {
  if (newPage > totalPages || newPage < 1) {
    return;
  }

  if (page.value == newPage) return;

  page.value = newPage;
  emit("sendPageNum", newPage);
};
</script>

<style scoped>
.not-allowed {
  cursor: not-allowed;
}
</style>
