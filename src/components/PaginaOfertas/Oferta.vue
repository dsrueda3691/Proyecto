<template>
  <div class="oferta-container">
    <h2 v-animate-vue="{ enterClass: 'fadeinleft' }">Oferta del Día</h2>
    <div class="oferta-del-dia" v-animate-vue="{ enterClass: 'zoomin' }">
      <div class="oferta-destacada">
        <img :src="require('@/assets/V-V2-en.jpg')" alt="Oferta del Día" />
        <div class="oferta-info">
          <h3>Cyberpunk 2077: Edición Definitiva</h3>
          <p class="descripcion">Incluye el juego base y todas las expansiones.</p>
          <p class="precio-original">Antes: $89.99</p>
          <p class="precio-oferta">Ahora: $59.99</p>
          <p class="tiempo-restante">
            Tiempo restante: <span id="countdown">12:00:00</span>
          </p>
          <button>Aprovechar Oferta</button>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: "OfertaDelDia",
};
</script>

<style scoped>
.oferta-container {
  background-color: #333;
  padding: 4rem 2rem;
  border-top: 6px solid #d4af37;
}

h2 {
  font-size: 2.8rem;
  color: #d4af37;
  margin-bottom: 3rem;
  text-align: center;
  font-weight: 700;
  text-transform: uppercase;
  letter-spacing: 0.1rem;
}

.oferta-del-dia {
  display: flex;
  justify-content: center;
}

.oferta-destacada {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 3rem;
  padding: 2rem;
  border-radius: 12px;
  background-color: #444;
  border: 2px solid #d4af37;
  box-shadow: 0 4px 25px rgba(0, 0, 0, 0.4);
  width: 100%;
  max-width: 1100px;
}

.oferta-destacada img {
  width: 100%;
  border-radius: 10px;
  object-fit: cover;
}

.oferta-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  color: #fff;
}

.precio-original {
  text-decoration: line-through;
  color: #bbb;
}

.precio-oferta {
  font-size: 1.8rem;
  font-weight: bold;
  color: #d4af37;
  margin-bottom: 1rem;
}

button {
  background-color: #d4af37;
  color: #000;
  border: none;
  padding: 1rem 2rem;
  font-size: 1.2rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  transition: 0.3s ease;
}

button:hover {
  background-color: #c5a11b;
}

@media (max-width: 768px) {
  .oferta-destacada {
    grid-template-columns: 1fr;
  }
  h2 {
    font-size: 2rem;
  }
  button {
    width: 100%;
  }
}
</style>
