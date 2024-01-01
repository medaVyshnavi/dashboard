<template>
  <div class="p-4 sm:ml-24">
    <h1 class="text-4xl font-bold">データセット</h1>
    <h4 class="text-xl font-normal opacity-40 py-2">データセットを管理する</h4>
    <Tab />
    <div class="mt-6 flex justify-between">
      <div>
        <DropDown />
        <Button class="bg-blue-700 text-white">データセットアップロード</Button>
      </div>
      <Search />
    </div>
    <Table :fields="fields" :dataSets="dataSets" />
    <Pagination />
  </div>
</template>

<script lang="ts">
import Tab from "./Tab.vue";
import Table from "./Table.vue";
import Button from "./Buttons.vue";
import Search from "./Search.vue";
import Pagination from "./Pagination.vue";
import DropDown from "./DropDown.vue";

export default {
  name: "App",
  components: {
    Table,
    Tab,
    Button,
    Search,
    Pagination,
    DropDown,
  },
  setup() {
    const dataSets = [
      {
        ID: "01",
        データセット名: "test.csv",
        "行数 X 例数": "3000 X 2000",
        作成日: "2023年5月2日",
        更新日: "2023年5月10日",
        ステータス: "OK",
      },
      {
        ID: "01",
        データセット名: "test.csv",
        "行数 X 例数": "3000 X 2000",
        作成日: "2023年5月2日",
        更新日: "2023年5月10日",
        ステータス: "OK",
      },
      {
        ID: "01",
        データセット名: "test.csv",
        "行数 X 例数": "3000 X 2000",
        作成日: "2023年5月2日",
        更新日: "2023年5月10日",
        ステータス: "OK",
      },
    ];
    const fields = [
      "データセット名",
      "行数 X 例数",
      "作成日",
      "更新日",
      "ステータス",
    ];
    return { dataSets, fields };
  },
};
</script>
