<template>
  <main class="w-full lg:p-6 p-4">
    <TradesHeader />
    <div class="">
      <TradesNav />
      <div class="">
        <NuxtChild :data="data" />
      </div>
    </div>
  </main>
</template>
<script>
export default {
  data() {
    return {
      loading: true,
      error: null,
      data: [],
      route: this.$route,
    }
  },
  head: {
    title: 'Trades | XTrade',
  },

  mounted() {
    this.fetchData()
  },

  methods: {
    async fetchData() {
      const posts = await this.$axios.$get('/todos')

      this.loading = false
      this.users = posts
    },
  },
}
</script>
