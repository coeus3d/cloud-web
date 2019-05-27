<template>
  <el-table
    ref="taskTable"
    :data="tasks"
    tooltip-effect="dark"
    style="width: 100%"
    min-height="400px"
    @selection-change="handleSelectionChange"
  >
    <el-table-column
      type="selection"
      width="55">
    </el-table-column>
    <el-table-column
      label="任务名"
      column-key="taskName"
      prop="taskName"
      sortable
      fixed
      >
    </el-table-column>
    <el-table-column
      label="设备编号"
      column-key="order"
      prop="order"
      sortable
      >
    </el-table-column>
     <el-table-column
      label="状态"
      column-key="enable"
      prop="enable"
      sortable
      :filters="enableFilters"
      :filter-method="filterHandler"
      >
      <template slot-scope="scope">
        <span style="margin-left: 10px">{{ scope.row.enable === "1" ? '启用' : '禁用' }}</span>
      </template>
    </el-table-column>
    <el-table-column
      label="下次执行时间"
      column-key="nextExctime"
      prop="nextExctime"
      width="180"
      sortable
    >
    </el-table-column>
    <el-table-column
      label="创建时间"
      column-key="createTime"
      width="180"
      prop="createTime"
      sortable
    >
    </el-table-column>
    <el-table-column
      label="备注"
      column-key="remark"
      prop="remark"
      sortable
      show-overflow-tooltip
    >
    </el-table-column>
    <el-table-column
      fixed="right"
      width="280"
    >
     <template slot="header" slot-scope="scope">
        <el-input
          v-model="search"
          size="mini"
          placeholder="输入关键字搜索"/>
      </template>
      <template slot-scope="scope">
        <el-button-group>
            <el-button icon="el-icon-edit" circle></el-button>
            <el-button circle>
                <font-awesome-icon
                  icon="running"
                />
            </el-button>
            <el-button circle>
                <font-awesome-icon
                  icon="stream"
                />
            </el-button>
            <el-button circle>
                <font-awesome-icon
                  icon="info-circle"
                />
            </el-button>
            <el-button type="warning" circle>
                <font-awesome-icon
                  icon="power-off"
                />
            </el-button>
            <el-button type="danger" icon="el-icon-delete" circle></el-button>
        </el-button-group>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
import filter from '@/mixins/table/filter'
import { mapGetters } from 'vuex'

export default {
  mixins: [filter],
  props: {
    selected: {
      type: Array,
      required: true
    }
  },
  data () {
    return {
      enableFilters: [
        { text: '禁用', value: '0' },
        { text: '启用', value: '1' }
      ],
      search: ''
    }
  },
  computed: {
    ...mapGetters('task', ['tasks']),
    multipleSelection: {
      get () {
        return this.selected
      },
      set (value) {
        this.$emit('update:selected', value)
      }
    }
  },
  methods: {
    handleSelectionChange (val) {
      this.multipleSelection = val
    }
  }
}
</script>