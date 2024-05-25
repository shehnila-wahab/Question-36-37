function make_shirt(size, message) {
    if (size === void 0) { size = "large"; }
    if (message === void 0) { message = "I love Typescript"; }
    console.log("Making a ".concat(size, "t-shirt with the message \"").concat(message, "\" printed on it."));
}
make_shirt("medium", "code is life"); //Defult message ,medium size
make_shirt(); //Defult large and message
make_shirt("small", "dive into coding"); //custom message,small size
