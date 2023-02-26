<template>  
  <div class="flex justify-center">
    <div class="mb-3 xl:w-96">
      <div class="relative mb-4 flex w-full flex-wrap items-stretch">
        <input
          type="search"
          v-model="searchInput"
          class="relative m-0 -mr-px block w-[1%] min-w-0 flex-auto rounded-l border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-1.5 text-base font-normal text-neutral-700 outline-none transition duration-300 ease-in-out focus:border-primary focus:text-neutral-700 focus:shadow-te-primary focus:outline-none dark:text-neutral-200 dark:placeholder:text-neutral-200"
          placeholder="Search"
          aria-label="Search"
          aria-describedby="button-addon1" />
        <custom-button class="ml-5" title="Search" positiveButton="true" @click="onButtonClick(searchInput)"/>
      </div>
    </div>
  </div>   
</template>

<script lang="ts">
    import CustomButton from '@/components/generic/CustomButton.vue';

    export default {
      name: 'SearchBar',
      components: {
        CustomButton,
      },
      methods: {
        onButtonClick(searchInput: string) {
          this.$emit('searchEvent', searchInput);
        },
      },
      data() {
        return {
          searchInput: '',
        }
      }
    }
</script>