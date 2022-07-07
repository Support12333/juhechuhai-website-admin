<template>
  <div class="app-container">
    <div class="filter-container">
      <el-select
        placeholder="状态"
        clearable
        class="filter-item"
        style="width: 160px"
        v-model="params.status"
      >
        <el-option value="1">上架</el-option>
        <el-option value="2">下架</el-option>
        <el-option value="3">所有</el-option>
      </el-select>

      <!-- 国家 -->
      <countries-select
        v-model="params.country"
        clearable
        style="width: 160px"
      />

      <!-- 任务类型 -->
      <task-type-select v-model="params.type" clearable style="width: 160px" />

      <!-- APP应用包 -->
      <app-select v-model="params.app" clearable style="width: 160px" />

      <el-date-picker
        type="daterange"
        align="right"
        unlink-panels
        class="filter-item"
        range-separator="至"
        start-placeholder="开始日期"
        end-placeholder="结束日期"
        :picker-options="pickerOptions"
        v-model="params.time"
      >
      </el-date-picker>

      <el-button class="filter-item" type="primary" icon="el-icon-plus">
        添加任务
      </el-button>
    </div>

    <el-table
      border
      fit
      highlight-current-row
      style="width: 100%"
      @sort-change="sortChange"
    >
      <el-table-column
        label="订单编号"
        prop="id"
        sortable="custom"
        align="center"
        width="120"
        :class-name="getSortClass('id')"
      >
        <template slot-scope="{ row }">
          <span>{{ row.id }}</span>
        </template>
      </el-table-column>

      <el-table-column label="任务标题">
        <template slot-scope="{ row }">
          <span class="link-type">{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="任务介绍">
        <template slot-scope="{ row }">
          <span class="link-type">{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="发布金币数量" align="center">
        <template slot-scope="{ row }">
          <span class="link-type">{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="任务类型" align="center">
        <template slot-scope="{ row }">
          <span class="link-type">{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="任务单价" align="center">
        <template slot-scope="{ row }">
          <span class="link-type">{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="落地页链接">
        <template slot-scope="{ row }">
          <span class="link-type">{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="订单数量" align="center">
        <template slot-scope="{ row }">
          <span class="link-type">{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="是否上架" align="center">
        <template slot-scope="{ row }">
          <span class="link-type">{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="备注">
        <template slot-scope="{ row }">
          <span class="link-type">{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="上架时间" prop="time" sortable="custom">
        <template slot-scope="{ row }">
          <span class="link-type">{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column label="结束时间" prop="time" sortable="custom">
        <template slot-scope="{ row }">
          <span class="link-type">{{ row.title }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>

      <el-table-column
        label="操作"
        align="center"
        width="230"
        class-name="small-padding fixed-width"
      >
        <template slot-scope="{ row, $index }">
          <span class="link-type">{{ row.title }}</span>
          <span>{{ $index }}</span>
          <el-tag>{{ row.type | typeFilter }}</el-tag>
        </template>
      </el-table-column>
    </el-table>

    <pagination
      v-show="total > 0"
      :total="total"
      :page.sync="params.page"
      :limit.sync="params.limit"
    />

    <EditOFFDialog />
  </div>
</template>

<script>
import EditOFFDialog from "./components/EditOFFDialog.vue";
import { mapGetters } from "vuex";

export default {
  components: { EditOFFDialog },
  data() {
    return {
      params: {
        status: null,
        country: null,
        type: null,
        app: null,
        time: "",
        sort: "+id",
        page: 1,
        limit: 10,
      },
      total: 1,
    };
  },
  computed: {
    ...mapGetters(["pickerOptions"]),
  },
  methods: {
    sortChange(data) {
      const { prop, order } = data;
      if (prop === "id") {
        this.sortByID(order);
      }
    },
    sortByID(order) {
      if (order === "ascending") {
        this.params.sort = "+id";
      } else {
        this.params.sort = "-id";
      }
      // this.handleFilter();
    },
    getSortClass: function (key) {
      const sort = this.params.sort;
      return sort === `+${key}` ? "ascending" : "descending";
    },
  },
};
</script>
