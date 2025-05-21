<template>
  
  <div id="app">
      <HeaderProyecto/>
    <div class="container">
      <h1>Administración de Juegos</h1>

      <form @submit.prevent="saveGame" class="game-form">
        <input type="hidden" v-model="currentGame.id" />

        <div class="form-group">
          <label for="nombre">Nombre:</label>
          <input type="text" id="nombre" v-model="currentGame.nombre" required />
        </div>

        <div class="form-group">
          <label for="precio">Precio:</label>
          <input type="number" id="precio" step="0.01" v-model.number="currentGame.precio" required />
        </div>

        <div class="form-group">
          <label for="descuento">Descuento (0.0 - 1.0):</label>
          <input type="number" id="descuento" step="0.01" min="0" max="1" v-model.number="currentGame.descuento" required />
        </div>

        <div class="form-group">
          <label for="descripcion">Descripción:</label>
          <textarea id="descripcion" rows="3" v-model="currentGame.descripcion" required></textarea>
        </div>

        <div class="form-group">
          <label for="sinopsis">Sinopsis:</label>
          <textarea id="sinopsis" rows="5" v-model="currentGame.sinopsis" required></textarea>
        </div>

        <div class="form-group">
          <label for="disponibilidad">Disponibilidad:</label>
          <select id="disponibilidad" v-model="currentGame.disponibilidad" required>
            <option value="Disponible">Disponible</option>
            <option value="no Disponible">No Disponible</option>
          </select>
        </div>

        <div class="form-group">
          <label for="imagen">URL de la Imagen:</label>
          <input type="url" id="imagen" v-model="currentGame.imagen" required />
        </div>

        <div class="form-actions">
          <button type="submit" class="btn btn-primary">
            {{ editing ? 'Actualizar Juego' : 'Guardar Juego' }}
          </button>
          <button type="button" class="btn btn-secondary" @click="clearForm">
            Limpiar Formulario
          </button>
        </div>
        <div v-if="message" :class="['message', messageType]">{{ message }}</div>
      </form>
    </div>

    <div class="container game-table-container">
      <h2>Lista de Juegos</h2>
      <table class="game-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Imagen</th>
            <th>Nombre</th>
            <th>Precio</th>
            <th>Descuento</th>
            <th>Disponibilidad</th>
            <th>Acciones</th>
          </tr>
        </thead>
        <tbody>
          <tr class="filas" v-for="game in games" :key="game.id">
            <td>{{ game.id }}</td>
            <td><img :src="game.imagen" :alt="game.nombre" /></td>
            <td>{{ game.nombre }}</td>
            <td>${{ game.precio.toFixed(2) }}</td>
            <td>{{ (game.descuento * 100).toFixed(0) }}%</td>
            <td>{{ game.disponibilidad }}</td>
            <td class="actions">
              <button class="edit-btn" @click="editGame(game)">Editar</button>
              <button class="delete-btn" @click="deleteGame(game.id)">Eliminar</button>
            </td>
          </tr>
        </tbody>
      </table>
      <div v-if="games.length === 0" class="message error">No hay juegos para mostrar.</div>
    </div>
  </div>
</template>

<script>
import axios from 'axios';
import HeaderProyecto from "@/components/Componentes+/HeaderProyecto.vue";

export default {
  name: 'GamesCrud',
  data() {
    return {
      API_URL: 'http://localhost:3000/juegos',
      games: [],
      currentGame: {
        id: null,
        nombre: '',
        precio: 0,
        descuento: 0,
        descripcion: '',
        sinopsis: '',
        disponibilidad: 'Disponible',
        imagen: '',
      },
      editing: false,
      message: '',
      messageType: '',
    };
  },
  mounted() {
    this.fetchGames();
  },
  methods: {
    async fetchGames() {
      try {
        const response = await axios.get(this.API_URL);
        this.games = response.data;
      } catch (error) {
        console.error('Error al obtener los juegos:', error);
        this.showMessage('Error al cargar los juegos.', 'error');
      }
    },
    async saveGame() {
      try {
        if (this.editing) {
          await axios.put(`${this.API_URL}/${this.currentGame.id}`, this.currentGame);
          this.showMessage('Juego actualizado correctamente.', 'success');
        } else {
          await axios.post(this.API_URL, this.currentGame);
          this.showMessage('Juego creado correctamente.', 'success');
        }
        this.clearForm();
        this.fetchGames();
      } catch (error) {
        console.error('Error al guardar el juego:', error);
        this.showMessage('Error al guardar el juego.', 'error');
      }
    },
    editGame(game) {
      this.currentGame = { ...game };
      this.editing = true;
      window.scrollTo({ top: 0, behavior: 'smooth' });
    },
    async deleteGame(id) {
      if (confirm('¿Estás seguro de que quieres eliminar este juego?')) {
        try {
          await axios.delete(`${this.API_URL}/${id}`);
          this.showMessage('Juego eliminado correctamente.', 'success');
          this.fetchGames();
          if (this.currentGame.id === id) {
            this.clearForm();
          }
        } catch (error) {
          console.error('Error al eliminar el juego:', error);
          this.showMessage('Error al eliminar el juego.', 'error');
        }
      }
    },
    clearForm() {
      this.currentGame = {
        id: null,
        nombre: '',
        precio: 0,
        descuento: 0,
        descripcion: '',
        sinopsis: '',
        disponibilidad: 'Disponible',
        imagen: '',
      };
      this.editing = false;
      this.showMessage('', '');
    },
    showMessage(msg, type) {
      this.message = msg;
      this.messageType = type;
      setTimeout(() => {
        this.message = '';
        this.messageType = '';
      }, 3000);
    },
  },
  components: {
    HeaderProyecto,
  },
};
</script>

<style scoped>
body {
  margin: 0;
  font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
  background: linear-gradient(135deg, #1a1a1a, #23272a);
  color: #ffffff;
  min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem;
  box-sizing: border-box;
}

#app {
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
}

.container {
  background: linear-gradient(145deg, #2c2f33, #212427);
  border-radius: 15px;
  padding: 2rem;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: 900px;
  animation: fadeIn 0.8s ease-in-out;
  margin-bottom: 2rem;
  margin-top: 8rem;
}

h1,
h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #00bcd4;
  text-align: center;
}

.form-group {
  margin-bottom: 1rem;
  text-align: left;
}

.form-group label {
  font-size: 1rem;
  color: #b0b0b0;
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input,
.form-group textarea,
.form-group select {
  width: calc(100% - 16px);
  padding: 0.8rem;
  border-radius: 10px;
  border: 1px solid #888;
  background: #23272a;
  color: #ffffff;
  font-size: 1rem;
  transition: border-color 0.3s ease;
  box-sizing: border-box;
}

.form-group input:focus,
.form-group textarea:focus,
.form-group select:focus {
  border-color: #7289da;
  outline: none; 
}
.filas{
color: #ffff;

}
.form-actions {
  display: flex;
  gap: 1rem;
  justify-content: center;
  margin-top: 1.5rem;
}

.btn {
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  border: none;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background 0.3s ease, transform 0.3s ease;
  color: #ffffff;
}

.btn-primary {
  background: linear-gradient(90deg, #43b581, #36a169);
}

.btn-primary:hover {
  background: linear-gradient(90deg, #36a169, #2ecc71);
  transform: scale(1.05);
}

.btn-danger {
  background: linear-gradient(90deg, #ff5722, #e91e63);
}

.btn-danger:hover {
  background: linear-gradient(90deg, #d84315, #c2185b);
  transform: scale(1.05);
}

.btn-secondary {
  background: linear-gradient(90deg, #7289da, #5b6eae);
}

.btn-secondary:hover {
  background: linear-gradient(90deg, #5b6eae, #4a5c92);
  transform: scale(1.05);
}

.message {
  text-align: center;
  margin-top: 1rem;
  font-weight: bold;
}

.message.success {
  color: #43b581;
}

.message.error {
  color: #ff5722;
}

.game-table-container {
}

.game-table {
  width: 100%;
  border-collapse: collapse;
  margin-top: 1.5rem;
}

.game-table th,
.game-table td {
  padding: 12px 15px;
  text-align: left;
  border-bottom: 1px solid #444;
}

.game-table th {
  background-color: #00bcd4;
  color: #1a1a1a;
  font-weight: bold;
  text-transform: uppercase;
}

.game-table tr:hover {
  background-color: #3a3f44;
}

.game-table td img {
  width: 60px;
  height: 60px;
  object-fit: cover;
  border-radius: 5px;
}

.game-table .actions button {
  margin-right: 0.5rem;
  padding: 8px 12px;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  border: none;
  transition: background 0.3s ease, transform 0.3s ease;
}

.game-table .actions .edit-btn {
  background-color: #7289da;
  color: #ffffff;
}

.game-table .actions .edit-btn:hover {
  background-color: #5b6eae;
  transform: scale(1.05);
}

.game-table .actions .delete-btn {
  background-color: #ff5722;
  color: #ffffff;
}

.game-table .actions .delete-btn:hover {
  background-color: #d84315;
  transform: scale(1.05);
}

@keyframes fadeIn {
  from {
    opacity: 0;
    transform: translateY(-10px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
</style>
