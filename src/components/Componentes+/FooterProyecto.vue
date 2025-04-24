<template>
  <footer>
    <div class="footer-content">
      <!-- Sección de la marca -->
      <div
        class="footer-section brand-section"
        v-animate-vue="{ enterClass: 'fadeinup' }"
      >
        <a class="navbar-brand" href="/">
          <img
            :src="require(`@/assets/logo copy.png`)"
            alt="Logo de Retro Realms"
          />
          <span>Retro Realms</span>
        </a>
      </div>

      <!-- Enlaces rápidos -->
      <div
        class="footer-section links-section"
        v-animate-vue="{ enterClass: 'fadeinup' }"
      >
        <h4>Enlaces rápidos</h4>
        <ul>
          <li>
            <a href="/"><i class="fas fa-home"></i> Inicio</a>
          </li>
          <li>
            <a href="ofertas"><i class="fas fa-tags"></i> Ofertas</a>
          </li>
          <li>
            <a href="catalogo"><i class="fas fa-th-list"></i> Catálogo</a>
          </li>
          <li>
            <router-link to="/perfil"
              ><i class="fas fa-user-circle"></i>
              {{ usuario ? "Perfil" : "Iniciar Sesión" }}</router-link
            >
          </li>
        </ul>
      </div>

      <!-- Contacto -->
      <div
        class="footer-section contact-section"
        v-animate-vue="{ enterClass: 'fadeinup' }"
      >
        <h4>Contacto</h4>
        <ul>
          <li>Email: info@RetroRealms.com</li>
          <li>Teléfono: 300 1234567</li>
       
        </ul>
      </div>

      <!-- Redes sociales -->
      <div
        class="footer-section social-section"
        v-animate-vue="{ enterClass: 'fadeinup' }"
      >
        <h4>Síguenos</h4>
        <div class="social-media">
          <a href="#"
            ><img
              src="https://cdn.pixabay.com/photo/2016/12/04/18/58/instagram-1882330_1280.png"
              alt="Instagram"
          /></a>
          <a href="#"
            ><img
              src="https://img.freepik.com/vector-gratis/nuevo-diseno-icono-x-logotipo-twitter-2023_1017-45418.jpg"
              alt="Twitter"
          /></a>
          <a href="#"
            ><img
              src="https://store-images.s-microsoft.com/image/apps.37935.9007199266245907.b029bd80-381a-4869-854f-bac6f359c5c9.91f8693c-c75b-4050-a796-63e1314d18c9?h=253"
              alt=""
          /></a>
          <a href="#"
            ><img
              src="https://play-lh.googleusercontent.com/s7SUyvveKqEgpwVz74VDeQWGGhob_Vyj9_ubJGwUPvAXpPe4xAJeZ0l3pF2F7njB_NYM=w240-h480-rw"
              alt=""
          /></a>
          <a href="#"
            ><img
              src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQ8h1bdDGzuAMWXf7sZaULRYFy1xkSeduqNlQ&s"
              alt="Reddit"
          /></a>
        </div>
      </div>
    </div>

    <div class="footer-bottom" v-animate-vue="{ enterClass: 'fadeinbottom' }">
      <p class="copyright">
        &copy; 2025 Retro Realms. Todos los derechos reservados.
      </p>
    </div>
  </footer>
</template>

<script>
export default {
  name: "FooterProyecto",
  data() {
    return {
      usuario: JSON.parse(localStorage.getItem("usuario")) || null,
    };
  },
};
</script>

<style scoped>
footer {
  background-color: #141414;
  color: #e0e0e0;
  padding: 3rem 0;
  border-top: 2px solid #00ffff;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-section h4 {
  color: #00ffff;
  margin-bottom: 1rem;
}

.footer-section ul {
  list-style: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.9rem;
  font-size: 0.95rem;
  border-bottom: 1px solid #a8a8a8;
}
.footer-section ul li a {
  color: inherit;
  text-decoration: none;

}
.footer-section ul li a:hover {
  
  color: #00ffff;
  transform: translateX(5px);

}

.brand-section {
  text-align: center;
  width: 100%;
  margin-bottom: 2rem;
  padding: 0 2rem;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 1rem;
}

.navbar-brand {
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
}

.navbar-brand img {
  width: 40px;
}

.social-media {
  display: flex;
  gap: 15px;
  justify-content: center;
}

.social-media a img {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  transition: transform 0.3s ease-in-out;
}

.social-media a img:hover {
  transform: scale(1.1);
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  font-size: 0.9rem;
  border-top: 1px solid #333;
  padding-top: 1rem;
  justify-content: center;
}

.footer-bottom a {
  color: #00ffff;
  text-decoration: none;
}
.copyright {
  color: #6d6d6d;
}

.footer-bottom a:hover {
  text-decoration: underline;
}

@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
  }
}
</style>
