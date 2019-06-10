<template>
  <div>
    <el-table :data="posts" style="width: 100%">
      <el-table-column prop="title" label="Название"/>
      <el-table-column label="Дата">
        <template slot-scope="{row: {date}}">
          <i class="el-icon-time"></i>
          <span style="margin-left: 10px">{{ new Date(date).toLocaleDateString() }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Просмотры">
        <template slot-scope="{row: {views}}">
          <i class="el-icon-view"></i>
          <span style="margin-left: 10px">{{ views }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Комментарии">
        <template slot-scope="{row: {comments}}">
          <i class="el-icon-message"></i>
          <span style="margin-left: 10px">{{ comments.length }}</span>
        </template>
      </el-table-column>

      <el-table-column label="Name" width="180">
        <template slot-scope="scope">
          <el-popover trigger="hover" placement="top">
            <p>Name: {{ scope.row.name }}</p>
            <p>Addr: {{ scope.row.address }}</p>
            <div slot="reference" class="name-wrapper">
              <el-tag size="medium">{{ scope.row.name }}</el-tag>
            </div>
          </el-popover>
        </template>
      </el-table-column>
      <el-table-column label="Operations">
        <template slot-scope="scope">
          <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
        </template>
      </el-table-column>
    </el-table>
  </div>
</template>

<script>
export default {
  layout: "admin",
  middleware: ["admin-auth"],
  async asyncData({ store }) {
    const posts = await store.dispatch("post/fetchAdmin");
    return { posts };
  },
  data() {
    return {};
  }
};
</script>