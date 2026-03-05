<script setup>
import { onMounted, nextTick } from 'vue'
import sal from 'sal.js'

import rplImg from '@/assets/img/jurusan-rpl.avif'
import tkjImg from '@/assets/img/jurusan-tkj.avif'
import dkvImg from '@/assets/img/jurusan-dkv.avif'

const jurusans = [
  {
    nama: "Rekayasa Perangkat Lunak (RPL)",
    deskripsi: "Berfokus pada perancangan, pengembangan, dan pemeliharaan perangkat lunak.",
    gambar: rplImg,
    link: "/rpl"
  },
  {
    nama: "Teknik Komputer dan Jaringan (TKJ)",
    deskripsi: "Berfokus pada instalasi dan pemeliharaan jaringan komputer.",
    gambar: tkjImg,
    link: "/tkj"
  },
  {
    nama: "Desain Komunikasi Visual (DKV)",
    deskripsi: "Berfokus pada desain grafis dan media visual.",
    gambar: dkvImg,
    link: "/dkv"
  }
]

onMounted(async () => {
  await nextTick()
  sal({
    once: true,
    duration: 900,
    delay: 200,
    threshold: 0.2,
    easing: 'ease-out'
  })
})
</script>

<template>
  <section class="py-5 jurusan-section">
    <div class="container">
      <h2 class="text-center mb-5 fw-bold section-title">
        JURUSAN UNGGULAN
      </h2>

      <div class="row">
        <div 
          class="col-md-4 pt-2"
          v-for="jurusan in jurusans"
          :key="jurusan.nama"
        >
          <div 
            data-sal="slide-up"
            class="card jurusan-card h-100 border-0"
          >
            <img
              :src="jurusan.gambar"
              class="card-img-top img-jurusan"
              loading="lazy"
            />

            <div class="card-body">
              <h5 class="card-title text-capitalize jurusan-title">
                {{ jurusan.nama }}
              </h5>

              <p class="card-text text-capitalize jurusan-text">
                {{ jurusan.deskripsi }}
              </p>

              <router-link
                :to="jurusan.link"
                class="jurusan-link"
              >
                baca selengkapnya
                <i class="bi bi-chevron-right"></i>
              </router-link>
            </div>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>