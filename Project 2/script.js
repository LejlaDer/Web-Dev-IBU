// Tabs

function openLink(evt, linkName) {
    var i, x, tablinks;
    x = document.getElementsByClassName("myLink");
    for (i = 0; i < x.length; i++) {
      x[i].style.display = "none";
    }
    tablinks = document.getElementsByClassName("tablink");
    for (i = 0; i < x.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" w3-red", "");
    }
    document.getElementById(linkName).style.display = "block";
    evt.currentTarget.className += " w3-red";
  }
  
// Click on the first tablink on load
document.getElementsByClassName("tablink")[0].click();

//Theme switcher

function toggleTheme() {
  var body = document.body;
  var nav = document.querySelector('.w3-bar');
  var elementsToToggle = document.querySelectorAll('.toggle-theme');
  
  if (body.classList.contains('w3-light-grey')) {
      body.classList.remove('w3-light-grey');
      body.classList.add('w3-black');
      nav.classList.remove('w3-white');
      nav.classList.add('w3-black');
      
      for (var i = 0; i < elementsToToggle.length; i++) {
          elementsToToggle[i].classList.remove('w3-light-grey');
          elementsToToggle[i].classList.add('w3-dark-grey');
      }
  } else {
      body.classList.remove('w3-dark-grey');
      body.classList.add('w3-light-grey');
      nav.classList.remove('w3-black');
      nav.classList.add('w3-white');
      
      for (var i = 0; i < elementsToToggle.length; i++) {
          elementsToToggle[i].classList.remove('w3-dark-grey');
          elementsToToggle[i].classList.add('w3-light-grey');
      }
  }
}

function validateCityInput(city) {
  var majorCities = ["New York", "Los Angeles", "Chicago", "Houston", "Phoenix", "Philadelphia", "San Antonio", "San Diego", "Dallas", "San Jose"];
  return majorCities.includes(city);
  
}

$(document).ready(function() {
  // Event handler for flight search button
  $("#flightSearchBtn").click(function() {
      var departingFrom = $("#departingFrom").val();
      var arrivingAt = $("#arrivingAt").val();

      if (!validateCityInput(departingFrom) || !validateCityInput(arrivingAt)) {
          $(".toast-error").toast("show");
      } else {
          $(".toast-success").toast("show");
      }
  });

  // Event handler for car rental search button
  $("#carSearchBtn").click(function() {
      var pickupPoint = $("#pickupPoint").val();

      if (!validateCityInput(pickupPoint)) {
          $(".toast-error").toast("show");
      } else {
        $(".toast-success").toast("show");
      }
  });
});

// spapp

$(document).ready(function() {
  var app = $.spapp({
      defaultView: "#navbar", // the view that will be shown by default
      templateDir: "./views/", // the directory where your templates are stored
      pageNotFound: "error_404" // the template to show if a view does not exist
  });

  app.run();
});


//Sign up validation and action

function submitForm() {
  var firstName = document.getElementsByName("FName")[0].value.trim();
  var lastName = document.getElementsByName("LName")[0].value.trim();
  var email = document.getElementsByName("Email")[0].value.trim();
  var phone = document.getElementsByName("Phone")[0].value.trim();
  var signUpForm = document.getElementById("signupform");


  if (email.indexOf("@") === -1) {
      alert("Please enter a valid email address.");
  }

  if (phone.length < 9 || isNaN(phone)) {
      alert("Please enter a valid phone number with at least 9 digits.");
  }

  document.getElementById("fname").textContent = "Name: " + firstName;
  document.getElementById("lname").textContent = "Last name: " + lastName;
  document.getElementById("email").textContent = "Email: " + email;
  document.getElementById("phone").textContent = "Phone number: " + phone;

  // Clear form fields

}


