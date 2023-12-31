<template>
  <nav class="bg-white border-b-[1px] border-gray-200">
    <div
      class="max-w-screen-2xl flex flex-wrap items-center justify-between py-4 px-5"
    >
      <a
        href="https://corpy.co.jp/"
        class="flex items-center space-x-3 rtl:space-x-reverse"
      >
        <img
          src="../assets/logo.ico"
          class="h-8 rounded-sm"
          alt="Flowbite Logo"
        />
      </a>
      <div class="hidden w-full md:block md:w-auto" id="navbar-default">
        <ul
          class="font-medium flex flex-col p-4 md:p-0 mt-4 border border-gray-100 rounded-lg bg-gray-50 md:flex-row md:space-x-8 rtl:space-x-reverse md:mt-0 md:border-0 md:bg-white"
        >
          <li>
            <IconsBell class="text-gray-500 w-5 h-6 pt-1" />
          </li>
          <li>
            <div class="bg-black text-white rounded-md p-1">CO</div>
          </li>
        </ul>
      </div>
    </div>
  </nav>
</template>

<script setup lang="ts"></script>
