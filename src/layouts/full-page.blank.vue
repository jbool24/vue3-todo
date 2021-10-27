<template>
  <div class="w-screen h-screen" v-bind="$attrs">
    <slot></slot>
  </div>

</template>

<script lang="ts">
import { defineComponent } from 'vue'

export default defineComponent({})
</script>
