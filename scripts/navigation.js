const navButton = document.querySelector('#nav-button');
const navLinks = document.querySelector('#nav-bar');

navButton.addEventListener('click', () => {
    navButton.classList.toggle('show');
    navLinks.classList.toggle('show');
});

const myPromise = new Promise((resolve, reject) => {

    const age = 20;

    if (age >= 18) {
        resolve("You are an adult hehe.");
    } else {
        reject("You are underage.");
    }

});

myPromise
    .then((result) => {
        console.log(result);
    })
    .catch((error) => {
        console.log(error);
    });


const myFunctionn = async () => {
    try {
        const result = await myPromise;
        console.log(result);
    } catch (error) {
        console.log(error);
    }
};
myFunctionn();


const myFunction = async () => {

    try {

        const result = await myPromise;

        console.log(result);

    } catch (error) {

        console.error(error);

    }

};
myFunction();


// here is with Async/ Await and Fetch API  /  and with the first way

const fetchData = async () => {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/todos/"); // Wait for the fetch to complete
    const data = await response.json(); // Wait for the response to be converted to JSON
    console.log(data); // Output the fetched data
  } catch (error) {
    console.error("Error fetching data:", error); // Handle any errors
  }
};

fetchData();

// here is with Async/ Await and Fetch API  /  and with the second way

async function getData() {
  const response = await fetch('https://jsonplaceholder.typicode.com/todos/'); // request
  const data = await response.json(); // parse the JSON data
  console.log(data); // temp output test of data response 
}

getData();
