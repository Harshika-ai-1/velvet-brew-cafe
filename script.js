function orderItem(itemName, price) {

    let quantity = prompt(
        "How many " + itemName + " would you like?"
    );


    // If user presses Cancel
    if (quantity === null) {

        return;
    }


    // Convert input into number
    quantity = Number(quantity);


    // Check quantity
    if (quantity > 0) {

        let total = quantity * price;


        alert(
            "☕ Order Confirmed!\n\n" +

            "Item: " + itemName +

            "\nQuantity: " + quantity +

            "\nTotal: ₹" + total
        );

    }

    else {

        alert(
            "Please enter a valid quantity."
        );

    }

}