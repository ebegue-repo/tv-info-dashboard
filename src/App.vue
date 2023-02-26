<template>
  <div class="flex flex-col min-h-screen">
    <nav-bar
      :navigation="menuItems"
    />

    <main class="grid grid-cols-1 sm:grid-cols-8 flex-grow">
      <div class="md:block col-span-0 md:col-span-1 bg-gray-100" />
      <router-view class="col-span-1 col-span-5 " />
      <div class="md:block col-span-0 md:col-span-2 bg-gray-100" />
    </main>

    <footer year="2023" class="sticky bottom-0"/>
  </div>

</template>

<script setup lang="ts">
  import NavBar from './components/generic/NavBar.vue'
  import Footer from './components/generic/Footer.vue'
  import {useRoute} from "vue-router";

  const route = useRoute()

  const menuItems = [
    { name: 'Home', href: '/', current: route.name == 'Home' },
    { name: 'Shows', href: '/shows', current: route.name == 'Shows' }
  ];
</script>
