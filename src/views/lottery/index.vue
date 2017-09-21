<template>
  <div class="app-container">
    <el-button class="filter-item" style="margin-bottom: 20px;" @click="handleCreate" type="primary" icon="edit">创建今日开奖期号</el-button>
    <el-table :data="list" v-loading.body="listLoading" element-loading-text="拼命加载中" border fit highlight-current-row>
      <el-table-column align="center" label='期号' width="95">
        <template scope="scope">
          {{scope.$index}}
        </template>
      </el-table-column>

      <el-table-column label="第一球" width="110" align="center">
        <template scope="scope">
          <span>{{scope.row.author}}</span>
        </template>
      </el-table-column>
      <el-table-column label="第二球" width="110" align="center">
        <template scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column label="第三球" width="110" align="center">
        <template scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column label="第四球" width="110" align="center">
        <template scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column label="第五球(特码)" width="130" align="center">
        <template scope="scope">
          {{scope.row.pageviews}}
        </template>
      </el-table-column>
      <el-table-column align="center" prop="created_at" label="开奖日期">
        <template scope="scope">
          <i class="el-icon-time"></i>
          <span>{{scope.row.display_time}}</span>
        </template>
      </el-table-column>
      <el-table-column label="操作" width="300">
        <template scope="scope">
          <el-button size="small" type="success" icon="plus">开奖
          </el-button>
          <el-button size="small" type="danger" icon="delete">删除
          </el-button>
          <el-button size="small" type="info">重开奖计算
          </el-button>
        </template>
      </el-table-column>
    </el-table>

    <div class="block" v-if="!listLoading">
      <el-pagination
        @size-change="handleSizeChange"
        @current-change="handleCurrentChange"
        :current-page.sync="currentPage1"
        :page-size="100"
        layout="total, prev, pager, next"
        :total="1000">
      </el-pagination>
    </div>

    <el-dialog title="创建今日开奖期号" :visible.sync="dialogFormVisible">
      <el-form class="small-space" :model="newForm" label-position="left" label-width="100px" style='width: 400px; margin-left:50px;'>
        <el-form-item label="第一期期号">
          <el-input v-model="newForm.num"></el-input>
        </el-form-item>
        <p>注：请核对第一期期号，根据第一期期号将生成今日所有期号</p>
      </el-form>
      <div slot="footer" class="dialog-footer">
        <el-button @click="dialogFormVisible = false">取 消</el-button>
        <el-button type="primary" @click="createNew">确定创建</el-button>
      </div>
    </el-dialog>
  </div>
</template>

<script>
import { getList } from '@/api/table';

export default {
  data() {
    return {
      list: null,
      currentPage1: 5,
      listLoading: true,
      dialogFormVisible: false,
      newForm: {
        num: null
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
      return statusMap[status];
    }
  },
  created() {
    this.fetchData();
  },
  methods: {
    fetchData() {
      this.listLoading = true;
      getList(this.listQuery).then(response => {
        this.list = response.data.items;
        this.listLoading = false;
      });
    },
    handleCreate() {
      this.dialogFormVisible = true;
    },
    handleSizeChange(val) {
      console.log(`每页 ${val} 条`);
    },
    handleCurrentChange(val) {
      console.log(`当前页: ${val}`);
    },
    createNew(){
    }
  }
};
</script>
