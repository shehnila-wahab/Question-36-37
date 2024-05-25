function make_shirt(size:string="large",message:string="I love Typescript"){
    console.log(`Making a ${size}t-shirt with the message "${message}" printed on it.`);
}
make_shirt("medium","code is life")//Defult message ,medium size
make_shirt();//Defult large and message
make_shirt("small","dive into coding");//custom message,small size
