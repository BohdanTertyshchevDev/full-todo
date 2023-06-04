const numbers = [1,2,3,4,5];

const iterator = numbers[Symbol.iterator]();
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());
console.log(iterator.next());

for(const num of numbers) {
    console.log(num);
}

const myIterator = {
    data: [10, 20, 30, 40, 50],
    currentIndex: 0,
    next() {
        if(this.currentIndex < this.data.length) {
            return {
                value: this.data[this.currentIndex++],
                done: false
            };
        } else {
            return {
                value: undefined,
                done: true
            }
        }
    }
}

console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());
console.log(myIterator.next());





const myObject = {
    name: 'John',
    age: 30,
    city: 'NY'
};

const myObjectIterator = {
    currentKey: Object.keys(myObject)[0],
    next() {
        const keys = Object.keys(myObject);
        const currentIndex = keys.indexOf(this.currentKey) === -1 ? keys.length + 1 : keys.indexOf(this.currentKey);
        if(currentIndex < keys.length) {
            const Key = keys[currentIndex];
            this.currentKey = keys[currentIndex + 1];
            return {
                value: myObject[Key],
                done: false
            }
        }

        return {
            value: undefined,
            done: true
        }
    }
}

console.log(myObjectIterator.next());
console.log(myObjectIterator.next());
console.log(myObjectIterator.next());
console.log(myObjectIterator.next());




function* myGenerator() {
    yield 1;
    //
    yield 2;
    //
    yield 3;
}

const gen = myGenerator();

console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().value);
console.log(gen.next().done);
console.log(gen.next());








function* mySecondGenerator(start, end) {
    for(let i = start; i <= end; i++) {
        yield 1
    }
}

const gen2 = mySecondGenerator(1, 3);
console.log(gen2.next());



function* myThirdGenerator() {
    let name = yield;
    console.log('Hi,', name);
}

const gen3 = myThirdGenerator();

gen3.next();
gen3.next('Ivan');






function* fetchUrl(url) {
    try{
        const response = yield fetch(url);
        const data = yield response.json();
        return data;
    } catch (error) {
        console.log(error);
    }
}

const url = 'https://randomuser.me/api';
const iterator1 = fetchUrl(url);

iterator1.next().value
.then((response) => iterator1.next(response).value)
.then((data) => console.log(data));







function* numberGenerator() {
    let number = 0;
    while(number <= 100) [
        yield number++
    ]
}

let sum = 0;
for(let number of numberGenerator()) {
    sum += number;
}

console.log(sum);

