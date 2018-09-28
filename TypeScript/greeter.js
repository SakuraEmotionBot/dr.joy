var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
        return extendStatics(d, b);
    }
    return function (d, b) {
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
function greeter(person) {
    return "Hello, " + person.firstName + " " + person.lastName;
}
var user = { firstName: "Jane", lastName: "User" };
function speak(food) {
    console.log("Our " + food.name + " has " + food.calories + " grams.");
}
// We've made a deliberate mistake and name is misspelled as name
var ice_cream = {
    name: "ice cream",
    calories: 200
};
speak(ice_cream);
function f(shouldInitialize) {
    if (shouldInitialize) {
        var x = 10;
    }
    return x;
}
console.log(f(true)); // returns '10'
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
var Animal = /** @class */ (function () {
    function Animal(theName) {
        this.name = theName;
    }
    Animal.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 0; }
        console.log(this.name + " moved " + distanceInMeters + "m.");
    };
    return Animal;
}());
var Snake = /** @class */ (function (_super) {
    __extends(Snake, _super);
    function Snake(name) {
        return _super.call(this, name) || this;
    }
    Snake.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 5; }
        console.log("Slithering...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Snake;
}(Animal));
var Horse = /** @class */ (function (_super) {
    __extends(Horse, _super);
    function Horse(name) {
        return _super.call(this, name) || this;
    }
    Horse.prototype.move = function (distanceInMeters) {
        if (distanceInMeters === void 0) { distanceInMeters = 45; }
        console.log("Galloping...");
        _super.prototype.move.call(this, distanceInMeters);
    };
    return Horse;
}(Animal));
var sam = new Snake("Sammy the Python");
var tom = new Horse("Tommy the Palomino");
sam.move();
tom.move(34);
var Menu = /** @class */ (function () {
    // A straightforward constructor.
    function Menu(item_list, total_pages) {
        // The this keyword is mandatory.
        this.items = item_list;
        this.pages = total_pages;
    }
    // Methods
    Menu.prototype.list = function () {
        console.log("Our menu for today:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return Menu;
}());
// Create a new instance of the Menu class.
var sundayMenu = new Menu(["pancakes", "waffles", "orange juice"], 1);
// Call the list method.
sundayMenu.list();
var HappyMeal = /** @class */ (function (_super) {
    __extends(HappyMeal, _super);
    // Properties are inherited
    // A new constructor has to be defined.
    function HappyMeal(item_list, total_pages) {
        // In this case we want the exact same constructor as the parent class (Menu),
        // To automatically copy it we can call super() - a reference to the parent's constructor.
        return _super.call(this, item_list, total_pages) || this;
    }
    // Just like the properties, methods are inherited from the parent.
    // However, we want to override the list() function so we redefine it.
    HappyMeal.prototype.list = function () {
        console.log("Our special menu for children:");
        for (var i = 0; i < this.items.length; i++) {
            console.log(this.items[i]);
        }
    };
    return HappyMeal;
}(Menu));
// Create a new instance of the HappyMeal class.
var menu_for_children = new HappyMeal(["candy", "drink", "toy"], 1);
// This time the log message will begin with the special introduction.
menu_for_children.list();
var Person = /** @class */ (function () {
    function Person(name) {
        this.name = name;
    }
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, department) {
        var _this = _super.call(this, name) || this;
        _this.department = department;
        return _this;
    }
    Employee.prototype.getElevatorPitch = function () {
        return "Hello, my name is " + this.name + " and I work in " + this.department + ".";
    };
    return Employee;
}(Person));
var howard = new Employee("abc123", "Sales");
console.log(howard.getElevatorPitch());
// console.log(howard.name); // error
var fullName = "Bob Bobbington";
var age = 37;
var sentence = "Hello, my name is " + fullName + ". \nI'll be " + (age + 1) + " years old next month.";
console.log(sentence);
// enum
var Color;
(function (Color) {
    Color[Color["Red"] = 0] = "Red";
    Color[Color["Green"] = 1] = "Green";
    Color[Color["Blue"] = 2] = "Blue";
})(Color || (Color = {}));
var c = Color.Green;
// console.log(c);
// arrowFunction
var count = function (a) {
    return a * 100;
};
// console.log(count(100));
var countArrow = function (a) { return 100 * a; };
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
var parameter = function (a, b, c, d) {
    if (a === void 0) { a = 214; }
    if (b === void 0) { b = a * 1233; }
    if (c === void 0) { c = 123; }
    if (d === void 0) { d = 21; }
    console.log(a + b);
    console.log(arguments.length);
};
// @ts-ignore
parameter(undefined, 321, undefined, undefined);
parameter();
parameter();
