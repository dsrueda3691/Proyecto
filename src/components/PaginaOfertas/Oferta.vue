<template>
  <div>
    <h2 v-animate-vue="{ enterClass: 'fadeinleft' }">Oferta del Día</h2>
    <div class="oferta-del-dia" v-animate-vue="{ enterClass: 'zoomin' }">
      <div class="oferta-destacada">
        <img :src="require('@/assets/V-V2-en.jpg')" alt="Oferta del Día" />
        <div class="oferta-info">
          <h3>Cyberpunk 2077: Edición Definitiva</h3>
          <p class="descripcion">
            Incluye el juego base y todas las expansiones
          </p>
          <p class="precio-original">Precio original: $89.99</p>
          <p class="precio-oferta">Precio oferta: $59.99</p>
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

.oferta-destacada {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 2rem;
  background-color: #fff;
  padding: 2rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
}

.oferta-destacada img {
  width: 100%;
  border-radius: 5px;
  object-fit: cover;
}

.precio-original {
  text-decoration: line-through;
  color: #808080;
}

.precio-oferta {
  font-size: 1.4rem;
  font-weight: bold;
  color: #8a2be2;
}

button {
  background-color: #8a2be2;
  color: white;
  border: none;
  padding: 0.7rem 1.2rem;
  border-radius: 5px;
  cursor: pointer;
}

button:hover {
  background-color: #4b0082;
}
h2 {
  align-self: start;
  font-size: 3.5rem;
  color: #4b0082;
  margin: 4rem 2rem 2rem 4rem;
}
</style>
