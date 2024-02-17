<!-- eslint-disable vue/multi-word-component-names -->
<template>
    <div class="q-pa-md" style="max-width: 350px">
        <q-list bordered class="rounded-borders">

            <q-expansion-item expand-separator icon="mdi-paw" v-for="a in animales" :key="a.nombre" :label="a.nombre"
                :caption="a.sexo">
                <q-card>
                    <q-card-section>
                        Sexo: {{ a.sexo }}
                    </q-card-section>
                    <q-card-section>
                        Numero de Registro: {{ a.numeroRegistro }}
                    </q-card-section>

                </q-card>
            </q-expansion-item>
        </q-list>
    </div>
</template>

<script>
export default {
  data () {
    return {
      animales: []
    }
  },
  created () {
    this.list() // Calling the list method to fetch animals
    console.log(this.animales) // Logging the initially empty array (Note: It will log before the array is populated due to async nature of the fetch operation)
  },
  methods: {
    async list () {
      const animalesFetch = await fetch('http://34.90.153.139/ejercicios/veterinario/getanimals.php') // Fetching animals data from a URL
      this.animales = await animalesFetch.json() // Waiting for the fetch operation to complete and setting the retrieved data to the animales array
    }
  }
}
</script>
