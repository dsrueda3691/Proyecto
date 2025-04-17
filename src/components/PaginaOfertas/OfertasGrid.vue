<template>
  <section class="ofertas">
    <div v-animate-vue="{ enterClass: 'fadeinup' } " class="oferta-card" v-for="(oferta, index) in ofertas" :key="index">
      <img :src="require(`@/assets/${oferta.imagen}`)" :alt="oferta.titulo" />
      <h3>{{ oferta.titulo }}</h3>
      <p class="descripcion">{{ oferta.descripcion }}</p>
      <p class="precio-original">
        Precio original: {{ oferta.precioOriginal }}
      </p>
      <p class="precio-oferta">Precio oferta: {{ oferta.precioOferta }}</p>
      <button>Comprar Ahora</button>
    </div>
  </section>
</template>

<script>
export default {
  name: "OfertasGrid",
  data() {
    return {
      ofertas: [
        {
          imagen: "paquete.jpg",
          titulo: "Pack Aventura Épica",
          descripcion: "Incluye 3 juegos de aventura AAA",
          precioOriginal: "$179.99",
          precioOferta: "$99.99",
        },
        {
          imagen: "estrategia.jpg",
          titulo: "Colección Estrategia",
          descripcion: "5 juegos de estrategia clásicos",
          precioOriginal: "$129.99",
          precioOferta: "$79.99",
        },
        {
          imagen: "indie.jpeg",
          titulo: "Bundle Indie Gems",
          descripcion: "10 juegos indie premiados",
          precioOriginal: "$99.99",
          precioOferta: "$49.99",
        },
      ],
    };
  },
};
</script>

<style scoped>
.ofertas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  margin-top: 2rem;
}

.oferta-card {
  background-color: #fff;
  border-radius: 10px;
  padding: 1.5rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s;
}

.oferta-card:hover {
  transform: translateY(-5px);
}

.oferta-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 5px;
  margin-bottom: 1rem;
}

button {
  background-color: #8a2be2;
  color: #fff;
  padding: 0.7rem 1.2rem;
  border-radius: 5px;
  border: none;
  font-weight: bold;
  cursor: pointer;
}

button:hover {
  background-color: #4b0082;
}
</style>
