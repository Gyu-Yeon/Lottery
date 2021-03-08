const btn1 =document.querySelector('#btn');
const h2 = document.querySelector('h2')

btn1.addEventListener('click', function () {
    const sixNums = generateNum();
    h2.innerText = sixNums.sort((a, b) => a-b).join();
})



const generateNum = function() {
    const allNum = [];
    for(let i = 1;  allNum.length < 6; i++){
        let num = Math.floor(Math.random()*45) +1
        if(allNum.indexOf(num) === -1 ){
        allNum.push(num)
        }
    }
    return allNum
}

      
// const generateNum = function() {
//     const allNum = [];
//     for(let i = 0; i < 6; i++){
//         let num = Math.floor(Math.random()*45) +1
//         allNum[i] = num
//         for(let j = 0; j < allNum.length;  j++ ){
//         if(allNum[i] === allNum[j]){
//             allNum.pop();
//             let newNum = Math.floor(Math.random()*45) +1
//             newNum !== allNum[j]
//             allNum.push(newNum)
//         }
//       }
//     }
//     return allNum;
// }

// for(let i = 0; i < 7; i ++){
//     for(let j= 1; j < allNum.length; j++){

//     }
// }

 


// btn1.addEventListener('click',function () {
     
//     const num1 = Math.floor(Math.random()*45) +1
//     const num2 = Math.floor(Math.random()*45) +1
//     const num3 = Math.floor(Math.random()*45) +1
//     const num4 = Math.floor(Math.random()*45) +1
//     const num5 = Math.floor(Math.random()*45) +1
//     const num6 = Math.floor(Math.random()*45) +1
//     const allNum = [num1,num2,num3,num4,num5,num6]
//     h2.innerText = allNum.sort((a, b) => a-b).join()
//     console.log(allNum.sort((a, b) => a-b).join())
// })


