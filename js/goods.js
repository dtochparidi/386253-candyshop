'use strict';

function getRndInteger(min, max) {
  return Math.floor(Math.random() * (max - min)) + min;
}

var src = [
  'gum-cedar.jpg',
  'gum-chile.jpg',
  'gum-eggplant.jpg',
  'gum-mustard.jpg',
  'gum-portwine.jpg',
  'gum-wasabi.jpg',
  'ice-cucumber.jpg',
  'ice-eggplant.jpg',
  'ice-garlic.jpg',
  'ice-italian.jpg',
  'ice-mushroom.jpg',
  'ice-pig.jpg',
  'marmalade-beer.jpg',
  'marmalade-caviar.jpg',
  'marmalade-corn.jpg',
  'marmalade-new-year.jpg',
  'marmalade-sour.jpg',
  'marshmallow-bacon.jpg',
  'marshmallow-beer.jpg',
  'marshmallow-shrimp.jpg',
  'marshmallow-spicy.jpg',
  'marshmallow-wine.jpg',
  'soda-bacon.jpg',
  'soda-celery.jpg',
  'soda-cob.jpg',
  'soda-garlic.jpg',
  'soda-peanut-grapes.jpg',
  'soda-russian.jpg'
];

var names = [
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

var contents = [
  'молоко',
  'сливки',
  'вода',
  'пищевой краситель',
  'патока',
  'ароматизатор бекона',
  'ароматизатор свинца',
  'ароматизатор дуба, идентичный натуральному',
  'ароматизатор картофеля',
  'лимонная кислота',
  'загуститель',
  'эмульгатор',
  'консервант: сорбат калия',
  'посолочная смесь: соль, нитрит натрия',
  'ксилит',
  'карбамид',
  'вилларибо',
  'виллабаджо'
];

var getName = function () {
  return names[getRndInteger(0, names.length - 1)];
};

var getRandomNumber = function () {
  var randomNumber = getRndInteger(0, 20);
  return randomNumber;
};

var getImage = function () {
  return 'img\\cards\\' + src[getRndInteger(0, src.length - 1)];
};

var getAmount = function () {
  var randomNumber = getRndInteger(100, 1500);
  return randomNumber;
};

var getWeight = function () {
  var randomNumber = getRndInteger(30, 300);
  return randomNumber;
};

var getRatingValue = function () {
  var randomNumber = getRndInteger(1, 5);
  return randomNumber;
};

var getRatingNumber = function () {
  var randomNumber = getRndInteger(10, 900);
  return randomNumber;
};

var getNutritionFactsSugar = function () {
  return (Math.random() > 0.5) ? false : true;
};

var getNutritionFactsEnergy = function () {
  var randomNumber = getRndInteger(70, 500);
  return randomNumber;
};

var getNutritionFactsContents = function () {
  var arr = [];
  var contentString = '';
  var random = getRndInteger(1, 5);
  var randomLength = [];
  for (var i = 0; i <= random; i++) {
    randomLength[i] = getRndInteger(0, contents.length - 1);
    //console.log(randomLength);
    for (var i2 = 0; i2 <= randomLength.length - 1; i2++) {
      if (i === 0) {
        //console.log('Условие не сработало так как это первый элемент  в массиве');
      } else {
        if (randomLength[i] === randomLength[i2 - 1]) {
          randomLength[i] = randomLength[i] + 1;
          //console.log('Прибавили 1');
          //console.log(randomLength);
        }
      }
    }
    arr[i] = contents[randomLength[i]];
    if (i < random) {
      contentString += arr[i] + ', ';
    } else {
      contentString += arr[i] + '.';
    }

  }

  return contentString;
};

var getProduct = function () {
  var product = {
    name: getName(),
    picture: getImage(),
    amount: getRandomNumber(),
    price: getAmount(),
    weight: getWeight(),
    rating:
    {
      value: getRatingValue(),
      number: getRatingNumber()
    },
    nutritionFacts:
    {
      sugar: getNutritionFactsSugar(),
      energy: getNutritionFactsEnergy(),
      contents: getNutritionFactsContents()
    }
  };

  return product;
};

function removeClass(obj, classToRemove) {
  var element = document.querySelector(obj);
  element.classList.remove(classToRemove);
}

function removeClassSimple(element, classToRemove) {
  element.classList.remove(classToRemove);
}

function addClass(obj, classToAdd) {
  var element = document.querySelector(obj);
  element.classList.add(classToAdd);
}

function addClassSimple(element, classToAdd) {
  element.classList.add(classToAdd);
}

removeClass('.catalog__cards', 'catalog__cards--load');
addClass('.catalog__load', 'visually-hidden');

function generateElement() {
  var slot = document.querySelector('#card').content.querySelector('.catalog__card').cloneNode(true);

  if (product.amount === 0) {
    removeClassSimple(slot, 'card--in-stock');
    addClassSimple(slot, 'card--soon');
  }

  if (product.amount < 0 || product.amount > 5) {
    removeClassSimple(slot, 'card--in-stock');
    addClassSimple(slot, 'card--little');
  }

  var title = slot.querySelector('.card__title');
  title.textContent = product.name;

  var image = slot.querySelector('.card__img');
  image.src = product.picture;

  slot.querySelector('.card__price').innerHTML = product.price + '<span class="card__currency">₽</span><span class="card__weight">/' + product.weight + 'Г</span>';

  var rating = slot.querySelector('.stars__rating');

  removeClassSimple(rating, 'stars__rating--five');

  switch (product.rating.value) {
    case 1:
      addClassSimple(rating, 'stars__rating--one');
      break;
    case 2:
      addClassSimple(rating, 'stars__rating--two');
      break;
    case 3:
      addClassSimple(rating, 'stars__rating--three');
      break;
    case 4:
      addClassSimple(rating, 'stars__rating--four');
      break;
    case 5:
      addClassSimple(rating, 'stars__rating--five');
      break;
  }

  var stars = slot.querySelector('.star__count');
  stars.innerHTML = product.rating.number;

  var characteristic = slot.querySelector('.card__characteristic');
  if (product.nutritionFacts.sugar) {
    characteristic.innerHTML = 'Содержит сахар';
  } else {
    characteristic.innerHTML = 'Без сахара';
  }

  var b = getProduct();
  var list = slot.querySelector('.card__composition-list');
  list.innerHTML = b.nutritionFacts.contents;

  return slot;
}

var place = document.querySelector('.catalog__cards');

var showElement = function () {
  var element = generateElement();
  place.appendChild(element);
};

for (var i = 0; i < 3; i++) {
  var product = getProduct();
  showElement();
}
