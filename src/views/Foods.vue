<template>
  <a-layout style="padding: 0 24px 24px">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>Главная</a-breadcrumb-item>
      <a-breadcrumb-item>Продукты</a-breadcrumb-item>
    </a-breadcrumb>
    <a-layout-content :style="{ background: '#fff', padding: '24px', margin: 0, minHeight: '280px' }">
      <ProductList
        v-bind:data="data"
        @open-drawer="openDrawer"
      />
    </a-layout-content>
  </a-layout>
</template>

<script>
  import ProductList from '@/components/ProductList'

  export default {
    data() {
      return {
        data: []
      }
    },
    mounted: function () {
      fetch('/api/food')
        .then(res => res.json())
        .then(json => {
          this.data = json.rows;
          this.data.map(item => item.key = item.id);
        })
        .catch(err => console.log(err));
    },
    components: {
      ProductList
    },
    methods: {
      openDrawer(id) {
        const product = this.data.find(i => i.id === id);

        this.$emit('open-drawer', product);
      }
    }
  };
</script>