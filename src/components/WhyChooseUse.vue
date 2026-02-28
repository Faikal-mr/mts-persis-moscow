<script setup>
import { onMounted, nextTick } from 'vue'
import sal from 'sal.js'

onMounted(async () => {
  await nextTick()
  sal({
    once: true
  })
})
</script>

<template>

  <section class="py-5 bg-dark text-capitalize text-white text-center">
        <div class="container">
          <h2 class="text-center mb-3 text-uppercase">mengapa pilih kami?</h2>
          <div class="row">

            <div data-sal="slide-up" data-sal-duration="900" class="col-md-4">
                <i class="bi bi-award fs-1 fst-normal"><h5>akreditas a</h5></i>
              <p>terakreditasi nasional dengan standar pendidikan tinggi</p>
            </div>

            <div data-sal="slide-up" data-sal-duration="900" class="col-md-4">
                <i class="bi bi-buildings fs-1 fst-normal"><h5>fasilitas lengkap</h5></i>       
              <ul class="list-unstyled">
                <li class="mb-3">
                  <i class="bi bi-pc-display fs-5"></i>
                  laboratorium komputer
                </li>

                <li class="mb-3">
                  <i class="bi bi-vector-pen fs-5"></i>
                  studio desain
                </li>

                <li class="mb-3">
                  <i class="bi bi-book"></i>
                  perpustakaan besar
                </li>

              </ul>
            </div>

            <div data-sal="slide-up" data-sal-duration="900" class="col-md-4">
              <i class="bi bi-people bi-people-alumni fs-1 fst-normal">
                <h5>alumni sukses</h5></i>
              <p>90% lulusan diterima di perguruan tinggi ternama</p>
            </div>

          </div>
        </div>
      </section>
</template>