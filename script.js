let currentQuestion = 0;
const questions = document.querySelectorAll(".question");

document.addEventListener("DOMContentLoaded", () => {
    updateQuestions();
    addRadioButtonListeners(); // Add event listeners to radio buttons
});

function updateQuestions() {
    questions.forEach((q, index) => {
        if (index === currentQuestion) {
            q.classList.add("active");
        } else {
            q.classList.remove("active");
        }
    });

    document.getElementById("prevBtn").style.display = currentQuestion === 0 ? "none" : "inline-block";
    document.getElementById("nextBtn").style.display = currentQuestion === questions.length - 1 ? "none" : "inline-block";
    document.getElementById("submitBtn").style.display = currentQuestion === questions.length - 1 ? "block" : "none";
    document.getElementById("engraving").style.display = currentQuestion === questions.length - 1 ? "block" : "none";
}

function nextQuestion() {
    if (currentQuestion < questions.length - 1) {
        currentQuestion++;
        updateQuestions();
    }
}

function prevQuestion() {
    if (currentQuestion > 0) {
        currentQuestion--;
        updateQuestions();
    }
}

function addRadioButtonListeners() {
    const radioButtons = document.querySelectorAll('.options input[type="radio"]');
    radioButtons.forEach(radio => {
        radio.addEventListener('change', () => {
            nextQuestion(); // Move to the next question immediately
        });
    });
}

function submitOrder() {
    const userSelections = {
        Accessory: document.querySelector('input[name="Accessory"]:checked')?.value || "-",
        Adornments: document.querySelector('input[name="Adornments"]:checked')?.value || "-",
        color_type: document.querySelector('input[name="color_type"]:checked')?.value || "-",
        Spacers: document.querySelector('input[name="Spacers"]:checked')?.value || "-",
        Stringing_material: document.querySelector('input[name="Stringing_material"]:checked')?.value || "-",
        Packaging: document.querySelector('input[name="Packaging"]:checked')?.value || "-",
        engraving: document.getElementById('engraving').value.trim() || "-"
    };

    let subject = "Custom Order";
    let body = `Hello,\n\nI would like to place a custom order with the following preferences:\n\n` +
               `Accessory: ${userSelections.Accessory}\n` +
               `Adornments: ${userSelections.Adornments}\n` +
               `Color type: ${userSelections.color_type}\n` +
               `Spacers: ${userSelections.Spacers}\n` +
               `String material: ${userSelections.Stringing_material}\n` +
               `Packaging: ${userSelections.Packaging}\n\n` +
               `Custom choice: ${userSelections.engraving}\n\n`;

    let mailtoLink = `mailto:advaithabeadsyourway@gmail.com?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
    window.location.href = mailtoLink;
}

function sendEmail(product, price) {
    let businessEmail = "advaithabeadsyourway@gmail.com";
    let subject = encodeURIComponent("Order Inquiry: " + product);
    let body = encodeURIComponent(`Hello,\n\nI would like to purchase :\n\nProduct: ${product}\nPrice: ${price} INR`);

    window.location.href = `mailto:advaithabeadsyourway@gmail.com?subject=${subject}&body=${body}`;
}

const hamMenu = document.querySelector('.ham-menu');
const menu = document.querySelector('.menu');

document.querySelector(".try").addEventListener("click", function() {
    document.getElementById("Customize").scrollIntoView({ behavior: "smooth" });
});
