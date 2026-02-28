<script setup>
import { ref, onMounted, computed } from 'vue'
import { supabase } from '@/lib/supabase'

const berita = ref([])
const mainBerita = ref(null)
const sideBerita = ref([])

onMounted(async () => {
  const { data, error } = await supabase
    .from('berita')
    .select('*')
    .order('created_at', { ascending: false})
    .limit (3)

  if (error) {
    console.error(error)
    return
  }

  berita.value = data || []

  if (berita.value.length > 0) {
    mainBerita.value = berita.value[0]
    sideBerita.value = berita.value.slice(1, 3)
  }

  console.log("MAIN:", mainBerita.value)
  console.log("SIDE:", sideBerita.value)
})

const formatTanggal = (tanggal) => {
  return new Date(tanggal).toLocaleDateString('id-ID', {
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}
</script>

<template>



 <!-- ini yang bisa tertampilkan -->
  <!-- <div style="background:lightblue; padding:20px;">
    <h2>Berita Terbaru</h2>
    <p>Total berita: {{ berita.length }}</p>

    <div
      v-for="item in berita"
      :key="item.id"
      style="background:yellow; margin-bottom:20px;"
    >
      <strong>{{ item.judul }}</strong>
      <br />
      {{ item.gambar }}
      <div><img 
         v-if="item.gambar || 'https://via.placeholder.com/800x500' "
         :src="item.gambar"
         alt="siswa/i tkj kelas 12 sedang melakukan ukk" 
         class="card-img" 
         style="height: 500px; object-fit: cover" /></div>
    </div>
    
  </div> -->
<div class="container py-5">
  <div class="text-center mb-4">
    <h2 class="text-uppercase mb-3 fw-bold">berita terbaru</h2>
    <router-link :to="`/`"class="btn btn-outline-dark text-capitalize mb-4 mb-md-3">berita lainnya </router-link>
  </div>

  <div class="row g-3">

    <!-- ================= MAIN BERITA ================= -->
    <div class="col-md-8" v-if="berita.length > 0">
      <div  class="card text-white border-0 overflow-hidden">
        <img
          :src="berita[0].gambar ? berita[0].gambar : 'https://via.placeholder.com/800x500'"
          class="card-img"
          style="height:500px; object-fit:cover"
        />

        <div class="card-img-overlay img-bg-shadow d-flex flex-column justify-content-end p-3 p-md-4">
          <h3 class="card-title news-text text-capitalize fs-2 mb-3">
            {{ berita[0].judul }}
          </h3>

          <div class="d-flex align-items-center gap-2 mb-3">
            <i class="bi bi-calendar-event"></i>
            <span>
              {{ formatTanggal(berita[0].created_at) }}
            </span>
          </div>

          <router-link
            :to="`/berita/${berita[0].slug}`"
            class="btn btn-light btn-sm align-self-start"
          >
            baca selengkapnya
          </router-link>
        </div>
      </div>
    </div>

    <!-- ================= SIDE BERITA ================= -->
    <div class="col-md-4">
      <div class="row g-3">

        <div
          class="col-12"
          v-for="item in berita.slice(1,3)"
          :key="item.id"
        >
          <div  class="card text-white border-0 h-100 overflow-hidden">
            <img
              :src="item.gambar ? item.gambar : 'https://via.placeholder.com/400x240'"
              class="card-img"
              style="height:240px; object-fit:cover"
            />

            <div class="card-img-overlay img-bg-shadow d-flex flex-column justify-content-end p-3">
              <h5 class="card-title news-text mb-2">
                {{ item.judul }}
              </h5>

              <div class="d-flex align-items-center gap-2 mb-2">
                <i class="bi bi-calendar-event"></i>
                <span>
                  {{ formatTanggal(item.created_at) }}
                </span>
              </div>

              <router-link
                :to="`/berita/${item.slug}`"
                class="btn btn-light btn-sm align-self-start"
              >
                Baca Selengkapnya
              </router-link>
            </div>
          </div>
        </div>

      </div>
    </div>

  </div>
</div>


  


</template>