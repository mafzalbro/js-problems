//  Write a JavaScript program to calculate number of days left until next Christmas.

const today = new Date();

console.log({ today });

const cmas = new Date(today.getFullYear(), 11, 25);

console.log({ cmas });

if (today.getMonth() == 11 && today.getDate() > 25) {
  cmas.setFullYear(cmas.getFullYear() + 1);
}
const oneDay = 1000 * 60 * 60 * 24;

console.log({ oneDay });

console.log({ dif: Math.ceil((cmas.getTime() - today.getTime()) / oneDay) });

console.log(
  Math.ceil((cmas.getTime() - today.getTime()) / oneDay) +
    " days left until Christmas!"
);



// const date_diff_indays = function(date1, date2) {   
//     const dt1 = new Date(date1);
//     const dt2 = new Date(date2);
//     return Math.floor(Date.UTC(dt2.getFullYear(), dt2.getMonth(), dt2.getDate())) - Date.UTC((dt1.getFullYear(), dt1.getMonth(), dt1.getDate()) /(1000 * 60 * 60 * 24));
// }