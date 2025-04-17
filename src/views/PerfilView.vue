<template>
    <div>
      <!-- Header con el botón de perfil -->
      <HeaderProyecto :usuario="usuario" />
  
      <!-- Sección del Perfil -->
      <section class="perfil">
        <div v-if="usuario" class="perfil-info">
          <!-- Información del perfil -->
          <img :src="usuario.avatar" alt="Avatar" class="avatar" />
          <h2 class="nombre">{{ usuario.nombre }}</h2>
          <p class="email">{{ usuario.email }}</p>
          <button @click="cerrarSesion" class="cerrar-sesion">Cerrar Sesión</button>
        </div>
        <div v-else class="login-form">
          <!-- Formulario de inicio de sesión -->
          <h2>Iniciar Sesión</h2>
          <form @submit.prevent="iniciarSesion">
            <input
              type="text"
              v-model="login.usuario"
              placeholder="Nombre de usuario"
              required
            />
            <input
              type="email"
              v-model="login.email"
              placeholder="Correo electrónico"
              required
            />
            <input
              type="password"
              v-model="login.contraseña"
              placeholder="Contraseña"
              required
            />
            <button type="submit">
              <i class="fas fa-sign-in-alt"></i> Iniciar Sesión
            </button>
          </form>
        </div>
      </section>
    </div>
  </template>
  
  <script>
  import HeaderProyecto from "@/components/Componentes+/HeaderProyecto.vue";
  
  export default {
    name: "PerfilView",
    components: {
      HeaderProyecto,
    },
    data() {
      return {
        // Cargar datos del usuario desde localStorage si existen
        usuario: JSON.parse(localStorage.getItem("usuario")) || null,
        login: {
          usuario: "",
          email: "",
          contraseña: "",
        },
      };
    },
    methods: {
      iniciarSesion() {
        // Guardar los datos ingresados como datos del usuario
        this.usuario = {
          nombre: this.login.usuario,
          email: this.login.email,
          avatar:
            "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQvbE7VlS_Xv9oKdelMWUWAIOgTyh9Z5jcwrg&s",
        };
        // Guardar en localStorage
        localStorage.setItem("usuario", JSON.stringify(this.usuario));
      },
      cerrarSesion() {
        // Eliminar datos del usuario
        this.usuario = null;
        localStorage.removeItem("usuario"); // Eliminar del localStorage
      },
    },
  };
  </script>
  
  <style scoped>
  .perfil {
    display: flex;
    justify-content: center;
    align-items: center;
    min-height: 100vh;
    background-color: #1a1a1a; /* Fondo oscuro */
    color: #ffffff; /* Texto claro */
  }
  
  .perfil-info,
  .login-form {
    background-color: #2c2f33;
    border-radius: 10px;
    padding: 2rem;
    text-align: center;
    box-shadow: 0 4px 15px rgba(0, 0, 0, 0.5);
    width: 100%;
    max-width: 400px;
  }
  
  .avatar {
    width: 100px;
    height: 100px;
    border-radius: 50%;
    margin-bottom: 1rem;
    box-shadow: 0 0 10px #43b581; /* Neón verde alrededor del avatar */
  }
  
  .nombre {
    font-size: 1.5rem;
    color: #00bcd4; /* Neón azul */
  }
  
  .email {
    font-size: 1rem;
    color: #b0b0b0; /* Texto suave */
    margin-bottom: 1.5rem;
  }
  
  .cerrar-sesion {
    background-color: #ff5722; /* Botón de color vibrante */
    color: #ffffff;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    transition: background-color 0.3s ease;
  }
  
  .cerrar-sesion:hover {
    background-color: #d84315;
  }
  
  .login-form h2 {
    font-size: 1.5rem;
    margin-bottom: 1rem;
    color: #7289da; /* Azul claro */
  }
  
  .login-form input {
    width: 100%;
    padding: 0.8rem;
    margin-bottom: 1rem;
    border-radius: 5px;
    border: 1px solid #888;
    background-color: #1a1a1a;
    color: #ffffff;
    font-size: 1rem;
  }
  
  .login-form button {
    background-color: #43b581; /* Botón verde para iniciar sesión */
    color: #ffffff;
    border: none;
    padding: 0.8rem 1.5rem;
    border-radius: 5px;
    cursor: pointer;
    font-weight: bold;
    font-size: 1rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.5rem;
    transition: background-color 0.3s ease;
  }
  
  .login-form button:hover {
    background-color: #36a169;
  }
  
  .login-form button i {
    font-size: 1.2rem;
  }
  </style>
  