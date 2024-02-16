<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
  </div>
  <tabla title="user">
    <fila>
    <columna>Samu</columna>
    <columna>sas</columna>
    </fila>
  </tabla>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import tabla from '../components/Tabla.vue'
import fila from '../components/Fila'
import columna from '../components/Columna.vue'

export default {
  name: 'HomeView',
  components: {
    tabla,
    fila,
    columna
  },
  
}
</script>
