
const searchMessage = document.getElementById("searchMessage");
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");

const galleryContainer = document.getElementById("galleryContainer");
const cards = document.querySelectorAll(".furniture-card");

const loading = document.getElementById("loading");
const noData = document.getElementById("noData");

const form = document.getElementById("furnitureForm");

function searchFurniture() {

    loading.hidden = false;
    noData.hidden = true;

    setTimeout(() => {

        loading.hidden = true;

        const value = searchInput.value.trim().toLowerCase();

        let found = false;

        cards.forEach(card => {

            const title = card.querySelector("h3").textContent.toLowerCase();

            if (title.includes(value)) {

                card.style.display = "block";
                found = true;

            } else {

                card.style.display = "none";

            }

        });

       searchMessage.textContent = "";

if(found){

    searchMessage.textContent = "";

}else{

    searchMessage.textContent = "No data found.";

}

    }, 1000);

}
searchBtn.addEventListener("click", searchFurniture);

searchInput.addEventListener("keyup", function (event) {

    if (event.key === "Enter") {

        searchFurniture();

    }

});
function sanitizeInput(value) {

    return value
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;")
        .replace(/"/g, "&quot;")
        .replace(/'/g, "&#39;");

}
form.addEventListener("submit", function (event) {

    event.preventDefault();

    const inputs = form.querySelectorAll("input, select");

    let valid = true;

    inputs.forEach(input => {

        input.classList.remove("error");

        if (input.value.trim() === "") {

            input.classList.add("error");

            valid = false;

        } else {

            input.value = sanitizeInput(input.value);

        }

    });

    if (!valid) {

        alert("Please fill all required fields.");

        return;

    }

    console.log("[Analytics] User interacted with Handcrafted Furniture Workshop Gallery");

    alert("Furniture added successfully!");

    form.reset();

});
const inputs = document.querySelectorAll("input, select");

inputs.forEach(input => {

    input.addEventListener("input", function () {

        this.classList.remove("error");

    });

});
const menuToggle = document.getElementById("menuToggle");
const navbar = document.getElementById("navbar");

menuToggle.addEventListener("click", () => {

    navbar.classList.toggle("active");

});
const navLinks = document.querySelectorAll(".nav-links a");

navLinks.forEach(link=>{

    link.addEventListener("click",()=>{

        navbar.classList.remove("active");

    });

});