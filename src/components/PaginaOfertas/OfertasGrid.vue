<template>
  <section class="ofertas">
    <div
      class="oferta-card"
      v-for="(oferta, index) in ofertas"
      :key="index"
    >
      <img :src="require(`@/assets/${oferta.imagen}`)" :alt="oferta.titulo" />
      <div class="info">
        <p class="categoria">{{ oferta.categoria }}</p>
        <h3>{{ oferta.titulo }}</h3>
        <p class="descripcion">{{ oferta.descripcion }}</p>
        <p class="precio-original">Precio original: {{ oferta.precioOriginal }}</p>
        <p class="precio-oferta">Precio oferta: {{ oferta.precioOferta }}</p>
        <div class="acciones">
          <button class="wishlist">Añadir a Favoritos</button>
          <button class="comprar">
            <i class="fas fa-shopping-cart"></i> Comprar Ahora
          </button>
        </div>
      </div>
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
          categoria: "Aventura",
          titulo: "Pack Aventura Épica",
          descripcion: "Incluye 3 juegos de aventura AAA",
          precioOriginal: "$179.99",
          precioOferta: "$99.99",
        },
        {
          imagen: "estrategia.jpg",
          categoria: "Estrategia",
          titulo: "Colección Estrategia",
          descripcion: "5 juegos de estrategia clásicos",
          precioOriginal: "$129.99",
          precioOferta: "$79.99",
        },
        {
          imagen: "indie.jpeg",
          categoria: "Indie",
          titulo: "Pack Bundle Indie Gems",
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
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  background-color: #1a1a1a; /* Fondo oscuro para videojuegos */
}

.oferta-card {
  background-color: #2c2f33; /* Fondo oscuro de las tarjetas */
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  text-align: center;
}

.oferta-card:hover {
  transform: scale(1.05);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.5);
}

.oferta-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
}

.info {
  padding: 1rem;
}

.categoria {
  font-size: 0.9rem;
  color: #7289da; /* Azul claro para categorías */
  margin-bottom: 0.5rem;
}

h3 {
  font-size: 1.3rem;
  font-weight: bold;
  color: #ffffff;
  margin-bottom: 0.8rem;
}

.descripcion {
  font-size: 1rem;
  color: #b0b0b0;
  margin-bottom: 0.5rem;
}

.precio-original {
  font-size: 0.9rem;
  color: #888;
  text-decoration: line-through;
}

.precio-oferta {
  font-size: 1.2rem;
  color: #43b581; /* Verde vibrante para ofertas */
  font-weight: bold;
  margin-bottom: 1rem;
}

.acciones {
  display: flex;
  justify-content: center;
  gap: 1rem;
  margin-top: 1rem;
}

.wishlist,
.comprar {
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 5px;
  font-size: 0.9rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.wishlist {
  background-color: #7289da; /* Botón azul para añadir a favoritos */
  color: #ffffff;
}

.wishlist:hover {
  background-color: #5a73b5;
}

.comprar {
  background-color: #43b581; /* Botón verde para comprar */
  color: #ffffff;
  display: flex;
  align-items: center;
  justify-content: center;
}

.comprar i {
  margin-right: 0.5rem;
}

.comprar:hover {
  background-color: #36a169;
}
</style>
