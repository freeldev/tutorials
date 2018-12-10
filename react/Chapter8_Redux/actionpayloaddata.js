// actions are js literals that provide the instructions
// necessary to make a state change

// when we want to chagne th rating of a color we need to know which color 
// and which rating so we pass it in a js object literal

// rate color payload

{
    type: "RATE_COLOR",
    id: "a5685c39-6bdc-4727-9188-6c9a00bf7f95",
    rating : 4
}


// add_color payload

{
    type: "ADD_COLOR",
    color: "#FFFFFF",
    title: "Bright White",
    id: "b5685c39-3bdc-4727-9188-6c9a33df7f52",
    timestamp: "Sat Mar 12 2016 16:12:09 GMT-0800 (PST)"
}