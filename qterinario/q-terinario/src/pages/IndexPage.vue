<template>
  <q-page class="flex flex-center">
    <img alt="Quasar logo" src="~assets/quasar-logo-vertical.svg" style="width: 200px; height: 200px">
  </q-page>
</template>

<script>
import { defineComponent } from 'vue'
import Animales from 'src/components/Animales.vue'
export default defineComponent({
  name: 'IndexPage',
  components: {
    // eslint-disable-next-line vue/no-unused-components
    Animales
    // <Animales /> (usar componente)

  }
})
</script>
