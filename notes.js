// Deep Dive: Constructor Functions & Prototypes


BEST ARTICLE ON PROTOTYPES = https://levelup.gitconnected.com/javascripts-proto-vs-prototype-a21ec7f25bc1


// 1. Module Introduction...

// In this module we will look at the BTS of Classes & OOP...

/* 
MODULE CONTENT:

What happens BTS of Objects & Classes?
Explore Constructor Functions (building objects based on blueprints without classes).
Prototypes & Prototypical Inheritance - it is what "extends" keyword does BTS.
*/

// SUPER IMPORTANT TO UNDERSTAND THESE - AS THEY ARE CORE TO JS AND WILL BE SUBJECT OF INTERVIEWS AND MUCH MORE.. 


-------------------------------------------------------------------------------------------------------


// 2. Introducing Constructor Functions...

// We will start with an empty project as in this module we won't build any kinda fancy app, we will work with the things BEHIND the classes...

// Now we learned how to create classes in the last module....

class Person{
  name = 'Max'; // a field which will turn into a property when this class is instantiated.

  constructor() {
    this.age = 30;
  } // a constructor which helps us dynamically pass in value on the object that is to be created.

  greet() {
    console.log(`Hi! My name is ${this.name} and I'm ${this.age} years old.`)
  } // this is a method.

}
// We have hardcoded values in this class..
const person = new Person();
person.greet();
// We will see our value in console.
// But this is nothing new...

// Now Behind the scenes = classes utilize a concept that has been around in JS forever = CONSTRUCTOR FUNCTION...

/* 
Constructor Functions VS Classes...

Both these are related to each other.
Most things are same = 
Both are Blueprint for objects.
Both hold and set-up Properties and methods.
Both use NEW keyword to instantiate.

The difference is = in classes we use class keyword, in constructor function we use our typical function keyword.
But the name of that function should start with a capital letter - common convention.

We'll learn more about it in next lecture.
*/

function Person() {
  this.age = 30;
  this.name = 'Max';
  this.greet = function greet(){
    console.log(`Hi! My name is ${this.name} and I'm ${this.age} years old.`);
  }
}
// We call this with new keyword.
const person = new Person();
person.greet();

// In function = Setting up this.name and this.greet isn't exactly equivalent to what we do in class. 
// We will learn to set it up in other ways in further lectures.


---------------------------------------------------------------------------------------------------


// 3.  Constructor Functions vs Classes & Understanding "new"....

function Person() {
  this.age = 30;
  this.name = 'Max';
  this.greet = function greet(){
    console.log(`Hi! My name is ${this.name} and I'm ${this.age} years old.`);
  }
}
 
const person = new Person();
person.greet();

// Let's understand what happens here.
// We can't expect this function to return an object cause it doen't take return keyword in there.
// It only returns an object cause of NEW keyword.

// Now if we clear the new keyword, the function will act like a normal function. But it will show person is undefined cause the function doesn't return any value.

// FYI = starting with a capital is just a convention, we can name a normal function with a capital too, but other devs will understand that whenever a class or function is created with capital letter, it is referred as a class or constructor function.

// Now BTS this constructor function when called with NEW works as = 
// It will use THIS = {} - creating an empty object.
// Then we set value for that object, and then the function = return this;
// Class does the same - with extra functionality.
// Classes also helps us with a concept called PROTOTYPES which we will learn next.

// CLASS is just a syntactical sugar for constructor function.
// A constructor function may be taken as common function and defining blueprints with it can be confusing.
// Constructor method inside a class allows us to define a body, a blueprint for the object created later. Everything we place in it also executes when the object is created..
// Methods in class are treated bit differently - which we will learn later.


---------------------------------------------------------------------------------------------------------


// 4. Introducing PROTOTYPES...

// SUPER IMPORTANT` to JS.
// JS is prototype based language.
// JS uses prototypical inheritance.

// Constructor functions (classes - just syntactical sugar) & Prototypes power JS objects.


// WHAT ARE PROTOTYPES?

// Let's say we have a constructor function or a class.
// We build an object based on the constructor function or class with NEW keyword.
// This object has all the properties and methods that are defined in the constructor function or a class.
function Person() {
  this.age = 30;
  this.name = 'Max';
  this.greet = function greet(){
    console.log(`Hi! My name is ${this.name} and I'm ${this.age} years old.`);
  }
}
const p = new Person();
person.greet();
// The object p created has all the properties that are within constructor function such as age, name and greet property which holds a function(method) because these are defined in the function...
// NOTE - The INHERITANCE is also abled in constructor function.

// Every constructor function we build has a special PROTOTYPE property which is not added to the objects we create based on it, because it's not part of the function body. 
// But added as a property of that function object.
// Note - Functions are objects and Prototype is there by default,

// Prototype is automatically assigned to the object that is created when we instantiate the constructor functions = here it is P from Person.

// PROTOTYPE IS AN OBJECT ITSELF WHICH HAVE IT'S OWN PROTOTYPE.
// But what exactly is the idea behind the prototype?
// Why does every object have prototype?

// These prototypes objects are Fallback objects.
// JS looks at these prototype object for a certain property or method which it can't find on the instantiated object on which JS started looking in...

// For eg - we have a person object with name and greet property in.
// Now we call person.sayHello() - the object don't have this property - then JS will look inside the prototype of the object to check if it has this and if it ins't there then JS looks inside the prototype of the prototype and so on until it reaches the end of the chain and doesn't find the property or method....
// In a case where JS didn't find the property - it shows undefined. For method it throws error.

// PROTOTYPE IS A CONNECTED OBJECT USED AS A FALLBACK OBJECT.

// Now we do:::
console.log(p.toString());
// It shows in console = [object Object]
// We don't get an error.
console.log(p.toStr());
// This will throw an error, why?

// console.log(p.toString()); why does this work.
// Our constructor function seems to point to some base class which contains this toString() function.

console.log(p);
// We see in this - there's a __proto__ property = double underscore are called DUNDER.
// This is a prototype to the object - a base class kinda..
// We access this for properties that doesn't exist on the main object.

// We don't have toString() in the object so JS will go to this prototype and check in there.
// We expand the __proto__ = we see a constructor function and another __proto__ which has the toString() property.
// That prototype is the base object.

/* 
Every object in JS has a prototype which appears as .__proto__

When we instantiate an object using constructor function(p = new Person()) and try to access a method which is not in the function then JS looks for that function in it's prototype(.__proto__ belonging to the object, not the constructor function). 

If it finds it there it executes. If not, it then looks into the __proto__ of the next object and the cycle goes on until it hits the global Object. If it cant find it in the global Object also it will then throw an error. 

However, in case of a property it will not throw an error but instead log undefined. 
*/

// We will now output p.__proto__
// It will show a constructor function with some configurational values we learned in the last module.
// And show a prototype object.

function Person() {
  this.age = 30;
  this.name = 'Max';
  this.greet = function greet(){
    console.log(`Hi! My name is ${this.name} and I'm ${this.age} years old.`);
  }
}
const p = new Person();
person.greet();

console.log(p.__proto__)

// Every function in the end is an object. 
// So we can assign value to it using the function name.

// In function there are __proto__ and prototype.
// In every object in JS __proto__ is present, prototype property doesn't exist in every object but is present in functions.

// Whatever we set on prototype will be assigned as a prototype to any object that's built based on the given constructor function.

// The prototype from our constructor function is exactly the same as the __proto__ from our object created = p.
// We don't use prototype property for fallback - we use __proto__ for that.

// Prototype property of our function object can be used to assign an object which then will be assigned as a fallback value to any object that we built based on the constructor.

// Constructor functions have a special property called prototype(not same as __proto__). 
// We can attach methods to that prototype(here it was printAge()). 
// Now the object (p) which gets created based of Person, gets assigned printAge to its .__proto__. 
// So when JS is unable to find  printAge attached to p, it simply looks into its __proto__ and finds it there.
Person.prototype = {
  printAge() {
    console.log(this.age);
  }
}
// We set it such that every object we build from Person constructor should have the printAge() prototype.
// So we can call printAge like this.
// It is our fallback object.
p.printAge();

// THIS. inside our prototype always refers to the object on which we call the method = here p.

// IMP NOTE:
// Prototypes here in the end are what classes and extends do for us.
// When we extend something on our class - we inform JS that we want to set the prototype to a new object or add some new methods and properties to that prototype.


// The __proto__ property is a default property added to every object. This property points to the prototype of the object.

// The default prototype of every object is Object.prototype. Therefore, the __proto__ property of the person object points to the Object.prototype.


// LOOK AT THE PROTOTYPE SUMMARY INSIDE THE FOLDER.


--------------------------------------------------------------------------


// 5. Working with Prototypes...

// We can look at the proof how prototypes are what class and extend do for us...

// We comment our constructor function and create a new class same as our constructor function.
class Person{
  name = 'Max';
  constructor() {
    this.age = 30;
  } 
  greet() {
    console.log(`Hi! My name is ${this.name} and I'm ${this.age} years old.`)
  } 

}

// And then we add another class above this class.
// In there we add the printAge() method.
class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}
// Then we extend this class to Person.
// We add super() for the base class down here.
class Person extends AgedPerson {
  name = 'Max';
  constructor() {
    super();
    this.age = 30;
  } 
  greet() {
    console.log(`Hi! My name is ${this.name} and I'm ${this.age} years old.`)
  } 
}
// We change nothing else from our entire code - we keep it this way = 
console.dir(Person);
const p = new Person();
p.greet();
console.log(p.__proto__);
p.printAge();

// We can see in the console.
// We see Aged Person object containing Person as constructor.
// But we don't see our printAge() method.
// If we expand the prototype of our aged person prototype we can see it's in there.

// The reason for this double prototype structure which CLASS with EXTENDS creates here - which clearly differs from our constructor function and Person prototype.
// We will learn about it later....

// Now we know that EXTENDS still works with prototypes to make functionality available on all classes that extend the same base class..

// IMP = 
// The prototype of our P object was set to an object based on AgedPerson class and that explains why we use super in constructor.
// Super() creates an object based on the base class and sets it as a prototype to the object created from the extended class.

// That's what we did manually on the function constructor.
// In there we create a concrete object and set it as a prototype - Person.prototype for Person so when we create object based on that, we have it available.

// In the class of Person object = inside the constructor we called the extended AgedPerson Object first with super() so that it can be set as the prototype for the to-be created object.

// Both are same, difference is the syntactic sugar.

// What's strange here is when we had class extended agedperson object and in there was our prototype, but with constructor function - prototype is an object with printAge() and has __proto__ but not the constructor method that was there in the class extended prototype.

// Here it is cause = we manually assign prototype which replaces the old default object which was assigned as a prototype with a new object.
// A better approach here is to not replace it = but reach out a prototype and dynamically add a new property or method.
Person.prototype.printAge = function (){
  console.log(this.age);
}
// This object will have a constructor method.

// SIDE NOTE = if we have an app where we don't have access to the constructor function anymore - we can use this to create a new Person object =
const p2 = new p.__proto__.constructor();
console.log(p2);


---------------------------------------------------------------------------------------------------


// 6. The Prototype Chain and the Global "Object"...


// It is important to understand that prototype chain doesn't end after reaching out to prototype of Person object.
// The prototype of person object is printAge() - so could we do this - 
console.log(p.toString());
// This displays what it did before when we used this.

// It still works cause prototype chain doesn't end at the default prototype - printAge.
// This prototype also has the __proto__ property.
// Also the fallback object has it's own fallback object - which we reach out with __proto__ property.
// The object that the proto property points to is the BASE OBJECT.

// We console.dir(Object) = a built-in JS constructor function for global object.
// We see our global object in the console.
// It's has it's own proto property which means it has it's own prototype.

// In the Object global = what we see inside are static properties and methods.
// If we add static property in a class = it will be directly added to our constructor function object.
// We create this =
Person.describe = function() {
  console.log('Creating Persons...')
}
// This property is of Person object and not a property that'll be added to the objects created based on the constructor function.
// This property is something we can interact with on function object itself.

// To understand it easily = the object P doesn't have 'describe' method but the function we console has it.

// Thus the global object also have such predefined static methods...
// The fallback object to all the objects created could point to isn't the global object = it is object.prototype

// Every object created by JS will have a default prototype of object.prototype...
// This prototype is the final prototype. The chain ends.


------------------------------------------------------------------------------------------------


// 7. Classes and Prototypes..

// I will write the prototype and proto definitions or understandings in my journal which would give me a better sense on it. 

// It is super important to understand the BTS of JS and the topic we are learning right now - as we will face it in many interviews or maybe even forced to use this in code cause we can't use classes for whatever reason...

// The constructor function is not a better replacement for our class here cause everything we have in the constructor, we can write in classes.

// The difference between constructor function and classes is how we add a method - here the greet() method..

// If we comment back our class, create a new const and console it...
class AgedPerson {
  printAge() {
    console.log(this.age);
  }
}

class Person extends AgedPerson {
  name = "Max";
  // Adding this as a field will be converted to a property.
  // We just can't add this.name here.

  constructor() {
    super();
    this.age = 30;
  }
  greet() {
    console.log(`Hi! My name is ${this.name} and I'm ${this.age} years old.`);
  }
}
const p = new Person();
console.log(p);

// In the console we will see that - the greet() method is inside the prototype of the Person class = AgedPerson.
// WHY????


-------------------------------------------------------------------------------------------------


// 8. Methods in Classes & In Constructors...

// The greet() method isn't part of the Person object.
// The greet() method is part of it's prototype.
// This method was added automatically by JS - as default prototype which then points to another prototype - printAge().
// Thus we got 2 prototypes.

// The idea here is when we create the instances of Person (objects based on person class) - our age and name is hardcoded where we just pass different data into them.
// The method on the other hand might refer to our data dynamically but is same across all the objects.

// JS adds optimization with this greet() method.
// By adding the method to a prototype - JS makes sure that when creating a new person, we use the same prototype fallback object.
// This means less memory usage and less performance impact - it is only around Kilobites and milliseconds but it counts as clean code formatting.

// We can prove that the greet() is one object stored in memory which is used for other instances.
const p2 = new Person();
console.log(p.__proto__ === p2.__proto__);
// It is true...
// Thus we can share that object. 

// For creating the same in a constructor function.
// We manually add greet in our Person.prototype = the blueprint for fallback value.
// We do just as same as we did with describe in the app.js.
// This prototype will be assigned to every function.

// We have to make sure we don't create a function which is created with every instance.
// If we create greet inside the class with arrow function like this - 
greet = () => {
  console.log(`Hi! My name is ${this.name} and I'm ${this.age} years old.`);
}; // THIS in here refers to our Person class - so it will have values which are in it.

// It will be created in every instance.

// If we create a button and add this greet() to it.
// Then this arrow function is a good method cause we don't need to bind it to anything.
// With shorthand method = we have to bind greet() to p to get the value cause THIS in it will refer to the button and not the class.

// ALSO REFER TO THE PDF WITH THIS LECTURE.


--------------------------------------------------------------------------------------------------------


// 9. Built-in Prototypes in JavaScript...

// We took advantages of prototypes in the course without even knowing them.

// In Array methods - when we go into MDN website - we can see that concat(), filter() are all array.prototype - they are defined on the fallback object which every array is connected to.

// When we create a new array - [] - it will automatically create an array object in which these prototypes methods are holded in.
// We will find all these prototype methods on MDN array page.

// It's also the case for Strings.
// Strings are primitive values - but have prototype.
// Eg - slice(), replace(), split().

// In JS, there are built in objects which are used as prototypes - so as fallback objects for other built-in objects.


---------------------------------------------------------------------------------------------------


// 10. Setting & Getting Prototypes...

// How we can change prototype of an object which already is created or which we are not creating on our own constructor function.
// We set a prototype for our Person object with printAge().

// But what if we have an object of which we wanna change the prototype after the object is created.
// Or we wanna create a new object without our own constructor function for whichever reason - and we still wanna set a different prototype.

// These cases are Advanced cases.

// We will comment our code from before as we create new ones.
// We will create a new object with {}.
const course = {
  title: 'JS - The complete guide',
  rating: 5
}
// Then we attach printRating to the course object.
course.printRating()
// We don't have this function yet. So in console we will see it's not a function yet.
// Now we wanna adjust the course object prototype as it's created here.

// We can do it with Object global constructor function.
// In it we have a getPrototypeOf() and a setPrototypeOf() methods. 

console.log(Object.getPrototypeOf(course));
// We'll see what we see with object.__proto__ .
// IMP = __proto__ is just an unofficial feature which all browsers use. 
// So when accessing/looking at the prototype - we use __proto__ but when adjusting - we use getPrototypeOf()...

// Here though we have to use setPrototypeOf().
// This takes 2 parameters.
// 1st is the object where we wanna use it - course.
// 2nd is the prototype we wanna use.

// Interesting thing on the 2nd arg is that we can override the prototype that has been assigned to an object after the object was created.
// This works on any object.
// Including objects that we created based on our constructor function.

Object.setPrototypeOf(course, {
  printRating: function(){
    console.log(`${this.rating}/5`);
  }
})
// We insert a function in that printRating - and then uncomment - course.printRating();

// Here we switched the prototype.
// If we wanna keep original prototype and add something to it, we could do it.
// We use the spread operator inside the 2nd parameter with the added prototype....
Object.setPrototypeOf(course, {
  ...Object.getPrototypeOf(course),
  printRating: function () {
    console.log(`${this.rating}/5`);
  },
});
// This object where we set our new prototype will have it's own prototype.


// Now we can set the prototype for the object that we are gonna create.
// We can also create a prototype without our constructor function.

// We create it with new method - Object.create() - this will create an object but with special functionality..
// Object.create() takes a parameter - {}, in here what we create will be the parameter for the initial object student..
// Here we add - printProgress function.
// We will console it.
// We can see in the console that it is empty object {} but with the prototype of printProgress.
const student = Object.create({printProgress: function(){console.log(this.progress)}});
console.log(student);
// this.progress is a property we haven't added yet.

// The object we pass in to Object.create() is set as a prototype to the empty object.
// We can add anything in that empty object with -
student.name = 'Max';

// Or we can use the Object.defineProperty() - where we can add a property to an object and we can configure it.
Object.defineProperty(student, 'progress', {
  configurable: true,
  enumerable: true,
  value: 1.2,
  writable: false
})

// Object.create() also takes another argument with the above descriptor object - we add in {}

const student = Object.create({printProgress: function(){console.log(this.progress)}}, {
  name: {
    configurable:true,
    enumerable:true,
    value:'Max',
    writable:true
  }
});
console.log(student);
// We see the output inside the console.


-------------------------------------------------------------------------------------------------------

// Also look at the Constructor functions VS Classes pdf - there is extra info there - which we learn in wrap up lecture.


// Constructor Functions (MDN): https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Working_with_Objects#Using_a_constructor_function

// Prototypes (MDN): https://developer.mozilla.org/en-US/docs/Learn/JavaScript/Objects/Object_prototypes