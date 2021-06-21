let groceryList = ['paprika', 'tofu', 'garlic', 'quinoa', 'carrots', 'broccoli', 'hummus'];
let items = groceryList.length;
for (let i = 0; i < items; i += 1) {
  groceryList.shift();
}

console.log(groceryList);