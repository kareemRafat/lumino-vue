<template>
  <nav aria-label="Page navigation">
  <ul class="pagination">
    <li>
      <a href="#" @click.prevent="changePage(page - 1)" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li v-for="n in totalPages"><a href="#" @click.prevent="changePage(n)">{{ n }}</a></li>
    <li>
      <a href="#" @click.prevent="changePage(page + 1)" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['sendPageNum']);
let page = ref();

const props = defineProps(['loop']);
const totalPages = Math.ceil(+props.loop.totalCount / 3)  ;

console.log(totalPages);

const changePage  = (newPage) =>  {
    if(newPage > totalPages || newPage < 1) {
      return ;
    }
    page.value = newPage ;
    emit('sendPageNum' , newPage)
}


</script>

<style>

</style>