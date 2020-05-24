const propName = 'age';
const user = {
    name: "Anna",
    home: "14/32",
    "user home": true,
    [propName]: 40
}
console.log( user );
user.name = "Angej";
console.log(user);
user[propName] = 9;
console.log( user );
delete user.name;
console.log( user );

