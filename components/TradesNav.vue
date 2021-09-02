<template>
  <div class="">
    <ul class="flex space-x-3 border-b border-gray-300 text-green-900">
      <li><nuxt-link to="/trades" class="inline-block px-1 text-base py-2.5">All trades</nuxt-link></li>
      <li><nuxt-link to="/trades/offers" class="inline-block text-base px-1 py-2.5"> Trades offers </nuxt-link></li>
    </ul>
  </div>
</template>

<style lang="postcss" scoped>
a.nuxt-link-exact-active {
  @apply border-b-2 border-green-900 font-semibold;
}
</style>
