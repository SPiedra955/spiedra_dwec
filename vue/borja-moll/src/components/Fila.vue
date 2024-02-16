<template>

    <div>
        <tr><slot></slot></tr>
    </div>
  
  </template>
  
  <script>
  export default {
    name: 'fila',

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  
    table{
      border: solid 1px black;
    }
  
  </style>
  