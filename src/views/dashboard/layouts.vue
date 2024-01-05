<template>
  <div>
    <TheNav></TheNav>
    <!-- /.navbar -->

    <TheSidebar></TheSidebar>
    <!--/.sidebar-->

    <div class="col-sm-9 col-sm-offset-3 col-lg-10 col-lg-offset-2 main">
      <div class="row">
        <ol class="breadcrumb">
          <li>
            <a href="#">
              <em class="fa fa-home"></em>
            </a>
          </li>
          <li class="active">{{ $route.path.slice(1) || 'Dashboard' }}</li>
        </ol>
      </div>
      <!--/.row-->

      <div class="row">
        <div class="col-lg-12">
          <h1 class="page-header">{{ $route.path.slice(1) || 'Dashboard' }}</h1>
        </div>
      </div>
      <!--/.row-->

      <RouterView></RouterView>
    </div>
    <!--/.main-->
  </div>
</template>

<script setup>
import TheNav from '@/views/dashboard/layouts/TheNav.vue'
import TheSidebar from '@/views/dashboard/layouts/TheSidebar.vue'
</script>

<style></style>
