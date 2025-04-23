<template>
  <div>
    <HeaderProyecto />
    <div class="detalles">
      <div v-if="juego">
        <h1>{{ juego.titulo }}</h1>
        <img :src="juego.imagen" :alt="juego.titulo" />
        <p>{{ juego.sinopsis }}</p>
        <p>Precio original: ${{ juego.precioOriginal }}</p>
        <p>Precio oferta: ${{ juego.precioOferta }}</p>
      </div>
      <div v-else>
        <p>Cargando detalles...</p>
      </div>
    </div>
    <FooterProyecto />
  </div>
</template>
<script>
import HeaderProyecto from "@/components/Componentes+/HeaderProyecto.vue";
import FooterProyecto from "@/components/Componentes+/FooterProyecto.vue";

import axios from "axios";

export default {
  data() {
    return {
      juego: null,
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
        precioOriginal: response.data.precio.toFixed(2),
        precioOferta: (
          response.data.precio -
          response.data.precio * response.data.descuento
        ).toFixed(2),
      };
    } catch (error) {
      console.error("Error al cargar los detalles:", error);
    }
  },
  componente: {
    HeaderProyecto,
    FooterProyecto,
  },
};
</script>

<style scoped>
.detalles {
  padding: 2rem;
  background-color: #f5f5f5;
  text-align: center;
}

.detalles img {
  width: 300px;
  height: auto;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.detalles h1 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.detalles p {
  font-size: 1rem;
  color: #333;
}
</style>
