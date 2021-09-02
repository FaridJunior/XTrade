<template>
  <span id="loading" class="loading border-4 border-t border-gray-700 rounded-full w-8 h-8"></span>
</template>

<script>
export default {}
</script>

<style scoped>
span {
  border: 4px solid rgba(183, 168, 235, 0.61);
  border-top-color: rgb(0, 1, 56);
  animation: loading 1s infinite linear;
}

@keyframes loading {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}
</style>
