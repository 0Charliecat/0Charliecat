<script setup>
import head from "../components/header.vue"
import editor from "../components/editor.vue"

const { data, error, pending } = useFetch("https://charliecat.space/articles/index.json")
console.log(data)
</script>

<template>
  <head></head>
  <editor :editable="false" :data="data"></editor>
</template>