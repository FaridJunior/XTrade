<template>
  <section class="">
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
      return this.data
    },
  },
}
</script>

<style lang="postcss" scoped></style>
