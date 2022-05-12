<template>
  <div class="log-content">
    <a-table
      :dataSource="data"
      :columns="columns"
      :pagination="false"
    ></a-table>
    <div
      v-if="pagination.total"
      class="pagination-content"
    >
      <Pagination
        :pagination="pagination"
        @onPageChange="onPageChange"
        @onPageSizeChange="onPageSizeChange"
      ></Pagination>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from 'vue'
import API from '@/API/api.js'
import axiosHttpUtils from '../../../Service/axiosUtils'
import Constants from '../../../Constants'
import Utils from '../../../Utils'
export default defineComponent({
  mounted() {
    this.getLoginData(1)
  },
  setup() {
    return {
      data: ref([]),
      columns: [
        {
          title: '序号',
          width: 70,
          customRender: ({ index }) => {
            return `${index + 1}`
          },
        },
        {
          title: '帐号',
          dataIndex: 'username',
          key: 'username',
        },
        {
          title: '日志内容',
          dataIndex: 'operation',
          key: 'operation',
        },
        {
          title: '执行结果',
          dataIndex: 'result',
          key: 'result',
        },
        {
          title: '记录时间',
          dataIndex: 'operationTime',
          key: 'operationTime',
          width: 200,
          customRender: ({ text }) => {
            return Utils.setFormatter(text)
          },
        },
      ],
      pagination: {
        pageNo: 1,
        pageSize: 10,
        total: 0,
      },
      isEmit: false,
    }
  },
  methods: {
    getLoginData(index?: number) {
      const params = {
        pageNo: index || this.pagination.pageNo,
        pageSize: this.pagination.pageSize,
        search: {
          status: 2,
        },
      }
      axiosHttpUtils(API.loginOutApi, params)
        .then((res: any) => {
          if (res.status == Constants.HTTP_SUCCESS_CODE) {
            this.data = res.data.result
            this.pagination.total = res.data.ext.totalRecord
          }
        })
        .catch((err) => {
          console.log(err)
        })
    },

    onPageChange({ pageNo, pageSize }) {
      if (this.isEmit) {
        this.isEmit = false
        return
      }
      this.pagination.pageNo = pageNo
      this.getLoginData()
    },
    onPageSizeChange({ pageNo, pageSize }) {
      this.isEmit = true
      this.pagination.pageNo = 1
      this.pagination.pageSize = pageSize
      this.getLoginData(1)
    },
  },
})
</script>


<style lang="scss">
.log-content {
  .pagination-content {
    padding: 24px 0;
    text-align: right;
    .ant-pagination {
      .ant-pagination-total-text {
        float: left;
      }
    }
  }
}
</style>