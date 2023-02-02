<template>
    <p>列表渲染</p>
    <button @click="output(1)" class="wrap">
      <div @click="output(2)" class="inner"></div>

    </button>
    <p>input 修饰符</p>
    <input v-model.number="name" type="number">
    <my-button :obj="obj" @btn-click="handleClick"></my-button>
    <my-input v-model="name"></my-input>
</template>

<script setup lang="ts">
import MyButton from '@/components/Button.vue'
import MyInput from '@/components/MyInput.vue'

function output(str:string|number) {
  console.log(str)
}

const name = ref(NaN)

const obj = reactive({
  my: {
    number: 1,
    age: 1,
    data: {
      x: 1,
      y: 2
    }
  }
})

const handleClick = () => {
  console.log(obj.my.data)
  console.log(toRaw(obj))
}

watch(() => obj.my, (newValue, oldValue) => {
  console.log(newValue, oldValue)
}, {
  deep: true
})

</script>
