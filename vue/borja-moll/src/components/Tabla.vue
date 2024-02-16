<template>

  <div>
    <table><caption>{{ title }}</caption><slot></slot></table>
  </div>

</template>

<script>
export default {
  name: 'tabla',
  props: {
    title: String
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped lang="scss">

  table{
    border: solid 1px blue;
  }

</style>
