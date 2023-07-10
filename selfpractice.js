//Question 1
let a = "I am";
let b = " German";
console.log(a+b);

//Q-2
let x=20
if (x>15) {
  console.log("X is greater than 15")
}
else {console.log("X is smaller than 15");}

//Q-3
let n=20
if (n%2 === 0){
  console.log('n is even');
}
else {console.log("n is odd")}

//Q-4
let t=[1,2,3,4];
console.log(t.pop());
console.log(t.pop());
console.log(t.push(5));
console.log(t);
console.log(t[1]);




//Q-5

let Y="I love to talk"
console.log(Y.toUpperCase());

//Q-6
/*
In let you can change the value of the variable
In const the value remains constant. In const a value must be assigned at the time of declaration
*/

//Q-7
let m=20, k=25
if (x>18 && k>24) {
    console.log("m is greater than 18 and k is greter than 24");
}

//Q-8
let text="Hello world, welcome to WBS."
console.log(text.match("welcome"));

//Q-9

const students=[{response:{
campaign_source: "Facebook",
country: "Germany",
campaign_type :"Search",
results : [{
campaign_name: 'Dresses',
clicks:500,
impressions:11000,
cost:800,
revenue: 900,
orders: 15
},
{
    campaign_name: 'Shorts',
    clicks:600,
    impressions:12000,
    cost:700,
    revenue: 800,
    orders: 14
    }]}},

    {response:{
        campaign_source: "Google",
        country: "Germany",
        campaign_type :"Search",
        results : [{
        campaign_name: 'Dresses',
        clicks:450,
        impressions:11300,
        cost:700,
        revenue: 930,
        orders: 12
        },
        {
            campaign_name: 'Shorts',
            clicks:650,
            impressions:13000,
            cost:400,
            revenue: 900,
            orders: 10
            }]}}
           



        ];


console.log(students[1]['response']['results'][0]['cost']);
let googlesearchdressescost= students[1]['response']['results'][0]['cost']

console.log(students[0]['response']['results'][0]['cost']);
let facebooksearchdressescost= students[0]['response']['results'][0]['cost']

console.log(googlesearchdressescost + facebooksearchdressescost);


//Q-10

console.log(students[1]['response']['results'][0]['cost']);
let googledressescost= students[1]['response']['results'][0]['cost'];

console.log(students[1]['response']['results'][1]['cost']);
let googleshortscost= students[1]['response']['results'][1]['cost'];

console.log(googledressescost + googleshortscost);