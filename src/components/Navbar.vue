<script setup>
import logoSekolah from '../assets/img/logo-baru-ummi.avif'

const menus = [
  { name: "Beranda", link: "/" },
  { name: "Profil Sekolah", link: "/profil" },
  { name: "Berita", link: "/berita" }
]
</script>

<template>
  <nav class="navbar navbar-expand-lg fixed-top custom-navbar shadow-sm">
    <div class="container">

      <!-- Logo -->
      <router-link class="navbar-brand d-flex align-items-center" to="/home">
        <img
          :src="logoSekolah"
          alt="Logo Sekolah"
          height="40"
        />
      </router-link>

      <!-- Toggle -->
      <button
        class="navbar-toggler"
        type="button"
        data-bs-toggle="offcanvas"
        data-bs-target="#offcanvasNavbar"
      >
        <span class="navbar-toggler-icon"></span>
      </button>

      <!-- Offcanvas -->
      <div
        class="offcanvas offcanvas-end custom-offcanvas"
        tabindex="-1"
        id="offcanvasNavbar"
      >
        <div class="offcanvas-header">
          <h5 class="offcanvas-title text-uppercase fw-bold">
            UMMI SDIT IBNU TAIMIYAH
          </h5>
          <button
            type="button"
            class="btn-close"
            data-bs-dismiss="offcanvas"
          ></button>
        </div>

        <div class="offcanvas-body">
          <ul class="navbar-nav ms-auto text-capitalize ">

            <li
              v-for="menu in menus"
              :key="menu.name"
              class="nav-item"
            >
              <router-link
                class="nav-link custom-link"
                :to="menu.link"
                active-class="active"
              >
                {{ menu.name }}
              </router-link>
            </li>

          </ul>
        </div>
      </div>

    </div>
  </nav>
</template>

