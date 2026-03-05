<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'

const fasilitas = ref([])

const fetchFasilitas = async () => {
  const { data, error } = await supabase
    .from('fasilitas')
    .select('*')
    .order('urutan', { ascending: true })

  if (error) {
    console.error(error)
  } else {
    fasilitas.value = data
  }
}

onMounted(() => {
  fetchFasilitas()
})
</script>

<template>
<section id="Fasilitas-Sekolah" class="py-5 fasilitas-section">
  <div class="container">

    <h2 class="section-title text-center mb-5">
      Fasilitas Sekolah
    </h2>

    <div
      id="carouselExampleFade"
      class="carousel slide carousel-fade"
      data-bs-ride="carousel"
    >

      <div class="carousel-inner">

        <div
          v-for="(item, index) in fasilitas"
          :key="item.id"
          :class="['carousel-item', { active: index === 0 }]"
        >
          <div class="card fasilitas-card mx-auto">

            <img
              :src="item.gambar"
              class="card-img"
              :alt="item.nama"
            />

            <div class="card-img-overlay fasilitas-overlay d-flex flex-column justify-content-end">

              <h5 class="card-title">
                <i :class="['bi', item.icon, 'me-2']"></i>
                {{ item.nama }}
              </h5>

              <p class="card-text mb-3">
                {{ item.deskripsi }}
              </p>

            </div>

          </div>
        </div>

      </div>

      <!-- BUTTON -->
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon custom-carousel-icon"></span>
      </button>

      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleFade"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon custom-carousel-icon"></span>
      </button>

    </div>
  </div>
</section>
</template>