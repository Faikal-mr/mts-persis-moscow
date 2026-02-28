<script setup>
const currentYear = new Date().getFullYear()

const quickLinks = [
  { icon: 'bi-house', text: 'Beranda', href: '#' },
  { icon: 'bi-info-circle', text: 'Profil Sekolah', href: 'profil-sekolah.html' },
  { icon: 'bi-code-slash', text: 'Rekayasa Perangkat Lunak', href: 'Program-Keahlian-RPL.html' },
  { icon: 'bi-router', text: 'Teknik Komputer dan Jaringan', href: 'Program-Keahlian-TKJ.html' },
  { icon: 'bi-palette', text: 'Desain Komunikasi Visual', href: 'Program-Keahlian-DKV.html' },
  { icon: 'bi-newspaper', text: 'Berita & Kegiatan', href: 'berita-kegiatan.html' }
]

const contactInfo = [
  {
    icon: 'bi-geo-alt-fill',
    text: 'Jl. Sam Ratulangi No. 45, Kel. Tikala, Kec. Wenang, Manado',
    href: 'https://maps.app.goo.gl/3rtx7N8ydF3xB2T36'
  },
  {
    icon: 'bi-telephone-fill',
    text: '+62 123 4567 8910',
    href: 'https://wa.me/+62812345678910'
  },
  {
    icon: 'bi-envelope',
    text: 'info@digitalmanado.sch.id',
    href: 'mailto:info@digitalmanado.sch.id'
  }
]

const socialMedia = [
  { icon: 'bi-instagram', href: 'https://www.instagram.com', label: 'Instagram' },
  { icon: 'bi-tiktok', href: 'https://www.tiktok.com/explore', label: 'Tiktok' },
  { icon: 'bi-youtube', href: 'https://www.youtube.com/@Miawhhh', label: 'Youtube' },
  { icon: 'bi-facebook', href: 'https://www.facebook.com', label: 'Facebook' }
]
</script>

<template>
<section class="bg-dark py-5">
  <footer class="mt-auto bg-dark text-white pt-4 pb-4">
    <div class="container">
      <div class="row">

        <!-- Tentang Sekolah -->
        <div class="col-md-3 mb-3">
          <h5>SMK Inovasi Digital Manado</h5>
          <p>
            SMK berbasis teknologi digital di Manado yang berkomitmen
            mencetak generasi profesional di bidang RPL, TKJ, dan DKV.
            Terakreditasi A dengan fasilitas modern serta tenaga pendidik berpengalaman.
          </p>
        </div>

        <!-- Tautan Cepat -->
        <div class="col-md-3 mb-3">
          <h5>Tautan Lainnya</h5>
          <ul class="list-unstyled">
            <li
              v-for="(link, index) in quickLinks"
              :key="index"
              class="nav-item"
            >
              <a
                :href="link.href"
                class="nav-link text-white link-footer"
              >
                <i :class="['bi', link.icon, 'me-2']"></i>
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Kontak -->
        <div class="col-md-3 mb-3">
          <h5>Informasi</h5>
          <ul class="list-unstyled">
            <li
              v-for="(info, index) in contactInfo"
              :key="index"
              class="nav-item"
            >
              <a
                :href="info.href"
                target="_blank"
                class="nav-link text-white link-footer"
              >
                <i :class="['bi', info.icon, 'me-2']"></i>
                {{ info.text }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Media Sosial -->
        <div class="col-md-3 mb-3">
          <h5>Media Sosial</h5>
          <ul class="list-inline">
            <li
              v-for="(social, index) in socialMedia"
              :key="index"
              class="list-inline-item"
            >
              <a
                :href="social.href"
                target="_blank"
                class="text-white"
                :aria-label="social.label"
              >
                <i :class="['bi', social.icon, 'fs-4']"></i>
              </a>
            </li>
          </ul>
        </div>

      </div>

      <hr class="bg-light" />

      <div class="row">
        <div class="col-md-12 text-center">
          <p class="mb-0">
            &copy; {{ currentYear }} SMK Inovasi Digital Manado. Seluruh hak cipta dilindungi.
          </p>
        </div>
      </div>

    </div>
  </footer>
</section>
</template>