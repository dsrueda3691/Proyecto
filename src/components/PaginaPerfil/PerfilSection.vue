<template>
  <section class="perfil">

    <div v-if="usuario" class="perfil-info">
      <img :src="usuario.avatar" alt="Avatar" class="avatar" />
      <h2 class="nombre">{{ usuario.nombre }}</h2>
      <p class="email">{{ usuario.email }}</p>
      <div class="adicional-info">
        <p>
          <strong>Fecha de registro:</strong>
          {{ usuario.fechaRegistro || "N/A" }}
        </p>
        <p>
          <strong>Último Juego Comprado:</strong>
          {{ usuario.ultimoJuego || "N/A" }} - ${{
            usuario.precioUltimoJuego || "N/A"
          }}
        </p>
      </div>
      <button @click="cerrarSesion" class="cerrar-sesion">Cerrar Sesión</button>
    </div>


    <div v-else class="login-form">
      <h2>Iniciar Sesión</h2>
      <form @submit.prevent="iniciarSesion">
        <div class="form-group">
          <label for="usuario">Nombre de usuario</label>
          <input
            id="usuario"
            type="text"
            v-model="login.usuario"
            placeholder="Ingresa tu nombre de usuario"
            required
          />
        </div>
        <div class="form-group">
          <label for="email">Correo electrónico</label>
          <input
            id="email"
            type="email"
            v-model="login.email"
            placeholder="Ingresa tu correo electrónico"
            required
          />
        </div>
        <div class="form-group">
          <label for="contraseña">Contraseña</label>
          <input
            id="contraseña"
            type="password"
            v-model="login.contraseña"
            placeholder="Ingresa tu contraseña"
            required
          />
        </div>
        <button type="submit" class="btn-submit">Iniciar Sesión</button>
      </form>
    </div>
  </section>
</template>

<script>
import axios from "axios";

export default {
  props: {
    usuario: {
      type: Object,
      required: false,
    },
  },
  data() {
    return {
      login: {
        usuario: "",
        email: "",
        contraseña: "",
      },
      ultimoJuego: null, 
    };
  },
  methods: {
    async cargarUltimoJuego() {
      const url = "http://localhost:3000/juegos/13"; 
      try {
        const response = await axios.get(url);
        this.ultimoJuego = response.data; 
        console.log("Datos del último juego:", this.ultimoJuego);
      } catch (error) {
        console.error("Error al consumir la API:", error);
        this.ultimoJuego = null;
      }
    },
    async iniciarSesion() {

      await this.cargarUltimoJuego();

      const nuevoUsuario = {
        nombre: this.login.usuario,
        email: this.login.email,
        avatar:
          "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbE7VlS_Xv9oKdelMWUWAIOgTyh9Z5jcwrg&s",
        fechaRegistro: "20/11/2024",
     
        ultimoJuego: this.ultimoJuego
          ? this.ultimoJuego.nombre
          : "Datos no disponibles",
        precioUltimoJuego: this.ultimoJuego
          ? `${this.ultimoJuego.precio.toFixed(2)}`
          : "Datos no disponibles",
      };

      console.log("Usuario después de iniciar sesión:", nuevoUsuario); // Depuración
      this.$emit("actualizarUsuario", nuevoUsuario);
    },
    cerrarSesion() {
      this.$emit("actualizarUsuario", null); // Restablecer el usuario a null.
    },
  },
  async mounted() {
    await this.cargarUltimoJuego(); // Cargar los datos del juego 13 al montar el componente.
  },
};
</script>

<style scoped>
.perfil {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  background: linear-gradient(135deg, #1a1a1a, #23272a);
  color: #ffffff;
}

.perfil-info {
  background: linear-gradient(145deg, #2c2f33, #212427);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: 400px;
  animation: fadeIn 0.8s ease-in-out;
}

.adicional-info p {
  margin: 0.5rem 0;
  font-size: 1rem;
  color: #d3d3d3;
}

.avatar {
  width: 120px;
  height: 120px;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0 0 15px #43b581;
}

.nombre {
  font-size: 1.8rem;
  color: #00bcd4;
}

.email {
  font-size: 1.2rem;
  color: #b0b0b0;
  margin-bottom: 1rem;
}

.cerrar-sesion {
  background: linear-gradient(90deg, #ff5722, #e91e63);
  color: #ffffff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 5px;
  cursor: pointer;
  font-weight: bold;
  transition: background 0.3s ease, transform 0.3s ease;
}

.cerrar-sesion:hover {
  background: linear-gradient(90deg, #d84315, #c2185b);
  transform: scale(1.05);
}

.login-form {
  background: linear-gradient(145deg, #2c2f33, #212427);
  border-radius: 15px;
  padding: 2rem;
  text-align: center;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.6);
  width: 100%;
  max-width: 400px;
  animation: fadeIn 0.8s ease-in-out;
}

.login-form h2 {
  font-size: 1.8rem;
  margin-bottom: 1.5rem;
  color: #00bcd4;
}

.form-group {
  margin-bottom: 1.5rem;
  text-align: left;
}

.form-group label {
  font-size: 1rem;
  color: #b0b0b0;
  display: block;
  margin-bottom: 0.5rem;
}

.form-group input {
  width: 100%;
  padding: 0.8rem;
  border-radius: 10px;
  border: 1px solid #888;
  background: #23272a;
  color: #ffffff;
  font-size: 1rem;
  transition: border-color 0.3s ease;
}

.form-group input:focus {
  border-color: #7289da;
  outline: none;
}

.btn-submit {
  background: linear-gradient(90deg, #43b581, #36a169);
  color: #ffffff;
  border: none;
  padding: 0.8rem 1.5rem;
  border-radius: 10px;
  cursor: pointer;
  font-weight: bold;
  font-size: 1rem;
  transition: background 0.3s ease, transform 0.3s ease;
}

.btn-submit:hover {
  background: linear-gradient(90deg, #36a169, #2ecc71);
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
