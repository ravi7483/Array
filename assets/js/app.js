var cl = console.log;

cl("app.js file");


// where we can store multiple value / info/ data/ on the basis of index number
// index number start form 0
// length start form 1

var ages = [25,35,34,34,56,56,34,5,4, 4,78,90,45,23,45,67,45,45,555,34,5,6];

var getZeroIndexValue = ages[0];

cl(getZeroIndexValue);


var getFithIndexValue = ages[5];
cl(getFithIndexValue);

ages[14]= 50;

var getFouINdexValue = ages[14];

cl(getFouINdexValue);
cl(ages);

var arrayLength = ages.length;

ages[arrayLength] = 200;
// var result = ages[2];
// cl(result);
// cl(ages);

var srno = [1,2,367,78];

cl(srno);

var arrayLenght = srno.length;
srno[arrayLenght] = 200;
cl(srno);

var result = [11,12,13,14,15,16,17,18,19,20,45,45];
cl(result);

var result1 = result[3];
cl(result1);

result1 = result[8];
cl(result1);

var ArrayLength = result.length;
result[ArrayLength] =300;

cl(result,typeof result);