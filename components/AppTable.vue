<template>
  <div class="flex flex-col">
    <div class="-my-2 overflow-x-auto">
      <div class="py-2 align-middle inline-block min-w-full">
        <div class="overflow-hidden sm:rounded-lg">
          <table class="min-w-full divide-y divide-gray-200">
            <AppTableHead :row="displayedRows[0]" />
            <tbody class="bg-white">
              <AppTableRow v-for="row in displayedRows" :key="row.id" :row="row" />
            </tbody>
          </table>
        </div>
      </div>
    </div>
    <AppTablePagination :max="data.length" :number-of-rows="NUMBER_OF_ROWS" />
  </div>
</template>

<script>
export default {
  props: {
    data: {
      type: Array,
      required: true,
    },
  },

  data() {
    return {
      NUMBER_OF_ROWS: 5,
    }
  },

  computed: {
    displayedRows() {
      const page = +(this.$route.query.page || 1)
      return this.data.slice((page - 1) * this.NUMBER_OF_ROWS, page * this.NUMBER_OF_ROWS)
    },
  },
}
</script>

<style lang="postcss" scoped></style>
