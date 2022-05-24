//練習
const me = 'WeiTing';
let activity = '說話';

console.log(`${me}我好想他，好想跟他${activity}，怎麼辦?我完全沒有動力，我覺得好累，理解程式好麻煩，好想放棄...`);

//字串
let a = 'Hello';
console.log(a,me);
console.log(a+','+me);


let age="25";
let age_num= 25;
let c=13;
//typeof 變數型態
console.log(typeof a);
console.log(typeof age);
let max_num=a+age_num;
console.log(typeof max_num);

console.log(typeof c);

//NaN 非數字
let total=max_num*a;
console.log(total); //NaN
console.log(typeof total); //number

//parseInt 將()字串轉為數字
let num=parseInt('1236');
console.log(num);
console.log(typeof num); //num

//parseInt 將()字串轉為數字
let num1=parseInt('APP');
console.log(num1);
console.log(typeof num1); //num
