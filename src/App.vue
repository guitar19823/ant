<template>
  <a-layout id="components-layout-demo-top-side-2">
    <Header />
    <a-layout>
      <Aside />
      <router-view
        @open-drawer="openDrawer"
      />
    </a-layout>
    <Drawer
      v-bind:visible="showDrawerChanged"
      v-bind:product="product"
      @close-drawer="closeDrawer"
    />
  </a-layout>
</template>

<script>
  import Aside from '@/components/Aside'
  import Header from '@/components/Header'
  import Drawer from '@/components/Drawer'

  export default {
    data() {
      return {
        collapsed: false,
        showDrawer: false,
        product: null
      };
    },
    components: {
      Header,
      Aside,
      Drawer
    },
    methods: {
      openDrawer(product) {
        this.product = product;
        this.showDrawer = true;
      },
      closeDrawer() {
        this.product = null;
        this.showDrawer = false;
      }
    },
    computed: {
      showDrawerChanged: function () {
        return this.showDrawer;
      }
    }
  };
</script>

<style>
  #components-layout-demo-top-side-2 .logo {
    width: 120px;
    height: 31px;
    background: rgba(255, 255, 255, 0.2);
    margin: 16px 28px 16px 0;
    float: left;
  }
</style>
