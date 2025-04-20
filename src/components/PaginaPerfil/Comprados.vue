<template>
  <div class="catalogo-container">
    <div class="header">
      <h1 class="page-title">Juegos Comprados</h1>

    </div>
    <p v-if="productosComprados.length === 0" class="no-productos">
      No hay productos disponibles.
    </p>
    <div class="catalogo-grid">
      <div
        class="catalogo-item"
        v-for="(item, index) in productosComprados"
        :key="index"
      >
        <section class="card not-available-card">
          <div class="product-image">
            <img class="card-image" :src="item.imagen" :alt="item.nombre" />
            <div class="overlay">
              <h2 class="product-name">{{ item.nombre }}</h2>
              <button class="buy-btn" disabled>Detalles</button>
            </div>
           
          </div>
        </section>
      </div>
    </div>
  </div>
</template>

<script>
import { ref, onMounted, computed } from "vue";
import axios from "axios";

export default {

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
          disponibilidad: item.disponibilidad,
        }));
      } catch (error) {
        console.error("Error al consumir la API:", error);
      }
    });

    const productosComprados = computed(() =>
      productos.value.filter((item) => item.disponibilidad === "Disponible")
    );

    return {
      productosComprados,
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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.402);
}

.header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 1.5rem;
}

.page-title {
  font-size: 2rem;
  font-weight: bold;
  color: #ffffff;
  text-transform: uppercase;
}




.no-productos {
  text-align: center;
  font-size: 1.4rem;
  color: #f5f5f5;
  margin-top: 2rem;
}

.catalogo-grid {
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 2rem;
  justify-content: center;
  align-items: start; 
}

.card {
  position: relative;
  width: 100%;
  height: 300px;
  border-radius: 1rem;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.4), 0 2px 4px rgba(0, 0, 0, 0.2);
  transition: transform 0.4s ease, box-shadow 0.4s ease;
  background: linear-gradient(145deg, #2a2a2a, #1e1e1e);
}
.card:hover {
    transform: scale(1.05) translateY(-10px);
    box-shadow: 0px 8px 24px rgba(0, 255, 255, 0.3);
}

.available-card:hover {
  transform: scale(1.05) translateY(-10px);
  box-shadow: 0px 8px 24px rgba(0, 255, 255, 0.3);
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





</style>
