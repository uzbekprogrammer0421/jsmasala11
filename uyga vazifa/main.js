// 1-task

// var mergeTwoLists = function(list1, list2) {
//     let new_arr = [...list1,...list2]
//     let massiv = new_arr.sort()
//     console.log(massiv);
// };
// mergeTwoLists(list1 = [1,2,4], list2 = [1,3,4])


// 2-task


// function transfer(params){
//     let massiv = [...params]
//     let new_arr = []
//     let result = []
//     for(let i = 0; i < massiv.length; i++){
//         if (!new_arr.includes(massiv[i])) {
//             new_arr.push(massiv[i])
            
//         }
//         else {
//             result.push(massiv[i])
//         }
//     }
//     console.log(result);
// }
// transfer([1,2,4,1,3,4,3])


// 3-task 1-usul


// const reverse = function(num) {
//     let massiv = String(num).split('').reverse().join('');
//     console.log(massiv);
// }
// reverse(53);


// 3-task 2-usul


// var reverse = function(x) {
//     let item = x
//     let massiv = Array.from(item.toString(), Number).reverse()
//     let result = massiv.join("")
//     console.log(result);
// };
// reverse(455)


// 4-task 


// function center(params) {
//     let massiv = [...params]
//     let num = 0
//     let num2 = 0
//     result = 0
//     if(massiv.length % 2 == 0){
//         num = (massiv.length / 2) + 1
//         num2 = (massiv.length / 2) - 1
//         result = ((num + num2) / 2)
//         console.log(result);
//     }
//     else {
//         result = (massiv.length / 2) - 0.5
//         console.log(massiv[result]);
//     }
//     console.log(massiv.length);
// }
// center([10,20,30,40,50,60,70,80,90])