<template>
    <div>
    <div class="operation_container">
      <div>已报名人数：{{total}}</div>
      <div>
        <Button type="success"
                style="margin-right:6px;"
                @click="onClickOpenApply">开启报名</Button>
        <Button type="error"
                @click="onClickCloseApply">关闭报名</Button>
      </div>
    </div>
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