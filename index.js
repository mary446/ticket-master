
// Function to book a ticket
function bookTicket(eventId){
  // Display success message
    const successMessage = document.getElementById(`success-message-${eventId}`);
    successMessage.textContent = 'Ticket booked successfully!';
  }
  // Function to fetch data from the API
  function fetchData() {
    fetch('https://app.ticketmaster.com/discovery/v2/events.json?apikey=ox5fWi2X1lhSgpdbEpEJKtjo4YGXzSVl')
      .then(response => response.json())
      .then(data => {
        // Process the data and extract relevant information
        const events = data._embedded ? data._embedded.events : [];
  
        // Create an HTML string to display the data
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
  
  // Call the fetchData function when the page loads
  window.addEventListener('load', fetchData);
  document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault(); // Prevent form submission
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
  
    // Perform any necessary validation
    if (name === "" || email === "") {
      alert("Please enter both your name and email.");
      return;
    }
  });
  