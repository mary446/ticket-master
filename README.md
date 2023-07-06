# ticket-master
In this project we are going to create a website that showcases the events available from a public api that is `ticket-master` under events .
In this project we are going to simply use the knowledge gotten from learning (`html.css and javascript`)
## instuctions 
1. Git and clone this project in your local directory 
2. Navigate to it and open it in your editor `visual studio code`
We are going to start of with our html file;
## step 1
1. write the basic code of html include a title,a form,and a div container to contain the data from the api
The form should contain a name ,email address and submit button thats for logging in 
2. link the html file to your css file and also the javascript file .

## step 2
1. Open the js file and lets start of with fetching the data from the api using 
fetch()method ...

2. After that we are going to extract the relevant information from our data 
to do this we are going to use conditional assignment statement that is: 
 declaring a variable (eg.using const,let), 
`const events = data._embedded ? data._embedded.events : [];` 
The ? is the conditional (ternary) operator. It evaluates the expression before it (data._embedded) as a condition. If the condition is truthy (evaluates to true) is a shorthand of an if statement.

3. Then we create a html string to display the data 
We can use the `.map`  takes a callback function as an argument, which will be executed for each element in the array.
Then create an inner html that contains a heading thats the event name, <p>for the venue and date then a button onclick(booking events)and you can also add a success message  that will have an id.
use the join() method with an anonymous string to convert an array into a readable string representation. It's a useful method when you need to transform an array into a single string for display or further processing.

4. Insert the HTML into the 'data-container' element in your HTML file
thats simply by using `getElementById`
After all that call the .catch incase an error occurs when fetching the data.
5. Call the fetchData function when the page loads 
using window that (serves as the interface between JavaScript code and the browser environment, allowing developers to interact with and control various aspects of the browser window and its behavior)
You can also perform a validation rule that make sure one enters the the correct name and format of an email address.
## addition
You can add a function called bookTicket and also a display a success message.
Style your page in any desired design using (class,id or tag name )in the css file.

## Step 3
Run the html file in your browser to see the incredible website created.

MIT License:Mary Njenga.