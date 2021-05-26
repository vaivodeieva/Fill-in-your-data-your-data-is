import readline from 'readline';

import { accessSync, readFileSync, writeFileSync } from 'fs';


const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout,
});


const filePath = `${process.cwd()}/data.json`;



const askQuestion1 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your first name: ', (firstName) => {
            if (firstName === '') {
                reject('Please fill the first name');
                return;
            }

            fulfil(firstName);
        })
    });
}
const askQuestion2 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your last name: ', (lastName) => {
            if (lastName === '') {
                reject('Please fill the last name');
                return;
            }

            fulfil(lastName);
        })
    });
}
const askQuestion3 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your email: ', (email) => {
            if (email === '') {
                reject('Please fill the email');
                return;
            }

            fulfil(email);
        })
    });
}

const askQuestion4 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your age: ', (age) => {
            if (age === '') {
                reject('Please fill the age');
                return;
            }
            if (age <= 0) {
                reject('You filled in not a valid age!');
                return;
            }

            if (isNaN(age)) {
                reject('Sorry, this is not a number!');
                return;
            }

            fulfil(age);
        })
    });
}

const askQuestion5 = async () => {
    return new Promise((fulfil, reject) => {
        rl.question('Enter your address: ', (address) => {
            if (address === '') {
                reject('Please fill the address');
                return;
            }

            fulfil(address);
        })
    });
}

try {
    accessSync(filePath);
    const jsonObject = readFileSync(filePath, 'utf8');
    const jsonDecoded = JSON.parse(jsonObject);


    const firstName = await askQuestion1();
    const lastName = await askQuestion2();
    const email = await askQuestion3();
    const age = await askQuestion4();
    const address = await askQuestion5();


    jsonDecoded.firstName = firstName;
    jsonDecoded.lastName = lastName;
    jsonDecoded.email = email;
    jsonDecoded.age = age;
    jsonDecoded.address = address;

    writeFileSync(filePath, JSON.stringify(jsonDecoded));


    console.log(`The data is: first name: ${firstName}, last name: ${lastName}, email: ${email}, age: ${age}, address: ${address}`);
} catch (e) {
    console.error(`Whoops, something went wrong. The error is: ${e}`);
}

rl.close();