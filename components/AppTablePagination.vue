<template>
  <div class="bg-white px-4 py-3 flex items-center justify-between border-t border-gray-200 sm:px-6">
    <div class="sm:flex-1 sm:flex sm:items-center sm:justify-between">
      <div>
        <p class="inline-flex text-xs font-semibold font-sans text-gray-400">
          <span class="">{{ (currentPage - 1) * 5 + 1 }}</span>
          <span class="mx-1"> - </span>
          <span class="">{{ currentPage * 5 }}</span>
          <span class="inline-block mx-2">of</span>
          <span class="">{{ max }}</span>
        </p>
      </div>

      <div>
        <nav class="relative z-0 inline-flex items-center rounded-md shadow-sm space-x-3" aria-label="Pagination">
          <button :class="{ active: prevPage >= 1, inactive: prevPage < 1 }" @click="goToPage(prevPage)">
            <span class="sr-only">Previous</span>
            <!-- Heroicon name: solid/chevron-left -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <line x1="216" y1="128" x2="40" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
              <polyline points="112 56 40 128 112 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline>
            </svg>
          </button>

          <button :class="{ active: nextPage <= lastPage, inactive: nextPage > lastPage }" @click="goToPage(nextPage)">
            <span class="sr-only">Next</span>
            <!-- Heroicon name: solid/chevron-right -->
            <svg xmlns="http://www.w3.org/2000/svg" class="w-4 h-4" fill="currentColor" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <line x1="40" y1="128" x2="216" y2="128" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></line>
              <polyline points="144 56 216 128 144 200" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="24"></polyline>
            </svg>
          </button>
        </nav>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    numberOfRows: {
      type: Number,
      required: false,
      default: () => 5,
    },
    max: {
      type: Number,
      default: () => 10,
    },
  },

  data() {
    return {
      NUMBER_OF_ROWS: this.numberOfRows,
    }
  },
  computed: {
    currentPage() {
      return this.$route.query.page || 1
    },

    prevPage() {
      return +(this.$route.query.page || 1) - 1
    },
    lastPage() {
      return Math.ceil(this.max / this.NUMBER_OF_ROWS)
    },
    nextPage() {
      const nextPage = +(this.$route.query.page || 1) + 1
      return nextPage
    },
  },

  methods: {
    goToPage(page) {
      if (+page < 1) return
      if (+page > this.lastPage) return
      const currentQueries = this.$route.query
      this.$router.push({ query: { ...currentQueries, page } })
    },
  },
}
</script>

<style lang="postcss" scoped>
.active {
  @apply relative inline-flex items-center px-0.5 py-0.5 rounded-md shadow-sm border bg-white text-sm font-medium hover:bg-gray-50 text-indigo-900 border-gray-300 border-opacity-50;
}
.inactive {
  @apply relative inline-flex items-center px-0.5 py-0.5 rounded-md shadow-sm border bg-white text-sm font-medium hover:bg-gray-50 text-gray-300;
}
</style>
