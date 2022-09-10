// Create a new myCar object for a car. Add some properties, including,
// but not limited to, make and model , and values for a typical car or
// your car. Feel free to use booleans, strings, or numbers
let myCar = {
    make: "Audi",
    model: "A6",
    maxSpeed: 360,
    isFourWheel: false
};

// Create a variable that can hold the string value color . This variable
// containing a string value color can now be used to reference the
// property name within myCar . Then, use the variable within the square
// bracket notation to assign a new value to the color property in myCar
let carColor = "color";
myCar[carColor] = "Green";

// Use that same variable and assign a new property string value to it,
// such as forSale . Use the bracket notation once again to assign a new
// value to the forSale property to indicate whether the car is available
// for purchase
let carForSale = "forSale";
myCar[carForSale] = true;

// Output make and model into the console
console.log("My car make is : " + myCar.make);
console.log("My car model is : " + myCar.model);

//Output the value of forSale into the console
console.log("My car is " + (myCar[carForSale] ? "for sale" : "not for sale"));