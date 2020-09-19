// class Person(obj) {
//     super()

//     this.name: obj.firstName,
//     print: function() {
//         return this.name
//     }
// }

// const per = new Person({firstName: 'yash'})
// console.log(per.print())

// this is the code I wrote in the front of the peppercloud guy // no constructor // no idea where I was going with this code.

class Person {
    constructor(data) {
        this.firstName = data.firstName
    }
    print() {
        return `hello from ${this.firstName}`
    }
}

const per = new Person({firstName: 'yash'})
console.log(per)
console.log(per.print())
console.log(per.firstName)