<template>
  <li>
    <nuxt-link class="flex items-center lg:justify-start justify-center lg:w-auto lg:h-auto h-12 w-12 py-3 px-2 text-gray-600 lg:rounded-md rounded-full hover:bg-gray-100 hover:text-indigo-900" :to="to">
      <slot name="icon"></slot>
      <span class="mx-4 font-medium transition duration-300 hidden lg:inline"><slot></slot></span>
    </nuxt-link>
  </li>
</template>

<script>
export default {
  props: {
    to: {
      type: String,
      required: true,
    },
    tilte: {
      type: String,
      required: false,
      default: () => undefined,
    },
  },
}
</script>

<style lang="postcss" scoped>
a.nuxt-link-active {
  @apply bg-gray-100 text-indigo-900;
}
</style>
