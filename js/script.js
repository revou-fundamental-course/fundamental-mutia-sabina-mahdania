
//INI BANNER AUTOSLIDE

let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 2000); // Change image every 2 seconds
}

// INI VALIDASI FORM
function validateForm(){
    const name = document.forms["message-form"]["nama"].value;
    const birthDate = document.forms["message-form"]["tanggal"].value;
    const gender = document.forms["message-form"]['gender'].value;
    const messages = document.forms["message-form"]['messages'].value;

    if (name == "" || birthDate == "" || gender == "" || messages == "") {
        alert("Tidak boleh ada yang kosong");
        return false;
    }
        
        tampilkan(name, birthDate, gender, messages);
        return false;
    

}

function tampilkan(name, birthDate, gender, messages){
    document.getElementById("sender-name").innerHTML = name;
    document.getElementById("sender-date").innerHTML = birthDate;
    document.getElementById("sender-gender").innerHTML = gender;
    document.getElementById("sender-messages").innerHTML = messages;
}