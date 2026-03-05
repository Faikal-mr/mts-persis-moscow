<script setup>
import { onMounted, nextTick } from 'vue'
import sal from 'sal.js'
const reasons = [
  {
    icon: "bi-award",
    title: "akreditasi a",
    description: "terakreditasi nasional dengan standar pendidikan tinggi",
  },
  {
    icon: "bi-buildings",
    title: "fasilitas lengkap",
    list: [
      { icon: "bi-pc-display", text: "laboratorium komputer" },
      { icon: "bi-vector-pen", text: "studio desain" },
      { icon: "bi-book", text: "perpustakaan besar" },
    ],
  },
  {
    icon: "bi-people",
    title: "alumni sukses",
    description: "90% lulusan diterima di perguruan tinggi ternama",
  },
]



onMounted(async () => {
  await nextTick()
  sal({
    once: true
  })
})
</script>

<template>
  <section class="py-5 why-section text-capitalize text-center">
    <div class="container">
      <h2 class="mb-5 text-uppercase section-title-why">
        mengapa pilih kami?
      </h2>

      <div class="row">
        <div
          v-for="(item, index) in reasons"
          :key="index"
          class="col-md-4 mb-4"
          data-sal="fade-up"
          :data-sal-delay="index * 200"
          data-sal-duration="1000"
        >
          <!-- ICON -->
          <i :class="['bi', item.icon, 'reason-icon']"></i>

          <!-- TITLE -->
          <h5 class="fw-bold mb-3 reason-title">
            {{ item.title }}
          </h5>

          <!-- DESCRIPTION -->
          <p v-if="item.description" class="reason-text">
            {{ item.description }}
          </p>

          <!-- LIST -->
          <ul v-if="item.list" class="list-unstyled reason-text">
            <li
              v-for="(listItem, i) in item.list"
              :key="i"
              class="mb-2"
            >
              <i :class="['bi', listItem.icon, 'me-2 list-icon']"></i>
              {{ listItem.text }}
            </li>
          </ul>

        </div>
      </div>
    </div>
  </section>
</template>