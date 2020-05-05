<template>
  <div>
    <div class="table_container">
      <Table border :columns="columns" :data="registerArray" max-height="300"></Table>
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

<script src="./Register.js"></script>
<style lang="scss" src="./Register.scss" scoped></style>