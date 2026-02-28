<script setup>
import { ref, onMounted, computed } from 'vue'
import { useRoute, useRouter, onBeforeRouteUpdate } from 'vue-router'
import { supabase } from '@/lib/supabase'

const route = useRoute()
const router = useRouter()

const berita = ref(null)
const related = ref([])
const loading = ref(true)

function formatTanggal(tgl) {
  return new Date(tgl).toLocaleDateString('id-ID', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    year: 'numeric'
  })
}

onMounted(async () => {
  // Ambil berita utama
  const { data, error } = await supabase
    .from('berita')
    .select('*')
    .eq('slug', route.params.slug)
    .single()

  if (!error) {
    berita.value = data

    // Ambil berita terkait (selain slug ini)
    const { data: relatedData } = await supabase
      .from('berita')
      .select('*')
      .neq('slug', route.params.slug)
      .limit(3)

    related.value = relatedData || []
  }

  loading.value = false
})

onBeforeRouteUpdate((to) => {
  fetchBerita(to.params.slug)
})

</script>

<template>
  <section v-if="!loading && berita" class="hero-sections-kegiatan py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">

          <!-- Hero Image -->
          <img
            v-if="berita.gambar"
            :src="berita.gambar"
            class="img-fluid rounded mb-4 hero-img"
            :alt="berita.judul"
          />

          <!-- Judul -->
          <h1 class="display-5 fw-bold mt-3">
            {{ berita.judul }}
          </h1>

          <!-- Meta Info -->
          <div class="d-flex flex-wrap text-muted mb-4 meta-info">

            <div class="me-3 d-flex align-items-center">
              <i class="bi bi-calendar-event me-2"></i>
              <small>{{ formatTanggal(berita.created_at) }}</small>
            </div>

            <div class="me-3 d-flex align-items-center">
              <i class="bi bi-person me-2"></i>
              <small>
                Oleh <strong>{{ berita.penulis || 'Admin' }}</strong>
              </small>
            </div>

            <div class="me-3 d-flex align-items-center">
              <i class="bi bi-tag me-2"></i>
              <small>{{ berita.kategori || 'Berita' }}</small>
            </div>

          </div>

          <!-- Isi Artikel -->
          <article class="article-content" v-html="berita.isi"></article>

          <!-- Footer Artikel -->
          <div class="mt-5 border-top pt-4">

            <!-- Tag -->
            <div class="mb-3">
              <span
                v-for="(tag, index) in berita.tags?.split(',')"
                :key="index"
                class="badge bg-primary me-2"
              >
                {{ tag }}
              </span>
            </div>

            <!-- Tombol Kembali -->
            <div class="pb-3">
              <button
                @click="router.push('/berita')"
                class="btn btn-outline-secondary btn-sm"
              >
                <i class="bi bi-arrow-left me-1"></i>
                Kembali ke Berita
              </button>
            </div>

            <!-- Share Button -->
            <div class="mb-3">
              <small class="text-muted me-2">Bagikan:</small>

              <a href="#" class="btn btn-outline-primary btn-sm me-1">
                <i class="bi bi-facebook"></i>
              </a>

              <a href="#" class="btn btn-outline-primary btn-sm me-1">
                <i class="bi bi-instagram"></i>
              </a>

              <a href="#" class="btn btn-outline-primary btn-sm me-1">
                <i class="bi bi-twitter-x"></i>
              </a>

              <a href="#" class="btn btn-outline-primary btn-sm">
                <i class="bi bi-link-45deg"></i>
              </a>
            </div>

          </div>

          <!-- Related Post -->
          <div class="pb-5 mt-5">
            <h5 class="mb-4">Berita Terkait</h5>

            <div class="row">
              <div
                v-for="item in related"
                :key="item.id"
                class="col-md-4"
              >
                <div class="card border-0 mb-4 related-card">
                  <router-link
                    :to="`/berita/${item.slug}`"
                    class="text-decoration-none text-dark"
                  >
                    <img
                      :src="item.gambar"
                      class="card-img-top img-news"
                      :alt="item.judul"
                    />
                    <div class="card-body ps-0">
                      <h6 class="card-title">
                        {{ item.judul }}
                      </h6>

                      <p class="text-muted small">
                        <i class="bi bi-calendar-event me-2"></i>
                        {{ formatTanggal(item.created_at) }}
                      </p>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </div>
  </section>

  <div v-else class="text-center py-5">
    Loading...
  </div>
</template>

<style scoped>
.hero-img {
  max-height: 450px;
  object-fit: cover;
  width: 100%;
}

.meta-info small {
  font-size: 0.9rem;
}

.article-content {
  font-size: 1.05rem;
  line-height: 1.9;
}

.article-content p {
  margin-bottom: 1.2rem;
}

.related-card img {
  height: 180px;
  object-fit: cover;
}

.related-card h6 {
  font-weight: 600;
  font-size: 0.95rem;
}
</style>