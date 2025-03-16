let links = {
    offer1: "https://rzp.io/rzp/akioPgL"
};

function Navigate() {
    const button = document.getElementById("offer1");

    if (button) { // Check if button exists before adding event listener
        button.addEventListener("click", function () {
            window.open(links.offer1, "_blank");
        });
    } else {
        console.error("Button with ID 'offer1' not found.");
    }
}

function Updatelinks(){

    let input = prompt("Enter your coupon code (if any) or Click Cancel");
    
    if (!input) return;

    // Update links if a valid coupon is entered
    if (input === "MS10") {
        links.offer1 = "https://rzp.io/rzp/Zf669q8i";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    } 
    else if (input === "PS10") {
        links.offer1 = "https://rzp.io/rzp/qiLjU55";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "OK10") {
        links.offer1 = "https://rzp.io/rzp/OU1XYAO";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "KS10") {
        links.offer1 = "https://rzp.io/rzp/CrXMC14i";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "HR10") {
        links.offer1 = "https://rzp.io/rzp/1VG9n85";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "DR10") {
        links.offer1 = "https://rzp.io/rzp/40PKeVj";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "BD10") {
        links.offer1 = "https://rzp.io/rzp/dafU1WV";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "AJ10") {
        links.offer1 = "https://rzp.io/rzp/mT4ippc";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "SD10") {
        links.offer1 = "https://rzp.io/rzp/8LOK7lJ";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "AG10") {
        links.offer1 = "https://rzp.io/rzp/wlR0i5fw";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "SG10") {
        links.offer1 = "https://rzp.io/rzp/aFokAGq";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "KJ10") {
        links.offer1 = "https://rzp.io/rzp/DUBwcCm6";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else if (input === "AM10") {
        links.offer1 = "https://rzp.io/rzp/cKfkupW";
        alert("Coupon applied! Click on Join Once again and Click Cancel")
    }
    else {
        alert("Invalid Coupon Code , Click OK");
    }
}

// Run after the DOM is fully loaded
window.onload = function () {
    Navigate();
    Updatelinks();
};