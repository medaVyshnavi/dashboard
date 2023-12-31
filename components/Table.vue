<template>
  <div class="relative overflow-x-auto shadow-md sm:rounded-lg mt-10">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
      <thead class="text-xs text-gray-700 uppercase bg-gray-50">
        <tr>
          <th scope="col" class="p-4">
            <div class="flex items-center">
              <input
                id="checkbox-all-search"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-all-search" class="sr-only">checkbox</label>
            </div>
          </th>
          <th></th>
          <th scope="col" class="px-6 py-3">データセット名</th>
          <th scope="col" class="px-6 py-3">行数 X 例数</th>
          <th scope="col" class="px-6 py-3">作成日</th>
          <th scope="col" class="px-6 py-3">更新日</th>
          <th scope="col" class="px-6 py-3">ステータス</th>
        </tr>
      </thead>
      <tbody>
        <tr class="bg-white border-b hover:bg-gray-50">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-table-search-1" class="sr-only"
                >checkbox</label
              >
            </div>
          </td>
          <td class="w-4 p-4"><IconsDownArrow /></td>
          <td class="px-6 py-4">test.csv</td>
          <td class="px-6 py-4">3000 X 2000</td>
          <td class="px-6 py-4">2023年5月2日</td>
          <td class="px-6 py-4">2023年5月10日</td>
          <td class="px-6 py-4">OK</td>
        </tr>
        <tr class="bg-white border-b hover:bg-gray-50">
          <td class="w-4 p-4">
            <div class="flex items-center">
              <input
                id="checkbox-table-search-1"
                type="checkbox"
                class="w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500 dark:focus:ring-offset-gray-800 focus:ring-2 dark:bg-gray-700 dark:border-gray-600"
              />
              <label for="checkbox-table-search-1" class="sr-only"
                >checkbox</label
              >
            </div>
          </td>
          <td class="w-4 p-4"><IconsDownArrow /></td>
          <td class="px-6 py-4">test.csv</td>
          <td class="px-6 py-4">3000 X 2000</td>
          <td class="px-6 py-4">2023年5月2日</td>
          <td class="px-6 py-4">2023年5月10日</td>
          <td class="px-6 py-4">OK</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script setup lang="ts"></script>
