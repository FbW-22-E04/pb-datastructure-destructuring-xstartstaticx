// 1 Array Destructuring
let fruit, vegetable, food;
[fruit, vegetable, food] = ["banana", "cucumber", ["bread", "cakes", "pizza"]];
console.log(fruit, vegetable, ...food);

// 2 Object Destructuring
const halloweenCostumes = {
  daniel: "wizard",
  lala: "hobo",
  izabela: "princess",
};
console.log(Object.values(halloweenCostumes));

// 3 Parameters: Object Destructuring
const bands = {
  name: "Blink-182",
  greatestHit: "Adam's Song",
  nationality: "American",
  genre: "punk/rock/pop",
};

function bandData() {
  console.log(
    `${bands.name} are a ${bands.nationality} band. They sing ${bands.genre} and their greatest hit is "${bands.greatestHit}". `
  );
}
bandData();
// `Regina Spektor is a American-Russian singer/songwriter and pianist. The musician sings indie-pop and their greatest hit is "Us"`.
