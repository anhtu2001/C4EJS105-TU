// 1
// cach1
// let a = 5;
// let b = 6;
// console.log(a, b);
// a = 6;
// b = 5;
// console.log(a, b);

// cach2
// let a = 5,
// let   b = 6,
//  let tmp;
// tmp = a;
// a = b;
// b = tmp;

// cach 3
// let a = 5;
// let b = 6;
// [a, b] =[b, a];
// console.log(a, b);

// cach 4
// let a = 5;
// let b = 6;
// a = b + (b=a, 0)
// console.log(b);


// 2
// const s = 'Hello beauty there';
// const a = Array(s);
// console.log(a);
// cach 1
// const s = 'Hello beauty there';
// const a = s.replace(',',' ').replace(',',' ').split(' ');   
// console.log(a);
// cach 2
//  let s = 'Hello beauty there';
//  let a = s.split(" ");
//  console.log(a);
// 3
// const a = [4, 5, 7, -8];
//  console.log(...a);

// 4

//  let i = prompt('Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?');
//  let c = ['The current items ares:', 'jeans', 'T-Shirt', 'Socks'];
//     if (i == 'e') {
//     alert('This commend is not supported');

//     } else if (i == 'r') {
//       for(let a = 0; a < c.length; a++) {
//          console.log(c[a]);
//        } 
//     } else if (i == 'c') {
//        let b = prompt('Enter the name of the new item')
//        alert('Done');
//        c.push(b);
//        let i = prompt('Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?');
//        for(let a = 0; a < c.length; a++) {
//           console.log(c[a]);
//       } 
//     } else if (i == 'u') {
//        let x = prompt('Enter the position you want to update');
//       let v = prompt('Enter the new name');
//        c[x] = v; 
//        alert('Done');
//        let i = prompt('Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?');
//        for(let a = 0; a < c.length; a++) {
//           console.log(c[a]);
//         } 
//     } else if (i == 'd') {
//        let n = prompt('Enter the psition you want to delete');
//        alert('Done');
//        c.splice(Number(n), 1);
//        n >=1;
//        let i = prompt('Hi there, welcome to shop admin panel, what do you want (C,R,U,D)?');
//        for(let a = 0; a < c.length; a++) {
//           console.log(c[a]);
//         } 

//    } 

   // 5
   //  let b = prompt('nhap mot day so cach nhau boi ','');
   //  let newArray = [b];
   //  newArray = b.split(',');
   //  let a = newArray[0];
   //  for(let i = 0; i < newArray.length; i++) {
   //     a = a + Number(newArray[i]);
   //  }
   //  alert(`The sum of them is ${a}`);

   // 6
    // let b = prompt('nhap mot day so cach nhau boi ','');
    // let newArray = [b];
    // newArray = b.split(',');
    // let min = newArray[0];    
    // for(let i = 0; i < newArray.length; i++) {
    //    if(newArray[i] < min) {
    //       min = newArray[i];
    //    }
    // }
    // alert(`The smallest number is ${min}`);
 
   // 7
   // let arr = [3, 4, 6, -9, 10, -88, 2];
   // console.log(arr);
   // let b = prompt('enter a number');
   // let a = false;
   // for(let i = 0; i < arr.length; i++) {
   //    if(arr[i] == b) {
   //       alert(`${b} is found in my array at index ${i}`);
   //       a = true;
   //       break;
   //    }
   // } if (!a) {
   //    alert(`The number ${b} is not found in my array`);

   // Task 8
    let flockSizes = [12, 30, 123, 24, 78, 89, 58];
     console.log('This is my sheep sizes');
     console.log(...flockSizes);

     let biggestSize = Math.max(...flockSizes); 
     console.log(`\nNow my biggest sheep has size ${biggestSize}, let's shave it`);

     let sheepIndex = flockSizes.indexOf(biggestSize);
     flockSizes[sheepIndex] = 8; // return to default size after shearing: 8
     console.log('\nAfter shearing, here is my flock');
     console.log(...flockSizes);

     let wantedMonths = 4;
     for(let i = 0; i < wantedMonths; i++) {
     console.log(`\nMONTH ${i+1}`);
     console.log('One month has passed, my sheeps have grown, here are their sizes');
     for(let i = 0; i < flockSizes.length; i++) {
         flockSizes[i] = Number(flockSizes[i]) + 50;
         }
     console.log(...flockSizes);
     }

     let totalSize = 0, currentPrice = 2; // in $
     for(let i = 0; i < flockSizes.length; i++) {
         totalSize += flockSizes[i];
     }
     console.log(`\nMy flock has size in total: ${totalSize}`);
     console.log(`I would get ${totalSize} * ${currentPrice}$ = ${totalSize*currentPrice}$`);

//     10
//     let seqNames = prompt('Enter a sequence of names:');
//     let Arr = seqNames.split(',');
//     let tempArr = [];
//     // method 1
//     // for (let i = 0; i < Arr.length; i++) {
//     //     let tempVar = `<${Arr[i]}>`;
//     //     tempArr.push(tempVar);
//     // }
//     // alert(`${Arr} => ${tempArr}`);

//     // method 2 using map
//     let map1 = Arr.map(x => `<${x}>`);
//     alert(`${Arr} => ${map1}`);
// }

// {
//     11
//     let seqNumbers = prompt('Enter a sequence of names:');
//     let Arr = seqNumbers.split(',');
//     // // method 1 
//     // let tempArr = [];
//     // for(let i = 0; i < seqNumbers.length; i++) {
//     //     let thisNumber = Number(Arr[i])
//     //     if(thisNumber & 1) {
//     //         tempArr.push(thisNumber);
//     //     }
//     // }
//     // alert(tempArr);
//     // method 2 using filter function
//     let result = Arr.filter(x => Number(x) % 2 != 0);
//     alert(result);
// }
