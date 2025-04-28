const scriptURL = 'https://script.google.com/macros/s/AKfycbwC3lkSqfLVcQyU--SDAbbkXYJO8f1mioynM5FBQubG42OsqOt9bUyTAw4OB0B9H3Lr/exec';
const form = document.forms['contact-form'];

form.addEventListener('submit', e => {
  e.preventDefault();

 document.getElementById('rendering').style.display="block";


  fetch(scriptURL, { method: 'POST', body: new FormData(form) })
    .then(response => {
      alert("Thank you! Your response has been submitted Successfully.Click ok to complete");
      window.location.reload(); 
    })
    .catch(error => console.error('Error!', error.message));
});

   document.addEventListener('DOMContentLoaded', function() {
        const homeLink = document.getElementById('homeLink');
        
        homeLink.addEventListener('click', function(event) {
            event.preventDefault(); // Prevents the default behavior of changing the URL
            
            // Find the home section
            const homeSection = document.getElementById('home');
            
            // Scroll to the home section without changing the URL
            homeSection.scrollIntoView({ behavior: 'smooth' });
        });
    });
//service
document.addEventListener('DOMContentLoaded', function() {
    // Array of link and section pairs
    const scrollLinks = [
        { linkId: 'serviceLink', sectionId: 'service' },
        { linkId: 'abo', sectionId: 'about' },
        { linkId: 'ccc', sectionId: 'contact' }
    ];

    // Loop through each link-section pair and add the smooth scroll behavior
    scrollLinks.forEach(item => {
        const link = document.getElementById(item.linkId);
        
        if (link) {
            link.addEventListener('click', function(event) {
                event.preventDefault();  // Prevents default anchor behavior that changes the URL
                
                const section = document.getElementById(item.sectionId);
                
                if (section) {
                    section.scrollIntoView({ behavior: 'smooth' });
                }
            });
        }
    });
});


// window.onload = function () {
//   const scriptURL = 'https://script.google.com/macros/s/AKfycbwC3lkSqfLVcQyU--SDAbbkXYJO8f1mioynM5FBQubG42OsqOt9bUyTAw4OB0B9H3Lr/exec';
//   const form = document.forms['contact-form'];

//   form.addEventListener('submit', e => {
//     e.preventDefault();

//     fetch(scriptURL, { method: 'POST', body: new FormData(form) })
//       .then(response => {
//         alert("Thank you! Form is submitted");
//         window.location.reload();
//       })
//       .catch(error => console.error('Error!', error.message));3
//   });
// };

