/* CIT 281 Project 6
Name: Shuxi Wu */

// Shape class
class Shape {
    constructor(sides = []) {
        this.sides = sides
    }
    perimeter() {
        return this.sides.length ? this.sides.reduce((total, current) => total + current, 0) : 0
    
    }
}
/* console.log(new Shape([5, 10]).perimeter());  // 15
console.log(new Shape([1, 2, 3, 4, 5]).perimeter()); // 15
console.log(new Shape().perimeter()); // 0 */

//Rectangle class
class Rectangle extends Shape {
    constructor(length = 0, width = 0) {
        super([length, width, length, width])
        this.length = length 
        this.width = width
    }
    area() {return this.length * this.width}
}
/* console.log(new Rectangle(4, 4).perimeter());  // 16
console.log(new Rectangle(4, 4).area());  // 16
console.log(new Rectangle(5, 5).perimeter()); // 20
console.log(new Rectangle(5, 5).area()); // 25
console.log(new Rectangle().perimeter()); // 0
console.log(new Rectangle().area()); // 0 */

//Triangle class
class Triangle extends Shape {
    constructor(sideA = 0, sideB = 0, sideC = 0) {
        super([sideA, sideB, sideC])
        this.sideA = sideA
        this.sideB = sideB
        this.sideC = sideC
    }
    area() {
        let s = this.perimeter()/2
        let A = Math.sqrt(s*(s-this.sideA)*(s-this.sideB)*(s-this.sideC))
        return A 
    }
}
/* console.log(new Triangle(3, 4, 5).perimeter());  // 12
console.log(new Triangle(3, 4, 5).area());  // 6
console.log(new Triangle().perimeter()); // 0
console.log(new Triangle().area()); // 0 */

//generic array handling
const data = [ [3, 4], [5, 5], [3, 4, 5], [10], [] ]
for (let array of data) {
    switch (array.length) {
        case 2:
            if (array[0] != array[1]) {
                console.log(`Rectangle with sides ${array.toString()} has perimeter of ${new Rectangle(...array).perimeter()} and area of ${new Rectangle(...array).area()}`)
            } else {console.log(`Square with sides ${array.toString()} has perimeter of ${new Rectangle(...array).perimeter()} and area of ${new Rectangle(...array).area()}`)
            }
            break
        case 3:
            console.log(`Triangle with sides ${array.toString()} has perimeter of ${new Triangle(...array).perimeter()} and area of ${new Triangle(...array).area()}`)
            break
        case 1:
            console.log(`Shape with 1 side unsupported`)
            break
        default:
            console.log(`Shape with ${array.length} sides unsupported`)
    }
}
