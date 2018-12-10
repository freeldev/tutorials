// synchronous thunk

function add(x, y) {
    return x + y;
}

var thunk = function() {
    return add(10, 15)
}

// can call thunk anywhere and it acts as a container
// wrapping around the value of 25
thunk(); 

// asynchronous thunk

function addASync(x, y, cb) {
    setTimeout(function() {
        cb( x + y );
    }, 1000);
}

var thunk = function(cb) {
    addAsync(10,15,cb);
}

// doesn't matter when we have the data available
// because it will have the valu
thunk(function(sum){
    sum; // 25
})

// create a thunk constructor
function makeThunk(fn) {
    var args = [].slice.call(arguments, 1);
    return function(cb) {
        args.push(cb);
        fn.apply(null, args)
    }
}

// create a thunk using the constructor

function addAsync(x, y, cb) {
    setTimeout(function() {
        cb( x + y );
    }, 1000);
}

var thunk = makeThunk(addAsync, 10, 15);

thunk(function(sum) {
    console.log(sum);
});


// use makeThunk to show the power of thunks

var get10 = makeThunk(getData, 10);
var get30 = makeThunk(getData, 30)

get10(function(num1){
    var x = 1 + num1
    get30(function(num2){
        var y = 1 + num2;
    })

    var getAnswer = makeTHunk( getData,
        "Meaning of life: "  + (x + y)
    );

    getAnswer(function(answer) {
        console.log(answer);
    })
})