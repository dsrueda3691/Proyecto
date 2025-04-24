<template>
  <div class="juego-detalles" v-if="juego">
    <div class="card-detalles">
      <img class="imagen-detalle" :src="juego.imagen" :alt="juego.titulo" />
      <div class="contenido-detalle">
        <h1>{{ juego.titulo }}</h1>
        <p class="precio-original">
          <strong>Precio original:</strong> ${{ juego.precioOriginal }}
        </p>
        <p class="precio-oferta">
          <strong>Precio oferta:</strong> ${{ juego.precioOferta }}
        </p>
        <button @click="agregarAlCarrito" class="boton-agregar">
          Agregar al carrito
        </button>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    juego: Object,
  },
  methods: {
    agregarAlCarrito() {
      alert(`El juego "${this.juego.titulo}" se ha agregado al carrito.`);
    },
  },
};
</script>

<style scoped>
.juego-detalles {
  padding: 2rem;
  margin: 3rem auto;
  background-color: #1e1e1e;
  border-radius: 1.5rem;
  box-shadow: 0 8px 24px rgba(0, 0, 0, 0.3);
  width: 90%;
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.card-detalles {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  background-color: #2a2a2a;
  border-radius: 1rem;
  padding: 2rem;
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
  gap: 2rem;
  width: 100%;
}

.imagen-detalle {
  flex: 1 1 300px;
  max-width: 400px;
  border-radius: 1rem;
  box-shadow: 0 6px 16px rgba(0, 0, 0, 0.5);
  object-fit: cover;
  width: 100%;
  height: auto;
}

.contenido-detalle {
  flex: 2 1 400px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 1.25rem;
}

.contenido-detalle h1 {
  font-size: 2.2rem;
  color: #ffffff;
  margin-bottom: 0.5rem;
}

.precio-original {
  font-size: 1.1rem;
  color: #e74c3c;
  text-decoration: line-through;
}

.precio-oferta {
  font-size: 1.6rem;
  color: #2ecc71;
  font-weight: bold;
}

.boton-agregar {
  background: linear-gradient(145deg, #3a8de5, #296acb);
  color: #fff;
  padding: 0.9rem 1.8rem;
  border: none;
  border-radius: 0.75rem;
  font-size: 1.1rem;
  font-weight: bold;
  cursor: pointer;
  transition: transform 0.2s, box-shadow 0.3s;
  box-shadow: 0 4px 12px rgba(52, 152, 219, 0.3);
}

.boton-agregar:hover {
  box-shadow: 0 6px 18px rgba(52, 152, 219, 0.5);
  transform: translateY(-2px);
}

.boton-agregar:active {
  transform: scale(0.98);
}
</style>
