<template>
  <div class="con">
    <div class="sidebar" :class="{ close: isSidebarClosed }">
      <div class="logo-details">
        <i class="bx bxl-c-plus-plus"></i>
        <span class="logo_name">SideBar</span>
      </div>
      <ul class="nav-links">
        <li>
          <a href="#" class="">
            <i class="bx bx-grid-alt"></i>
            <span class="link_name"> Dashboard </span>
          </a>
          <ul class="sub-menu black">
            <li><a href="#" class="link_name">Dashboard</a></li>
          </ul>
        </li>

        <li>
          <div class="icon-link" @click="toggleSubMenu(0)">
            <a href="" class="">
              <i class="bx bx-collection"></i>
              <span class="link_name"> Catagory </span>
            </a>
            <i class="bx bxs-chevron-down arrow"></i>
          </div>
          <ul class="sub-menu black" :class="{ showMenu: isSubMenuOpen[0] }">
            <li><a href="#" class="link_name">Catagory</a></li>
            <li><a href="#">Web design</a></li>
            <li><a href="#">Card design</a></li>
            <li><a href="#">Login form</a></li>
          </ul>
        </li>

        <li>
          <div class="icon-link" @click="toggleSubMenu(1)">
            <a href="" class="">
              <i class="bx bx-book-alt"></i>
              <span class="link_name"> Posts </span>
            </a>
            <i class="bx bxs-chevron-down arrow"></i>
          </div>
          <ul class="sub-menu black" :class="{ showMenu: isSubMenuOpen[1] }">
            <li><a href="#" class="link_name">Posts</a></li>
            <li><a href="#">HTML</a></li>
            <li><a href="#">CSS</a></li>
            <li><a href="#">Javascript</a></li>
          </ul>
        </li>

        <li class="">
          <a href="" class="">
            <i class="bx bx-grid-alt"></i>
            <span class="link_name"> Analytics </span>
          </a>
          <ul class="sub-menu black">
            <li><a href="#" class="link_name">Analytics</a></li>
          </ul>
        </li>

        <li>
          <div class="icon-link" @click="toggleSubMenu(2)">
            <a href="" class="">
              <i class="bx bx-collection"></i>
              <span class="link_name"> Plugins </span>
            </a>
            <i class="bx bxs-chevron-down arrow"></i>
          </div>
          <ul class="sub-menu black" :class="{ showMenu: isSubMenuOpen[2] }">
            <li><a href="#" class="link_name">Plugins</a></li>
            <li><a href="#">UI Face</a></li>
            <li><a href="#">Pigments</a></li>
            <li><a href="#">Box Icons</a></li>
          </ul>
        </li>

        <li>
          <a href="" class="">
            <i class="bx bx-grid-alt"></i>
            <span class="link_name"> Chart </span>
          </a>
          <ul class="sub-menu black">
            <li><a href="#" class="link_name">Chart</a></li>
          </ul>
        </li>
      </ul>
      <div class="profile-details">
        <div class="profile-content">
          <!-- <img src="pinia.png" alt="" width="100px" /> -->
        </div>
        <div class="name-job">
          <div class="profile_name">yoni</div>
          <div class="job">Software Developer</div>
        </div>
        <i class="bx bx-log-out"></i>
      </div>
    </div>
    <div class="home-section">
      <div class="home-content">
        <i class="bx bx-menu" @click="toggleSidebar"></i>
        <span class="text">Dashboard</span>
      </div>
    </div>
  </div>
</template>

<script setup>
import '~/assets/css/sidebar.css'
import { ref } from "vue";

const isSidebarClosed = ref(false);
const isSubMenuOpen = ref([false, false, false]);

function toggleSidebar() {
  isSidebarClosed.value = !isSidebarClosed.value;
}

function toggleSubMenu(index) {
  isSubMenuOpen.value[index] = !isSubMenuOpen.value[index];
}
</script>
