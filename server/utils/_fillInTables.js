const Clothes = require('../models/clothes');
const Shoes = require('../models/shoes');
const Food = require('../models/food');
const Conserve = require('../models/conserve');

const _fillInTable = async (table, product) => {
  try {
    await table.create(product);
  } catch (e) {
    console.log(e);
  }
};

[
  {
    title: 'Брюки',
    size: 'XL',
    color: 'Черный',
    weight: '500 гр.',
    quantity: 17
  },
  {
    title: 'Рубашка',
    size: 'XXL',
    color: 'Белый',
    weight: '300 гр.',
    quantity: 11
  },
  {
    title: 'Носки',
    size: '27',
    color: 'Серый',
    weight: '70 гр.',
    quantity: 31
  },
  {
    title: 'Свитер',
    size: '52',
    color: 'Зеленый',
    weight: '930 гр.',
    quantity: 17
  },
  {
    title: 'Футболка',
    size: '52',
    color: 'Синий',
    weight: '110 гр.',
    quantity: 37
  },
  {
    title: 'Джинсы',
    size: '32',
    color: 'Грязный',
    weight: '1100 гр.',
    quantity: 29
  }
].map(item => _fillInTable(Clothes, item));

[
  {
    title: 'Кроссовки',
    size: '42',
    color: 'Белый',
    weight: '400 гр.',
    quantity: 11
  },
  {
    title: 'Тапочки',
    size: '41',
    color: 'Желтый',
    weight: '200 гр.',
    quantity: 19
  },
  {
    title: 'Ботинки',
    size: '45',
    color: 'Черный',
    weight: '1800 гр.',
    quantity: 23
  },
  {
    title: 'Валенки',
    size: '45',
    color: 'Серый',
    weight: '700 гр.',
    quantity: 19
  }
].map(item => _fillInTable(Shoes, item));

[
  {
    title: 'Хлеб',
    shelfLife: '5 сут.',
    weight: '700 гр.',
    quantity: 61,
    gmo: false
  },
  {
    title: 'Соль',
    shelfLife: 'неограничено',
    weight: '1000 гр.',
    quantity: 73,
    gmo: false
  },
  {
    title: 'Гречка',
    shelfLife: '365 сут.',
    weight: '900 гр.',
    quantity: 3,
    gmo: false
  },
  {
    title: 'Рис',
    shelfLife: '391 сут.',
    weight: '900 гр.',
    quantity: 31,
    gmo: false
  },
  {
    title: 'Молоко',
    shelfLife: '3 сут.',
    weight: '900 мл.',
    quantity: 23,
    gmo: false
  },
  {
    title: 'Арбуз',
    shelfLife: '30 сут.',
    weight: '3800 гр.',
    quantity: 11,
    gmo: false
  },
  {
    title: 'Яблоко',
    shelfLife: '15 сут.',
    weight: '1000 гр.',
    quantity: 123,
    gmo: false
  },
  {
    title: 'Лук',
    shelfLife: '180 сут.',
    weight: '1000 гр.',
    quantity: 431,
    gmo: false
  }
].map(item => _fillInTable(Food, item));

[
  {
    title: 'Тушёнка',
    shelfLife: '10 лет',
    weight: '350 гр.',
    quantity: 47,
    gmo: false
  },
  {
    title: 'Варенье',
    shelfLife: '2 лет',
    weight: '1000 гр.',
    quantity: 37,
    gmo: false
  },
  {
    title: 'Шпроты',
    shelfLife: '1 год',
    weight: '250 гр.',
    quantity: 103,
    gmo: false
  }
].map(item => _fillInTable(Conserve, item));