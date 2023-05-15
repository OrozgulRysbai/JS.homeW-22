//         Tapshyrma - 1.1

const fruits = ["strawberi", "mango", "watermelon", "grapes", "lemon", "kiwi"];
fruits.sort();
console.log(fruits);
const reversed = fruits.reverse();
console.log(reversed);

//    Tapshyrma - 1.2

const grades = [4, 4, 4, 5, 3, 5, 3, 3, 2, 5, 1];
grades.sort();
console.log(grades);
const reverseds = grades.reverse();
console.log(reverseds);

//    Tapshyrma - 1.3

const computers = [
  { title: "Macbook Air M1", price: 85000 },
  { title: "Dell", price: 65000 },
  { title: "Asus ZenBook", price: 40000 },
  { title: "Acer Aspire", price: 45000 },
  { title: "Macbook Pro", price: 1000000 },
];
computers.sort((a, b) => a.price - b.price);
console.log(computers);
const comp = [
    { title: "Macbook Air M1", price: 85000 },
    { title: "Dell", price: 65000 },
    { title: "Asus ZenBook", price: 40000 },
    { title: "Acer Aspire", price: 45000 },
    { title: "Macbook Pro", price: 1000000 },
  ];
comp.sort((a, b) => b.price - a.price);
console.log(comp);

//    Tapshyrma - 1.3


const computers3 = [
  { title: "Macbook Air M1", price: 85000 },
  {
    title: "Dell",
    price: 65000,
  },
  {
    title: "Asus ZenBook",
    price: 40000,
  },
  {
    title: "Acer Aspire",
    price: 45000,
  },
  { title: "Macbook Pro", price: 100000 },
];

const computer3 = [
  { title: "Macbook Air M1", price: 85000 },
  {
    title: "Dell",
    price: 65000,
  },
  {
    title: "Asus ZenBook",
    price: 40000,
  },
  {
    title: "Acer Aspire",
    price: 45000,
  },
  { title: "Macbook Pro", price: 100000 }
]


 const resultPrices = computer3.sort((a, b) => {
  return b.price - a.price; 
});

console.log(resultPrices);


const resultPrices1 = computers.sort((a, b) => {
  return a.price - b.price;
});

console.log(resultPrices1);



//    Tapshyrma - 2
const instagramUser = {
  userName: "Uzumaki123",
  email: "user@gmail.com",
  password: "123123",
  avatarUrl: "https://www.google.com/search?q=cat",
  followers: "1m",
  follwing: 512,
  title: "Never Give up",
};

// For loop

const keys = Object.keys(instagramUser)
for (let i = 0; i < keys.length; i++) {
  const element = keys[i];
  console.log(element);
}
console.log(keys);

// while loop
const values = Object.values(instagramUser)
let i=0
while(i<values.length){
  const element=values[i]
  i++
  console.log(element);
}
// entries loop

const entries=Object.entries(instagramUser)
for (let i = 0; i < entries.length; i++) {
  const element = entries[i];
  console.log(element);
}




const computers2 = [
  { title: "Macbook Air M1", price: 85000 },
  {
    title: "Dell",
    price: 65000,
  },
  {
    title: "Asus ZenBook",
    price: 40000,
  },
  {
    title: "Acer Aspire",
    price: 45000,
  },
  { title: "Macbook Pro", price: 100000 },
];


let sum=0
for (const item of computers2) {
  sum+=item.price
}
console.log(sum);





const instagramUser2 = {
    userName: "Uzumaki123",
    email: "user@gmail.com",
    password: "123123",
    avatarUrl: "https://www.google.com/search?q=cat",
    followers: "1m",
    follwing: 512,
    title: "Never Give up",
  };
console.log(Object.keys(instagramUser2));


for (const key in instagramUser2) {
  console.log(key);
}

for (const item in instagramUser2) {
  console.log(instagramUser2[item]); 
}

//    Tapshyrma - 3

const number=[4,123,-5,6,100]
let  numMin =number[0]
for (let index = 0; index < number.length; index++) {
    numMin=Math.min(numMin,number [index])
  
}
console.log(numMin);

const numbers1=[4,123,-5,6,100]
let  numMax =numbers1[0]
for (let index = 0; index < numbers1.length; index++) {
    numMax=Math.max(numMax,numbers1[index])
  
}
console.log(numMax);


