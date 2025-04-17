<template>
  <div class="featured-games">
    <h2 v-animate-vue="{ enterClass: 'fadeinleft' }">Juegos Destacados</h2>

    <CarouselVue
      v-animate-vue="{ enterClass: 'zoomin' }"
      :value="games"
      :numVisible="3"
      :numScroll="1"
      :responsiveOptions="responsiveOptions"
      circular
      :autoplayInterval="3000"
    >
      <template #item="slotProps">
        <div class="carousel-item">
          <div class="game-card">
            <img :src="require(`@/assets/${slotProps.data.image}`)" :alt="slotProps.data.name" />
            <h3>{{ slotProps.data.name }}</h3>
            <p>{{ slotProps.data.description }}</p>
            <button>Ver detalles</button>
          </div>
        </div>
      </template>
    </CarouselVue>
  </div>
</template>

<script>
export default {
  name: 'GameHome',
  data() {
    return {
      games: [
        {
          name: 'Cyberpunk 2077',
          image: 'V-V2-en.jpg',
          description: 'Sumérgete en Night City, una megalópolis obsesionada con el poder, el glamour y la modificación corporal.',
        },
        {
          name: 'Deathloop',
          image: 'deathloop.jpeg',
          description: 'Dos asesinos rivales atrapados en un misterioso bucle temporal en la isla de Blackreef.',
        },
        {
          name: 'Halo Infinite',
          image: 'halo infinite.jpg',
          description: 'La legendaria saga Halo regresa con la campaña más amplia y llena de aventuras hasta la fecha.',
        },
        {
          name: 'The Witcher 3',
          image: 'halo infinite.jpg',
          description: 'Un juego de rol de acción ambientado en un mundo abierto lleno de monstruos y magia.',
        },
      ],
      responsiveOptions: [
        {
          breakpoint: '1024px',
          numVisible: 2,
          numScroll: 1,
        },
        {
          breakpoint: '768px',
          numVisible: 1,
          numScroll: 1,
        },
      ],
    };
  },
};
</script>

<style scoped>
.featured-games {
  width: 100%;
  padding: 4rem 2rem;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #111; /* Fondo oscuro */
  margin-bottom: 4rem;
}

h2 {
  font-size: 2.8rem;
  color: #00ffff; /* Color neón cyan */
  margin-bottom: 3rem;
  text-align: left;
}

.carousel-item {
  display: flex;
  justify-content: center;
  width: 100%;
  padding: 1rem;
  box-sizing: border-box;
}

.game-card {
  background-color: #222; /* Fondo oscuro de tarjeta */
  border-radius: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  text-align: start;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 350px;
  height: 450px;
  padding: 1.5rem;
  border: 2px solid #00ffff; /* Borde neón */
}

.game-card img {
  width: 100%;
  height: 200px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.game-card h3 {
  font-size: 1.3rem;
  color: #00ffff; /* Color de texto neón cyan */
  margin-bottom: 0.5rem;
}

.game-card p {
  font-size: 1rem;
  color: #ccc; /* Gris claro para texto */
  flex-grow: 1;
  margin-bottom: 1rem;
}

.game-card button {
  background-color: #333; /* Fondo oscuro */
  color: #00ffff; /* Texto neón */
  border: none;
  padding: 0.8rem;
  border-radius: 8px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  width: 100%;
  transition: background-color 0.3s ease, transform 0.2s ease;
}

.game-card button:hover {
  background-color: #00ffff; /* Fondo neón al pasar */
  color: #311545; /* Texto oscuro al pasar */
  transform: scale(1.05);
}

.game-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 16px rgba(0, 0, 0, 0.35); /* Sombra más suave */
}

@media (max-width: 768px) {
  h2 {
    font-size: 2rem;
    text-align: center;
    margin-bottom: 2rem;
  }

  .game-card {
    max-width: 90%;
    height: auto;
    padding: 1rem;
  }

  .game-card img {
    height: 180px;
  }

  .game-card h3 {
    font-size: 1.1rem;
  }

  .game-card p {
    font-size: 0.95rem;
  }

  .game-card button {
    font-size: 0.9rem;
    padding: 0.6rem 1rem;
  }
}
</style>
