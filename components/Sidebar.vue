<template>
  <button
    data-drawer-target="separator-sidebar"
    data-drawer-toggle="separator-sidebar"
    aria-controls="separator-sidebar"
    type="button"
    class="inline-flex items-center p-2 mt-2 ms-3 text-sm text-gray-500 rounded-lg sm:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
  >
    <span class="sr-only">Open sidebar</span>
    <svg
      class="w-6 h-6"
      aria-hidden="true"
      fill="currentColor"
      viewBox="0 0 20 20"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        clip-rule="evenodd"
        fill-rule="evenodd"
        d="M2 4.75A.75.75 0 012.75 4h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 4.75zm0 10.5a.75.75 0 01.75-.75h7.5a.75.75 0 010 1.5h-7.5a.75.75 0 01-.75-.75zM2 10a.75.75 0 01.75-.75h14.5a.75.75 0 010 1.5H2.75A.75.75 0 012 10z"
      ></path>
    </svg>
  </button>
  <aside
    id="separator-sidebar"
    class="fixed top-16 left-0 z-40 w-16 h-screen transition-transform -translate-x-full sm:translate-x-0 border-r-[1px] border-gray-200"
    aria-label="Sidebar"
  >
    <div class="h-full py-4 overflow-y-auto">
      <ul class="space-y-2 font-medium px-3">
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group"
          >
            <IconsDatabase class="text-gray-500 w-6 h-7" />
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group"
          >
            <IconsRobo class="text-gray-500 w-6 h-7" />
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group"
          >
            <IconsRocket class="text-gray-500 w-6 h-7" />
          </a>
        </li>
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 rounded-lg hover:bg-gray-200 group"
          >
            <IconsCard class="text-gray-500 w-6 h-7" />
          </a>
        </li>
      </ul>
      <ul class="pt-4 mt-4 space-y-2 font-medium border-t border-gray-200 px-3">
        <li>
          <a
            href="#"
            class="flex items-center p-2 text-gray-900 bg-blue-600 transition duration-75 rounded-lg hover:bg-blue-400 group"
          >
            <IconsPlus class="text-white w-6 h-5" />
          </a>
        </li>
      </ul>
    </div>
  </aside>
</template>

<script setup lang="ts"></script>
