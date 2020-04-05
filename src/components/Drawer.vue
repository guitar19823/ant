<template>
  <div
    :style="{
      height: '200px',
      overflow: 'hidden',
      position: 'relative',
      border: '1px solid #ebedf0',
      borderRadius: '2px',
      padding: '48px',
      textAlign: 'center',
      background: '#fafafa',
    }"
  >
    <a-drawer
      title="Товар"
      placement="right"
      :closable="false"
      @close="onClose"
      :visible="visible"
      :getContainer="false"
      style="position: absolute"
    >
      <Description
        v-bind:product="product"
      />
    </a-drawer>
  </div>
</template>
<script>
  import Description from '@/components/Description'

  export default {
    data() {
      return {
        // visible: false,
      };
    },
    props: {
      visible: {
        type: Boolean
      },
      product: {
        type: Object
      }
    },
    methods: {
      afterVisibleChange(val) {
        console.log('visible', val)
      },
      onClose() {
        this.$emit('close-drawer');
      },
    },
    components: {
      Description
    }
  };
</script>
