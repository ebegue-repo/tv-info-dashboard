<template>
    <button 
        type="submit" 
        :class="[positiveButton ? 'bg-tvm-green' : 'bg-stone-900',
                 'text-white',
                 'inline-flex',
                 'justify-center',
                 'rounded-md',
                 'py-2',
                 'px-5',
                 'mr-3',
                 'text-sm',
                 'font-medium',
                 'shadow-sm', 
                 'focus:outline-none',
                 'focus:ring-2',
                 'focus:ring-indigo-500',
                 'focus:ring-offset-2']">
        {{title}}
    </button>
</template>

<script>
    export default {
      name: 'CustomButton',
      props: {
        title: {
          type: String,
          required: true,
        },
        positiveButton: {
          type: Boolean,
          required: false
        }
      }
    }
</script>