<template>
    <h1>Animales</h1>
    <table>
        <tr>
            <th>Nombre</th>
            <th>Sexo</th>
            <th>Numero de registro</th>
            <th>Tipo</th>
            <th>Accion</th>
        </tr>
        <tr v-for="a in animales" :key="a.id">
            <td>{{ a.nombre }}</td>
            <td>{{ a.sexo }}</td>
            <td>
                <span v-if="a.numeroRegistro">{{ a.numeroRegistro }}</span>
                <span v-else>Sin registro</span>
            </td>
            <td>{{ a.tipo }}</td>
            <td><router-link :to="'/edit/' + a.id">Editar</router-link></td>
        </tr>
    </table>    
</template>


<script>
// @ is an alias to /src

export default {
  name: 'ListadoAnimales', // Component name
  data() {
    return {
      animales: [] // Initializing an empty array to store animals
    }
  },
  created() {
    this.list(); // Calling the list method to fetch animals
    console.log(this.animales); // Logging the initially empty array (Note: It will log before the array is populated due to async nature of the fetch operation)
  },
  methods: {
    async list() {
      const animalesFetch = await fetch('http://34.90.153.139/ejercicios/veterinario/getanimals.php'); // Fetching animals data from a URL
      this.animales = await animalesFetch.json(); // Waiting for the fetch operation to complete and setting the retrieved data to the animales array
    }
  }
}

</script>