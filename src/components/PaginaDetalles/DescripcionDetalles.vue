<template>
  <div class="descripcion-juego">
    <h2>Descripción</h2>
    <p>{{ sinopsis }}</p>
  </div>
</template>
<script>
export default {
  props: {
    sinopsis: String,
  },
};
</script>
<style scoped>
.descripcion-juego {
  font-size: 1.1rem;
  color: #e0e0e0;
  background-color: #1e1e1e;
  padding: 1.5rem;
  border-radius: 1rem;
  line-height: 1.6;
  text-align: justify;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.4);
  transition: transform 0.3s ease;
}
.descripcion-juego:hover {
  transform: translateY(-4px);
}
</style>