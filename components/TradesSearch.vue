<template>
  <div class="relative flex-1">
    <button class="block md:w-7 w-6 md:h-7 h-6 text-center text-xl leading-0 absolute top-2 md:left-2 left-1.5 text-gray-400 focus:outline-none hover:text-gray-900 transition-colors">
      <SVGSearch />
    </button>
    <input v-model="search" type="text" class="w-full md:pl-10 pl-7 md:pr-4 pr-2 py-2 border-2 border-gray-200 rounded-md hover:border-gray-300 focus:outline-none focus:border-blue-500 md:text-base text-sm transition-colors" placeholder="Search for organizations, trading amounts .." />
  </div>
</template>

<script>
import SVGSearch from './SVG/SVGSearch.vue'

export default {
  components: { SVGSearch },
  data() {
    return {
      search: this.$route.query.search_query,
    }
  },
  watch: {
    search() {
      this.handleSearchChange()
    },
  },
  methods: {
    handleSearchChange() {
      const currentQueries = this.$route.query
      this.$router.push({ query: { ...currentQueries, search_query: this.search, page: 1 } })
    },
  },
}
</script>
