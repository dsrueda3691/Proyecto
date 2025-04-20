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
            <img :src="slotProps.data.image" :alt="slotProps.data.name" />
            <h3>{{ slotProps.data.name }}</h3>
            <p>{{ slotProps.data.description }}</p>
            <button @click="viewGame(slotProps.data.name)">Ver detalles</button>
          </div>
        </div>
      </template>
    </CarouselVue>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: 'GameHome',
  data() {
    return {
      games: [],
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
  methods: {
    async fetchGames() {
      const url = "http://localhost:3000/juegos";
      try {
        const response = await axios.get(url);
        console.log("Datos de la API:", response.data);
        this.games = response.data.slice(0, 10).map((game) => ({
          name: game.nombre,
          image: game.imagen,
          description: game.descripcion.length > 100
            ? game.descripcion.slice(0, 100) + "..."
            : game.descripcion,
        }));
      } catch (error) {
        console.error("Error al obtener los juegos:", error);
        alert("Hubo un problema al cargar los juegos. Por favor, intenta de nuevo más tarde.");
      }
    },
    viewGame(gameName) {
      alert(`Has seleccionado el juego: ${gameName}`);
    },
  },
  created() {
    this.fetchGames();
  },
};
</script>

<style scoped>
.featured-games {
  width: 100%;
  padding: 4rem 2rem;
  box-sizing: border-box;
  overflow: hidden;
  background-color: #111;
  margin-bottom: 4rem;
}

h2 {
  font-size: 2.8rem;
  color: #00ffff;
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
  background-color: #222;
  border-radius: 20px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.3);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  overflow: hidden;
  text-align: start;
  display: flex;
  flex-direction: column;
  width: 100%;

  height: 420px;
  padding: 1.5rem;
  border: 2px solid #00ffff;
}

img {
  width: 100%;
  height: 50%;
  object-fit: cover;
  border-radius: 10px;
  margin-bottom: 1rem;
}

.game-card h3 {
  font-size: 1.3rem;
  color: #00ffff;
  margin-bottom: 0.5rem;
}

.game-card p {
  font-size: 1rem;
  color: #ccc;
  flex-grow: 1;
  margin-bottom: 1rem;
}

.game-card button {
  background-color: #333;
  color: #00ffff;
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
  background-color: #00ffff;
  color: #311545;
  transform: scale(1.05);
}

.game-card:hover {
  transform: translateY(-8px);
  box-shadow: 0 10px 16px rgba(0, 0, 0, 0.35);
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
    height: 200px;
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
