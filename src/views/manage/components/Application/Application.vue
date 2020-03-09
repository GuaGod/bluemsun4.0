<template>
    <div>
    <div class="table_container">
      <Table border :columns="columns" :data="applicationArray" max-height="300"></Table>
    </div>
    <div class="page_container">
      <Page
        :total="total"
        show-elevator
        :current="currentPage"
        @on-change="onChangePage"
        :page-size="10"
      />
    </div>
  </div>
</template>

<script src="./Application.js"></script>
<style src="./Application.scss" scoped lang="scss"></style>