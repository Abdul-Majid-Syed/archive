//Get the button
var mybutton = document.getElementById("myBtn");

// When the user scrolls down 20px from the top of the document, show the button
window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

// When the user clicks on the button, scroll to the top of the document
function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}
function myFunction() {
  var txt;
  var person = prompt("Please enter your name \nNote: This will not be stored", "");
  if (person == null || person == "") {
    txt = "Oops! That's an error. Please try again";
  } else {
        var txt;
        var age = prompt("Please enter your age \nNote: This will not be stored", "");
        if (person == null || person == "") {
          txt = "Oops! That's an error. Please try again";
        } else {
                    var txt;
                var area = prompt("Please enter where you live \nNote: This will not be stored", "");
                if (person == null || person == "") {
                txt = "Oops! That's an error. Please try again";
                } else {
                    var txt;
                    var country = prompt("Please enter which country you live \nNote: This will not be stored", "");
                    if (person == null || person == "") {
                    txt = "Oops! That's an error. Please try again";
                    } else {
                        txt= "Your name is " + person + ". You are " + age + " years old. You live in " + area + " in " + country + 
                        "\n So how was that? &#128513";
                        
                    }
                    document.getElementById("demo").innerHTML = txt;
                    }
                document.getElementById("demo").innerHTML = txt;
                }

                
        document.getElementById("demo").innerHTML = txt;
       }
  document.getElementById("demo").innerHTML = txt;
}


function openNav() {
  document.getElementById("myNav").style.height = "100%";
}

function closeNav() {
  document.getElementById("myNav").style.height = "0%";
}