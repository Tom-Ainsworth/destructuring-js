let students = [
    {
        name: 'Emily',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 80, art: 95},
    },
    {
        name: 'John',
        subjects: ['art', 'cad', 'english', 'maths', 'science'],
        teacher: {maths: 'Harry', english: 'Joan', cad: 'Paul'},
        results: {maths: 90, english: 75, cad: 87},
    },
    {
        name: 'Adam',
        subjects: ['science', 'maths', 'art'],
        teacher: {science: 'Iris', maths: 'Harry', art: 'Simon'},
        results: {science: 93, maths: 77, art: 95},
    },
    {
        name: 'Fran',
        subjects: ['science', 'english', 'art'],
        teacher: {science: 'Iris', english: 'Joan', art: 'Simon'},
        results: {science: 93, english: 87, art: 95},
    }
];

// Step 1-3 are simple
const makeList = (arr, student) => {
    // To make this work, I need to iterate through the keys of each item in the array
    // to see if they match the 'student' parameter
    for(let itm of arr) { // For this it needs a for loop to search through
        if(itm.name == student) { // If the student matches the value of the key 'name' proceed.
            return itm.subjects; // return the value of the key 'subjects' from the matched name
        }
    }
};

// Destructure the results into variables
let [first, second, ...rest] = makeList(students, "John");

// Log the variables
console.log(first, second, rest)

// This was a tough one as I couldn't remember how to access a nested array. As soon as I saw the for loop I understood what
// was happening. I just need to remember that in future.