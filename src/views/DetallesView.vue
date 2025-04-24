<template>
  <div class="body">
    <HeaderProyecto />
    <div v-if="juego">
      <JuegoDetalles :juego="juego" />
      <DescripcionDetalles :sinopsis="juego.sinopsis" />
      <ReseñaJuegos :reseñas="reseñas" />
      <JuegosRecomendados />
    </div>
    <div v-else>
      <p>Cargando detalles...</p>
    </div>
    <FooterProyecto />
  </div>
</template>

<script>
import axios from "axios";
import HeaderProyecto from "@/components/Componentes+/HeaderProyecto.vue";
import FooterProyecto from "@/components/Componentes+/FooterProyecto.vue";
import ReseñaJuegos from "@/components/PaginaDetalles/ReseñaJuegos.vue";
import JuegoDetalles from "@/components/PaginaDetalles/JuegoDetalles.vue";
import DescripcionDetalles from "@/components/PaginaDetalles/DescripcionDetalles.vue";
import JuegosRecomendados from "@/components/PaginaDetalles/JuegosRecomendados.vue";

export default {
  data() {
    return {
      juego: null,
      reseñas: [],
    };
  },
  async created() {
    const id = this.$route.params.id;
    try {
      const response = await axios.get(`http://localhost:3000/juegos/${id}`);
      this.juego = {
        imagen: response.data.imagen,
        titulo: response.data.nombre,
        sinopsis: response.data.sinopsis,
        genero: response.data.genero,
        precioOriginal: response.data.precio.toFixed(2),
        precioOferta: (
          response.data.precio -
          response.data.precio * response.data.descuento
        ).toFixed(2),
      };
      this.reseñas = response.data.reseñas;
    } catch (error) {
      console.error("Error al cargar los detalles:", error);
    }
  },
  components: {
    HeaderProyecto,
    JuegoDetalles,
    ReseñaJuegos,
    FooterProyecto,
    DescripcionDetalles,
    JuegosRecomendados,
  },
};
</script>
<style scoped>
.body {
  font-family: "Roboto", sans-serif;
  background-color: #141414;
  color: #333;
  margin: 0;
}
</style>
