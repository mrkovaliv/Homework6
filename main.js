"use strict";

let arr = [{
        id: 1,
        name: "Leanne Graham",
        username: "Bret",
        email: "Sincere@april.biz",
        registrationDate: "Tue, 12 Jan 2021 12: 28: 18 + 0000",
        address: {
            street: "Kulas Light",
            suite: "Apt. 556",
            city: "Gwenborough",
            zipcode: "92998-3874",
            geo: {
                lat: "-37.3159",
                lng: "81.1496"
            }
        },
        phone: "050 866-66-66",
        website: "hildegard.org",
        company: {
            name: "Romaguera-Crona",
            catchPhrase: "Multi-layered client-server neural-net",
            bs: "harness real-time e-markets"
        }
    },
    {
        id: 2,
        name: "Ervin Howell",
        username: "Antonette",
        email: "Shanna@melissa.tv",
        registrationDate: "Mon, 11 Jan 2021 12: 28: 18 + 0000",
        address: {
            street: "Victor Plains",
            suite: "Suite 879",
            city: "Wisokyburgh",
            zipcode: "90566-7771",
            geo: {
                lat: "-43.9509",
                lng: "-34.4618"
            }
        },
        phone: "050 877-77-77",
        website: "anastasia.net",
        company: {
            name: "Deckow-Crist",
            catchPhrase: "Proactive didactic contingency",
            bs: "synergize scalable supply-chains"
        }
    },
    {
        id: 3,
        name: "Clementine Bauch",
        username: "Samantha",
        email: "Nathan@yesenia.net",
        registrationDate: "Mon, 11 Jan 2020 12: 28: 18 + 0000",
        address: {
            street: "Douglas Extension",
            suite: "Suite 847",
            city: "McKenziehaven",
            zipcode: "59590-4157",
            geo: {
                lat: "-68.6102",
                lng: "-47.0653"
            }
        },
        phone: "067 866-66-66",
        website: "ramiro.info",
        company: {
            name: "Romaguera-Jacobson",
            catchPhrase: "Face to face bifurcated interface",
            bs: "e-enable strategic applications"
        }
    },
    {
        id: 4,
        name: "Patricia Lebsack",
        username: "Karianne",
        email: "Julianne.OConner@kory.org",
        registrationDate: "Mon, 11 Jan 2021 18: 28: 18 + 0000",
        address: {
            street: "Hoeger Mall",
            suite: "Apt. 692",
            city: "South Elvis",
            zipcode: "53919-4257",
            geo: {
                lat: "29.4572",
                lng: "-164.2990"
            }
        },
        phone: "097 866-66-68",
        website: "kale.biz",
        company: {
            name: "Robel-Corkery",
            catchPhrase: "Multi-tiered zero tolerance productivity",
            bs: "transition cutting-edge web services"
        }
    },
    {
        id: 5,
        name: "Chelsey Dietrich",
        username: "Kamren",
        email: "Lucio_Hettinger@annie.ca",
        registrationDate: "Mon, 11 Jan 2021 18: 48: 18 + 0000",
        address: {
            street: "Skiles Walks",
            suite: "Suite 351",
            city: "Roscoeview",
            zipcode: "33263",
            geo: {
                lat: "-31.8129",
                lng: "62.5342"
            }
        },
        phone: "(067) 888-88-88",
        website: "demarco.info",
        company: {
            name: "Keebler LLC",
            catchPhrase: "User-centric fault-tolerant solution",
            bs: "revolutionize end-to-end systems"
        }
    },
    {
        id: 6,
        name: "Mrs. Dennis Schulist",
        username: "Leopoldo_Corkery",
        email: "Karley_Dach@jasper.info",
        registrationDate: "Mon, 11 Jan 2021 18: 18: 18 + 0000",
        address: {
            street: "Norberto Crossing",
            suite: "Apt. 950",
            city: "South Christy",
            zipcode: "23505-1337",
            geo: {
                lat: "-71.4197",
                lng: "71.7478"
            }
        },
        phone: "(067) 888-99-99",
        website: "ola.org",
        company: {
            name: "Considine-Lockman",
            catchPhrase: "Synchronised bottom-line interface",
            bs: "e-enable innovative applications"
        }
    },
    {
        id: 7,
        name: "Kurtis Weissnat",
        username: "Elwyn.Skiles",
        email: "Telly.Hoeger@billy.biz",
        registrationDate: "Mon, 11 Jan 2021 18: 48: 19 + 0000",


        address: {
            street: "Rex Trail",
            suite: "Suite 280",
            city: "Howemouth",
            zipcode: "58804-1099",
            geo: {
                lat: "24.8918",
                lng: "21.8984"
            }
        },
        phone: "(068) 777-58-88",
        website: "elvis.io",
        company: {
            name: "Johns Group",
            catchPhrase: "Configurable multimedia task-force",
            bs: "generate enterprise e-tailers"
        }
    },
    {
        id: 8,
        name: "Nicholas Runolfsdottir V",
        username: "Maxime_Nienow",
        email: "Sherwood@rosamond.me",
        registrationDate: "Mon, 11 Jan 2011 12: 18: 18 + 0000",
        address: {
            street: "Ellsworth Summit",
            suite: "Suite 729",
            city: "Aliyaview",
            zipcode: "45169",
            geo: {
                lat: "-14.3990",
                lng: "-120.7677"
            }
        },
        phone: "(068) 999-99-28",
        website: "jacynthe.com",
        company: {
            name: "Abernathy Group",
            catchPhrase: "Implemented secondary concept",
            bs: "e-enable extensible e-tailers"
        }
    },
    {
        id: 9,
        name: "Glenna Reichert",
        username: "Delphine",
        email: "Chaim_McDermott@dana.io",
        registrationDate: "Mon, 11 Jan 2021 12: 18: 18 + 0000",
        address: {
            street: "Dayna Park",
            suite: "Suite 449",
            city: "Bartholomebury",
            zipcode: "76495-3109",
            geo: {
                lat: "24.6463",
                lng: "-168.8889"
            }
        },
        phone: "(068) 999-44-28",
        website: "conrad.com",
        company: {
            name: "Yost and Sons",
            catchPhrase: "Switchable contextually-based project",
            bs: "aggregate real-time technologies"
        }
    },
    {
        id: 10,
        name: "Clementina DuBuque",
        username: "Moriah.Stanton",
        email: "Rey.Padberg@karina.biz",
        registrationDate: "Mon, 11 Jan 2011 17: 28: 18 + 0000",
        address: {
            street: "Kattie Turnpike",
            suite: "Suite 198",
            city: "Lebsackbury",
            zipcode: "31428-2261",
            geo: {
                lat: "-38.2386",
                lng: "57.2232"
            }
        },
        phone: "(067) 999-99-28",
        website: "ambrose.net",
        company: {
            name: "Hoeger LLC",
            catchPhrase: "Centralized empowering task-force",
            bs: "target end-to-end models"
        }
    }
];

function isString(str) {
    if (typeof str === 'string' || str instanceof String) {
        return true;
    } else {
        return false;
    }
}
//1.1
let hashTable = {};
for (let element of arr) {
    if ('id' in element) {
        hashTable[element['id']] = element;
    }
}

//1.2
let userId = prompt("Введіть id", 1);

if (userId !== null) {
    if (userId in hashTable) {
        console.log(hashTable[userId]);
    } else {
        console.log('Такого користувача не існує...');
    }
}

//1.3
let userIdAdress = prompt("Введіть id", 1);
if (userIdAdress !== null) {
    if (userIdAdress in hashTable) {
        if (['address'] in hashTable[userIdAdress]) {
            console.log(hashTable[userIdAdress]['address']);
        } else {
            console.log('У даного користувача не вказана адреса.');
        }
    } else {
        console.log('Такого користувача не існує...');
    }
}
//1.4
let nameCompany = prompt("Введіть назву компанії", "name");
let isHaveCompany = false;
for (let key of Object.keys(hashTable)) {
    if (['company'] in hashTable[key]) {
        if (['name'] in hashTable[key]['company'] && hashTable[key]['company']['name'] === nameCompany) {
            console.log(hashTable[key]);
            isHaveCompany = true;
        }
    }
}
if (!isHaveCompany) {
    console.log('Користувача з такою компанією не знайдено.');
}


// 1.5
for (let key of Object.keys(hashTable)) {
    Object.defineProperty(hashTable[key], 'id', {
        writable: false,
        configurable: false
    });
}

//1.6
// я реалізував два різні сетери для зміни телефону, бо не знав який правильніше підходить для даного завдання
function isCorectPhone(phn) {
    let rez = phn.match(/^\((\d){3}\) (\d){3}(-(\d){2}){2}$/g);
    if (rez) {
        return true;
    } else {
        return false;
    }
}

// for (let key of Object.keys(hashTable)) {
//     Object.defineProperty(hashTable[key], 'phoneChange', {
//         set: function(value) {
//             if (isString(value) && isCorectPhone(value)) {
//                 this.phone = value;
//             }
//         }
//     });
// }

////example
// hashTable[1]['phoneChange'] = '(067) 999-99-28';
// console.log(hashTable[1]);

for (let key of Object.keys(hashTable)) {
    hashTable[key].set = function (value) {
        if (isString(value) && isCorectPhone(value)) {
            this.phone = value;
        }

    };
}
//example
hashTable[2].set('(067) 999-99-28');


//Arrays
//2.1
const number1 = prompt('Введіть число', 7);
if (number1 !== null) {
    let arr1 = [5, 7, 7, 8, 1, 10];
    let firstIndex = arr1.indexOf(+number1);
    let lastIndex = arr1.lastIndexOf(+number1);
    alert(`[${firstIndex}, ${lastIndex}]`);
}

//2.2
let array1 = [1, 2, 2, 1];
let array2 = [2, 2];

function findSameElements(a1, a2) {
    return a1.filter(x => a2.includes(x));
}
console.log(findSameElements(array1, array2));

//2.3
let arrElem1 = [1, 2, 3, 4, 5];
let arrElem2 = [6, 7, 8];
let indexElem = 1;
if (indexElem > arrElem1.length) {
    indexElem = arrElem1.length;
}
let createNewArray = (arr1, arr2, index) => {
    return arr1.slice(0, index).concat(arr2, arr1.slice(index));
};
console.log(createNewArray(arrElem1, arrElem2, indexElem));

// 2.4
arr = arr.sort((a, b) => {
    if (!('id' in b) || typeof b['id'] !== 'number' || isNaN(b['id'])) {
        b['id'] = -Infinity;
    }
    if (!('id' in a) || typeof a['id'] !== 'number' || isNaN(a['id'])) {
        a['id'] = -Infinity;
    }
    return b['id'] - a['id'];

});
console.log("Sorted by id: ");
console.log(arr);

//2.4 *
function isCorectDate(date) {
    let rez = date.match(/^\w{3}, ((0[1-9])|([12][0-9])|(3[01])) \w{3} [1-9][0-9]{3} [0-2][0-9]: (([0-5][0-9])|60): (([0-5][0-9])|60) /g);
    if (rez) {
        return true;
    } else {
        return false;
    }
}

function getMonthNumber(month) {
    switch (month) {
        case 'Jan':
            return 1;
        case 'Feb':
            return 2;
        case 'Mar':
            return 3;
        case 'Apr':
            return 4;
        case 'May':
            return 5;
        case 'Jun':
            return 6;
        case 'Jul':
            return 7;
        case 'Aug':
            return 8;
        case 'Sep':
            return 9;
        case 'Oct':
            return 10;
        case 'Nov':
            return 11;
        case 'Dec':
            return 12;
        default:
            return 1;
    }
}

function getCorectValue(value) {
    if (value[0] === '0') {
        return +value[1];
    } else {
        return +value;
    }
}

function compareDate(a1, b1) {
    a1 = a1['registrationDate'];
    b1 = b1['registrationDate'];
    const defaultDate = "Mon, 01 Jan 2020 10: 10: 10 + 0000";
    if (!isString(a1) || !isCorectDate(a1)) {
        a1 = defaultDate;
    }
    if (!isString(b1) || !isCorectDate(b1)) {
        b1 = defaultDate;
    }

    let day1 = a1[5] + a1[6];
    let month1 = a1[8] + a1[9] + a1[10];
    let year1 = a1[12] + a1[13] + a1[14] + a1[15];
    let hour1 = a1[17] + a1[18];
    let minute1 = a1[21] + a1[22];
    let second1 = a1[25] + a1[26];
    let day2 = b1[5] + b1[6];
    let month2 = b1[8] + b1[9] + b1[10];
    let year2 = b1[12] + b1[13] + b1[14] + b1[15];
    let hour2 = b1[17] + b1[18];
    let minute2 = b1[21] + b1[22];
    let second2 = b1[25] + b1[26];

    if (year1 === year2) {
        if (getMonthNumber(month1) === getMonthNumber(month2)) {
            if (getCorectValue(day1) === getCorectValue(day2)) {
                if (getCorectValue(hour1) === getCorectValue(hour2)) {
                    if (getCorectValue(minute1) === getCorectValue(minute2)) {

                        return getCorectValue(second2) - getCorectValue(second1);

                    } else {
                        return getCorectValue(minute2) - getCorectValue(minute1);
                    }

                } else {
                    return getCorectValue(hour2) - getCorectValue(hour1);
                }

            } else {
                return getCorectValue(day2) - getCorectValue(day1);
            }

        } else {
            return getMonthNumber(month2) - getMonthNumber(month1);
        }

    } else {
        return +year2 - +year1;
    }
}

let arrData = [].concat(arr);
arrData = arrData.sort(compareDate);
console.log('Sorted by registrationDate:');
console.log(arrData);