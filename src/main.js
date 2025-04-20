import { createApp } from 'vue';
import App from './App.vue';
import axios from 'axios';
import VueAxios from 'vue-axios';
import PrimeVue from 'primevue/config';
import Aura from '@primeuix/themes/aura';
import router from './router';
import Button from 'primevue/button';
import Carousel from 'primevue/carousel';
import AnimateOnScroll from 'primevue/animateonscroll';

import DataView from 'primevue/dataview';
import 'primeicons/primeicons.css';
// Si no usas Aura, descomenta las siguientes líneas:
// import 'primevue/resources/themes/saga-purple/theme.css';
// import 'primevue/resources/primevue.min.css';
// import 'primeflex/primeflex.css'; // opcional

const app = createApp(App);

// Configuración de plugins y componentes
app.use(VueAxios, axios);
app.use(router);
app.use(PrimeVue, {
    theme: {
        preset: Aura,
    },
});

// Registro de directivas y componentes globales
app.directive('animateVue', AnimateOnScroll);
app.component('ButtonVue', Button);
app.component('CarouselVue', Carousel);
app.component('DataView', DataView);

// Monta la aplicación
app.mount('#app');
