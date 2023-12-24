const number = document.getElementById("number");
const myBtn = document.getElementById("myBtn");
const alertmsg = document.getElementById("alertmsg");

myBtn.addEventListener("click", () => {
  let year = number.value;

  //validation
  if (year === "") {
    alertmsg.innerHTML = "Input is empty";
  } else if (year.length !== 4) {
    alertmsg.innerHTML = "Number should be 4 digits";
  } else {
    isLeap();
  }

  function isLeap() {
    if (year % 4 == 0) {
      if (year % 400 == 0) {
        alertmsg.innerHTML = `${year} is a Leap year.`;
      } else if (year % 100 == 0) {
        alertmsg.innerHTML = `${year} is NOT a Leap year.`;
      } else {
        alertmsg.innerHTML = `${year} is a Leap year.`;
      }
    } else {
      alertmsg.innerHTML = `${year} is NOT a Leap year.`;
    }
  }
});
