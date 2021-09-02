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
      return Object.values(this.row)
    },
  },
}
</script>
