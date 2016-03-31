var animal = { 
    name: "Fido",
    species: "Dog",
    age: calculateAge(2010),
    speak: function() { 
        console.log('Woof!'); 
    }
}


function calculateAge(birthYear) {
    return Date.now() - birthYear;
}

function totalLength(x, y) {
    let total = x.length + y.lengt;
    return total;
}