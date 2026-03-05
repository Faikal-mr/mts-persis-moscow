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
  <section v-if="!loading && berita" class="news-detail-section py-5">
    <div class="container">
      <div class="row justify-content-center">
        <div class="col-lg-10">

          <!-- HERO IMAGE -->
          <img
            v-if="berita.gambar"
            :src="berita.gambar"
            class="img-fluid rounded-4 mb-4 news-hero-img"
            :alt="berita.judul"
          />

          <!-- JUDUL -->
          <h1 class="news-title-detail mt-3">
            {{ berita.judul }}
          </h1>

          <!-- META -->
          <div class="meta-info mb-4">

            <div class="meta-item">
              <i class="bi bi-calendar-event"></i>
              <span>{{ formatTanggal(berita.created_at) }}</span>
            </div>

            <div class="meta-item">
              <i class="bi bi-person"></i>
              <span>
                Oleh <strong>{{ berita.penulis || 'Admin' }}</strong>
              </span>
            </div>

            <div class="meta-item">
              <i class="bi bi-tag"></i>
              <span>{{ berita.kategori || 'Berita' }}</span>
            </div>

          </div>

          <!-- ISI ARTIKEL -->
          <article
            class="article-content"
            v-html="berita.isi">
          </article>

          <!-- FOOTER -->
          <div class="news-footer mt-5 pt-4">

            <!-- TAG -->
            <div class="mb-4">
              <span
                v-for="(tag, index) in berita.tags?.split(',')"
                :key="index"
                class="custom-badge me-2"
              >
                {{ tag }}
              </span>
            </div>

            <!-- BACK BUTTON -->
            <div class="mb-4">
              <button
                @click="router.push('/berita')"
                class="btn btn-outline-theme btn-sm"
              >
                <i class="bi bi-arrow-left me-1"></i>
                Kembali ke Berita
              </button>
            </div>

            <!-- SHARE -->
            <div>
              <small class="me-2 text-muted">Bagikan:</small>

              <button class="btn btn-share btn-sm me-2">
                <i class="bi bi-facebook"></i>
              </button>

              <button class="btn btn-share btn-sm me-2">
                <i class="bi bi-instagram"></i>
              </button>

              <button class="btn btn-share btn-sm me-2">
                <i class="bi bi-twitter-x"></i>
              </button>

              <button class="btn btn-share btn-sm">
                <i class="bi bi-link-45deg"></i>
              </button>
            </div>

          </div>

          <!-- RELATED -->
          <div class="related-section mt-5">
            <h5 class="related-title mb-4">
              Berita Terkait
            </h5>

            <div class="row">
              <div
                v-for="item in related"
                :key="item.id"
                class="col-md-4"
              >
                <div class="card related-card border-0 mb-4">
                  <router-link
                    :to="`/berita/${item.slug}`"
                    class="text-decoration-none"
                  >
                    <img
                      :src="item.gambar"
                      class="card-img-top img-news rounded-3"
                      :alt="item.judul"
                    />

                    <div class="card-body px-0">
                      <h6 class="related-post-title">
                        {{ item.judul }}
                      </h6>

                      <p class="related-meta small">
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
