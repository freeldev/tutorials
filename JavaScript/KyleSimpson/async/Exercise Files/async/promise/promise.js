function trackCheckout(info) {
    return new Promise(
        function(resolve, reject) {
            // attept to track the checkout

            // if successful, call resolve()
            // otherwise, call reject(error)
        }
    )
}

function finish() {
    chargeCreditCard(purchaseInfo);
    showThankYouPage();
}

var promise = trackCheckout(purchaseInfo);

promise.then( // the equivalence of an event listener listener.on("completion", finish())
    finish,
    error
)


doFirstThing()
.then( function(){
    return doSecondThing() // automatically chaining promises together 
})
.then( function() {
    return doThirdThing()
})
.then(
    complete,
    error
)

// meaning of life function in promise chain pattern

function getData(d) {
    return new Promise(function(resolve, reject) {
        setTimeout(function(){ resolve(d); }, 1000)
    });
}

var x;

getData(10)
.then(function(num1) {
    x = 1 + num1;
    return getData(30);
})
.then(function(num2){
    var y = 1 + num2;
    return getData("meaning of life: " + ( x + y ));
})
.then(function(answer){
    console.log(answer)
});

