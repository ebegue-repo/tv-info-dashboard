<template>
    <article>
        <div>
            <div>
                <img class="h-32 w-full object-cover lg:h-48 opacity-20" src="/home.avif" alt="" />
            </div>
            <div v-if="details" class="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div class="-mt-12 sm:-mt-16 sm:flex sm:items-end sm:space-x-5">
                    <div class="flex">
                        <img v-if="details.image" class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" :src="details.image.original" />
                        <img v-else class="h-24 w-24 rounded-full ring-4 ring-white sm:h-32 sm:w-32" src="/default.jpg" alt="" />
                    </div>
                </div>
                <div class="min-w-0 flex-1 mt-2">
                    <h1 class="truncate text-2xl font-bold text-gray-900">{{ details.name }}</h1>
                    <p class="text-sm font-medium text-gray-900 mt-2" v-html="details.summary" />
                </div>
            </div>
            <h1 v-else class="mt-5 font-bold tracking-tight sm:text-xl lg:text-2xl text-center">No available details</h1>
        </div>
    </article>    
</template>

<script>
    export default {
      name: 'ShowDetails',
      props: {
        details: {
          type: Object,
          required: true
        }
      }  
    }
</script>