<template>
  <div class="catalogo-container">
    <div class="header">
      <button class="ver-mas-btn" @click="verMas">Ver Más</button>
      <h1 class="page-title">Mas Vendidos</h1>
    </div>
    <p v-if="productos.length === 0" class="no-productos">
      No hay productos disponibles.
    </p>
    <div class="catalogo-grid">
      <div
        class="catalogo-item"
        v-for="(item, index) in productos.slice(0, 4)"
        :key="index"
      >
        <section
          class="card available-card"
          v-if="item.disponibilidad === 'Disponible'"
          v-animate-vue="{ enterClass: 'fadeinleft' }"
        >
          <div class="product-image">
            <img class="card-image" :src="item.imagen" :alt="item.nombre" />
            <div class="overlay">
              <h2 class="product-name">{{ item.nombre }}</h2>
              <router-link :to="{ name: 'detalles', params: { id: item.id } }">
                <button class="buy-btn" disabled>Comprar</button>
              </router-link>
            </div>
          </div>
        </section>

        <section
          class="card not-available-card"
          v-else
          v-animate-vue="{ enterClass: 'fadeinleft' }"
        >
          <div class="product-image">
            <img class="card-image" :src="item.imagen" :alt="item.nombre" />
            <div class="overlay">
              <h2 class="product-name">{{ item.nombre }}</h2>
              <router-link :to="{ name: 'detalles', params: { id: item.id } }">
                <button class="buy-btn" disabled>Comprar</button>
              </router-link>
            </div>
            <div class="not-available-overlay">
              <span class="not-available-text">No disponible</span>
            </div>
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted } from "vue";
import axios from "axios";

export default {
  name: "CatalogoComponent",
  setup() {
    const productos = ref([]);

    onMounted(async () => {
      const url = "http://localhost:3000/juegos";
      try {
        const response = await axios.get(url);
        productos.value = response.data.map((item) => ({
          nombre: item.nombre || "Sin nombre",
          descripcion: item.descripcion?.slice(0, 100) || "Sin descripción",
          imagen: item.imagen || "https://via.placeholder.com/150",
          precio: item.precio?.toFixed(2) || "0.00",
          id: item.id,
          disponibilidad: item.disponibilidad,
        }));
      } catch (error) {
        console.error("Error al consumir la API:", error);
      }
    });

    return {
      productos,
    };
  },
};
</script>

<style scoped>
.catalogo-container {
  width: 100%;
  max-width: 1200px;
  margin: 0 auto;
  padding: 2rem;
  background: linear-gradient(135deg, #141414, #1c1c1c);
  border-radius: 1rem;
  overflow: hidden;
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
  text-align: start;
  color: #ffffff;
  margin-bottom: 1.5rem;
  text-transform: uppercase;
}
.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}
.ver-mas-btn {
  background: linear-gradient(90deg, #3498db, #3cb0fd);
  padding: 0.4rem 1rem;
  color: #ffffff;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  border: none;
  box-shadow: 0 4px 8px rgba(52, 152, 219, 0.5);
}

.ver-mas-btn:hover {
  background: linear-gradient(90deg, #3cb0fd, #1fa2ff);
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(52, 152, 219, 0.6);
}

.no-productos {
  text-align: center;
  font-size: 1.4rem;
  color: #f5f5f5;
  margin-top: 2rem;
}

.catalogo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  justify-content: center;
}

.card {
  position: relative;
  width: 100%;
  height: 400px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  background: linear-gradient(145deg, #2a2a2a, #1e1e1e);
}

.available-card:hover {
  transform: scale(1.05) translateY(-10px);
  box-shadow: 0px 8px 24px rgba(0, 255, 255, 0.3);
}

.not-available-card {
  filter: grayscale(100%);
  opacity: 0.7;
}

.product-image {
  position: relative;
  height: 100%;
  width: 100%;
  background-color: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  overflow: hidden;
}

.product-image img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.3s ease;
}

.available-card:hover .product-image img {
  transform: scale(1.1);
}

.overlay {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  padding: 0.5rem;
  background: rgba(0, 0, 0, 0.8);
  color: #fff;
  display: flex;
  justify-content: space-between;
  align-items: center;
}

.product-name {
  font-size: 1rem;
  font-weight: bold;
  text-transform: uppercase;
}

.buy-btn {
  background: linear-gradient(90deg, #3498db, #3cb0fd);
  padding: 0.4rem 1rem;
  color: #ffffff;
  font-size: 0.8rem;
  border-radius: 0.5rem;
  cursor: pointer;
  transition: background 0.3s ease, transform 0.3s ease;
  border: none;
  box-shadow: 0 4px 8px rgba(52, 152, 219, 0.5);
}

.buy-btn:hover {
  background: linear-gradient(90deg, #3cb0fd, #1fa2ff);
  transform: scale(1.1);
  box-shadow: 0 6px 12px rgba(52, 152, 219, 0.6);
}

.buy-btn:disabled {
  background: #bdc3c7;
  cursor: not-allowed;
}

/* Estilos específicos para productos no disponibles */
.not-available-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  background: rgba(0, 0, 0, 0.5);
}

.not-available-text {
  color: white;
  font-size: 1.5rem;
  font-weight: bold;
  text-transform: uppercase;
  padding: 0.5rem 1rem;
  background: rgba(255, 0, 0, 0.5);
  border-radius: 0.5rem;
}
</style>
