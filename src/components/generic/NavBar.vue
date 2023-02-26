<template>
  <div class="min-h-full">
    <nav class="bg-tvm-green">
      <div class="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div class="flex h-16 items-center justify-between">
          <div class="flex items-center">
            <div class="flex-shrink-0">
              <img class="h-8 w-8" src="../../assets/images/tv_logo.png">
            </div>
            <div>
              <div class="ml-10 flex items-baseline space-x-6">
                <router-link class="text-white" v-for="item in navigation" :to="{ name: item.name }"
                             :key="item.name">
                  {{ item.name }}
                </router-link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </nav>
  </div>
</template>


<script setup lang="ts">

  defineProps({
    navigation: {
      type: Array,
      required: true
    }
  });

</script>
