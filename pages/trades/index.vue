<template>
  <section class="">
    <header class="rounded-md bg-gray-50 my-6 p-4">
      <div action="" class="flex justify-between items-center md:space-x-16 space-x-4">
        <TradesSearch />
        <div class="flex items-center md:space-x-6 space-x-2">
          <TradesFiltersDropdown :cols="cols" />
        </div>
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
    cols() {
      const cols = Object.keys(this.data[0])
        .map((col) => {
          return { name: col, checked: !this.inHiddenCols(col) }
        })
        .filter((col) => col.name !== 'id')
      return cols
    },
  },

  methods: {
    matchSearchQuery(str) {
      let { search_query: searchQuery } = this.$route.query
      if (searchQuery === null) searchQuery = ''
      const searchRegex = new RegExp(searchQuery, 'i')
      return str.match(searchRegex)
    },

    inHiddenCols(col) {
      const hiddenCols = this.$route.query.hidden_cols
      if (col.toLowerCase() === 'id') return true
      if (!hiddenCols) return false
      if (typeof hiddenCols === 'string') return col.toLowerCase() === hiddenCols.toLowerCase()
      if (Array.isArray(hiddenCols)) return hiddenCols.find((c) => c.toLowerCase() === col.toLowerCase())
    },
  },
}
</script>

<style lang="postcss" scoped></style>
