<template>
  <main class="w-full lg:p-6 p-4">
    <TradesHeader />
    <div class="">
      <TradesNav />
      <div class="">
        <div v-if="loading" class="h-60 w-full flex items-center justify-center"><BaseLoader /></div>
        <NuxtChild v-if="!loading && !error" :data="data" />
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
      const data = await this.$axios.$get('/todos')

      this.loading = false
      this.data = data
    },
  },
}
</script>
