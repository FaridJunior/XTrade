<template>
  <thead class="bg-white">
    <tr>
      <th v-for="col in cols" :key="col" scope="col" class="px-6 w-max py-3 text-left text-xs font-sans text-gray-700 tracking-wider whitespace-nowrap">{{ col }}</th>
    </tr>
  </thead>
</template>

<script>
export default {
  props: {
    row: {
      type: Object,
      required: true,
    },
  },
  computed: {
    cols() {
      return Object.keys(this.row).filter((col) => !this.inHiddenCols(col))
    },
  },

  methods: {
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
