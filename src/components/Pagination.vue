<template>
  <a-pagination
    :current="currentPage"
    :total="pagination.total"
    @change="onPageChange"
    @showSizeChange="onPageSizeChange"
    show-size-changer
    show-quick-jumper
    :show-total="showTotal"
  />
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue'

export default defineComponent({
  name: 'Pagination',
  props: {
    pagination: {
      type: Object,
      default: () => {
        return {
          pageNo: 1,
          pageSize: 10,
          total: 0,
        }
      },
    },
  },
  setup(props) {
    const showTotal = (total: number, range: Array<number>) => {
      return `显示第${range[0]}至${range[1]}项结果，共${total}项`
    }
    return {
      showTotal,
      currentPage: ref(1),
    }
  },
  methods: {
    onPageChange(pageNo: number, pageSize: number) {
      this.currentPage = pageNo
      this.$emit('onPageChange', { pageNo, pageSize })
    },
    onPageSizeChange(pageNo: number, pageSize: number) {
      pageNo = 1
      this.$emit('onPageSizeChange', { pageNo, pageSize })
      this.$nextTick(() => {
        this.resetCurrentPage()
      })
    },
    resetCurrentPage() {
      this.currentPage = 1
    },
  },
})
</script>


<style>
</style>