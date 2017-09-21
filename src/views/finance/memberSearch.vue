<template>
  <div class="app-container">
    <el-select v-model="value" placeholder="用户">
      <el-option
        v-for="item in listQuery.options"
        :key="item.value"
        :label="item.label"
        :value="item.value">
      </el-option>
    </el-select>
    <el-date-picker
      v-model="listQuery.date"
      type="daterange"
      placeholder="选择日期范围">
    </el-date-picker>

    <el-button class="filter-item" style="margin-bottom: 20px;" @click="handleCreate" type="primary" icon="search">查询</el-button>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column label='序号' align="center">
        <template scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>

      <el-table-column label="投注期号" align="center">
        <template scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column>
      <el-table-column label="投注数量" align="center">
        <template scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column label="投注分数" align="center">
        <template scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
import { getList } from '@/api/table'

export default {
  data() {
    return {
      list: null,
      listLoading: true,
      listQuery: {
        title: null,
        date: '',
        options: [{
          value: '选项1',
          label: '所有用户'
        }, {
          value: '选项2',
          label: 'admin'
        }]
      }
    }
  },
  filters: {
    statusFilter(status) {
      const statusMap = {
        published: 'success',
        draft: 'gray',
        deleted: 'danger'
      }
      return statusMap[status]
    }
  },
  created() {
    this.fetchData()
  },
  methods: {
    fetchData() {
      this.listLoading = true
      getList(this.listQuery).then(response => {
        this.list = response.data.items
        this.listLoading = false
      })
    },
    handleCreate() {
    }
  }
}
</script>
