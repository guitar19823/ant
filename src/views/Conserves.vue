<template>
  <a-layout style="padding: 0 24px 24px">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>Главная</a-breadcrumb-item>
      <a-breadcrumb-item>Консервы</a-breadcrumb-item>
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
        data: [
          // {
          //   key: 1,
          //   id: 1,
          //   title: "Тушёнка",
          //   shelfLife: "10",
          //   weight: 350,
          //   quantity: 47,
          //   gmo: false,
          //   createdAt: "2020-04-04T20:29:45.521Z",
          //   updatedAt: "2020-04-04T20:29:45.521Z"
          // },
          // {
          //   key: 2,
          //   id: 2,
          //   title: "Варенье",
          //   shelfLife: "2",
          //   weight: 1000,
          //   quantity: 37,
          //   gmo: false,
          //   createdAt: "2020-04-04T20:29:45.522Z",
          //   updatedAt: "2020-04-04T20:29:45.522Z"
          // },
          // {
          //   key: 3,
          //   id: 3,
          //   title: "Шпроты",
          //   shelfLife: "1",
          //   weight: 250,
          //   quantity: 103,
          //   gmo: false,
          //   createdAt: "2020-04-04T20:29:45.522Z",
          //   updatedAt: "2020-04-04T20:29:45.522Z"
          // }
        ]
      }
    },
    mounted: function () {
      fetch('/api/conserve')
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