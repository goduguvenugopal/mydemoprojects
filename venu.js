  
   
  
  function myfunction(){
    let text;
    let person = prompt("Please Enter Your Name :")
    if(person == null || person == "" ){
      text = " user cancelled";
    }
  
  
  else{
    text = "helloo " + person + " how are you";
  }

   
  document.getElementById("demo").innerHTML = text;

  }