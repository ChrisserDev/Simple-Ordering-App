import { menuArray } from "./data.js";

let orderItems = [];

function getMenu() {
    let menuItems = "";

    menuArray.forEach(function (item) {
        menuItems += `
            <div class="each-Menu-Item">
                <img src="${item.image}" class="item-img">
                <div class="menu-details">
                    <h3>${item.name}</h3>
                    <p>${item.ingredients}</p>
                    <span>£${item.price}</span>
                </div>
                <i class="fa-solid fa-circle-plus" data-order="${item.id}"></i>
            </div>`
    });
        document.getElementById("menu").innerHTML = menuItems;
}

getMenu();

// Event delegation for handling clicks on menu items
document.addEventListener("click", function (e) {
    if (e.target.dataset.order) {
        handleOrderClick(e.target.dataset.order);
    }
});

function handleOrderClick(itemId) {
    
    const menu = menuArray.find((item) => item.id == itemId, 0);
    orderItems.push(menu);

    renderOrder();
}

function renderOrder() {

    let orderItemHtml = orderItems.map(function(item) {
        return `<div class="item-description">
                    <div class="item-name">
                        <h3>${item.name}</h3>
                        <button type="button" class="remove-item-btn" data-item-id="${item.id}">remove</button>
                    </div>
                    <p>£${item.price}</p>
                </div>`
    }).join("");

    let totalPrice = orderItems.reduce((total, item) => total + item.price, 0);

    let orderSummaryHtml = `<h3>Your Order</h3>
                            ${orderItemHtml}
                            <div class="total-price">
                                <h3>Total:</h3>
                                <p>£${totalPrice}</p>
                            </div>
                            <button type="button" id="complete-order-btn">Complete Order</button>`

    document.getElementById("customer-order").style.display = "block";
    document.getElementById("customer-order").innerHTML = orderSummaryHtml;

    document.querySelectorAll(".remove-item-btn").forEach(button =>
        button.addEventListener("click", () => removeItem(button.getAttribute("data-item-id")))
    );
        
    // Add event listener for "Complete Order" button
    const completeOrderBtn = document.getElementById("complete-order-btn");
        
    completeOrderBtn.addEventListener("click", function () {
        modalContainer.style.display = "block";
        document.querySelector("main").classList.add("blurr");
    });
};

function removeItem(itemIdToRemove) {
    orderItems = orderItems.filter(item => item.id != itemIdToRemove);
    
    if(orderItems.length === 0) {
        document.getElementById("customer-order").style.display = "none";
    };
    
    renderOrder()
};

//Payment Modal Form Container

const paymentForm = document.getElementById("payment-form");
const confirmationMessage = document.getElementById("confirmation-message");
const modalContainer = document.querySelector(".modal-container");
const name = document.getElementById("card-name");
const cardNumber = document.getElementById("card-number");
const cardCVV = document.getElementById("card-cvv");

paymentForm.addEventListener("submit", function (e) {
    e.preventDefault();

    confirmationMessage.textContent = `Thanks ${name.value}! Your order is on its way. 😋`;
    document.querySelector("main").classList.remove("blurr");
    modalContainer.style.display = "none";
    confirmationMessage.style.display = "flex";
    document.getElementById("customer-order").style.display = "none";
    
    setTimeout(() => {
        confirmationMessage.textContent = "";
        confirmationMessage.style.display = "none";
    }, 3000);
    
    name.value = "";
    cardNumber.value = "";
    cardCVV.value = "";
    orderItems = [];
});


document.addEventListener("click", function (e) {
    // Check if the clicked element is outside the modal
    if (!modalContainer.contains(e.target) && e.target.id !== "complete-order-btn") {
        // Clicked outside the modal, close the modal
        modalContainer.style.display = "none";
        document.querySelector("main").classList.remove("blurr");
    }
});