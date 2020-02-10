var users = [
    {
    name: "Michael", 
    age:37
    }, 
    {name: "John",
    age:30
    },
    {name: "David",
    age:27},
    {name: "Phillip",
    age: 16}
];

console.log(users[1].age);
console.log(users[0].name);

for(var i = 0; i < users.length; i++){
    console.log(users[i].name)&' - '&console.log(users[i].age);
};

for(var i = 0; i < users.length; i++){
    if(users[i].age>17){
        console.log(users[i].name)
    }
}