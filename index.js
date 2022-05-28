newWord = "Hello" + "New York city"
console.log("newWord")

const celsius = 12;
const fahrenheit = celsius * 1.8 + 32
console.log(fahrenheit)



const quote = "Stay a while and listen"
console.log(quote[6])

//console.log("The man whispered, /"please speak to me./"");

"Yes" == "yes"
console.log("Yes")

const my_string = "Udacity"
for (let i = 0; i < my_string.length; i++) {
    console.log(my_string.charCodeAt(i))
}

console.log("Green" > "green")

console.log("ALL Strings are crEaTeD eqaul" == "All STRINGS are CrEaTED Equal")

const adjective1 = "amazing";
const adjective2 = "fun";
const adjective3 = "entertaining";
madLib = "The Intro to JavaScript course is " + adjective1 +". James and Julia are so " + adjective2 +". I cannot wait to work through the rest of this " + adjective3 +" content!"
console.log(madLib)

const firstName = "Excellent."
const interest = "I love food."
const hobby = "In my spare time, I love to read."
console.log("My name is " + firstName + " " + interest + " " + hobby)


let musicGroup = 76

if (musicGroup <= 0) {
    console.log("not a group")
}
else if (musicGroup === 1) {
    console.log("solo")
}
else if (musicGroup === 2) {
    console.log("duet")
}
else if (musicGroup === 3) {
    console.log("trio")
} 
else if (musicGroup === 4) {
    console.log("quartet")
}
else {
    console.log("this is a large group")
}
console.log((3 != 6 % 3) && ! (24 > 45) && (!false))

const balance = 0;
const isActive = true;
const checkBalance = true;

if (checkBalance === true) {
    if (isActive === true && balance > 0) {
        console.log("Your balance is $25")
    }
    else if (isActive === true && balance < 0) {
        console.log("Your account balance is negative, please contact your bank.")
        
    }
    else if (isActive === false) {
        console.log("Your account is longer active")
    }
    else if (isActive === true && balance === 0) {
        console.log("Your account is empty")
    }
    
} else console.log("Thank you and have a nice day")

const flavor = "chocolate"
const topping = "sprinkles"
const vessel = "sugar cone"

if (flavor === "chocolate" || flavor === "strawberry" && topping === "bananas" || topping === "sprinkles" && vessel === "wafer cone" || vessel === "bowl") {
    console.log("Great choice! Your ice cream is at the next window.")
} 
else console.log("Please check our menu and try again")

const shirtWidth = 18
const shirtLength = 28.99
const shirtSleeve = 8.13

let size = "NA"

if (shirtWidth >= 18 && shirtLength < 29 && shirtSleeve < 8.38) {
    size = "S"
}
else if (shirtWidth >= 22 && shirtLength < 30 && shirtSleeve < 8.63) {
    console.log("M")
}
else if (shirtWidth >= 24 && shirtLength < 31 && shirtSleeve < 8.88) {
    console.log("L")
}
else if (shirtWidth >= 26  && shirtLength < 33 && shirtSleeve < 9.63) {
    console.log("XL")
}
else if (shirtWidth >= 28  && shirtLength < 34 && shirtSleeve < 10.13) {
    console.log("2XL")
}
else if (shirtWidth >= 28  && shirtLength >= 34 && shirtSleeve >= 10.13) {
    console.log("3XL")
}
else console.log("N/A")

const thisSimple = true;
const color = thisSimple ? "orange" : "red"
console.log(color)

const eatsPlants = false
const eatAnimals = false 
let category;

category = eatsPlants ? (eatAnimals ? "ominvore" : "hebivore") : (eatAnimals ? "carnivore" : "undefined") 
console.log(category) 

const education = "Doctoral degree"
let salary;


switch (education) {
    case  "no high school diploma":
        salary = 25636
        break
    case "high school diploma":
        salary = 35256
        break
    case "Associate's degree":
        salary = 41496
        break
    case "Bachelor's degree":
         salary = 59124
         break
    case "Master's degree":
        salary = 69732
        break
    case "Professional degree":
        salary = 89960
        break
    case "Doctoral degree":
        salary = 84396
}
console.log("In 2015, a person with a "+education+" earned an average of $"+salary.toLocaleString("en-US")+"/year.")

let x = 10;
while (x <= 25) {
    console.log("Printing out x = " + x) 
    x = x + 2
}

let y = 1

while (y <= 20) {
    if (y % 3 === 0 && y % 5 === 0) {
        console.log("JuliaJames")
    }
    else if (y % 5 === 0) {
        console.log("James")
    }
    else if (y % 3 === 0) {
        console.log("Julia")
    }
    else {
        console.log(y)
    }
    y = y + 1
}

for (let x = 0; x < 3; x = x + 1) {
    for (let y = 0; y < 2; y = y + 1) {
        console.log(x + "," + y)
    }
}

for (let k = 12; k < 21; k++) {
    console.log(k);
}

let solution = 1
for (let i = 1; i <= 12; i++) {
    solution *= i
}
console.log(solution)

for (let w = 0; w < 26; w = w +1) {
    for (let r = 0; r < 100; r = r + 1) {
        console.log(w + "-" + r)
    }
}