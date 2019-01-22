//          FIRST JAVASCRIPT NATIVE CODE EVER ( DONT JUDGE ME !! )
// TO BE CURSE FREE ( HELLO WORLD )
console.log('Hello World');


// Ternario : 3 partes - Condição ? (if) : (else)
var firstName = 'John';
var age = 16;

var drink = age >= 18 ? 'beer' : 'juice';
console.log(drink);

if (age >= 18) {
    var drink = 'beer';
} else {
    var drink = 'juice';
}

// Switch Case ( not very used but still ...)
var job = 'instructor';

switch (job) {
    case 'teacher':
    case 'instructor':
        console.log(firstName + ' teaches kids how to code.');
        break;
    case 'driver':
        console.log(firstName + ' drives an uber in Lisbon.');
        break;
    case 'designer':
        console.log(firstName + ' designs beautiful websites.');
        break;
    default:
        break;
}

// Switch with last exercise

switch (true) {
    case age < 13:
        console.log(firstName + ' is a boy.');

        break;
    case age >= 13 && age < 20:
        console.log(firstName + ' is a teenager.')
        break;
    case age >= 20 && age < 30:
        console.log(firstName + ' is a young man.')
        break;

    default:
        console.log(firstName + ' is a man.')
        break;
}

// Truthy and Falsy values

// falsy values: undefined , null , 0 , '', NaN
// truthy values: NOT falsy values


var height;

// heigth = '';
heigth = 23;

if (height || height === 0) {
    console.log('Variable is defined');
} else {
    console.log('Variable is NOT defined');
}


// Equality operators

// Type coercion ( 23 == '23') , transforma 23 ( NUMBER ) em 23 STRING e assume que são iguais ( JS )

if (height == '23') {
    console.log('The == operator does type coercion!');
}

// Strict equality ( 23 === '23' ) , tambem percebe a diferença de tipos e ve a diferença entre os numeros

if (height === '23') {
    console.log('The == operator does type coercion!');
}

// CODE CHALLENGE 2

var averageJohn = (89 + 120 + 103) / 3;
var averageMike = (116 + 94 + 123) / 3;
var averageMary = (97 + 134 + 105) / 3;
console.log(averageJohn, 'averageJohn');
console.log(averageMike, 'averageMike');
console.log(averageMary, 'averageMary');


if (averageJohn > averageMike && averageJohn > averageMary) {
    console.log('John wins');
} else if (averageMike > averageJohn && averageMike > averageMary) {
    console.log('Mike wins');
} else if (averageMary > averageJohn && averageMary > averageMike) {
    console.log('Mary wins');
} else {
    console.log('Draw');
}

//  OR SECOND SOLUTION ( WITH SWITCH )

switch (true) {
    case averageJohn > averageMike && averageJohn > averageMary:
        console.log(averageJohn);

        console.log('John wins');
        break;
    case averageMike > averageJohn && averageMike > averageMary:
        console.log(averageMike);
        console.log('Mike wins');
        break;
    case averageMary > averageJohn && averageMary > averageMike:
        console.log(averageMary);
        console.log('Mary wins');
        break;

    default:
        console.log('It\'s a draw');
        break;
}

// Functions

function calculateAge(birthYear) {
    return 2018 - birthYear;
}

var ageJohn = calculateAge(1990);
var ageMike = calculateAge(1948);
var ageJane = calculateAge(1969);
console.log(ageJohn, ageMike, ageJane);


function yearsUntilRetirement(year, firstName) {
    var age = calculateAge(year);
    var retirement = 65 - age;
    if (retirement >= 0) {
        console.log(firstName + ' retires in ' + retirement + ' years');
    } else {
        console.log(firstName + ' is retired !');
    }
}

yearsUntilRetirement(1990, 'John');
yearsUntilRetirement(1948, 'Mike');
yearsUntilRetirement(1969, 'Jane');





// Functions Statements and Expressions

/*
    Statements, function declaration não retornam valores direto
    Expression retornam valores direto, salva algo em algum lugar
*/

// Function declaration
// function whatDoYouDo(job, firstName) {}

// Function Expression - Pega só o que é diferente , evita codigo repetido
var whatDoYouDo = function (job, firstName) {
    switch (job) {
        case 'teacher':
            // return ( acaba a função ) , não precisa do break
            return firstName + ' teaches kids how to code';

        case 'driver':
            return firstName + ' drives a cab in Lisbon';

        case 'designer':
            return firstName + ' designs beatiful websites';

        default:
            return firstName + ' does something else';
    }
}

console.log(whatDoYouDo('teacher', 'John'));
console.log(whatDoYouDo('retired', 'Mike'));
console.log(whatDoYouDo('designer', 'Jane'));



// Arrays - Coleções de objetos , dados


// Inicialize new array
var names = ['John', 'Mark', 'Jane'];
var years = new Array(1990, 1969, 1948);


console.log(names[2]);
console.log('TAMANHO DO ARRAY: ', names.length);

// Mutate array data
names[1] = 'Ben';
names[names.length] = 'Mary';
console.log(names);


// Different data types
// var john = ['John', 'Smith', 1990, 'teacher', false];
var john = ['John', 'Smith', 1990, 'designer', false];

// Methods Array
// PUSH() - adiciona um elemento no final do array
john.push('blue')
// UNSHIFT - adiciona um elemento no começo do array
john.unshift('Mr.');
// POP() - remove um elemento do final do array
john.pop();
john.pop(); // remove mais um elemento do final
// SHIFT() - remove um elemento do começo do array
john.shift();
console.log(john);
// INDEXOF() - mostra a posição de um elemento no array ( se estiver ou nao )
// console.log(john.indexOf(1990));
console.log(john.indexOf(23)); // mostra -1 se nao estiver no array


var isDesigner = john.indexOf('designer') === -1 ? 'John is NOT a designer' : 'John IS a designer';
console.log(isDesigner);


