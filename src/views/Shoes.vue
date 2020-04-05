<template>
  <a-layout style="padding: 0 24px 24px">
    <a-breadcrumb style="margin: 16px 0">
      <a-breadcrumb-item>Главная</a-breadcrumb-item>
      <a-breadcrumb-item>Обувь</a-breadcrumb-item>
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
          //   title: "Кроссовки",
          //   size: "42",
          //   color: "Белый",
          //   weight: "400 гр.",
          //   quantity: 11,
          //   createdAt: "2020-04-05T02:36:45.192Z",
          //   updatedAt: "2020-04-05T02:36:45.192Z"
          // },
          // {
          //   key: 2,
          //   id: 2,
          //   title: "Тапочки",
          //   size: "41",
          //   color: "Желтый",
          //   weight: "200 гр.",
          //   quantity: 19,
          //   createdAt: "2020-04-05T02:36:45.193Z",
          //   updatedAt: "2020-04-05T02:36:45.193Z"
          // },
          // {
          //   key: 3,
          //   id: 3,
          //   title: "Ботинки",
          //   size: "45",
          //   color: "Черный",
          //   weight: "1800 гр.",
          //   quantity: 23,
          //   createdAt: "2020-04-05T02:36:45.193Z",
          //   updatedAt: "2020-04-05T02:36:45.193Z"
          // }
        ]
      }
    },
    mounted: function () {
      fetch('/api/shoes')
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