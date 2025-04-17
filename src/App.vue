<template>
  <router-view/>
</template>

<style>

@keyframes fadeinup {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fadeinup {
  animation: fadeinup 0.5s ease;
  
}
@keyframes fadeInBottom {
  from {
    opacity: 0;
    transform: translateY(-30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}
.fadeinbottom {
  animation: fadeInBottom 0.5s ease forwards;
  
}
@keyframes fadeInLeft {
  from {
    opacity: 0;
    transform: translateX(-30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeinleft {
  animation: fadeInLeft 0.5s ease forwards;
}
@keyframes fadeInRight {
  from {
    opacity: 0;
    transform: translateX(30px);
  }
  to {
    opacity: 1;
    transform: translateX(0);
  }
}

.fadeinright {
  animation: fadeInRight 0.5s ease forwards;
}


@keyframes zoomIn {
  from {
    opacity: 0;
    transform: scale(0.8); 
  }
  to {
    opacity: 1;
    transform: scale(1); 
  }
}

.zoomin {
  animation: zoomIn 0.5s ease forwards;
}

</style>
