<template>
  <div class="relative inline-block text-left">
    <div>
      <button
        id="menu-button"
        type="button"
        class="inline-flex justify-center w-full rounded-md border border-gray-300 shadow-sm px-4 py-2 bg-white text-sm font-medium text-green-900 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-100 focus:ring-indigo-500"
        aria-expanded="true"
        aria-haspopup="true"
        @click="toggleDropdown"
      >
        <svg xmlns="http://www.w3.org/2000/svg" class="w-5 h-5" fill="currentColor" viewBox="0 0 256 256">
          <rect width="256" height="256" fill="none"></rect>
          <path
            d="M42.08441,48H213.91559a8,8,0,0,1,5.91952,13.38138l-65.75463,72.33009A8,8,0,0,0,152,139.09285v56.62568a8,8,0,0,1-3.5624,6.6564l-32,21.33334A8,8,0,0,1,104,217.05186v-77.959a8,8,0,0,0-2.08048-5.38138L36.16489,61.38138A8,8,0,0,1,42.08441,48Z"
            fill="none"
            stroke="currentColor"
            stroke-linecap="round"
            stroke-linejoin="round"
            stroke-width="16"
          ></path>
        </svg>
        <span class="font-semibold ml-2 hidden sm:inline-block"> Filters </span>
      </button>
    </div>

    <div v-if="opened" ref="target" class="origin-top-right absolute right-0 mt-2 whitespace-nowrap rounded-md shadow-lg bg-white ring-1 ring-black ring-opacity-5 focus:outline-none" role="menu" aria-orientation="vertical" aria-labelledby="menu-button" tabindex="-1">
      <div class="p-2" role="none">
        <button
          v-for="col in cols"
          :id="col"
          :key="col.name"
          type="submit"
          class="flex items-center text-gray-400 hover:text-gray-700 w-full pl-2 pr-4 py-2 font-semibold font-sans text-sm hover:bg-gray-100 rounded"
          data-role="menuitem"
          role="menuitem"
          tabindex="-1"
          :class="{ active: col.checked }"
          @click="toggleCol(col.name)"
        >
          <span class="pointer-events-none">
            <svg xmlns="http://www.w3.org/2000/svg" :class="col.checked ? 'w-5 h-5 mr-1' : 'w-5 h-5 mr-1 text-white'" fill="currentColor" viewBox="0 0 256 256">
              <rect width="256" height="256" fill="none"></rect>
              <polyline points="216 72.005 104 184 48 128.005" fill="none" stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="16"></polyline>
            </svg>
          </span>
          {{ col.name }}
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    cols: {
      type: Array,
      required: false,
      default: () => [],
    },
  },

  data() {
    return {
      opened: false,
    }
  },

  watch: {
    opened(opened) {
      setTimeout(() => {
        if (opened) {
          document.addEventListener('click', this.closeDropdownList)
          document.addEventListener('keydown', this.closeDropdownList)
        } else {
          document.removeEventListener('click', this.closeDropdownList)
          document.removeEventListener('keydown', this.closeDropdownList)
        }
      }, 0)
    },
  },

  methods: {
    toggleCol(col) {
      if (this.inHiddenCols(col)) {
        this.removeHiddenCol(col)
      } else {
        this.addHiddenCol(col)
      }
    },
    inHiddenCols(col) {
      const hiddenCols = this.$route.query.hidden_cols
      if (col.toLowerCase() === 'id') return true
      if (!hiddenCols) return false
      if (typeof hiddenCols === 'string') return col.toLowerCase() === hiddenCols.toLowerCase()
      if (Array.isArray(hiddenCols)) return hiddenCols.find((c) => c.toLowerCase() === col.toLowerCase())
    },

    addHiddenCol(col) {
      let hiddenCols = this.$route.query.hidden_cols
      if (hiddenCols === undefined) hiddenCols = []
      if (typeof hiddenCols === 'string') hiddenCols = [hiddenCols]

      this.$router.push({ query: { ...this.$route.query, page: 1, hidden_cols: [...hiddenCols, col] } })
    },

    removeHiddenCol(col) {
      let hiddenCols = this.$route.query.hidden_cols
      if (hiddenCols === undefined) hiddenCols = []
      if (typeof filter === 'string') hiddenCols = [hiddenCols]

      const newHiddenCols = hiddenCols.filter((st) => st !== col)
      this.$router.push({ query: { ...this.$route.query, hidden_cols: newHiddenCols } })
    },

    toggleDropdown() {
      this.opened = !this.opened
    },

    closeDropdownList(e) {
      if (e.target.dataset.role === 'menuitem') {
        return
      }
      if (this.opened && e.type === 'click') {
        this.opened = false
      }
      if (this.opened && e.code === 'Escape') {
        this.opened = false
      }
    },
  },
}
</script>

<style lang="postcss" scoped>
.active {
  @apply text-gray-700;
}
</style>
