<template>
  <q-page class="flex flex-center">


    <q-form @submit="onSubmit()" @reset="onReset" class="q-gutter-md">
      <q-input filled v-model="entrada.title" label="Titulo" hint="Escribe un titulo" lazy-rules
        :rules="[val => val && val.length > 0 || 'Please type something']" />

      <q-date v-model="entrada.date" />


      <q-input filled v-model="entrada.url" label="URL" hint="URL de la imagen" lazy-rules
        :rules="[val => val && val.length > 0 || 'Please type something']" />

      <div>
        <q-btn label="Guardar" type="submit" color="primary" />

        <p>{{ entrada.title }}</p>
        <p>{{ entrada.date }}</p>
        <p>{{ entrada.url }}</p><br>
      </div>
    </q-form>

  </q-page>
</template>

<script>

import moment  from 'moment'

export default {
  data() {

    return {
      entrada: {
        title: '',
        date: '',
        url: '',
      }
    }
  },
  created() {


  },
  methods: {
     onSubmit() {
/*
      fetch(' http://34.90.153.139/ejercicios/galeria/save.php', {
        method: 'POST',
        body: JSON.stringify({
          titulo: this.entrada.title,
          fecha: moment(this.entrada.date).format('YYYY-MM-DD'),
          url: this.entrada.url
        })
      }).then(response => {
        if(response.ok) {
          console.log('ok');
        }
      })*/
      const fetch = this.$api.post('save.php', 
      JSON.stringify({
        titulo: this.entrada.title,
          fecha: moment(this.entrada.date).format('YYYY-MM-DD'),
          url: this.entrada.url
      }))

      

    }

  }
}
</script>
