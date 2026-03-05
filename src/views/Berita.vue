<script setup>
import { ref, onMounted, computed } from 'vue'
import { supabase } from '@/lib/supabase'
import { RouterLink } from 'vue-router'

const berita = ref([])
const search = ref('')
const loading = ref(true)

const currentPage = ref(1)
const perPage = 6

function formatTanggal(tgl) {
  return new Date(tgl).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

onMounted(async () => {
  const { data } = await supabase
    .from('berita')
    .select('*')
    .order('created_at', { ascending: false })

  berita.value = data || []
  loading.value = false
})

/* =========================
   HERO SECTION DATA
========================= */

const heroUtama = computed(() => berita.value[0])
const heroKanan = computed(() => berita.value.slice(1, 3))

/* =========================
   FILTER + PAGINATION
========================= */

const filtered = computed(() => {
  return berita.value.filter(item =>
    item.judul.toLowerCase().includes(search.value.toLowerCase())
  )
})

const totalPages = computed(() =>
  Math.ceil(filtered.value.length / perPage)
)

const paginated = computed(() => {
  const start = (currentPage.value - 1) * perPage
  return filtered.value.slice(start, start + perPage)
})
</script>

<template>
<main v-if="!loading">

  <!-- ================= HERO SECTION ================= -->
  <section class="hero-section-pages py-5 mt-5">
    <div class="container">

      <!-- Header + Search -->
      <div class="row align-items-center justify-content-between mb-4">

        <div class="col-lg-4 col-md-5 order-2 order-md-1">
          <h2 class="section-title mb-0">Berita Terbaru</h2>
        </div>

        <div class="col-lg-4 col-md-5 order-1 order-md-2">
          <div class="d-flex news-search">
            <input
              v-model="search"
              class="form-control"
              placeholder="Cari berita..."
            />
            <button class="btn btn-search ms-2">
              <i class="bi bi-search"></i>
            </button>
          </div>
        </div>

      </div>

      <div class="row g-4">

        <!-- HERO UTAMA -->
        <div class="col-md-8" v-if="heroUtama">
          <div class="card hero-card border-0">

            <img
              :src="heroUtama.gambar"
              class="card-img hero-img"
              :alt="heroUtama.judul"
            />

            <div class="card-img-overlay hero-overlay">
              <h3 class="mb-3">
                {{ heroUtama.judul }}
              </h3>

              <div class="news-meta mb-3">
                <i class="bi bi-calendar-event me-2"></i>
                {{ formatTanggal(heroUtama.created_at) }}
              </div>

              <RouterLink
                :to="`/berita/${heroUtama.slug}`"
                class="btn btn-accent btn-sm"
              >
                Baca Selengkapnya
                <i class="bi bi-chevron-right ms-1"></i>
              </RouterLink>
            </div>

          </div>
        </div>

        <!-- HERO KANAN -->
        <div class="col-md-4">
          <div class="row g-4">

            <div
              class="col-12"
              v-for="item in heroKanan"
              :key="item.id"
            >
              <div class="card hero-small border-0">

                <img
                  :src="item.gambar"
                  class="card-img small-img"
                />

                <div class="card-img-overlay hero-overlay small">
                  <h5 class="mb-2">{{ item.judul }}</h5>

                  <div class="news-meta mb-2">
                    <i class="bi bi-calendar-event me-2"></i>
                    <small>{{ formatTanggal(item.created_at) }}</small>
                  </div>

                  <RouterLink
                    :to="`/berita/${item.slug}`"
                    class="btn btn-accent btn-sm"
                  >
                    Baca
                  </RouterLink>
                </div>

              </div>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

  <!-- ================= LIST BERITA ================= -->
  <section class="py-5 news-section">
    <div class="container">
      <div class="row">

        <!-- CONTENT -->
        <div class="col-lg-9">

          <div class="mb-4">
            <h2 class="section-title">
              <i class="bi bi-newspaper me-2"></i>
              Berita Terkini
            </h2>
            <p class="section-subtitle">
              Berita & kegiatan terbaru sekolah
            </p>
          </div>

          <div class="row gy-4">

            <div
              class="col-sm-6"
              v-for="item in paginated"
              :key="item.id"
            >
              <div class="card news-card border-0">

                <RouterLink
                  :to="`/berita/${item.slug}`"
                  class="text-decoration-none"
                >
                  <img
                    :src="item.gambar"
                    class="card-img-top img-news"
                  />

                  <div class="card-body px-0">
                    <h5 class="news-title">
                      {{ item.judul }}
                    </h5>

                    <p class="news-meta small">
                      <i class="bi bi-calendar-event me-2"></i>
                      {{ formatTanggal(item.created_at) }}
                    </p>
                  </div>

                </RouterLink>
              </div>
            </div>

          </div>

          <!-- PAGINATION -->
          <nav class="mt-5">
            <ul class="pagination justify-content-center custom-pagination">

              <li
                v-for="page in totalPages"
                :key="page"
                class="page-item"
                :class="{ active: page === currentPage }"
              >
                <button
                  class="page-link"
                  @click="currentPage = page"
                >
                  {{ page }}
                </button>
              </li>

            </ul>
          </nav>

        </div>

        <!-- SIDEBAR -->
        <div class="col-lg-3">
          <div class="position-sticky" style="top:8rem">

            <div class="sidebar-card p-4">
              <h6 class="text-uppercase sidebar-title">
                <i class="bi bi-shield-check me-2"></i>
                Verifikasi Informasi
              </h6>

              <p class="small mb-0">
                Semua berita dipublikasikan oleh Tim Humas dan telah diverifikasi.
              </p>
            </div>

          </div>
        </div>

      </div>
    </div>
  </section>

</main>

<div v-else class="text-center py-5">Loading...</div>
</template>

