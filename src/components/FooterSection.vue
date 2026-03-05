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
<section class="footer-section py-5">
  <footer class="mt-auto pt-4 pb-4">
    <div class="container">
      <div class="row">

        <!-- Tentang Sekolah -->
        <div class="col-md-3 mb-4">
          <h5 class="footer-title">MTs Persis Tokyo</h5>
          <p class="footer-text">
            MTS berbasis teknologi digital di Tokyo yang berkomitmen
            mencetak generasi profesional di bidang RPL, TKJ, dan DKV.
            Terakreditasi A dengan fasilitas modern serta tenaga pendidik berpengalaman.
          </p>
        </div>

        <!-- Tautan Cepat -->
        <div class="col-md-3 mb-4">
          <h5 class="footer-title">Tautan Lainnya</h5>
          <ul class="list-unstyled">
            <li v-for="(link, index) in quickLinks" :key="index">
              <a :href="link.href" class="footer-link">
                <i :class="['bi', link.icon, 'me-2']"></i>
                {{ link.text }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Kontak -->
        <div class="col-md-3 mb-4">
          <h5 class="footer-title">Informasi</h5>
          <ul class="list-unstyled">
            <li v-for="(info, index) in contactInfo" :key="index">
              <a :href="info.href" target="_blank" class="footer-link">
                <i :class="['bi', info.icon, 'me-2']"></i>
                {{ info.text }}
              </a>
            </li>
          </ul>
        </div>

        <!-- Media Sosial -->
        <div class="col-md-3 mb-4">
          <h5 class="footer-title">Media Sosial</h5>
          <div class="social-icons">
            <a
              v-for="(social, index) in socialMedia"
              :key="index"
              :href="social.href"
              target="_blank"
              :aria-label="social.label"
            >
              <i :class="['bi', social.icon]"></i>
            </a>
          </div>
        </div>

      </div>

      <hr class="footer-divider" />

      <div class="text-center mt-3">
        <p class="copyright">
          &copy; {{ currentYear }} MTs Persis Tokyo. Seluruh hak cipta dilindungi.
        </p>
      </div>

    </div>
  </footer>
</section>
</template>