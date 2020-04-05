<template>
  <a-table :columns="columns" :dataSource="data">
    <a slot="action" slot-scope="id" href="javascript:;" @click="() => openDrawer(id)">
      описание
    </a>
  </a-table>
</template>

<script>
  export default {
    data() {
      return {
        columns: [
          {
            title: '№',
            dataIndex: 'key',
            key: 'key'
          },
          {
            title: 'Название',
            dataIndex: 'title',
            key: 'title'
          },
          {
            title: 'Количество',
            dataIndex: 'quantity',
            key: 'quantity'
          },
          {
            title: '',
            dataIndex: 'id',
            key: 'id',
            scopedSlots: {
              customRender: 'action'
            }
          },
        ]
      };
    },
    props: ['data'],
    methods: {
      openDrawer: function (id) {
        this.$emit('open-drawer', id);
      }
    },
    mounted: function () {},
  };
</script>
