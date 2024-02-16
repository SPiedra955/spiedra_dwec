<template>

    <div>
        <td><slot></slot></td>
    </div>
  
  </template>
  
  <script>
  export default {
    name: 'columna',

  }
  </script>
  
  <!-- Add "scoped" attribute to limit CSS to this component only -->
  <style scoped lang="scss">
  
    table{
      border: solid 1px green;
    }
  
  </style>
  