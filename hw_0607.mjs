////1////
const name = "Dalida's korean food house";

let opening_year = 2022; // number
let theBestMeal = "Kimpab"; // string
let theWaiterOfTheMonth = "Beknar";
let menu_list = ["Ramen", "Kimpab", "Chicken", "Kimchi", "Samgyeopsal", "Tteokbokki", "Bibimbap"];
let favourite = `I love ${theBestMeal}`;
let sadness;

console.log(favourite);
console.log(menu_list[3]); // kimchi

////2////
console.log(Boolean(theBestMeal == "Chicken")); // false
console.log(theWaiterOfTheMonth != null); // true
let x = sadness;
console.log(x); // undefined

////3////
let menu = {
    'Ramen' : 1090,
    'Kimpab' : 890,
    'Kimchi' : 590,
    'Chicken' : 790,
    'Samgyeopsal' : 1990,
    'Tteokbokki' : 1290,
    'Bibimbap' : 1390
};

menu.Sushi = 2390; // добавление нового свойства

menu.Kimchi = 690; // присваивание значения свойству
menu["Ramen"] = 1190; // присваивание значения свойству через прямые скобки

delete menu["Samgyeopsal"]; // удаление свойства

console.log(menu)

let new_worker = {
    first_name : "Alima",
    last_name : "Kusmanova",
    age : 18,
    intro : () => console.log(`Hi, I'm ${new_worker.first_name}`)
}

new_worker.intro();

////4////
let workers = ["Aidar", "Beknar", "Murat","Aruzhan","Erlan","Nartay","Samat","Gleb"];

workers.pop(); 
workers.push("Yerkebulan"); 
workers.shift();
workers.unshift("Aidana");
console.log(workers.length);

const sliced_workers = workers.slice(2);
console.log(sliced_workers);

let balmuzdaky = workers.filter(i => i == "amazing name")
console.log(balmuzdaky);


let workersSpread = ["cool people:", ...workers];
console.log(workersSpread);


function like(name, ...menu){
    return `${name} had sold all of this : ${menu}`
}
console.log(like(theWaiterOfTheMonth, menu_list));


////5////
console.log(opening_year == "2022") // true
console.log(opening_year === "2022") // false

if(theBestMeal === "Kimpab"){
    console.log("of course it is")
}else{
    console.log("nah")
}

let checking = theBestMeal === "Chicken" ? "of course it is" : "nah";
console.log(checking);

////6////
let sum = 0;
let price = Object.values(menu);
for(let i = 0; i < price.length; i++){
    sum += price[i];
}
console.log(sum);

let i = 0;
while(i != workers.length){
    console.log(workers[i] + " is cool");
    i += 1;
}

let text = "";
let j = 0;
do{
    text += menu_list[j] + ", ";
    j += 1;
}
while(j != menu_list.length)

console.log(`${text} is delicious`);

////7////
let big_workers = [];
function find_e(list){
    for(let i = 0; i < list.length; i++){
        list[i] = list[i].toUpperCase();
        big_workers.push(list[i]);
    };
    return list;
}
console.log(find_e(workers));

let Food = {
    name: "Ramen",
    price: 1090,
    rate : "0,9",
};

function response(Food){
    return `${Food.name} costs ${Food.price} and has a rate: ${Food.rate}`;
}
console.log(response(Food));


let numOfWorkers = () => {return workers.length;}
console.log(numOfWorkers());


////8////
import {visitor, Rm as doYouHaveRamen} from './export.mjs';
console.log(visitor());

console.log(doYouHaveRamen("Ramen", menu_list));

import Bill from "./expDef.mjs";
console.log(Bill(3, 1090));
