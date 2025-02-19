// Default links (without coupon)
let links = {
    offer1: "https://rzp.io/rzp/Uwd2LQVs",
    offer2: "https://rzp.io/rzp/a0qRhJw",
    offer3: "https://rzp.io/rzp/ITVpN4c"
};

const price1 = document.getElementsByClassName("price1");
const price2 = document.getElementsByClassName("price2");
const price3 = document.getElementsByClassName("price3");


// Function to update links based on input
function updateLinks() {

    let input = prompt("Enter your coupon code (if any) or Click Cancel");
    
    if (!input) return;

    // Update links if a valid coupon is entered
    if (input === "ANU69") {
        links.offer1 = "https://rzp.io/rzp/Zf669q8i";
        links.offer2 = "https://rzp.io/rzp/UbX92oI";
        links.offer3 = "https://rzp.io/rzp/wlkod28";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
            price1.childNodes[0].nodeValue = "₹449 ";
            price2.childNodes[0].nodeValue = "₹1499 "; 
            price3.childNodes[0].nodeValue = "₹4499 ";
    } 
    else {
        alert("Invalid Coupon Code , Click OK");
    }
}

// Attach event listeners to the divs
function Temp() {
    // Ensure the elements exist before adding event listeners
    let offer1 = document.getElementById("offer1");
    let offer2 = document.getElementById("offer2");
    let offer3 = document.getElementById("offer3");

    if (offer1) {
        offer1.addEventListener("click", function () {
            updateLinks();
            window.open(links.offer1, "_blank");
        });
    }

    if (offer2) {
        offer2.addEventListener("click", function () {
            updateLinks();
            window.open(links.offer2, "_blank");
        });
    }

    if (offer3) {
        offer3.addEventListener("click", function () {
            updateLinks();
            window.open(links.offer3, "_blank");
        });
    }
}

// Run after the DOM is fully loaded
window.onload = function () {
    Temp();
};







