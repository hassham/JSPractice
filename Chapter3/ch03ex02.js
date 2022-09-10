let shoppingList = []; // Create an empty array to use as a shopping list
shoppingList.push("Milk"); //Add Milk , Bread , and Apples to your list
shoppingList.push("Bread");
shoppingList.push("Apples");
console.log(shoppingList);
shoppingList.splice(1,1,"Bananas", "Eggs"); //Update " Bread " with Bananas and Eggs 
console.log(shoppingList);
console.log(shoppingList.pop()); // Remove the last item from the array and output it into the console
console.log(shoppingList);
shoppingList.sort(); // Sort the list alphabetically.
console.log(shoppingList);
console.log(shoppingList.indexOf("Milk")); // Find and output the index value of Milk 
shoppingList.splice(1, 0, "Carrots", "Lettuce"); //After Bananas , add Carrots and Lettuce .
console.log(shoppingList);
let anotherShoppingCart = ["Juice", "Pop"]; //Create a new list containing Juice and Pop
let thirdShoppingCart = shoppingList.concat(anotherShoppingCart).concat(anotherShoppingCart); //Combine both lists, adding the new list twice to the end of the first list
console.log(thirdShoppingCart);
console.log(thirdShoppingCart.lastIndexOf("Pop"));