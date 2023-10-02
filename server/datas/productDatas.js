const randomDecimalNumber = () => {
  return (Math.floor(Math.random() * 21) + 30) / 10;
};

const randomNumber = () => {
  return Math.floor(Math.random() * 90) + 10;
};

const productDatas = [
  {
    name: "ABID CLEVER DRIPPER 102",
    store: "UBRUKOPI",
    price: 480000,
    image: "assets/image_1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in risus eget justo consequat vehicula.",
    rating: randomDecimalNumber(),
    ratingCount: randomNumber(),
  },
  {
    name: "ABID CLEVER DRIPPER 102",
    store: "UBRUKOPI",
    price: 480000,
    image: "assets/image_2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in risus eget justo consequat vehicula.",
    rating: randomDecimalNumber(),
    ratingCount: randomNumber(),
  },
  {
    name: "ABID CLEVER DRIPPER 102",
    store: "UBRUKOPI",
    price: 480000,
    image: "assets/image_3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in risus eget justo consequat vehicula.",
    rating: randomDecimalNumber(),
    ratingCount: randomNumber(),
  },
  {
    name: "Almond Biscuit",
    store: "G COFFEE ROASTERY",
    price: 250000,
    image: "assets/image_4.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in risus eget justo consequat vehicula.",
    rating: randomDecimalNumber(),
    ratingCount: randomNumber(),
  },
  {
    name: "Aceh Gayo Coffee Beans...",
    store: "ANOMALI COFFEE",
    price: 90000,
    image: "assets/image_5.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in risus eget justo consequat vehicula.",
    rating: randomDecimalNumber(),
    ratingCount: randomNumber(),
  },
  {
    name: "Blackpearl Coffee Beans...",
    store: "ANOMALI COFFEE",
    price: 90000,
    image: "assets/image_6.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in risus eget justo consequat vehicula.",
    rating: randomDecimalNumber(),
    ratingCount: randomNumber(),
  },
  {
    name: "Bokasso #3",
    store: "TITIK TEMU ROASTERY",
    price: 160000,
    image: "assets/image_3.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in risus eget justo consequat vehicula.",
    rating: randomDecimalNumber(),
    ratingCount: randomNumber(),
  },
  {
    name: "Ciwidey West Java Frinsa ...",
    store: "REIROM COFFEE SOLUTION",
    price: 104500,
    image: "assets/image_7.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in risus eget justo consequat vehicula.",
    rating: randomDecimalNumber(),
    ratingCount: randomNumber(),
  },
  {
    name: "Espresso Blend - Kungfu Kicks",
    store: "G COFFEE ROASTERY",
    price: 185000,
    image: "assets/image_1.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in risus eget justo consequat vehicula.",
    rating: randomDecimalNumber(),
    ratingCount: randomNumber(),
  },
  {
    name: "Espresso Blend 1.0 - 200gr",
    store: "G COFFEE ROASTERY",
    price: 99000,
    image: "assets/image_7.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in risus eget justo consequat vehicula.",
    rating: randomDecimalNumber(),
    ratingCount: randomNumber(),
  },
  {
    name: "Ethiopia Guji Washed",
    store: "IRENK BEANS",
    price: 150000,
    image: "assets/image_8.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in risus eget justo consequat vehicula.",
    rating: randomDecimalNumber(),
    ratingCount: randomNumber(),
  },
  {
    name: "Flores Colol Coffee Beans...",
    store: "ANOMALI COFFEE",
    price: 90000,
    image: "assets/image_2.png",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed in risus eget justo consequat vehicula.",
    rating: randomDecimalNumber(),
    ratingCount: randomNumber(),
  },
];

module.exports = productDatas;
