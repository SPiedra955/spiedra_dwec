<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list>
      <q-item v-for="a in animales" :key="a.nombre">

        <q-item-section>
          <q-item-label>{{ a.nombre }}</q-item-label>
          <q-item-label caption lines="2">Sexo: {{ a.sexo }} Numero de Registro: {{ a.numeroRegistro }}</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>5 min ago</q-item-label>
          <q-icon name="star" color="yellow" />

        </q-item-section>
      </q-item>


      <q-separator spaced inset />

      <q-item>
        <q-item-section>
          <q-item-label>Single line item</q-item-label>
          <q-item-label caption>Secondary line text. Lorem ipsum dolor sit amet, consectetur adipiscit
            elit.</q-item-label>
        </q-item-section>

        <q-item-section side top>
          <q-item-label caption>Voted!</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
  </div>
</template>

<script>
export default {
  data() {
    return {
      animales: [],
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
