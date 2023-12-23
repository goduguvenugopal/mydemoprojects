  

  
 
  
  
       function myfunction(){
  
      let name = prompt("Please Enter Your Name")

      let marks = prompt("Please Enter Your Marks")
      let result;
      switch(true){
      case marks > 90 && marks <=100 :
      result = "great you are the topper"
      break;
      case marks >65 && marks <=90 :
        result = "congratulations you got first class"
        break;
        case marks >=40 && marks <=65 :
          result = "you got second class"
          break;
          case marks >=30 && marks <=40:
            result = "you got third class"
            break;
            case marks <30 :
             result = "sorry you are failed , better luck next time"
           break;
             
             default:
           result = "please enter your marks"
            break;
            } 
 
            
 
      document.getElementById("demo").innerHTML = "Hello " + name + " " + result + " ";
       
      


  }
  
 

 