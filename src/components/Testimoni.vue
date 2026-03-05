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
  <section class="testimonial-section py-5">
    <div class="container">

      <!-- Heading -->
      <div class="text-center mb-5">
        <h5 class="testimonial-subtitle text-uppercase">
          Testimoni
        </h5>
        <h2 class="section-title text-capitalize">
          Apa Pendapat Mereka?
        </h2>
      </div>

      <!-- Carousel -->
      <div
        id="testimoniCarousel"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">

          <div
            v-for="(item, index) in testimoni"
            :key="item.id"
            v-animate
            :class="['carousel-item py-5', { active: index === 0 }]"
          >
            <div class="testimonial-card mx-auto">

              <div class="quote-icon mb-3">
                <i class="bi bi-quote"></i>
              </div>

              <p class="testimonial-text">
                {{ item.isi }}
              </p>

              <div class="testimonial-user mt-4">
                <h4 class="mb-1">{{ item.nama }}</h4>
                <span class="jabatan">
                  {{ item.jabatan }}
                </span>
              </div>

            </div>
          </div>

        </div>

        <!-- Controls -->
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
  </section>
</template>