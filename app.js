var person = {

    firstName: "Luca",
    LastName: "Contini",
    age: 44

};

console.log(person);

function addNumber(a,b) {

    return a+b;
}

console.log(addNumber(7,3));

var printLuca = function() {

    console.log("Ciao sono io!");
}

printLuca();

setTimeout(printLuca, 5000);