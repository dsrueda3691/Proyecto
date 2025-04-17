<template>
  <div class="featured-games">
    <h2 v-animate-vue="{ enterClass: 'fadeinleft' }">Juegos Destacados</h2>

    <CarouselVue v-animate-vue="{ enterClass: 'zoomin' }"
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
          breakpoint: '600px',
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
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 1rem;
  width: 100%;
}

h2 {
  align-self: flex-start;
  font-size: 2.5rem;
  color: #4b0082;
  margin: 2rem 1rem;
}

.carousel-item {
  width: 100%;
  display: flex;
  justify-content: center;
  box-sizing: border-box;
  padding: 0; 
}

.game-card {
  background-color: #ffffff;
  border-radius: 15px;
  padding: 1rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.15);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  text-align: start;
  display: flex;
  flex-direction: column;
  max-width: 280px; 
  width: 100%;
}

.game-card img {
  width: 100%;
  height: 160px;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.game-card h3 {
  font-size: 1.2rem;
  color: #4b0082;
  margin-bottom: 0.5rem;
}

.game-card p {
  font-size: 0.95rem;
  color: #333333;
  margin-bottom: 1rem;
}

.game-card button {
  background-color: #8a2be2;
  color: #f0f0f0;
  border: none;
  padding: 0.6rem 1rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background-color 0.3s ease, transform 0.2s ease;
  width: 100%;
  font-size: 0.9rem;
  margin-top: auto;
}

.game-card button:hover {
  background-color: #4b0082;
  transform: scale(1.05);
}

.game-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 8px 12px rgba(0, 0, 0, 0.2);
}


@media (max-width: 600px) {
  h2 {
    font-size: 2rem;
    text-align: center;
    margin: 1.5rem 0;
  }

  .game-card {
    max-width: 100%;
    padding: 1rem;
    border-radius: 10px;
  }

  .game-card img {
    height: 140px;
  }

  .game-card h3 {
    font-size: 1rem;
  }

  .game-card p {
    font-size: 0.85rem;
  }

  .game-card button {
    font-size: 0.85rem;
    padding: 0.5rem 0.8rem;
  }
}

</style>

