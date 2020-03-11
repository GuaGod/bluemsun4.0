<template>
  <div>
    <div class="table_container">
        <Table border :columns="columns" :data="newsArray" max-height="300"></Table>
    </div>
    <div class="page_container">
      <Page
        :total="total"
        show-elevator
        :current="currentPage"
        @on-change="onChangePage"
        :page-size="5"
      />
    </div>
  </div>
</template>

<script src="./News.js"></script>
<style lang="scss" src="./News.scss" scoped></style>