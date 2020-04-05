<template>
  <a-layout-header class="header">
    <div class="logo" />
    <a-menu
      theme="dark"
      mode="horizontal"
      :defaultSelectedKeys="['2']"
      :style="{ lineHeight: '64px' }"
    >
      <a-menu-item key="1">
        <router-link tag="li" to="/">Главная</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-header>
</template>