const description = {
    user_2304: {
        name: 'Leonid',
        age: 20,
        maritalStatus: 'Single',
        sayHello(name) {
            console.log(`Hello ${name}`)
        }
    }
}

console.log(description.user_2304);
description.user_2304.sayHello('Valera');

const userList = [
    {
        name: 'Richard',
        age: 71,
        isAdmin: false
    },
    {
        name: 'God',
        age: 9999,
        isAdmin: false
    },
        {
        name: 'Pussy_Destroyer',
        age: 14,
        isAdmin: false
    },
        {
        name: 'Leonid',
        age: 20,
        isAdmin: true
    }
];
let commonUserCount = 0;
for (let i = 0; i < userList.length; i++) {
    if (!userList[i].isAdmin) {
        commonUserCount++;
    }
}

console.log(`Количество простых пользователей: ${commonUserCount}`)
