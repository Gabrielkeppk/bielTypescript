function identity(arg) {
    console.log(typeof arg);
    return arg;
}
console.log(identity('texto'));
console.log(identity(5));
console.log(identity(true));
