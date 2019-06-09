<template>
  <el-menu
    router
    :default-active="$route.path"
    class="el-menu-vertical-demo"
    :style= "{height:'100%'}"
  >
    <el-menu-item index="/admin">
      <i class="el-icon-menu"></i>
      <span>Аналитика</span>
    </el-menu-item>
      <el-menu-item index="/admin/create">
      <i class="el-icon-edit-outline"></i>
      <span>Создать</span>
    </el-menu-item>
      <el-menu-item index="/admin/list">
      <i class="el-icon-tickets"></i>
      <span>Посты</span>
    </el-menu-item>
      <el-menu-item index="/admin/user">
      <i class="el-icon-user"></i>
      <span>Пользователи</span>
    </el-menu-item>
    <el-menu-item index="/admin/logout">
      <i class="el-icon-wind-power"></i>
      <span>Выйти</span>
    </el-menu-item>
  </el-menu>
</template>
