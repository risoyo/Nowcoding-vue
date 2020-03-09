<template>
  <div>
    <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
      <el-menu :default-openeds="['1', '2']">
        <el-submenu index="1">
          <template slot="title">
            <i class="el-icon-message"></i>分类
          </template>
          <el-menu-item-group>
            <el-menu-item index="1-1">
              近期热门
            </el-menu-item>
            <el-menu-item index="1-2">
              为你推荐
            </el-menu-item>
            <el-menu-item index="1-3">
              最新内容
            </el-menu-item>
          </el-menu-item-group>
        </el-submenu>
        <el-submenu index="2">
          <template slot="title">
            <i class="el-icon-setting"></i>标签
          </template>
          <el-menu-item-group title="C平台">
            <el-menu-item index="3-3">
              联机
            </el-menu-item>
          </el-menu-item-group>
          <el-menu-item-group title="Java平台">
            <el-menu-item index="3-3">
              选项3
            </el-menu-item>
          </el-menu-item-group>
          <el-submenu index="3-4">
            <template slot="title">
              选项4
            </template>
            <el-menu-item index="3-4-1">
              选项4-1
            </el-menu-item>
          </el-submenu>
        </el-submenu>
      </el-menu>
    </el-aside>
  </div>
</template>

<script></script>

<style lang="scss"></style>
