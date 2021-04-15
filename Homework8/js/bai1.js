let count = 0;
let countBox = document.getElementById("counter");
countBox.innerHTML = 0;
function minus() {
    count--;
    countBox.innerHTML = count;
}
function plus() {
    count++;
    countBox.innerHTML = count;
}