 // Function to fetch data from the API
  function fetchData() {
    fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=ox5fWi2X1lhSgpdbEpEJKtjo4YGXzSVl')
      .then(response => response.json())
      .then(data => {
        // Process the data and extract relevant information
        const events = data._embedded ? data._embedded.events : [];
      console.log(data['_embedded']);
      console.log(events[19])

        const html = events.map(event => `
          <div>
            <h2>${event.name || ''}</h2>
            <p>Venue: ${event._embedded && event._embedded.venues[0] ? event._embedded.venues[0].name : ''}</p>
            <p>Date: ${event.dates && event.dates.start ? event.dates.start.localDate : ''}</p>
            
            <button onclick="bookTicket('${event.id}')">Book Ticket</button>
            <p id="success-message-${event.id}"></p>
          </div>
        `).join('');
  
        // Insert the HTML into the 'data-container' element in your HTML file
        const dataContainer = document.getElementById('data-container');
        dataContainer.innerHTML = html;
      })
      .catch(error => {
        console.error('Error fetching data:', error);
      });
    }
  // Function to book a ticket
function bookTicket(eventId){
  // Display success message
    const successMessage = document.getElementById(`success-message-${eventId}`);
    successMessage.textContent = 'Ticket booked successfully!';
  }
  window.addEventListener('load', fetchData);
  document.getElementById('bookingForm').addEventListener("submit", function(event) {
   event.preventDefault();
  
    })
let bookingForm = document.getElementById("bookingForm");
bookingForm.addEventListener("submit", (e) => {
  e.preventDefault();
  let username = document.getElementById("username");
    let  email = document.getElementById("email");
    console.log(username);
    console.log(email);
    if (username.value == "" || email.value == "") {
      alert("Ensure you input a value in both fields!");
    } else {
      // perform operation with form input
      alert("This form has been successfully submitted!");

      bookingForm.style.display = "none";
      let cont=document.getElementById("data-container")
      cont.style.display="grid";
      
      
      username.value = "";
      email.value = "";
    }
})
