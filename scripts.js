console.log('connected')

let team = ['Jon', 'Jose', 'Freddie', 'Kelsey', 'Jordan', 'Maria']

// console.log(Array.isArray(team))

// template literal allows us to insert one or more variable values into a string, ` -> this character is called a backtick
console.log(`The length of the array, team, is ${team.length}!`)

// if we are interested in the index position of items in an array use a for loop
for (let i = 0; i < team.length; i++) {
    // go from the first element in the array to the last and tell me its position
    console.log(`${team[i]} is in position ${i}`)
}


// if we don't need to know the position of each element, we use a for...of loop
for (let person of team) {
    // almost like you do person = current element in array for each element, in order
    // temporary variable for referring to the current element in the array
    // person is not defined outside of this loop
    // perform the same action on every element in the array
    console.log(`Hi, ${person}!`)
}

// we use push to add elements to the end of an array
team.push('Dolly')

console.log(`The team is now ${team}`)

// we use .pop() to remove the last element in an array and return it
// we assign that value to a variable so we can use it later
let removedMember = team.pop()
console.log(`${removedMember} has left the team 😢`)
console.log(team)

