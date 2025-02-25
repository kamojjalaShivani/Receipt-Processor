exports.CalculatePoints = (receipt) => {
    let points = 0

    //step1: one point for every alphanumeric in the retailers name
    points += receipt.retailer.replace(/[^a-zA-Z0-9]/g, "").length;

    //step2:50 points if total is a round dollar amount with no cents
    if (Number(receipt.total) % 1 === 0) {
        points += 50;
    }
    //step3: 25 points if total is multiple of 0.25
    if (Number(receipt.total) % 0.25 === 0) {
        points += 25;
    }
    //step 4: 5 points for every two items
    points += Math.floor(receipt.items.length / 2) * 5;

    //step 5: If item description length is a multiple of 3, multiply price by 0.2 and round up
    receipt.items.forEach(item => {
        const trimmedLength = item.shortDescription.trim().length;
        if (trimmedLength % 3 === 0) {
            points += Math.ceil(Number(item.price) * 0.2);
        }
    });

    //step 6: 6 points if the purchase date is odd
    const day = parseInt(receipt.purchaseDate.split("-")[2]);
    if (day % 2 !== 0) {
        points += 6;
    }

    //step 7: 10 points if purchase time is between 2:00PM - 4:00PM
    const [hour, minute] = receipt.purchaseTime.split(":").map(Number);
    if (hour === 14 || (hour === 15 && minute < 60)) {
        points += 10;
    }

    return points;

}