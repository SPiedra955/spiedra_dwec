<template>
    <div>
        <h1>{{ titulo }}</h1>
        <p>Nombre del animal: {{ animal.nombre }}</p>
        <p>sexo del animal: {{ animal.sexo }}</p>
        <p>Num reg del animal: {{ animal.reg }}</p>

        <label>Nombre</label>
        <input type="text" v-model="animal.nombre"><br>
        <label>Sexo</label>
        <input type="radio" v-model="animal.sexo" value="M"> M
        <input type="radio" v-model="animal.sexo" value="F"> F <br>
        <label>Numero de registro</label>
        <input type="text" v-model="animal.reg"><br>
        <label>Tipo</label>
        <select v-model="animal.tipo">
            <option value="">----</option>
            <option value="Gato">Gato</option>
            <option value="Perro">Perro</option>
            <option value="Caballo">Caballo</option>
        </select><br>
        <button @click="modificar">Modificar animal</button>

    </div>
</template>

<script>
export default {
    name: 'DetallesAnimal',
    data() {
        return {
            titulo: '',
            animal: {
                id: '',
                nombre: '',
                sexo: 'F',
                reg: '',
                tipo: 'Caballo'
            }
        }
    },
    async created() {
        const idAnimal = this.$route.params.id;
        if (idAnimal) {
            this.titulo = 'Detalles del animal';

            const animalesFetch = await fetch('http://34.90.153.139/ejercicios/veterinario/getanimals.php');
            const animales = await animalesFetch.json();

            const animal = animales.find(a => a.id == idAnimal);

            if (animal) {
                this.animal = {
                    id: animal.id,
                    nombre: animal.nombre,
                    sexo: animal.sexo,
                    reg: animal.numeroRegistro,
                    tipo: animal.tipo
                };
            } else {
                console.error('Animal no encontrado');
            }
        } else {
            this.titulo = 'Crear animal';
        }
    },
    methods: {

        modificar() {

            fetch('http://34.90.153.139/ejercicios/veterinario/save.php', {
                method: 'POST',
                body: JSON.stringify({
                    id: this.animal.id,
                    nombre: this.animal.nombre,
                    sexo: this.animal.sexo,
                    numeroRegistro: this.animal.reg,
                    tipo: this.animal.tipo
                })
            });
        }
    }
}
</script>
