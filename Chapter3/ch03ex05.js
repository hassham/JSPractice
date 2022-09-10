// Create an object named people that contains an empty array that is
// called friends
let people = {
    friends: []
}

// Create three variables, each containing an object, that contain one of
// your friend's first names, last names, and an ID value
let friend1 = {
    firstName: "Aleem",
    lastName: "Dar"
}
let friend2 = {
    firstName: "Mohammad",
    lastName: "Ali"
}
let friend3 = {
    firstName: "Mosab",
    lastName: "bin Umair"
}

// Add the three friends to the friend array
people.friends.push(friend1);
people.friends.push(friend2);
people.friends.push(friend3);


// Output it to the console
console.log(people);