function number(n1, n2) {
    if (n1 == 20 || n2 == 20 || n1 + n2 <= 20) {
        return true;
    }
    else {
        return false;
    }
}
console.log(number(6, 8));