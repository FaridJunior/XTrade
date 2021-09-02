<template>
  <tr class="hover:bg-indigo-50 cursor-pointer">
    <td v-for="cell in cells" :key="cell" class="px-6 py-4 whitespace-nowrap">
      <p class="font-medium text-sm font-sans">{{ cell }}</p>
    </td>
  </tr>
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
    cells() {
      const cells = []
      for (const [key, value] of Object.entries(this.row)) {
        if (!this.inHiddenCols(key)) cells.push(value)
      }
      return cells
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
