// dropdown

    document.addEventListener('DOMContentLoaded', function () {
        const toggleButton = document.querySelector('.toggle_btn');
        const dropdownMenu = document.querySelector('.dropdown-menu');

        toggleButton.addEventListener('click', () => {
            dropdownMenu.classList.toggle('open'); // Toggle the open class
        });
    });



// Download CV Button
document.getElementById('downloadCvBtn').addEventListener('click', function() {
    window.location.href = 'Farwa Ali - CV.pdf'; 
});


// Hire Me Button

document.getElementById('hireMeBtn').addEventListener('click', function() {
    document.getElementById('contactModal').style.display = 'block'; 
});


document.querySelector('.close-btn').addEventListener('click', function() {
    document.getElementById('contactModal').style.display = 'none';
});


window.onclick = function(event) {
    if (event.target == document.getElementById('contactModal')) {
        document.getElementById('contactModal').style.display = 'none';
    }
};
// contact 
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); 
  
  
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
  
    
    if (name === "" || email === "" || message === "") {
      alert("Please fill in all fields before submitting.");
      return;
    }
  
 
    const feedback = document.getElementById('feedback');
    feedback.classList.remove('hidden'); 
  
    document.getElementById('contactForm').reset();
  
   
    setTimeout(function() {
      feedback.classList.add('hidden');
    }, 3000); 
  });

// video
  function openModal(videoSrc) {
    document.getElementById('videoSource').src = videoSrc; 
    document.getElementById('modalVideo').load(); 
    document.getElementById('videoModal').style.display = "block";
}

function closeModal() {
    document.getElementById('videoModal').style.display = "none"; 
    document.getElementById('modalVideo').pause(); 
    document.getElementById('modalVideo').currentTime = 0; 
}

  