<template>
  <section class="">
    <header class="rounded-md bg-gray-50 my-6 p-4">
      <div action="" class="flex justify-between items-center md:space-x-16 space-x-4">
        <TradesSearch />
      </div>
    </header>
    <AppTable :data="filteredData" />
  </section>
</template>

<script>
export default {
  props: {
    data: {
      type: Object,
      required: true,
    },
  },

  computed: {
    filteredData() {
      return this.data.filter((d) => this.matchSearchQuery(d.title))
    },
  },

  methods: {
    matchSearchQuery(str) {
      let { search_query: searchQuery } = this.$route.query
      if (searchQuery === null) searchQuery = ''
      const searchRegex = new RegExp(searchQuery, 'i')
      return str.match(searchRegex)
    },
  },
}
</script>

<style lang="postcss" scoped></style>
