<script setup lang="ts">

const props = withDefaults(
  defineProps<{
  title?:string
  likes?:number
  obj?:Record<string, any>
}>()
, {
  title: '',
  likes: 1
}
)

const emit = defineEmits(['btnClick'])

console.log(toRaw(props))

const consoleProp = () => {
  emit('btnClick')
}
</script>

<template>
<button @click="consoleProp"> consoleProp </button>
</template>
