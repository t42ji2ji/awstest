<template lang="pug">
  .power
    .title 正確：{{number}} / {{total}}題 
    .btnGroup
      .btn(@click="go(false)") 小
      .btn(@click="go(true)") 大
</template>

<script>
export default {
  data() {
    return {
      choose: false,
      number: 0,
      total: 0
    }
  },
  methods: {
    go(i) {
      this.choose = i
      const answer = Math.random()
      console.log(answer)
      if (answer > 0.5 && i) {
        this.number++
      } else if (answer < 0.5 && !i) {
        this.number++
      }
      this.total++
    }
  }
}
</script>

<style lang="scss" scoped>
.power {
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
}
.btn {
  padding: 20px 100px;
  border: 1px solid;
  cursor: pointer;
  &:hover {
    background-color: rgb(37, 44, 53);
    color: white;
  }
}
.btnGroup {
  margin-top: 100px;
  display: flex;
}
</style>
