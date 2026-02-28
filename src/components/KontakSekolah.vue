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
<section v-if="!loading && kontak" class="py-5">
  <div class="container">
    <div class="row align-items-center">

      <!-- CARD -->
      <div class="col-md-6">
        <div class="card shadow">
          <div class="card-body">
            <h3 class="text-center mb-4">Kontak Kami</h3>

            <p><strong>Alamat: </strong>
              <a :href="kontak.link_maps" target="_blank" class="text-link"> 
                {{ kontak.alamat }}
              </a>
            </p>

            <p><strong>WhatsApp: </strong>
              <a :href="`https://wa.me/${kontak.whatsapp}`" target="_blank" class="text-link">
                {{ kontak.whatsapp }}
              </a>
            </p>

            <p><strong>Email: </strong>
              <a :href="`mailto:${kontak.email}`" class="text-link">
                {{ kontak.email }}
              </a>
            </p>

            <a :href="kontak.brosur"
               class="btn btn-primary"
               download>
              Unduh Brosur
            </a>

          </div>
        </div>
      </div>

      <!-- MAP -->
      <div class="col-md-6">
        <div class="card shadow">
        <div class="ratio ratio-16x9">
          <iframe
            :src="kontak.link_embed_maps"
            style="border:0;"
            loading="lazy">
          </iframe>
        </div>
        </div>
      </div>



    </div>
  </div>
</section>

<div v-else class="text-center py-5">
  Loading kontak...
</div>
</template>