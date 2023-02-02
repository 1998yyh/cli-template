<script setup lang="ts">

const visible = ref(true)

const clickFn = () => {
  visible.value = !visible.value
}

</script>

<template>

<button @click="clickFn"> click </button>

</template>
