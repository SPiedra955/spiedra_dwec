<template>
    <div>
        <h1>{{ titulo }}</h1>
        <span>{{ fecha }}</span>
    </div>
</template>

<script>
export default {
    name: 'tarjeta',
    props: {
        titulo: String,
        fecha: String,
    }
}    
</script>
