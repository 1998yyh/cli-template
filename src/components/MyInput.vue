<script setup lang="ts">
defineEmits(['update:modelValue'])
const props = defineProps(['moduleValue'])

</script>

<template>

<div class="wrap">
  <input v-model="props" type="text">
</div>

</template>
