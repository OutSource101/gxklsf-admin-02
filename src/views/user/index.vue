<template>
  <div class="app-container">
    <div class="filter-container" style="margin-bottom: 20px;">
      <el-input @keyup.enter.native="" style="width: 200px;" class="filter-item" placeholder="用户名" v-model="listQuery.title">
      </el-input>

      <el-select @change='' style="width: 120px" class="filter-item" v-model="listQuery.sort" placeholder="排序">
        <el-option v-for="item in sortOptions" :key="item.key" :label="item.label" :value="item.key">
        </el-option>
      </el-select>

      <el-button class="filter-item" type="primary" icon="search" @click="">搜索</el-button>
      <el-button class="filter-item" @click="" type="primary" icon="edit">添加新用户</el-button>
    </div>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label='用户' width="70" class-name="user-table">
        <template scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column label="代理商" width="80" align="center">
        <template scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column>
      <el-table-column align="center" label='盘口' width="70">
        <template scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>
      <el-table-column label="余额" width="70" align="center">
        <template scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column label="最低限额" width="100" align="center">
        <template scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column label="最高限额" width="100" align="center">
        <template scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column label="登陆次数" width="100" align="center">
        <template scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="登陆日期">
        <template scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.display_time}}</span>
        </template>
      </el-table-column>
      <el-table-column label="用户ip" width="120" align="center">
        <template scope="scope">
          {{scope.row.display_time}}
        </template>
      </el-table-column>
      <el-table-column label="操作" align="center" width="300">
        <template scope="scope">
          <el-button size="mini" type="success" icon="plus">加减分
          </el-button>
          <el-button size="mini" type="info" icon="edit">修改
          </el-button>
          <el-button size="mini" type="danger" icon="close">屏蔽
          </el-button>
          <el-button size="mini" type="danger" icon="delete">删除
          </el-button>
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
      listQuery: {
        user: null,
        sort: '所有用户'
      },
      sortOptions: ['所有用户', 'admin'],
      listLoading: true
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
    }
  }
}
</script>

<style scoped>
  .user-table{
    padding-left: 9px;
    padding-right: 9px;
  }
</style>
