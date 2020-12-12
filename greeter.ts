class Greeter {
    constructor(public greeting: string) { }

    greet() {
        return "<h1>" + this.greeting + "</h1>";
    }
};

var myGreeter = new Greeter("Hello, world!");
    
document.body.innerHTML = myGreeter.greet();
