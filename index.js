// initialize the count as 0
// listen for clicks on the increment button
// increment the count variable when the button is clicked
// change the count-el in the HTML to reflect the new count

// let countEl = document.getElementById("count-el")
// let count = 0

// function increment() {
//   count += 1
//   countEl.innerText = count
// }

// function save() {
//   console.log(count)
// }
// save()

let welcomeEl =
  document.getElementById(
    "welcome-el"
  );
let myName =
  "Todd";
let greeting =
  "Hi, my name is ";
welcomeEl.innerText =
  greeting +
  myName;
