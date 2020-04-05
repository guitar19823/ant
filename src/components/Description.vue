<template>
  <div v-if="product">
    <h2>{{product.title}}</h2>
    <p v-if="product.shelfLife">Срок годности: <strong>{{product.shelfLife}}</strong></p>
    <p v-if="product.size">Размер: <strong>{{product.size}}</strong></p>
    <p v-if="product.color">Цвет: <strong>{{product.color}}</strong></p>
    <p v-if="product.weight">Вес: <strong>{{product.weight}}</strong></p>
    <p>Количество: <strong>{{product.quantity}} шт.</strong></p>
    <p v-if="product.gmo"><strong>{{product.gmo ? 'Содержит ГМО' : 'Без ГМО'}}</strong></p>
  </div>
</template>

<script>
  export default {
    props: {
      product: {
        type: Object
      }
    }
  }
</script>