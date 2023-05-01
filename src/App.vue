<script setup>
import HelloWorld from './components/HelloWorld.vue'
import asesoria from './assets/asesoria.jpg'
import contrato from './assets/contrato.jpg'
import examenvet from './assets/examen-vet.jpg'
import montabilidad from './assets/montabilidad.jpg'
import planning from './assets/planning.jpg'
import seguimiento from './assets/seguimiento.jpg'
import transporte from './assets/transporte.jpg'
</script>

<template>
  <div :class="{ 'grid-cols-1': anchoPantalla < 980, 'grid grid-cols-3 gap-3 bg-black': anchoPantalla > 980}">
    <div class="grid pl-20 pt-10">
      <div>
        <p class="text-primary border-b-2 w-5" @click="() => {carouselRef.slideTo(0), changeOpacity()}">01</p>
        <h1 class="text-white text-5xl" :style="{ 
          opacity:
            esOpaco ? '1' :
          '0.5' }">
        Asesoría</h1>
      </div>
      
      <div>
        <p class="text-primary border-b-2 w-5 -mt-20" @click="() => {carouselRef.slideTo(2), changeOpacityTwo()}">03</p>
        <h1 class="text-white text-5xl" :style="{ 
          opacity: 
            esOpacoTwo ? '1' :
          '0.5' }">Planning de Visitas</h1>
      </div>
      
      <div>
        <p class="text-primary border-b-2 w-5 -mt-20" @click="() => {carouselRef.slideTo(4), changeOpacityThree()}">05</p>
        <h1 class="text-white text-5xl" :style="{ 
          opacity: 
            esOpacothree ? '1' :
          '0.5' }">Exámenes veterinarios</h1>
      </div>
      
      <div>
        <p class="text-primary border-b-2 w-5 -mt-20" @click="() => {carouselRef.slideTo(6), changeOpacityFour()}">07</p>
        <h1 class="text-white text-5xl" :style="{ 
          opacity: 
            esOpacoFour ? '1' :
          '0.5' }">Transporte</h1>
      </div>
    </div>

    <div class="grid pl-20 pt-10">
      
      <div class="left-60">
        <p class="text-primary border-b-2 w-5" @click="() => {carouselRef.slideTo(1), changeOpacityFive()}">02</p>
        <h1 class="text-white text-5xl" :style="{ 
          opacity: 
            esOpacoFive ? '1' :
          '0.5' }">Seguimiento</h1>
      </div>
      
      <div>
        <p class="text-primary border-b-2 w-5 -mt-44" @click="() => {carouselRef.slideTo(3), changeOpacitySix()}">04</p>
        <h1 class="text-white text-5xl" :style="{ 
          opacity: 
            esOpacoSix ? '1' :
          '0.5' }">Prueba de montalidad</h1>
      </div>
      
      <div>
        <p class="text-primary border-b-2 w-5 -mt-56" @click="() => {carouselRef.slideTo(5), changeOpacitySeven()}">06</p>
        <h1 class="text-white text-5xl" :style="{ 
          opacity: 
            esOpacoSeven ? '1' :
          '0.5' }">Documentación</h1>
      </div>
      
    </div>
    <carousel ref="carouselRef" :items-to-show="1" class="bg-primary py-96 w-5/5 -mt-96">
      <slide v-for="slide in 7" :key="slide"  @click="cambiarOpacidad(slide-1)">
        <div class="-mt-14">
          <img :src=items[slide].image>
          <p class="font-bold border-b-2 w-5 ml-10">0{{ slide }}</p>
          <p class="max-w-sm mt-12 ml-10 text-5xl text-start">{{ items[slide].title }}</p>
          <p class="max-w-sm ml-10 mt-4 text-start">{{ items[slide].description }}</p>
        </div>
      </slide>

      <template #addons>
        <navigation />
        <pagination />
      </template>
    </carousel>
  </div>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
<script>
// If you are using PurgeCSS, make sure to whitelist the carousel CSS classes
import 'vue3-carousel/dist/carousel.css'
import { ref } from 'vue';
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const Texts = [
    "hi",
    "Good day",
    "This is",
    "a carousel"
  ]

const items = [
  {
    title: 'Asesoría',
    description:
      'Te aconsejamos en la decisión de compra de tu caballo a través de un equipo especializado de jueces en doma clásica con más de 20 años de experiencia.',
    image: asesoria,
  },
  {
    title: 'Asesoría',
    description:
      'Te aconsejamos en la decisión de compra de tu caballo a través de un equipo especializado de jueces en doma clásica con más de 20 años de experiencia.',
    image: asesoria,
  },
  {
    title: 'Seguimiento',
    description:
      'Trabajamos codo con codo con tu entrenador, para ayudarlos a tomar la decisión mas adecuada.',
    image: seguimiento,
  },
  {
    title: 'Planning de visitas',
    description:
      'Contarás con un planning perfecto dónde te acompañaremos y guiaremos por las visitas.',
    image: planning,
  },
  {
    title: 'Pruebas de montabilidad',
    description:
      'Contamos con jinetes profesionales, que en caso de no poder trasladarte a probar el caballo, elaboraran un informe detallado, imparcial y objetivo, con diferentes.',
    image: montabilidad,
  },
  {
    title: 'Exámenes veterinarios',
    description:
      'Coordinamos las examenes veterinarios y contamos con un equipo de veterinarios independientes en cada país.',
    image: examenvet,
  },
  {
    title: 'Documentación',
    description:
      'Ponemos a tu disposición un modelo de contrato tipo que te garantiza la cobertura en la compra de tu caballo.',
    image: contrato,
  },
  {
    title: 'Transporte',
    description:
      'Coordinamos el transporte a todo el mundo con empresas certificadas a nivel internacional.',
    image: transporte,
  },
]

const carouselRef = ref(null);
  
// Methods are available in this reference
export default {
  name: 'App',
  components: {
    Carousel,
    Slide,
    Pagination,
    Navigation
  },
  data() {
    return {
      items,
      anchoPantalla: 0,
      carouselRef,
      currentSlide: 0,
      esOpaco: false,
      esOpacoOne: false,
      esOpacoTwo: false,
      esOpacothree: false,
      esOpacoFour: false,
      esOpacoFive: false,
      esOpacoSix: false,
      esOpacoSeven: false,
    }
  },
  created() {
    this.anchoPantalla = window.innerWidth;
    window.addEventListener("resize", this.actualizarAnchoPantalla);
  },
  destroyed() {
    window.removeEventListener("resize", this.actualizarAnchoPantalla);
  },
  methods: {
    cambiarOpacidad(index) {
      this.items.forEach((texto, i) => {
        if (i !== index) {
          document.querySelectorAll("h1")[i].style.opacity = 0.1;
        } else {
          document.querySelectorAll("h1")[i].style.opacity = 1;
        }
      });
    },
    actualizarAnchoPantalla() {
      this.anchoPantalla = window.innerWidth;
    },
    slideTo(val) {
      this.currentSlide = val
    },
    changeOpacity() {
      this.esOpaco = !this.esOpaco;
    },
    changeOpacityOne() {
      this.esOpacoOne = !this.esOpacoOne;
    },
    changeOpacityTwo() {
      this.esOpacoTwo = !this.esOpacoTwo;
    },
    changeOpacityThree() {
      this.esOpacothree = !this.esOpacothree;
    },
    changeOpacityFour() {
      this.esOpacoFour = !this.esOpacoFour;
    },
    changeOpacityFive() {
      this.esOpacoFive = !this.esOpacoFive;
    },
    changeOpacitySix() {
      this.esOpacoSix = !this.esOpacoSix;
    },
    changeOpacitySeven() {
      this.esOpacoSeven = !this.esOpacoSeven;
    },
  },
}
</script>