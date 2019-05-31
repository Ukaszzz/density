let two = document.getElementsByClassName("two");
let show = document.querySelector("h2");
const button = document.querySelector("button");

const list = [];

const inputOne = e => {
  //   e.preventDefault();
  const one = document.getElementById("one");
  const mass = one.value;

  list.push(mass);

  one.value = "";

  const two = document.getElementById("two");
  const obj = two.value;

  list.push(obj);

  two.value = "";

  if (obj != "" && mass != "") {
    let gest = (Number(list[0]) / Number(list[1])).toFixed(2);
    console.log(gest);
    show.textContent = `${gest} [kg/m3]`;
  }
  list.length = 0;
};

button.addEventListener("click", inputOne);
