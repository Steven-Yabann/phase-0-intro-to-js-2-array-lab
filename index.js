// Write your solution here!
let cats= ["Milo", "Otis", "Garfield"]

function destructivelyAppendCat(){
    return cats.push("Ralph")
}

function destructivelyPrependCat(){
    return cats.unshift("Bob")
}

function destructivelyRemoveLastCat(){
    return cats.pop()
}
 
function destructivelyRemoveFirstCat(){
    return cats.shift()
}

function appendCat(){
    return cats=[ ...cats, "Broom"]
}

function prependCat(){
    return cats=["Arnold", ...cats.slice(0, -1)]
}

function removeLastCat(){
    return cats.slice(1, -1)
}

function removeFirstCat(){
    return cats.slice(2)
}