<template>
  <a-layout-sider width="200" style="background: #fff">
    <a-menu
      mode="inline"
      :defaultSelectedKeys="['1']"
      :defaultOpenKeys="['sub1']"
      :style="{ height: '100%', borderRight: 0 }"
    >
      <a-menu-item key="1">
        <router-link tag="li" to="/clothes">Одежда</router-link>
      </a-menu-item>
      <a-menu-item key="2">
        <router-link tag="li" to="/shoes">Обувь</router-link>
      </a-menu-item>
      <a-menu-item key="3">
        <router-link tag="li" to="/foods">Продукты</router-link>
      </a-menu-item>
      <a-menu-item key="4">
        <router-link tag="li" to="/conserves">Консервы</router-link>
      </a-menu-item>
    </a-menu>
  </a-layout-sider>
</template>