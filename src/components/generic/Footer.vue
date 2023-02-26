<template>
    <footer class="bg-black text-white">
        <div class="mx-auto max-w-7xl py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
            <div class="flex justify-center space-x-6 md:order-2">
                <img src="@/assets/images/tvm_logo.png" />
            </div>
            <div class="mt-8 md:order-1 md:mt-0">
                <p class="text-center text-base text-gray-400">&copy; {{ year }} TV MAZE</p>
            </div>
        </div>
    </footer>
</template>

<script setup lang="ts">
    const year = new Date().getFullYear();
</script>
