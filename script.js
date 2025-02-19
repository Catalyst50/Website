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
    if (input === "MS10") {
        links.offer1 = "https://rzp.io/rzp/Zf669q8i";
        links.offer2 = "https://rzp.io/rzp/UbX92oI";
        links.offer3 = "https://rzp.io/rzp/wlkod28";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    } 
    else if (input === "PS10") {
        links.offer1 = "https://rzp.io/rzp/qiLjU55";
        links.offer2 = "https://rzp.io/rzp/Dg67Fcf";
        links.offer3 = "https://rzp.io/rzp/RvIdYcr";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "OK10") {
        links.offer1 = "https://rzp.io/rzp/OU1XYAO";
        links.offer2 = "https://rzp.io/rzp/Zapgw72";
        links.offer3 = "https://rzp.io/rzp/ocTHAh3";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "KS10") {
        links.offer1 = "https://rzp.io/rzp/CrXMC14i";
        links.offer2 = "https://rzp.io/rzp/MvLwyoW";
        links.offer3 = "https://rzp.io/rzp/bKBXYtW";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "HR10") {
        links.offer1 = "https://rzp.io/rzp/1VG9n85";
        links.offer2 = "https://rzp.io/rzp/5zzOzV4";
        links.offer3 = "https://rzp.io/rzp/nhCE3ILF";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "DR10") {
        links.offer1 = "https://rzp.io/rzp/40PKeVj";
        links.offer2 = "https://rzp.io/rzp/c9imeHDT";
        links.offer3 = "https://rzp.io/rzp/RL4EFv4h";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "BD10") {
        links.offer1 = "https://rzp.io/rzp/dafU1WV";
        links.offer2 = "https://rzp.io/rzp/rOOv0n4";
        links.offer3 = "https://rzp.io/rzp/jSV4DUGh";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "AJ10") {
        links.offer1 = "https://rzp.io/rzp/mT4ippc";
        links.offer2 = "https://rzp.io/rzp/NBgsu4v";
        links.offer3 = "https://rzp.io/rzp/GH6NVAK";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "SD10") {
        links.offer1 = "https://rzp.io/rzp/8LOK7lJ";
        links.offer2 = "https://rzp.io/rzp/ZqJxZiXj";
        links.offer3 = "https://rzp.io/rzp/6jX1CTX";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "AG10") {
        links.offer1 = "https://rzp.io/rzp/wlR0i5fw";
        links.offer2 = "https://rzp.io/rzp/kITB75W";
        links.offer3 = "https://rzp.io/rzp/QLG7nLl5";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "SG10") {
        links.offer1 = "https://rzp.io/rzp/aFokAGq";
        links.offer2 = "https://rzp.io/rzp/6chTI65";
        links.offer3 = "https://rzp.io/rzp/tRupzHy";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "KJ10") {
        links.offer1 = "https://rzp.io/rzp/DUBwcCm6";
        links.offer2 = "https://rzp.io/rzp/tpCYa3b";
        links.offer3 = "https://rzp.io/rzp/1dfv2Gq";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
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







