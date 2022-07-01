<template>
  <el-table :data="tableData" style="width: 100%" stripe border>
    <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
    <el-table-column label="年龄" width="180">
      <template slot-scope="scope"> {{ scope.row.age }}岁 </template>
    </el-table-column>
    <el-table-column prop="gender" label="性别"></el-table-column>
    <el-table-column label="婚否">
      <template slot-scope="scope">{{ scope.row.married ? '已婚' : '未婚' }}</template>
    </el-table-column>
    <el-table-column prop="married" label="操作" align="center">
      <template slot-scope="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  methods: {
    handleDelete(index, row) {
      console.log(index);
      console.log(row);
      this.tableData.splice(index, 1);
    },
  },
  data() {
    return {
      tableData: [
        {
          name: '亮亮',
          age: 23,
          gender: '男',
          married: false,
        },
        {
          name: '西西',
          age: 18,
          gender: '女',
          married: false,
        },
        {
          name: '明明',
          age: 28,
          gender: '男',
          married: true,
        },
        {
          name: '小雨',
          age: 25,
          gender: '女',
          married: true,
        },
      ],
    };
  },
};
</script>

<style lang="scss" scoped></style>
