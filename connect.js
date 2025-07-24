let fruits = ["Apple", "Mango", "Banana"];
console.log(fruits);

document.write("<h1>Fruits list:</h1>" + fruits.join(", "));

alert("Fruits list: " + fruits.join(", "));

fruits[2] = "Pear";   // Now: ["Apple", "Mango", "Pear"]
fruits[3] = "Lemon";  // Adds a new item. Now: ["Apple", "Mango", "Pear", "Lemon"]

document.write("<h2>Updated fruits list:</h2>" + fruits.join(", "));
