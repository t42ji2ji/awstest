<template lang="pug">
  .spacer(:style="{height: `${spacerHeight}px`}")
</template>

<script>
export default {
  props: {
    spacerHeight: {
      type: Number,
      required: true
    }
  }
}
</script>

<style>
.spacer {
  width: 100%;
}
</style>
