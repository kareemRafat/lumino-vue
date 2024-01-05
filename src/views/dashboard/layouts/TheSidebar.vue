<template>
  <div id="sidebar-collapse" class="col-sm-3 col-lg-2 sidebar">
      <div class="profile-sidebar">
        <div class="profile-userpic">
          <img
            src="http://placehold.it/50/30a5ff/fff"
            class="img-responsive"
            alt=""
          />
        </div>
        <div class="profile-usertitle">
          <div class="profile-usertitle-name">Username</div>
          <div class="profile-usertitle-status">
            <span class="indicator label-success"></span>Online
          </div>
        </div>
        <div class="clear"></div>
      </div>
      <div class="divider"></div>
      <form role="search">
        <div class="form-group">
          <input type="text" class="form-control" placeholder="Search" />
        </div>
      </form>
      <ul class="nav menu">
        <li :class="{ active: $route.path === '/' }">
          <router-link to="/"
            ><em class="fa fa-dashboard">&nbsp;</em> Dashboard</router-link
          >
        </li>
        <li :class="{ active: $route.path === '/users' }">
          <router-link to="/users"
            ><em class="fa fa-calendar">&nbsp;</em> Users
          </router-link>
        </li>

        <li>
          <a href="login.html"
            ><em class="fa fa-power-off">&nbsp;</em> Logout</a
          >
        </li>
      </ul>
    </div>
</template>

<script setup>

import { ref } from 'vue';



</script>

<style>

</style>