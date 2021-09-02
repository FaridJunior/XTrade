<template>
  <span v-if="text === true" class="px-3 py-1 inline-flex text-sm leading-5 font-semibold font-sans uppercase rounded-full tracking-wide bg-green-50 text-green-800"> {{ text }}</span>
  <span v-else-if="text === false" class="px-3 py-1 inline-flex text-sm leading-5 font-semibold font-sans uppercase rounded-full tracking-wide bg-yellow-50 text-yellow-500">{{ text }}</span>

  <span v-else class="">{{ text }}</span>
</template>
<script>
export default {
  props: {
    text: {
      type: String,
      required: true,
    },
  },
}
</script>
