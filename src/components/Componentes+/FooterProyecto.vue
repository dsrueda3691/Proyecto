<template>
  <footer>
    <div class="footer-content">
      <div class="footer-section " v-animate-vue="{ enterClass: 'fadeinup' }" >
        <a class="navbar-brand" href="proyecto">
          <img  :src="require(`@/assets/logo copy.png`)" alt="" />
          <span style="color: white"> Retro Realms </span>
        </a>
        <h4>Sobre Nosotros</h4>
        <p>
          Tu destino para los mejores juegos y las últimas novedades en el
          mundo del gaming.
        </p>
      </div>
      <div class="footer-section " v-animate-vue="{ enterClass: 'fadeinup' }">
        <h4>Enlaces rápidos</h4>
        <ul>
          <li><a href="proyecto">Inicio</a></li>
          <li><a href="proyecto">Ofertas</a></li>
          <li><a href="proyecto">Catálogo</a></li>
          <li><a href="proyecto">Iniciar Sesión</a></li>
        </ul>
      </div>
      <div class="footer-section" v-animate-vue="{ enterClass: 'fadeinup' }">
        <h4>Contacto</h4>
        <p>Email: info@RetroRealms.com</p>
        <p>Teléfono: (123) 456-7890</p>
      </div>
    </div>
    <p class="copyright" v-animate-vue="{ enterClass: 'fadeinbottom' }">
      &copy; 2024 RetroRealms. Todos los derechos reservados.
    </p>
  </footer>
</template>

<script>
export default {
name: "FooterProyecto",
};
</script>

<style scoped>
footer {
  background-color: #4b0082;
  color: #f0f0f0;
  padding: 2rem 0;
  margin-top: 4rem;
}

.footer-content {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 2rem;
}

.footer-section h4 {
  color: #00ffff;
}

.footer-section ul {
  list-style-type: none;
  padding: 0;
}

.footer-section ul li {
  margin-bottom: 0.5rem;
}

.footer-section ul li a {
  color: #f0f0f0;
  text-decoration: none;
  transition: color 0.3s ease;
}

.footer-section ul li a:hover {
  color: #00ffff;
}

.footer-section p {
  margin: 0.5rem 0;
}

.navbar-brand {
  display: flex;
  align-items: center;
  gap: 0.5rem;
  text-decoration: none;
}

.navbar-brand img {
  width: 40px;
  height: auto;
}

.navbar-brand span {
  font-weight: bold;
  font-size: 1.2rem;
  color: white;
}

.copyright {
  text-align: center;
  margin-top: 2rem;
  color: #808080;
}

/* MEDIA QUERIES */
@media (max-width: 768px) {
  .footer-content {
    grid-template-columns: 1fr;
    text-align: center;
    padding: 0 1rem;
  }

  .footer-section {
    margin-bottom: 2rem;
  }

  .navbar-brand {
    justify-content: center;
  }
}

@media (max-width: 480px) {
  .navbar-brand span {
    font-size: 1rem;
  }

  .footer-section h4 {
    font-size: 1.1rem;
  }

  .footer-section p,
  .footer-section ul li {
    font-size: 0.9rem;
  }
}
</style>

