<template>
  <div>
    <div class="table_container">
        <Table border :columns="columns" :data="noticeArray" max-height="300"></Table>
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

<script src="./Notice.js"></script>
<style lang="scss" src="./Notice.scss" scoped></style>