<script setup>
import logoSekolah from '../assets/img/logo-sekolah-tut-wuri-handayani.avif'

const menus = [
  { name: "Beranda", link: "/" },
  { name: "Profil Sekolah", link: "/profil" },
  { name: "Berita", link: "/berita" }
]
</script>

<template>
<nav data-sal="slide-down" data-sal-duration="900" class="navbar navbar-expand-lg fixed-top shadow-lg">
      <div class="container">
        <router-link class="navbar-brand" to="/home">
          <img 
        :src="logoSekolah"
        alt="Logo Sekolah"
          height="40"
           >
          </router-link>
          
        <button
          class="navbar-toggler pe-0"
          type="button"
          data-bs-toggle="offcanvas"
          data-bs-target="#offcanvasNavbar"
          aria-controls="offcanvasNavbar"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div
          class="offcanvas offcanvas-end"
          tabindex="-1"
          id="offcanvasNavbar"
          aria-labelledby="offcanvasNavbarLabel"
        >
          <div class="offcanvas-header">
            <h5 class="offcanvas-title text-uppercase" id="offcanvasNavbarLabel">UMMI SDIT IBNU TAIMIYAH</h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="offcanvas"
              aria-label="Close"
            ></button>
          </div>
          <div class="offcanvas-body">
            <ul class="navbar-nav justify-content-center flex-grow-1 pe-3 text-capitalize">
              <li 
              class="nav-item"
              v-for="menu in menus"
              :key="menu.name">
                 <router-link
                    class="nav-link link-nav mx-lg-2"
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

