interface Person {
    firstName: string;
    lastName: string;
}

function greeter(person: Person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}

let user = { firstName: "Jane", lastName: "User" };

// document.body.innerHTML = greeter(user);

interface Food {
    name: string;
    calories: number;
}

function speak(food: Food): void{
    console.log("Our " + food.name + " has " + food.calories + " grams.");
}

// We've made a deliberate mistake and name is misspelled as name
let ice_cream = {
    name: "ice cream",
    calories: 200
};

speak(ice_cream);

function f(shouldInitialize: boolean) {
    if (shouldInitialize) {
        var x = 10;
    }

    return x;
}

console.log(f(true));  // returns '10'
console.log(f(false)); // returns 'undefined'


// for (let i = 0; i < 1000*1000; i++) {
//     setTimeout(function() { console.log("gogo"+i); }, 1*i);
// }
// for (var i = 0; i < 10; i++) {
//     // capture the current state of 'i'
//     // by invoking a function with its current value
//     (function(i) {
//         setTimeout(function() { console.log(i); }, 100 * i);
//     })(i);
// }

// let x = 10;
// x = 20;
// console.log(x);

// function theCityThatAlwaysSleeps() {
//     let getCity;
//
//     if (true) {
//         let city = "Seattle";
//         getCity = function() {
//             return city;
//         }
//     }
//
//     return getCity();
// }
// console.log(theCityThatAlwaysSleeps());

// class

class Animal {
    name: string;
    constructor(theName: string) { this.name = theName; }
    move(distanceInMeters: number = 0) {
        console.log(`${this.name} moved ${distanceInMeters}m.`);
    }
}

class Snake extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 5) {
        console.log("Slithering...");
        super.move(distanceInMeters);
    }
}

class Horse extends Animal {
    constructor(name: string) { super(name); }
    move(distanceInMeters = 45) {
        console.log("Galloping...");
        super.move(distanceInMeters);
    }
}

let sam = new Snake("Sammy the Python");
let tom: Animal = new Horse("Tommy the Palomino");

sam.move();
tom.move(34);

class Menu {
    // Our properties:
    // By default they are public, but can also be private or protected.
    items: Array<string>;  // The items in the menu, an array of strings.
    pages: number;         // How many pages will the menu be, a number.

    // A straightforward constructor.
    constructor(item_list: Array<string>, total_pages: number) {
        // The this keyword is mandatory.
        this.items = item_list;
        this.pages = total_pages;
    }

    // Methods
    list(): void {
        console.log("Our menu for today:");
        for(var i=0; i<this.items.length; i++) {
            console.log(this.items[i]);
        }
    }

}

// Create a new instance of the Menu class.
var sundayMenu = new Menu(["pancakes","waffles","orange juice"], 1);

// Call the list method.
sundayMenu.list();


class HappyMeal extends Menu {
    // Properties are inherited

    // A new constructor has to be defined.
    constructor(item_list: Array<string>, total_pages: number) {
        // In this case we want the exact same constructor as the parent class (Menu),
        // To automatically copy it we can call super() - a reference to the parent's constructor.
        super(item_list, total_pages);
    }

    // Just like the properties, methods are inherited from the parent.
    // However, we want to override the list() function so we redefine it.
    list(): void{
        console.log("Our special menu for children:");
        for(var i=0; i<this.items.length; i++) {
            console.log(this.items[i]);
        }

    }
}

// Create a new instance of the HappyMeal class.
var menu_for_children = new HappyMeal(["candy","drink","toy"], 1);

// This time the log message will begin with the special introduction.
menu_for_children.list();



class Person {
    protected name: string;
    constructor(name: string) { this.name = name; }
}

class Employee extends Person {
    public department: string;

    constructor(name: string, department: string) {
        super(name);
        this.department = department;
    }

    public getElevatorPitch() {
        return `Hello, my name is ${this.name} and I work in ${this.department}.`;
    }
}

let howard = new Employee("abc123", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error

let fullName: string = `Bob Bobbington`;
let age: number = 37;
let sentence: string = `Hello, my name is ${ fullName }. 
I'll be ${ age + 1 } years old next month.`;
console.log(sentence);
 // enum
enum Color {Red, Green, Blue}
let c: Color = Color.Green;
// console.log(c);
 
// arrowFunction
let count = function (a:number) {
    return a*100;
};
// console.log(count(100));

let countArrow = (a:number) => 100*a;
// console.log(countArrow(100));
// object this

// var employee={
//     id:"go pro",
//     greet: function () {
//         var self=this;
//         setTimeout(function(){
//             console.log(self.id)},100);
//     }
// };
// employee.greet();
//
// var department={
//     id: "gogo",
//     gopro: function (x:number) {
//
//          setTimeout(()=> console.log(this.id+x),100);
//     }
// };
// var x:number=123;
// department.gopro(x);

//parameter- tham so

var parameter = function (a=214, b= a * 1233,c=123,d=21) {
    console.log(a + b);
    console.log(arguments.length);
}
// @ts-ignore
parameter(undefined,321,undefined,undefined);
parameter();
parameter();
