<script setup>
import { ref, onMounted } from 'vue'
import { supabase } from '@/lib/supabase'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'

const testimoni = ref([])

onMounted(async () => {
  const { data, error } = await supabase
    .from('testimoni')
    .select('*')
    .order('created_at', { ascending: false })
    .limit(3)

  if (error) {
    console.error(error)
    return
  }

  testimoni.value = data || []
  console.log("TESTIMONI:", testimoni.value)
})
</script>

<template>
  <div class="container py-5">
    <div class="row mb-4">
      <div class="col-12 col-md-10 col-lg-8">
        <h3 class="fs-5 mb-2 text-secondary text-uppercase">testimoni</h3>
        <h2 class="display-5 mb-4 text-capitalize fw-bolder">
          apa pendapat mereka?
        </h2>
      </div>
    </div>

    <div class="row">
      <div class="col-12">
        <div
          id="testimoniCarousel"
          class="carousel slide carousel-fade"
          data-bs-ride="carousel"
        >

          <div class="carousel-inner">

            <div
              v-for="(item, index) in testimoni"
              :key="item.id"
              :class="['carousel-item py-5', { active: index === 0 }]"
            >
              <div class="card mx-auto" style="max-width: 600px;">
                <div class="card-body text-center">

                  <blockquote class="mb-3">
                    <i class="bi bi-quote text-primary"></i>
                    {{ item.isi }}
                  </blockquote>

                  <figure class="d-flex align-items-center justify-content-center m-0">
                    <!-- <img
                      v-if="item.foto_url"
                      :src="item.foto_url"
                      class="rounded-circle border border-2"
                      style="width: 70px; height: 70px; object-fit: cover;"
                      :alt="item.nama"
                    /> -->

                    <figcaption class="ms-3 text-start">
                      <h4 class="mb-1 h5">{{ item.nama }}</h4>
                      <h5 class="fs-6 text-secondary mb-0">
                        {{ item.jabatan }}
                      </h5>
                    </figcaption>
                  </figure>

                </div>
              </div>
            </div>

          </div>

          <button
            type="button"
            class="carousel-control-prev"
            data-bs-target="#testimoniCarousel"
            data-bs-slide="prev"
          >
            <span class="carousel-control-prev-icon"></span>
          </button>

          <button
            type="button"
            class="carousel-control-next"
            data-bs-target="#testimoniCarousel"
            data-bs-slide="next"
          >
            <span class="carousel-control-next-icon"></span>
          </button>

        </div>
      </div>
    </div>
  </div>
</template>