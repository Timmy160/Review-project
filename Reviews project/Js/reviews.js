const reviews = [
  {
    id: 1,
    name: "Kylian allen",
    position: "Web developer",
    Img: "https://image.shutterstock.com/image-photo/image-young-asian-woman-company-260nw-2122700972.jpg",
    text: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Quas modi dicta, et incidunt vitae repudiandae.",
  },
  {
    id: 2,
    name: "Susan smith",
    position: "Product designer",
    Img: "https://image.shutterstock.com/image-photo/portrait-young-smiling-woman-looking-260nw-1865153395.jpg",
    text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae quam natus numquam optio perspiciatis iusto! Quia repudiandae amet maxime blanditiis!",
  },
  {
    id: 3,
    name: "Seun fadare",
    position: "Data analyst",
    Img: "https://image.shutterstock.com/image-photo/image-young-asian-woman-company-260nw-2122700972.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod vel quasi, iure doloribus rerum eos! Facilis, minima laboriosam!",
  },
  {
    id: 4,
    name: "Timmy James",
    position: "Web developer",
    Img: "https://image.shutterstock.com/image-photo/portrait-young-smiling-woman-looking-260nw-1865153395.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod vel quasi, iure doloribus rerum eos! Facilis, minima laboriosam!",
  },
  {
    id: 5,
    name: "Victor williams",
    position: "Cost engineer",
    Img: "https://image.shutterstock.com/image-photo/image-young-asian-woman-company-260nw-2122700972.jpg",
    text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quod vel quasi, iure doloribus rerum eos! Facilis, minima laboriosam!",
  },
];

// Select items
const Img = document.getElementById("person-img");
const name = document.getElementById("name");
const position = document.getElementById("position");
const text = document.getElementById("text");

const prevBtn = document.getElementById("previous-btn");
const nextBtn = document.getElementById("next-btn");
const randomBtn = document.getElementById("random-btn");

// set starting item
let currentItem = 0;

// Load initial item
window.addEventListener("DOMContentLoaded", function () {
  showPerson();
});

//show person based item
function showPerson() {
  const itemValue = reviews[currentItem];
  Img.src = itemValue.Img;
  name.textContent = itemValue.name;
  position.textContent = itemValue.position;
  text.textContent = itemValue.text;
}

//show next person
nextBtn.addEventListener("click", function () {
  currentItem++;
  if (currentItem > reviews.length - 1) {
    currentItem = 0;
  }
  showPerson();
});
//show previous person

prevBtn.addEventListener("click", function () {
  currentItem--;
  if (currentItem < 0) {
    currentItem = reviews.length - 1;
  }
  showPerson();
});

randomBtn.addEventListener("click", function () {
  currentItem = Math.floor(Math.random() * reviews.length);
  showPerson();
});
