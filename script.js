// Default links (without coupon)
let links = {
    offer1: "https://rzp.io/rzp/rluaQiAb",
    offer2: "https://rzp.io/rzp/a0qRhJw",
    offer3: "https://rzp.io/rzp/ITVpN4c",
    offer4: "https://rzp.io/rzp/6MFeur9",
};

let trial = {
    link1: "https://rzp.io/rzp/HzSeocuS",
};

let advance = {
    link1: "https://rzp.io/rzp/HYdnah4l"
}

const price1 = document.getElementsByClassName("price1");
const price2 = document.getElementsByClassName("price2");
const price3 = document.getElementsByClassName("price3");
const price4 = document.getElementsByClassName("price3");

const button1 = document.getElementById("10th");
const button2 = document.getElementById("11th");
const button3 = document.getElementById("12th");
const button4 = document.getElementById("Dropper");

// Function for the trial Session
function TrialSession() {
    let offer0 = document.getElementById("offer0");
    if (offer0) {
        offer0.addEventListener("click", function () {
            window.open(trial.link1, "_blank");
        });
    }
}

// Function for the Advamce Plan
function AdvanceButton() {
    let offeradv = document.getElementById("offeradv");
    if(offeradv) {
        offeradv.addEventListener("click", function () {
            window.open(advance.link1, "_blank");
        })
    }
}

// Function to update links based on input
function updateLinks() {
    let input = prompt("Enter your coupon code (if any) or Click Cancel");
    if (!input) return;

    let coupons = {
        "MS10": ["https://rzp.io/rzp/UbX92oI", "https://rzp.io/rzp/wlkod28", "https://rzp.io/rzp/bGE1tWMg"],
        "PS10": ["https://rzp.io/rzp/Dg67Fcf", "https://rzp.io/rzp/RvIdYcr", "https://rzp.io/rzp/3VQetUG"],
        "OK10": ["https://rzp.io/rzp/Zapgw72", "https://rzp.io/rzp/ocTHAh3", "https://rzp.io/rzp/95jyu8Q"],
        "KS10": ["https://rzp.io/rzp/MvLwyoW", "https://rzp.io/rzp/bKBXYtW", "https://rzp.io/rzp/xap5wSu9"],
        "HR10": ["https://rzp.io/rzp/5zzOzV4", "https://rzp.io/rzp/nhCE3ILF", "https://rzp.io/rzp/7bNfjJ3"],
        "DR10": ["https://rzp.io/rzp/c9imeHDT", "https://rzp.io/rzp/RL4EFv4h", "https://rzp.io/rzp/v4qC0QQ"],
        "BD10": ["https://rzp.io/rzp/rOOv0n4", "https://rzp.io/rzp/jSV4DUGh", "https://rzp.io/rzp/fEfd8Od"],
        "AJ10": ["https://rzp.io/rzp/NBgsu4v", "https://rzp.io/rzp/GH6NVAK", "https://rzp.io/rzp/fEfd8Od"],
        "SD10": ["https://rzp.io/rzp/ZqJxZiXj", "https://rzp.io/rzp/6jX1CTX", "https://rzp.io/rzp/cIKxQt1h"],
        "AG10": ["https://rzp.io/rzp/kITB75W", "https://rzp.io/rzp/QLG7nLl5", "https://rzp.io/rzp/m2JDmHW"],
        "SG10": ["https://rzp.io/rzp/6chTI65", "https://rzp.io/rzp/tRupzHy", "https://rzp.io/rzp/TrNelD6"],
        "KJ10": ["https://rzp.io/rzp/tpCYa3b", "https://rzp.io/rzp/1dfv2Gq", "https://rzp.io/rzp/KRwTmvJl"],
        "AM10": ["https://rzp.io/rzp/fo0L3as8", "https://rzp.io/rzp/E1KbnQN", "https://rzp.io/rzp/Z1cy4D0X"]
    };

    if (coupons[input]) {
        [links.offer2, links.offer3, links.offer4] = coupons[input];
        alert("Coupon applied! Click on Join Once again and Click Cancel");
    } else {
        alert("Invalid Coupon Code, Click OK");
    }
}

// Attach event listeners to the divs
function Temp() {
    let offer1 = document.getElementById("offer1");
    let offer2 = document.getElementById("offer2");
    let offer3 = document.getElementById("offer3");
    let offer4 = document.getElementById("offer4");

    if (offer1) {
        offer1.addEventListener("click", function () {
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

    if (offer4) {
        offer4.addEventListener("click", function () {
            updateLinks();
            window.open(links.offer4, "_blank");
        });
    }
}

// Run after the DOM is fully loaded
window.onload = function () {
    Temp();
    TrialSession();
    AdvanceButton();
};



