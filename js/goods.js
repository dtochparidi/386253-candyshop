'use strict';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var getName = function () {
  var name = [
    'Чесночные сливки',
    'Огуречный педант',
    'Молочная хрюша',
    'Грибной шейк',
    'Баклажановое безумие',
    'Паприколу итальяно',
    'Нинзя-удар васаби',
    'Хитрый баклажан',
    'Горчичный вызов',
    'Кедровая липучка',
    'Корманный портвейн',
    'Чилийский задира',
    'Беконовый взрыв',
    'Арахис vs виноград',
    'Сельдерейная душа',
    'Початок в бутылке',
    'Чернющий мистер чеснок',
    'Раша федераша',
    'Кислая мина',
    'Кукурузное утро',
    'Икорный фуршет',
    'Новогоднее настроение',
    'С пивком потянет',
    'Мисс креветка',
    'Бесконечный взрыв',
    'Невинные винные',
    'Бельгийское пенное',
    'Острый язычок'
  ];

  return name[getRndInteger(0, name.length)];
};

var getNumber = function () {
  var randomNumber = getRndInteger(0, 20);
  return randomNumber;
};

var getImage = function () {
  var src = [
    'img\\cards\\gum-cedar.jpg',
    'img\cards\gum-chile.jpg',
    'img\cards\gum-eggplant.jpg',
    'img\cards\gum-mustard.jpg',
    'img\cards\gum-portwine.jpg',
    'img\cards\gum-mustard.jpg',
    'img\cards\gum-portwine.jpg',
    'img\cards\gum-wasabi.jpg',
    'img\cards\ice-cucumber.jpg',
    'img\cards\ice-eggplant.jpg',
    'img\cards\ice-garlic.jpg',
    'img\cards\ice-italian.jpg',
    'img\cards\ice-mushroom.jpg',
    'img\cards\ice-pig.jpg',
    'img\cards\marmalade-beer.jpg',
    'img\cards\marmalade-caviar.jpg'
  ];

  return src[getRndInteger(0, 1)];
};

var getProduct = function () {
  var product = {
    name: getName(),
    picture: getImage(),
    amount: getNumber()
  };

  console.log(product);
};

getProduct();
