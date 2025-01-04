const modalSignInBtn = document.getElementById("signInBtn");
const inputField = document.querySelector("input");
const bodyPage = document.querySelector("body");
const faildAlert = document.getElementById("faild-alert");
const sucessAlert = document.getElementById("success-alert");
const navLinks1 = document.querySelector("#navA1");
const navLinks2= document.querySelector("#navA2");
const navLinks3 = document.querySelector("#navA3");
const navSignBtn = document.getElementById("signBtn");
const dsaNavBtn = document.getElementById("dsa-button");
const dsaNavContent = document.getElementById("dsa-contnet");


function getInfo(){
    const userName = document.getElementById("name").value;
    const userAge = document.getElementById("age").value;
    const userEmail = document.getElementById("email").value;
    let user ={
        'name': userName,
        'age': userAge,
        'email': userEmail
    }
    if(userName == "" || userAge == "" || userEmail == "") {
        faildAlert.style.display= 'block';
    }
    else if(userName !== " " && userAge !== " " && userEmail !== " "){
        localStorage.setItem("UserInfoRegistration", JSON.stringify(user));
        sucessAlert.style.display = 'block';
    }
}
function getInfoForEnroll(){
    const enrollName = document.getElementById("name1").value;
    const enrollCountry = document.getElementById("country1").value;
    const enrollSituation = document.getElementById("selectSituation");
    const enrollEmail = document.getElementById("email1").value;
    const enrollCv = document.getElementById("cv1").value;
    if (enrollName.value == " " || enrollCountry.value == " " || enrollEmail == " ") {
        alert("Sucessfull enroll");
    } else if(enrollName.value !== " " && enrollCountry.value !== " " && enrollEmail !== " ") {
        alert("failed enroll");
    }
}
document.addEventListener("DOMContentLoaded", () => {
    const starsEl = document.querySelectorAll(".rate");
    const emojisEl = document.querySelectorAll(".emoji");
    const reviewMessage = document.getElementById("reviewMessage");

    // Initialize with 0 rating
    updateRating(0);

    starsEl.forEach((starEl, index) => {
        starEl.addEventListener("click", () => {
            updateRating(index);
        });
    });

    function updateRating(index) {
        starsEl.forEach((starEl, idx) => {
            if (idx < index + 1) {
                starEl.classList.add("active");
            } else {
                starEl.classList.remove("active");
            }
        });

        emojisEl.forEach((emojiEl, idx) => {
            emojiEl.classList.remove("active");
            if (idx === index) {
                emojiEl.classList.add("active");
                reviewMessage.textContent = getReviewMessage(index);
            }
    });
    function getReviewMessage(index) {
        const messages = [
            "Terrible",
            "Bad",
            "Okay",
            "Good",
            "Excellent"
        ];
        return messages[index];
    } 
}
});

document.getElementById("cta").addEventListener("click", (event) =>{
    event.preventDefault();
})
