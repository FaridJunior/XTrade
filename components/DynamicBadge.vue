<template>
  <span v-if="text === true" class="px-3 py-1 inline-flex text-sm leading-5 font-semibold font-sans uppercase rounded-full tracking-wide bg-green-50 text-green-800"> {{ text }}</span>
  <span v-else-if="text === false" class="px-3 py-1 inline-flex text-sm leading-5 font-semibold font-sans uppercase rounded-full tracking-wide bg-yellow-50 text-yellow-500">{{ text }}</span>
  <span v-else-if="typeof text === 'string' && text.toLowerCase() === 'active'" class="px-3 py-1 inline-flex text-sm leading-5 font-semibold font-sans uppercase rounded-full tracking-wide bg-green-50 text-green-800"> {{ text }}</span>
  <span v-else-if="typeof text === 'string' && text.toLowerCase() === 'pending'" class="px-3 py-1 inline-flex text-sm leading-5 font-semibold font-sans uppercase rounded-full tracking-wide bg-yellow-50 text-yellow-500">{{ text }}</span>
  <span v-else-if="typeof text === 'string' && text.toLowerCase() === 'declined'" class="px-3 py-1 inline-flex text-sm leading-5 font-semibold font-sans uppercase rounded-full tracking-wide bg-red-50 text-red-600">{{ text }}</span>
  <span v-else-if="typeof text === 'string' && text.toLowerCase() === 'closed'" class="px-3 py-1 inline-flex text-sm leading-5 font-semibold font-sans uppercase rounded-full tracking-wide bg-blue-50 text-blue-900">{{ text }}</span>
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
