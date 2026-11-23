//  let a = Number(prompt("son kiritin"));

//  if(a % 2 == 0){
//      console.log("juft son")
//  }else{
//      console.log("toq son")
//  }

//  let ball = Number(prompt("balingizni kiritin: "))


//  if(ball >= 86){
//      console.log("Sizning balingiz 5");
//  }
//  else if(ball >= 71 && ball <= 85){
//      console.log("Sizning balingiz 4");

//  }
//  else if (ball >= 56 && ball <= 70){
//      console.log("Sizning balingiz 3");

//  }
//  else{
//      console.log("Sizning balingiz 2")
//  }


//  let number = +prompt("son kiritin")

//  if (number >= 1 && number <= 100){
//      console.log("oraliqda")
//  }else{
//      console.log("tashqarida")
//  }

//  if(number < 1 || number > 100){
//      console.log("tashqarida");
    
//  }else{
//      console.log("oraliqda")
//  }

//  console.log(5 == "5");
//  console.log(5 === "5");


// let num = +prompt("son kiritin")

// let result = num % 2 === 0 ? "juft" : "Toq"

// console.log(result)

// console.log("5" - 1);   // 4
// console.log("5" * 2);   // 10
// console.log("5" + 1);   // "51"  (!)


let day = Number(prompt("xafta kuni raqami "))

switch (day) {
    case 1:
        console.log("Yakshanba")
        break;
    case 2:
        console.log("Dushanba")
        break
    case 3:
        console.log("seshanba")
        break
    case 4:
        console.log("chorshanba")
        break
    case 5:
        console.log("payshanba")
        break
    case 6:
        console.log("Juma")
        break
    case 7:
        console.log("Shanba")
        break        
    default:
        console.log("bunday xafta kuni mavjud emas")
        break;
}


switch (day) {
    case 6:
    case 7:
        console.log("Dam olish kuni");
        break;
    default:
        console.log("Ish kuni");
}