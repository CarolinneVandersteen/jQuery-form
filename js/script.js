
 

$( document ).ready(function() {
  $( "#send" ).click(function(event) {
          event.preventDefault();
          
          let name = $("#display-name");
          let password = $("#pass");
          let confirmation = $("#pass-confirm");
          let email = $("#email");
          
          function makegreen(x) {
                  x.css("border","1px solid green");
          }

          function makered(x) {
                  x.css("border","1px solid red");
          }
          
          function checkchar(x) {
                  if (x.val().length==0){
                          $("#mistake").css("display","block");
                          makered(x);
                          alert("Velden mogen niet leeg zijn!");
                  }else if(x.val().length<5){
                          
                          $("#mistake").css("display","block");
                          makered(x);
                  }else{
                          $("#mistake").css("display","none");
                           makegreen(x);      
                  }
          }
         
          checkchar(name);
          checkchar(password);
          checkchar(confirmation);
          checkchar(email);
         

          if (!(password.val()==confirmation.val())){
                 $("#mistake").css("display","block");
                 alert("Password and confirmation have to be the same.");
                 $("#pass-confirm").css("border","1px solid red");
                 $("#pass").css("border","1px solid red");
                  
          }else{
              $("#mistake").css("display","none");     
          }
        
  });

  $( "#reset" ).click(function(event) {
          event.preventDefault();
          $('.form-group input[type="text"]').val('');
          $('.form-group input[type="password"]').val('');
  });

});
