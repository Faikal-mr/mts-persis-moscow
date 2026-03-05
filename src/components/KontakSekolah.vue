<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'

const kontak = ref(null)
const loading = ref(true)

const fetchKontak = async () => {
  const { data, error } = await supabase
    .from('kontak_sekolah')
    .select('*')
    .single()

  if (error) {
    console.error('Error ambil kontak:', error)
  } else {
    kontak.value = data
  }

  loading.value = false
}

onMounted(fetchKontak)
</script>

<template>
<section v-if="!loading && kontak" class="py-5 kontak-section">
  <div class="container">
    <div class="row align-items-center g-4">

      <!-- CARD INFO -->
      <div class="col-md-6">
        <div class="card kontak-card h-100">
          <div class="card-body p-4">
            <h3 class="section-title text-center mb-4">
              Kontak Kami
            </h3>

            <p>
              <strong class="label">Alamat:</strong><br>
              <a :href="kontak.link_maps" target="_blank" class="custom-link">
                {{ kontak.alamat }}
              </a>
            </p>

            <p>
              <strong class="label">WhatsApp:</strong><br>
              <a :href="`https://wa.me/${kontak.whatsapp}`" target="_blank" class="custom-link">
                {{ kontak.whatsapp }}
              </a>
            </p>

            <p>
              <strong class="label">Email:</strong><br>
              <a :href="`mailto:${kontak.email}`" class="custom-link">
                {{ kontak.email }}
              </a>
            </p>

            <a
              :href="kontak.brosur"
              class="btn custom-btn mt-3"
              download
            >
              Unduh Brosur
            </a>

          </div>
        </div>
      </div>

      <!-- MAP -->
      <div class="col-md-6">
        <div class="card kontak-card">
          <div class="ratio ratio-16x9">
            <iframe
              :src="kontak.link_embed_maps"
              loading="lazy"
              style="border:0;"
            ></iframe>
          </div>
        </div>
      </div>

    </div>
  </div>
</section>

<div v-else class="text-center py-5 text-muted">
  Loading kontak...
</div>
</template>