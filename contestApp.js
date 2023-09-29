// Practice Set10:
// Q.01

const url = "https://kontests.net/api/v1/all";
const cardContainer = document.getElementById("main");
let images = [
  "https://images.unsplash.com/photo-1610563166150-b34df4f3bcd6?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1076&q=80",
  "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://cdn.britannica.com/30/199930-131-B3D1D347/computer.jpg",
  "https://images.unsplash.com/photo-1516116216624-53e697fedbea?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1228&q=80",
  "https://www.biztechcs.com/wp-content/uploads/2021/07/12-Best-Programming-Languages-for-Web-App-Development-jpg-webp.webp",
  "https://images.unsplash.com/photo-1619410283995-43d9134e7656?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1170&q=80",
  "https://www.softermii.com/assets/uploads/blog/20230106/cover-big.webp",
  "https://cdn.pixabay.com/photo/2015/09/05/20/02/coding-924920_1280.jpg",
  "https://cdn.pixabay.com/photo/2016/11/30/20/58/programming-1873854_1280.png",
  "https://cdn.pixabay.com/photo/2016/11/19/22/52/coding-1841550_1280.jpg",
  "https://cdn.pixabay.com/photo/2017/03/23/09/34/artificial-intelligence-2167835_1280.jpg",
];
const hamburgerMenu = document.querySelector(".hamburgerMenu");
const mobileNavbar = document.querySelector(".mobileNavbar");
hamburgerMenu.addEventListener("click", () => {
  hamburgerMenu.classList.toggle("isActive");
  mobileNavbar.classList.toggle("isActive");
});
// function for api time format conversion
const formatDateTime = (apiDateTme) => {
  const date = new Date(apiDateTme); // Passes api's date & time string to js's Date() function

  const day = date.getDate().toString().padStart(2, "0"); // padStart pads/replaces 2 places with zero
  const month = (date.getMonth() + 1).toString().padStart(2, "0"); // +1 coz to change natural index staring from 0
  const year = date.getFullYear();

  const hours = date.getHours() % 12 || 12; // % returns remainder e.g. 8%12 will return 8 || condition is when there will be zero at midnight
  const minutes = date.getMinutes().toString().padStart(2, "0");
  const amORpm = date.getHours() >= 12 ? "PM" : "AM";

  return `${day}/${month}/${year}  ${hours}:${minutes} ${amORpm}`;
};

let randomImage;
const response = fetch(url);
response
  .then((data) => {
    return data.json();
  })
  .then((contests) => {
    let htmlOfEachCard = "";
    for (const contest in contests) {
      const startTime = formatDateTime(contests[contest].start_time);
      const endTime = formatDateTime(contests[contest].end_time);
      randomImage = Math.floor(Math.random() * images.length);
      htmlOfEachCard += `  <div class="card">

                <img src=${images[randomImage]}>

                <h2>${contests[contest].name}</h2>
                <div class="info">
                    <p> <span>Site: </span> ${contests[contest].site}</p>
                    <p> <span>Starts At: </span> ${startTime}</p>
                    <p> <span>Ends At: </span> ${endTime}</p>
                    <p> <span>Status: </span>${contests[contest].status} </p>
                    <p> <span>In 24hr?: </span> ${contests[contest].in_24_hours}</p>
                </div>
                <button> <a target="_blank" href="${contests[contest].url}">Visit ${contests[contest].site}</a></button>
            </div>`;
    }
    cardContainer.innerHTML = htmlOfEachCard;
  });

// Q.02/03/04
// let getUserNote = localStorage.getItem("note");
// alert("note from localStorage is----->\n " + getUserNote);

// let userNote = prompt("Please! Enter your note here");
// if (userNote) {
//   localStorage.setItem("note", userNote);
// }

// let deleteUserNote = confirm("Do you want to delete your note");
// if (deleteUserNote) {
//   localStorage.removeItem("note");
//   alert("Your note has been deleted!");
// }
