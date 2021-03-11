console.log(`hello`);

var calculateBtn = document.getElementById("calculate");
var totalPrice = 10;

calculateBtn.addEventListener('click', function() {

    var checkboxCollection = document.getElementsByClassName("food");
    
    for (let i = 0; i < checkboxCollection.length; i++) {

        var checkboxSingle = checkboxCollection[i];
        console.log(checkboxSingle);
        var condition = checkboxSingle.checked;
        var checkboxPrice = parseInt(checkboxSingle.dataset.price);

        if (condition) {
            totalPrice += checkboxPrice;
        }
    }

    var couponsCollection =["martino", "yolo", "alter"];  

    var coupon = document.getElementById("coupon").value;
    console.log(coupon);

    for (let i = 0; i < couponsCollection.length; i++) {

        var couponSingle = couponsCollection[i];

        if (coupon == couponSingle) {

            totalPrice = (totalPrice * 0.8).toFixed(2);

        }

    }

    document.getElementById("price").innerHTML = totalPrice;

    

});