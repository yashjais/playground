function Animal() { }

Animal.prototype.speak = function() {
    return this
}

Animal.eat = function() {
    return this
}

let obj = new Animal()
let speak = obj.speak
console.log(speak())

let eat = Animal.eat
console.log(eat())