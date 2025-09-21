// let weight = parseInt(prompt('enter Weight (kg)'));
// let height = parseFloat(prompt('enter nYour height(m)'));
// let gender = prompt('enter Genger as M or F');
// let bdmCategory;

// let firttName ='Ryan';
// let lastName = 'suuny';

// add bmi calculation
//output
// console.log(bmi);
// let bmi = weight / height **2;
//temperate literals
// `My name is ${firsName} ${lastName }, I live in ${city}, I am ...`
// document.addEventListener("DOMContentLoaded",() =>{});


// tested 
// const hamburger = document.getElementById("hamburger");
// const navLinks = document.getElementById("nav-links");
// hamburger.addEventListener("click", () => {

// navLinks.classList.toggle("show");
// console.log("Toggled:",navLinks.className);
// });

// const hamburger = document.getElementById("hamburger");
// const navLinks = document.getElementById("nav-links");
// const overlay = document.getElementById("overlay");
// hamburger.addEventListener("click", () => {

// navLinks.classList.toggle("show");
// overlay.classList.toggle("show");
// hamburger.classList.toggle("active");
// console.log("Toggled:",navLinks.className);
// });

// overlay.addEventListener("click", () => {

// navLinks.classList.remove("show");
// overlay.classList.remove("show");
// hamburger.classList.remove("active");
// console.log("Toggled:",navLinks.className);
// });

 // Get all "Read More" buttons
       const buttons = document.querySelectorAll(".read-more-btn");
        buttons.forEach(btn => {
          // console.log(btn);
          btn.addEventListener("click",() =>{
            const content = btn.previousElementSibling;
            content.classList.toggle("expanded");
            btn.textContent =content.classList.contains("expanded")? "Read Less" : "Read More";
            // if(content.classList.contains("expanded")){
                console.log(content);
            //   btn.textContent = "Read Less";
            // }else{
            //   btn.textContent = "Read More";
            // }
            
          });
        });


// =====================Send mail====================
function sendMail() {
      let name = document.getElementById("client-name").value;
      let email = document.getElementById("client-email").value;
      let message = document.getElementById("messagebox").value;
      let mailtoLink = `mailto:lynestechlabs@gmail.com?subject=Message from ${name} (${email})&body=${message}`;
      
  }


// ------------------------------------------side bar code
const hamburger = document.getElementById('hamburger');
const sidebar = document.getElementById('sidebar');
const closeBtn = document.getElementById('closeBtn');
const overlay = document.getElementById('overlay');
const sidebarLinks = sidebar.querySelectorAll('a');

// Function to open sidebar
function openSidebar() {
  sidebar.classList.add('active');
  overlay.classList.add('active');
}

// Function to close sidebar
function closeSidebar() {
  sidebar.classList.remove('active');
  overlay.classList.remove('active');
}

// Event listeners
hamburger.addEventListener('click', openSidebar);
closeBtn.addEventListener('click', closeSidebar);
overlay.addEventListener('click', closeSidebar);

// Close sidebar when a link is clicked
sidebarLinks.forEach(link => {
  link.addEventListener('click', closeSidebar);
});

//hide sidebar and overlay on pageload
// window.addEventListener('DOMContentLoaded', () =>{
//   sidebar.classList.remove('active');
//   overlay.classList.remove('active');
// });

// ------------------------------blog selection code

const tabButtons = document.querySelectorAll(".chip");
const tabContent= document.querySelectorAll(".post");
 // console.log(tabButtons);
 // console.log(tabContent);
    tabButtons.forEach( button =>{
            button.addEventListener("click", () =>
                {
                //    console.log(button);
                //this ensure that at each click its one button and athe active class is remove if it exixts
                    tabButtons.forEach(btn => btn.classList.remove("active"));
                    tabContent.forEach(content=> content.classList.remove("active"));

                     button.classList.add("active");// here add active class on the active button
                    const tabID =button.getAttribute("data-tab");// find by attribute on the button that is matching the id for recpective tab content
                    document.getElementById(tabID).classList.add("active");

                });
         });
// function openTab(ent, tabID){
// document.querySelectorAll(".tab-content").forEach(chip=>chip.classList.remove("active"));
// document.querySelectorAll(".tab-link").forEach(btn=> btn.classList.remove("active"));
// document.getElementById(".tabID").forEach(btn=> btn.classList.add("active"));
// EventTarget.currentTarget.classList.addd("active");

// }