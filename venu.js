  function callbackfunction1(){
    console.log("hii this is venu gopal i want to become a software1 developer by the 2026.")
  }

  function callbackfunction2(){
    console.log("hii this is venu gopal i want to become a software2 developer by the 2026.")
  }

  function add(n1, n2,a){
    console.log(n1-n2)
    a()
  }

  let a = 144
  let b = 6

  add(a,b,callbackfunction2)