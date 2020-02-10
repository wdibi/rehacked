# Pivot
<p align="center">
  <img src="logo.png" width="30%">
  
</p>

## Table of Contents
- Pivot: A New Spin on Programming
  * [Introduction](#introduction)
  * [Features](#features)
  * [Types](#types)
  * [Examples:](#examples-)
    + [Variable Declarations](#variable-declarations)
    + [Arithmetic](#arithmetic)
    + [Functions](#functions)
    + [If Statement](#if-statement)
    + [While Loop](#while-loop)
    + [Repeat](#repeat)
    + [Objects](#objects)
    + [Sample Program](#sample-program)

## Introduction
Pivot is a programming language that combines the likeness of modern languages with functional languages such as Awk, F#, and Erlang.


## Features
* Dynamically typed
* Weakly typed
* Scripting
* Impure functional language
* add...

## Types
Primitive Types
* string
* boolean
* number
* list
* dict

Operators
* Add `+`
* Subtract `-`
* Multiply `*`
* Power `**`
* Divide `/`
* Modulus `%`
* Strict Equality `==`
* Less than `<`
* Greater than `>`
* Less than or equal `<=`
* Greater than or equal `>=`
* Logical AND `and`, `&&`
* Logical OR `or`, `||`

## Examples: 
### Variable Declarations
<table style="table-layout: fixed; width: 100%">
  <tr>
    <th>Pivot</th>
    <th>JavaScript</th>
  </tr>
  <tr>
  
  <td>

```text
str name <- "Jigar";
_ age <- 21;
bool below6ft <- true;
(num a, num b, num c) <- (1,2,3);
[str] animals = ["dog", "cat", "pig"];
```
  
  </td>

  <td>
  
```javascript
let name = "Jigar"
let age = 21
let below6ft = true
let a = 5, b = 2, c = 3
let animals = ["dog", "cat", "pig"]
```

  </td>
  </tr>
</table>

### Arithmetic

```text
// Pivot                          // JavaScript
a <- 3*2 + (5 ** 6) / 7;          a = 3*2 + (5 ** 6) / 7
b <- 12 - 17 + 8;                 b = 12 - 17 + 8
```

### Functions
```text
// Pivot                          // JavaScript
func add5(x)                      function add5(x) {
  return x+5;                       return x+5
end                               }
```

### If Statement
```text
// Pivot                          // JavaScript
if x > 5                          if(x > 5) {
  then print "hello";              console.log("hello")
else                              } else {
  print "bye";                     console.log("bye")
end                               }
```

### While Loop
```text
// Pivot                          // JavaScript
let x <- 25;                      let x = 25
while x do                        while (x) {
  print x;                          console.log("looping")
  x <- x - 1;                       x = x - 1
end                               }
```

### Repeat
```text
// Pivot                // JavaScript
let x <- 30;            do {
repeat                    console.log(x)
  print x;                x = x - 5
  x <- x - 5;           } while (x >= -30)
until x == -30;
```

### Objects
```text
// Pivot                                        // JavaScript
let circle <- { color: "red", radius: 5 };      let Circle = { color: "red", radius: 5 }
```

### Sample Program:

#### Fibonacci Pivot:
```text
func fibonacci(num)
  let (a,b,temp) <- (1, 0, 0);

  repeat
    temp <- a;
    a <- a + b;
    b <- temp;
    num <- num - 1;
  until num < 0;
  return b;
  end
```

#### Fibonacci JavaScript:
```javascript
function fibonacci(num) {
  let a = 1, b = 0, temp

  while(num >= 0) {
    temp = a
    a = a + b;
    b = temp;
    num--
  }
  return b;
}
```
