<template>
  <div>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
      <div class="container">
        <a class="navbar-brand" href="#">LOGO</a>
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarNav">
          <ul class="navbar-nav ms-auto">
            <li class="nav-item">
              <a class="nav-link" href="#">HOME</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">ABOUT</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">BUY</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" href="#">SERVICES</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
    <div class="container my-5">
      <h1 class="mb-4 text-primary">Estudiantes</h1>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MainMenu'
}
</script>

<style scoped>
.navbar {
  height: 75px;
  background-color: rgb(0, 75, 128);
}

.nav-link {
  color: #FFF;
}
</style>