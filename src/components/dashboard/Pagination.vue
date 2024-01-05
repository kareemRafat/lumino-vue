<template>
  <nav aria-label="Page navigation">
  <ul class="pagination">
    <li>
      <a href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li v-for="n in totalPages"><a href="#" @click.prevent="changePage(n)">{{ n }}</a></li>
    <li>
      <a href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>
</template>

<script setup>
import { ref } from 'vue';

const emit = defineEmits(['sendPageNum']);

const props = defineProps(['loop']);
const totalPages = props.loop.length ;

const changePage  = (newPage) =>  {
    emit('sendPageNum' , newPage)
}


</script>

<style>

</style>