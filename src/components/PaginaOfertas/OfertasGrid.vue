<template>
  <section class="ofertas">
    <div
      class="oferta-card"
      v-for="(oferta, index) in ofertas.slice(2, 5)"
      :key="index"
      v-animate-vue="{ enterClass: 'fadeinup' }"
    >
      <img :src="oferta.imagen" :alt="oferta.titulo" />
      <div class="info">
        <p class="categoria">{{ oferta.categoria }}</p>
        <h3>{{ oferta.titulo }}</h3>

        <p class="precio-original">
          Precio original: ${{ oferta.precioOriginal }}
        </p>
        <p class="precio-oferta">Precio oferta: ${{ oferta.precioOferta }}</p>
        <div class="acciones">
          <button class="wishlist">Añadir a Favoritos</button>
          <router-link :to="{ name: 'detalles', params: { id: oferta.id } }">
            <button class="comprar">
              <i class="fas fa-shopping-cart"></i> Comprar Ahora
            </button>
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  name: "OfertasGrid",
  data() {
    return {
      ofertas: [],
    };
  },
  methods: {
    async fetchOfertas() {
      const url = "http://localhost:3000/juegos";
      try {
        const response = await axios.get(url);
        console.log("Ofertas obtenidas:", response.data);
        this.ofertas = response.data.map((juego) => ({
          imagen: juego.imagen,
          categoria: "General",
          titulo: juego.nombre,
          sinopsis: juego.sinopsis,
          id: juego.id,

          precioOriginal: juego.precio.toFixed(2),
          precioOferta: (juego.precio - juego.precio * juego.descuento).toFixed(
            2
          ),
        }));
      } catch (error) {
        console.error("Error al obtener las ofertas:", error);
        alert(
          "No se pudieron cargar las ofertas. Por favor, intenta más tarde."
        );
      }
    },
  },
  created() {
    this.fetchOfertas(); // Llama a la API al montar el componente
  },
};
</script>

<style scoped>
.ofertas {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  padding: 2rem;
  background-color: #1a1a1a;
}

.oferta-card {
  background-color: #2c2f33;
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
  height: 60%;
  object-fit: cover;
}

.info {
  padding: 1rem;
  margin-top: 1rem;
}

.categoria {
  font-size: 0.9rem;
  color: #7289da;
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
  color: #43b581;
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
  background-color: #7289da;
  color: #ffffff;
}

.wishlist:hover {
  background-color: #5a73b5;
}

.comprar {
  background-color: #43b581;
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
