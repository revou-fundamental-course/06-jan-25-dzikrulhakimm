// Slider
const sliderItems = document.querySelectorAll('.slider-item');

let sliderActive = 1;

if (sliderItems) {
  sliderItems.forEach((slider, index) => {
    if(index == 0) {
      slider.setAttribute("data-show","show");
    } else {
      slider.setAttribute("data-show","hidden");
      }
  })

  setInterval(() => {
    sliderItems.forEach((slider, index) => {
      if(sliderActive === index) {
        slider.setAttribute("data-show","show");
      } else {
        slider.setAttribute("data-show","hidden");
      }
    });

    if(sliderActive === sliderItems.length - 1) {
      sliderActive = 0;
    } else {
      sliderActive++;
    }

  },5000)
}

// Handle form submission
function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload
    // Get form data
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message").value;
    // Process the form data (example: display it in the "info" div)
    const infoDiv = document.querySelector(".info");
    infoDiv.innerHTML = `
        <p><b>Nama:</b> ${name}</p>
        <p><b>Tanggal Lahir:</b> ${dob}</p>
        <p><b>Jenis Kelamin:</b> ${gender}</p>
        <p><b>Pesan:</b> ${message}</p>
    `;
    return false; // Prevent traditional form submission
  }
  
  function handleSubmit(event) {
    event.preventDefault(); // Prevent default form submission
    // Check if all required fields are filled
    if (document.getElementById("name").value === "" ||
        document.getElementById("dob").value === "" ||
        !document.querySelector('input[name="gender"]:checked') ||
        document.getElementById("message").value === "") {
        alert("Please fill in all required fields.");
        return false; // Prevent form submission
    }
    // If all fields are filled, you can proceed with form processing here
    // ... (Your existing code to handle form data)
    return false; // Prevent traditional form submission
  }
  
  function handleSubmit(event) {
    event.preventDefault(); // Prevent page reload
    // Get form data
    const name = document.getElementById("name").value;
    const dob = document.getElementById("dob").value;
    const gender = document.querySelector('input[name="gender"]:checked').value;
    const message = document.getElementById("message").value;
    
    // Get current time
    const currentTime = new Date().toLocaleString(); // Formats time based on user's locale
    
    // Update the .info div with the submitted data
    const infoDiv = document.querySelector(".info");
    infoDiv.innerHTML = `
        <p><b>Current Time :</b> ${currentTime}</p>
        <p><b>Name :</b> ${name}</p>
        <p><b>Birth of Date :</b> ${dob}</p>
        <p><b>Gender :</b> ${gender}</p>
        <p><b>Message :</b> ${message}</p>
    `;
    return false; // Prevent traditional form submission
  }
  
  // Get the button:
  let mybutton = document.getElementById("back-to-top-btn");
  
  // When the user scrolls down 20px from the top of the document, show the button
  window.onscroll = function() {scrollFunction()};
  
  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block"; // Show the button
    } else {
      mybutton.style.display = "none"; // Hide the button
    }
  }
  
  // When the user clicks on the button, scroll to the top of the document
  mybutton.onclick = function() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }