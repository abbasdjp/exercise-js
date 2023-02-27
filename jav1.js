// let mtname = 'mohma';
// let myage = 85;
// let scobydo;
// /*alert(typeof myage)*/

// let sum = 450+9;
// alert(sum)


// var ttteext = " i love my work and i love my routin"

// // alert(ttteext.slice(-7 , 17))

//  alert(ttteext.substring(-7 , 17))

// alert(ttteext.substr(-7 , 17))


// ///////////////////////////////////////////////// OPERATOR in javascript

// var number = 100

// console.log(number)

// number -= 10

// console.log(number)

// number += 43

// console.log(number)

// number *= 10

// console.log(number)

// number /= 2

// console.log(number)





// var slicepizza = 10;

// var number2 = --slicepizza;

// alert( "slice:" + slicepizza);

// alert(number2)




// ///////////////////////////for

// const names = 'johnmarrybbobosalamankaali'

//      for(i = 0; i < names.length; i++){
//      console.log(names[i])
// }


// /////////////////////////// سبد خرید
// var sum = 0
// for (i = 0; i < 5; i++) {
//     sum = sum + Number(prompt('bede number'))
// }
// alert(sum)

// ////////////////////////////میانگین با for while

// var userNumber = 0

// var sum = 0

// var conter = 0

// while (userNumber != -1) {
//     sum += userNumber
//     userNumber = Number(prompt('enter the number \n if you dont have number enter -1'))
//     if (userNumber != -1) {
//         conter++
//     }
// }

// alert(sum / conter)

// /////////////////////////// تعداد ارقام ورودی

// var userNumber = prompt('enter the number')
// var sum = 0

// for (i = 0; userNumber % 10 != 0; i++) {
//     sum = sum + (userNumber % 10)    
//     userNumber = Math.floor(userNumber / 10)
// }

// alert(sum)


// ///////////////////////////

// var userNumber = prompt('enter the number')

// var sum = 0

// if(isNaN(userNumber)){
//     alert("مقدار وارد شده غلط است")
// }else{
//     for (i = 0; userNumber / 10 != 0; i++) {
//         sum++
//         userNumber = Math.floor(userNumber / 10)
//     }    
// }
// alert(sum)

// //////////////////////////////////////while
// ////////////////////////////////////// tamrin 
// while
// var i = 0

// while (i < 100) {
//     console.log(i)
//     i += 2
// }

// var userNumber = null
// var sum = 0
// var i = 0

// while (i < 5) {
//     userNumber = Number(prompt('لطفا عدد ' + (i + 1) + ' را وارد کنید '))
//     sum = sum + userNumber;
//     i++;  
// }

// alert( 'میانگین اعداد شما ' + sum / 5)
// ///////////////////////////////////////////////////////////////////////////////excer 1
// var userNumber = Number(prompt('enter some number'))

// var sum = 0

// while (userNumber / 10 != 0) {
//     sum = sum + (userNumber % 10)
//     userNumber = Math.floor(userNumber / 10)
// }

// console.log(sum)

// //excer 2
// var userNumber = prompt('عدد وارد کن کصکش')

// var sum = 0

// while (userNumber % 10 != 0) {
//     sum++
//     userNumber = Math.floor(userNumber / 10)
// }

// alert(sum)

// ///////////////////////////////////////////////////////ecer 3

// var userNumber1 = Number(prompt('enter number'))
// var userNumber2 = Number(prompt('enter number'))

// if(userNumber1 / 2 === 1){
//     while (userNumber1 < userNumber2) {
//         console.log(userNumber1)
//         userNumber1 += 1
//     }
// }else{
//     userNumber1++
//     while (userNumber1 < userNumber2) {
//         console.log(userNumber1)
//         userNumber1 += 1
//     }
// }
// alert(userNumber1)

// /////////////////////////////////////////////////////////////excer 4

// var userNumber = 0

// var sum = 0

// var conter = 0

// while (userNumber != -1) {
//     sum = sum + userNumber
//     userNumber = Number(prompt('enter number'))
//     if (userNumber != -1){
//         conter++
//     }
// }

// console.log(sum / conter)

// /////////////////////////////////////////////////////////////excer 55555

// var userFirstNumber = 0
// var userSecondNumber = 0

// var i = 0

// while (i < 1) {
//     userFirstNumber =  Number(prompt('enter number 1'))
//     userSecondNumber = Number(prompt('enter number 2'))
//     i++
// }

// alert(userFirstNumber ** userSecondNumber)


// var userFirstNumber = 0
// var userSecondNumber = 0


// for (i = 0; i < 1; i++) {
//     userFirstNumber =  Number(prompt('enter number 1'))
//     userSecondNumber = Number(prompt('enter number 2'))
// }

// alert(userFirstNumber ** userSecondNumber)


// var userFirstNumber = Number(prompt('enter number'))
// var userSecondNumber = Number(prompt('enter number'))

// var power = 1

// for (var i = 0; i < userSecondNumber; i++) { 
//     power = power * userFirstNumber
// }

// alert(power)



// var userFirstNumber = Number(prompt('enter number'))
// var userSecondNumber = Number(prompt('enter number'))

// var i = 0

// var power = 1

// while (i < userSecondNumber) {
//     power = power * userFirstNumber
//     i++
// }

// alert(power)


// var userFirstNumber = Number(prompt('enter number'))
// var userSecondNumber = Number(prompt('enter number'))

// var power = 1

// for(var i = 0; i < userSecondNumber; i++) {
//     power = power * userFirstNumber
// }

// alert(power)

// //////////////////tamrin 
// var userFirstNumber = prompt('enter number 1')
// var userSecondNumber = prompt('enter number 2')

// var power = 1

// var i = 0

// while (i < userSecondNumber) {
//     power = power * userFirstNumber
//     i++
// }

// console.log(power);

// var userNumber = 0

// var conter = 0

// var sum = 0

// while (userNumber != -1) {
//     sum = sum + userNumber
//     userNumber = Number(prompt("عدد وارد کنید"))
//     if (userNumber != -1) {
//        conter++ 
//     }
// }

// console.log("میانگین : " + sum / conter);

// /////////////////////////////////////////////array

// var students = ['ali' , 'hasan' , 'hossin' , 'hoog' , 'hasanpor' , 'mostafa madar jende', 45]
// console.log(students)

// students.push('hesam' , 'mohamad')
// console.log(students)

// //////////////////////////////////////////////////excer array yadavary
// var userNumber = []

// var user = 0

// var sum = 0

// while (user != -1) {
//     user = Number(prompt("عدد های خود را وارد کنید در صورتی که عدد هایتان تمام شد عدد 1- را وارد کنید"))
//     if (user != -1) {
//         userNumber.push(user)
//     }
// }
//     for(var i = 0; i < userNumber.length; i++){
//         sum = sum + userNumber[i]
//     }   

//     console.log("میانگین اعداد : " + sum / userNumber.length);


// ///////////////////////////////////////////////////////////object

// var users = ['ali' , 'ahamad' , 'beniiiiiiii omm' , 'mogiii']

// var user = {
//     name:'ali',
//     family: 'rangbar',
//     age: 21,
//     phoneNumber: 0902563672
// };

// console.log(user)

// console.log(user['family'])




// var users = [{
//     name:'abbas', 
//     sizekon: 'ommmmmmm',
//     taller: '193cm',
// },
// {
//     name: 'benyamin',
//     sizekon: 'akhhh',
//     taller: '197cm',
// },
// ]

// console.log(users);
// ///////////////////////////////////////////////////////////tamrin kiri 


// var users = [
//     {i: 1, name:'ali' , lastname: 'reza' , email: 'lexnforlax.com' , age : 22}
// ]

// var userName = prompt('enter name')
// var userLAstname = prompt('enter Last name')
// var userEmail = prompt('enter Email')
// var userAge = prompt('enter age')

// if (userName.length > 15 || userName.length < 3) {
//     alert('مقدار بیشتری وارد کنید')
// }else if(userLAstname.length > 10  || userLAstname.length < 3){
//     alert('مقدار بیشتری وارد کنید')
// }else if(isNaN(userAge) || userAge < 3){
//     alert("عدد وارد کنید و بیشتر از 3 رقم نباشه")
// }else{
//     var newuser ={
//         name:userName,
//         lastname:userLAstname,
//         Email:userEmail,
//         age:userAge
//     }
//     users.push(newuser)
// }

// console.log(users)
// console.log(users)

// /////////////////////////////////////////////foreach

// var useraccunt =[
//     {id:1 , name:"METI" , lastname:"moseni" , phonenumber: 09025663672 , age: 20},
//     {id:2 , name:"BENYANIN" , lastname:"javanshir" , phonenumber: 09024824136 , age: 17},
//     {id:3 , name:"ABBAS" , lastname:"rangbar" , phonenumber: 09127564011 , age: 18},
// ]

// useraccunt.forEach(function (user) {  
//     console.log("Name :" + user.name + " Age :" + user.age)
// })

// /////////////////////////////////////////////incloud

// var userfruit = prompt("enter name of fruit")

// var fruit = ["banana" , "apple" , "mango" , "watermelon" , "papapya" , "raspberry" , "lemon" , "FIG"]

// var isloging = fruit.includes(userfruit)

// if(isloging === true){
//     alert("correct")
// }else{
//     alert("mistake")
// }

///////////////////////////////////////////tamrinnnnnnnnn yadavary به کمک while

// var userNumber = 0

// var conter = 0

// var sum = 0

// while (userNumber != -1) {
//     sum = sum + userNumber
//     userNumber = Number(prompt("عدد وارد کنید"))
//     if (userNumber != -1) {
//        conter++ 
//     }
// }

// console.log("میانگین : " + sum / conter);

///////////////////////////////////////////SOME

// var userData = [
//     {id: 1, name: "BENYAMY", age: 17},
//     {id: 2, name: "METI",  age: 24},
//     {id: 3, name: "ABBAS", age: 18},
// ]

// isinuser = userData.some(function(USER) {
//     console.log(userData);
//     return USER.age == 24 , 17
// })

// console.log(isinuser);
////////////////////////////////tamrin some important
// var allproduct = [
//     {id: 1, name:"شیر", price:90000,},
//     {id: 2, name:"خیار", price:40000,},
//     {id: 3, name:"گوجه", price:45000,},
//     {id: 4, name:"پیاز", price:8000,},
//     {id: 5, name:"موز", price:10000,},
//     {id: 6, name:"گوشت", price:25000,},
// ]

// var userbasket = [
//     {id: 1, name:"کاندوم", price:50000,},
//     {id: 2, name:"سبزی", price:13000,},
// ]


// var userproduct = prompt("لطفا اسم محصول خود را وارد کنید")

// var userrequast;

// var sum = 0

// var isinship = allproduct.some(function(product){
//     if(product.name == userproduct){
//     userrequast = product
//     return true
//     }})

// if (isinship == true) {
//     var newuser = 
//         {
//             name: userrequast.name,
//             price: userrequast.price,
//         }
//         console.log(userbasket.push(newuser));
//         userbasket.forEach(function(product){
//             sum = sum + product.price
//         })
//         alert(sum)
//         console.log(userbasket);
// }else{
//     console.log("محصول شما موجود نیست");
// }
    


//////////////////////////////////////////////////////////every

// var ages = [100 , 222 , 28 , 34 , 25 , 29]

// var isod = ages.every(function(age){
//     return age > 17
// })

// console.log(isod);

// var users = [
//     {id: 1, name:"john", lastname: "karimi", age:28},
//     {id: 2, name:"Ali", lastname: "hasahnpor", age:19},
//     {id: 3, name:"benii", lastname: "Rangbar", age:22},
// ]

// var isage = users.every(function(ages){
//     console.log(ages);
//    return ages.age > 18
// })

// if(isage === true){
//     alert('خوش امدید جونننننن')
// }else{
//     alert("اینجا جای بچه ها نیست")
// }

//////////////////////////////////////////////////////////splice

// var number = [12 , 25 , 45 , 85 , 55 , 478 , 54565 , 82 , 1232 , 5487]

// number.splice(2 , 9 , 15, 18)

// console.log(number);

//////////////////////////////////////////////////////////فروشگاه انلاین پیشرفته

// var allproduct = [
//     {id: 1, name:"شیر", price:90000},
//     {id: 2, name:"خیار", price:40000},
//     {id: 3, name:"گوجه", price:45000},
//     {id: 4, name:"پیاز", price:8000},
//     {id: 5, name:"موز", price:10000},
//     {id: 6, name:"گوشت", price:25000},
// ]

// var userbasket = [
//     {id: 1, name:"کاندوم", price:50000},
//     {id: 2, name:"سبزی", price:13000},
// ]

// var userrequast = prompt("اگر میخوای محصول به سبد خریدت اضافه کنی مقدار 1 \n اگرم میخوای محصول از سبد خریدت پاک کنی مقدار 2")

// if (userrequast === '1') {
//     var userproduct = prompt("اسم محصول")

//     var userData;

//     var isinshop = allproduct.some(function(product){
//         if(product.name === userproduct) {
//             userData = product
//             return true
//         }
//     })
// };
// if(isinshop === true){
//    var newuser = {
//         id: 3,
//         name : userData.name,
//         price: userData.price,
//     }
//     userbasket.push(newuser)
//     console.log(userbasket);
// }else if(isinshop === false){
//     alert("محصول مورد نظر نیست")
// }else if(userrequast === "2"){

//     var userproduct = prompt("اسم محصول")

//     var userfindindex = userbasket.findIndex(function(product){
//        return product.name === userproduct
//     })

//     userbasket.splice(userfindindex , 1)

//     console.log(userbasket);
// }else(
//     alert("مقدار درست وارد کنید")
//)

////////////////////////////////////////////filter maps

// var scores = [1 , 45641 , 45 , 8 , 22]

// var lopm = scores.filter(function(score){
//     return score > 18
// })
// console.log(lopm);

// var scores = [2 , 5 , 6 , 8 , 22]

// var power = scores.map(function(score){
//     return score ** 2
// })

// console.log(power);


////////////////////////////////////////////////تمرین فروشکاه 

// var allproduct = [
//     {id: 1, name: 'laptop' , price: 15000},
//     {id: 2, name: 'phone' , price: 14000},
//     {id: 3, name: 'desk' , price: 12000},
//     {id: 4, name: 'cable' , price: 9000},
//     {id: 5, name: 'coolpad' , price: 8000},
//     {id: 6, name: 'mouse' , price: 19000},
// ]

// var sum = 0

// var uperprice = allproduct.filter(function(product){
//     return product.price < 10000
// })

// var postcost = uperprice.length * 1000

// allproduct.forEach(function(product){
//     sum = sum + product.price
// })

// var totalprice = sum + postcost

// console.log("totalprice : " + totalprice);


/////////////////////////////////////////////////

// var scores = [10 , 20 , 40 , 50 , 62 , 70]

// console.log(scores.join('/ number=>'))
// //
// var names = 'BENYAMINZ , PARSHAN , MEHDI'

// console.log(names.split('/'))
// //
// var scores = [10 , 20 , 40 , 50 , 62 , 70]

// console.log(scores.reverse())
// //
// var scores = [10 , 20 , 40 , 50 , 62 , 70]

// console.log(scores.slice(1 , 4))
// //

///////////////////////////////////////////////tamrin

// var useerword = prompt("لغت وارد کن")

// var userCharect = useerword.split('')

// var userCharectrev = userCharect.reverse()

// var finalcharect = userCharectrev.join('')

// if(finalcharect === useerword){
//     alert("yep")
// }else{
//     alert("nop")
// }

///////////////////////////////////////////////// TODOLIST

var allTodo = [
    {id: 1, name: "programing" , condition: "done"},
    {id: 2, name: "yoga" , condition: "undone"},
    {id: 3, name: "play basketball" , condition: "done"},
]

var userTodo = prompt("1 adding todo \n2 delete todo \n3 done todo")


if(userTodo === '1'){
    var addingTodo = prompt("NAME WORK FOR ADD")

    var newobjectarray = {
        id: allTodo.length + 1,
        name: addingTodo , 
        condition: false
    }
    allTodo.push(newobjectarray)
    console.log(allTodo);
}else if(userTodo === '2'){
    var deleteTodo = prompt("NAME FOR DELETE")
    
    var findindexdtodo = allTodo.findIndex(function(todo){
        return todo.name === deleteTodo
    })
    allTodo.splice(deleteTodo , 1)
    console.log(allTodo);
}



