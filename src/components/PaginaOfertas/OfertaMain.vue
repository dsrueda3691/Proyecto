<template>
  <div class="oferta-main">
    <img
      class="fondo"
      :src="require('@/assets/fondoOfertas.png')"
      alt="Fondo ofertas"
    />
    <div class="overlay"></div>
    <div class="contenido">
      <p class="subtitulo">RetroRealms</p>
      <h1 class="titulo">Ofertas Especiales</h1>
      <p class="descripcion">
        Explora nuestras ofertas en videojuegos retro y actuales.<br />
        ¡Descuentos únicos por tiempo limitado!
      </p>
      <router-link to="/catalogo"><button class="main-button">Explora</button></router-link>
      
    </div>
  </div>
</template>

<script>
export default {
  name: "OfertaMain",
};
</script>

<style scoped>

.oferta-main {
  position: relative;
  width: 100%;
  height: 100vh;
  overflow: hidden;

}

.fondo {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
  z-index: 0;
}

.overlay {
  position: absolute;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.6),
    rgba(10, 10, 10, 0.9)
  );
  top: 0;
  left: 0;
  z-index: 1;
}

.contenido {
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  text-align: center;
  color: white;
  max-width: 800px;
  padding: 2rem;
}

.subtitulo {
  font-size: 1rem;
  font-family: "Georgia", serif;
  opacity: 0.85;
  margin-bottom: 0.5rem;
}

.titulo {
  font-size: 3rem;
  font-weight: 700;
  font-family: "Helvetica Neue", sans-serif;
  margin-bottom: 1.5rem;
}

.descripcion {
  font-size: 1.4rem;
  font-family: "Montserrat", sans-serif;
  opacity: 0.95;
  margin-bottom: 2.5rem;
  line-height: 1.6;
}

.main-button {
  background-color: white;
  color: black;
  border: none;
  padding: 1rem 2.5rem;
  font-size: 1rem;
  font-weight: bold;
  letter-spacing: 1px;
  border-radius: 2rem;
  cursor: pointer;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.main-button:hover {
  background-color: #dddddd;
  transform: scale(1.05);
}

@media (max-width: 768px) {
  .titulo {
    font-size: 2.5rem;
  }

  .descripcion {
    font-size: 1.1rem;
  }

  .main-button {
    padding: 0.8rem 2rem;
    font-size: 0.95rem;
  }
}
</style>
