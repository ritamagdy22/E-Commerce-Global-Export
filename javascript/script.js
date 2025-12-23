const payButton = document.querySelector(".payment-form button");

payButton.addEventListener("mouseover", () => {
    payButton.style.transform = "scale(1.05)";
    payButton.style.transition = "0.3s";
});

payButton.addEventListener("mouseout", () => {
    payButton.style.transform = "scale(1)";
});
