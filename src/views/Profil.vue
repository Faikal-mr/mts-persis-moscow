<script setup>
import { onMounted } from 'vue'
import sal from 'sal.js'
import VisiMisi from '@/components/VisiMisi.vue'
import KontakSekolah from '@/components/KontakSekolah.vue'
import FasilitasCarousel from '@/components/FasilitasCarousel.vue'
import logoSekolah from '@/assets/img/logo-sekolah-tut-wuri-handayani.avif'

const profil = {
  judul: "Profil SMK Inovasi Digital Manado",
  sejarah: `
    Sekolah Menengah Kejuruan (SMK) Inovasi Digital Manado didirikan pada
    tahun 2018 dengan tujuan memberikan pendidikan kejuruan yang
    berkualitas dan relevan dengan perkembangan teknologi informasi dan komunikasi.
    Sekolah ini berkomitmen mencetak lulusan yang siap menghadapi
    tantangan dunia kerja di era digital.
  `,
  artiLogo: `
    Logo Tut Wuri Handayani melambangkan semangat pendidikan yang mencerdaskan.
    Obor melambangkan ilmu pengetahuan, nyala api sebagai cahaya kebenaran,
    dan lingkaran biru menggambarkan pendidikan yang utuh dan tak terbatas.
  `
}

onMounted(() => {
  sal()
})
</script>
<template>
  <main>
    <!-- HERO -->
    <section class="hero-section-profil d-flex align-items-center">
      <div
        data-sal="slide-up"
        data-sal-duration="900"
        class="container text-center text-white"
      >
        <h1 class="display-4 fw-bold text-uppercase">
          {{ profil.judul }}
        </h1>

        <a href="#profil" class="btn btn-outline-light mt-3">
          Buka Profil Lengkap
          <i class="bi bi-arrow-down"></i>
        </a>
      </div>
    </section>

    <!-- PROFIL -->
    <section id="profil" class="py-5">
      <div class="container">
        <div class="row align-items-center">

          <!-- TEXT -->
          <div class="col-md-8 order-2 order-md-1">
            <h2 data-sal="slide-up" class="text-uppercase">
              Sejarah Sekolah
            </h2>
            <p data-sal="slide-up" class="text-justify">
              {{ profil.sejarah }}
            </p>

            <h5 data-sal="slide-up" class="text-uppercase mt-4">
              Arti Logo Sekolah
            </h5>
            <p data-sal="slide-up" class="text-justify">
              {{ profil.artiLogo }}
            </p>
          </div>

          <!-- IMAGE -->
          <div class="col-md-4 text-center order-1 order-md-2 mb-4 mb-md-0">
            <img
              data-sal="slide-up"
              class="img-fluid w-75 logo-sekolah"
              :src="logoSekolah"
              alt="Logo Sekolah"
              loading="lazy"
            />
          </div>

        </div>
      </div>
    </section>

    <VisiMisi />
    <FasilitasCarousel />
    <KontakSekolah />
  </main>
</template>