console.log(`hello`);

var calculateBtn = document.getElementById("calculate");
var totalPrice = 10;

var liCollection = document.getElementsByTagName("li");

for ( let i = 0; i < liCollection.length; i++) {
    var liSingle = liCollection [i];
}

liSingle.addEventListener('click', function() {

});

calculateBtn.addEventListener('click', function() {

    var name = document.getElementById("burger-name").value;
    var checkboxCollection = document.getElementsByClassName("food");

    if (name != "") {
    
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

    } else {

        alert("Inserisci un panino!");
    }

});