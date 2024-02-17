<template>
  <div class="container-fluid">
    <header>
      <div class="row">
        <input v-model="busqueda" type="search" id="search" name="search" placeholder="Buscar letra"
          @input="busquedaPorLetra()">

        <button class="col-sm btn btn-danger btn-lg m-1" type="button" v-for="g in categorias" :key="g.id"
          @click="songsByCategory(g.id)">{{ g.nombre }}</button>
      </div>
      <div class="row">
        <button class="col-sm btn btn-primary btn-lg m-1" type="button" @click="orderAsc">Order ascendente</button>
        <button class="col-sm btn btn-primary btn-lg m-1" type="button" @click="orderDesc">Order descendente</button>
      </div>
    </header>
    <main>
      <div class="cancion" v-for="c in cancionesFilter" :key="c.id">
        <tarjeta :titulo="c.titulo" :fecha="c.fecha"></tarjeta>
        <span>{{ c.letra }}</span>
      </div>
    </main>
  </div>
</template>

<script>

import canciones from '../../public/bbdd/canciones.json';
import categoriaCanciones from '../../public/bbdd/categorias.json';
import tarjeta from '../components/Tarjeta.vue'


export default {
  name: 'ListadoCanciones',
  components: {
    tarjeta,
  }
  ,
  data() {
    return {
      busqueda: '',
      canciones: [],
      categorias: [],
      cancionesFilter: [],
    }
  },
  created() {

    this.getListado();
    //console.log(this.canciones);
    this.getCategorias();
    this.songsByCategory();
    //console.log(this.cancionesFilter)
    this.busquedaPorLetra();
  },
  methods: {
    getListado() {

      canciones.forEach(cancion => {
        //  console.log('Titulo: ' + cancion.titulo);
        //  console.log('Letra' + cancion.letra);
        this.canciones.push(cancion);
      })
    },
    getCategorias() {
      categoriaCanciones.forEach(categoria => {
        // console.log('Categoria: ' + categoria.nombre);
        this.categorias.push(categoria);
      })
    },
    songsByCategory(idCategoria) {
      if (idCategoria) {
        this.cancionesFilter = this.canciones.filter(cancion => cancion.categoria_id === idCategoria);
      } else {
        this.cancionesFilter = this.canciones;
      }
    },
    busquedaPorLetra() {
      if (this.busqueda) {
        this.cancionesFilter = this.canciones.filter(cancion => cancion.letra.toLowerCase().includes(this.busqueda.toLowerCase()));
      } else {
        this.cancionesFilter = this.canciones;
      }
    },
    orderAsc: function (event) {
      if (event) {
        this.cancionesFilter = this.cancionesFilter.sort((a, b) => moment(a.fecha).format('YYYYMMDD') - moment(b.fecha).format('YYYYMMDD'));
      } else {
        this.cancionesFilter = this.canciones;
      }
    },
    orderDesc: function (event) {
      if (event) {
        this.cancionesFilter = this.cancionesFilter.reverse((a, b) => moment(a.fecha).format('YYYYMMDD') - moment(b.fecha).format('YYYYMMDD'));
      } else {
        this.cancionesFilter = this.canciones;
      }
    }
  }
}
</script>

<style scoped lang="scss">
span {
  white-space: pre-line;
}

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

main div {
  margin: 50px auto;
  text-align: center;
}

div.cancion:nth-child(even) {
  background-color: #EEEEEE;
}
</style>
