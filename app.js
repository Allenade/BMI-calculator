window.addEventListener("load", () => {
  const loader = document.querySelector(".loader");
  const loaderProgress = document.querySelector(".loader-progress");
  let percent = 1;

  function updateloader() {
    loaderProgress.textContent = percent + "$";
    percent++;
    if (percent <= 100) {
      setTimeout(updateloader, 9);
    } else {
      loader.addEventListener("transitionend", () => {
        document.body.removeChild(loader);
      });
      loader.style.opacity = 0;
    }
  }
  updateloader();
});

// metric and imperial section
const metric = document.querySelector('input[value="metric"]');
const imperial = document.querySelector('input[value="imperial"]');
const metricSection = document.querySelector(".metric-section");
const imperialSection = document.querySelector(".imperial-section");

const calculateBMI = document.getElementById("calculateBMI");

metric.addEventListener("change", () => {
  metricSection.classList.remove("hidden");
  imperialSection.classList.add("hidden");
});
imperial.addEventListener("change", () => {
  imperialSection.classList.remove("hidden");
  metricSection.classList.add("hidden");
});

calculateBMI.addEventListener("click", () => {
  const heightMetirc = parseInt(document.getElementById("height").value);
  const weightMetirc = parseInt(document.getElementById("weight").value);
  const result = document.querySelector(".result");
  const welcomeText = document.querySelector(".welcome-text");
  // result.style.display = "block";
  // welcomeText.style.display = "none";
  setTimeout(() => {
    result.style.display = "block";
    welcomeText.style.display = "none";
  }, 1);
  setTimeout(() => {
    welcomeText.style.display = "block";
    result.style.display = "none";
  }, 5000);

  let heightMetirc_status = false,
    weightMetirc_status = false;
  if (heightMetirc === "" || isNaN(heightMetirc) || heightMetirc <= 0) {
    // document.getElementById("height_error").innerHTML =
    //   "Please provide a valid height";
    // result.innerHTML = "Please enter your Height  ";
  } else {
    document.getElementById("height_error").innerHTML = " ";
    heightMetirc_status = true;
  }
  if (weightMetirc === "" || isNaN(weightMetirc) || weightMetirc <= 0) {
    // document.getElementById("weight_error").innerHTML =
    //   "Please provide a valid weight";
    // result.innerHTML = "Please enter your  Weight";
  } else {
    document.getElementById("weight_error").innerHTML = "";
    weightMetirc_status = true;
  }
  if (heightMetirc_status && weightMetirc_status) {
    const bmi = weightMetirc / (heightMetirc / 100) ** 2;
    if (bmi < 18.6) {
      result.innerHTML = "under weight : " + bmi;
    } else if (bmi >= 18.6 && bmi < 24.9) {
      result.innerHTML = "Your BMI : " + bmi;
    } else {
      result.innerHTML = "over weight : " + bmi;
    }
  } else {
    // alert("please fill all fields correctly!");
    result.textContent = "Please enter your height and weight";
  }
});
// imperailSection

const imperialCalculate = document.getElementById("imperialcalculateBMI");

imperialCalculate.addEventListener("click", () => {
  let heightFt = parseInt(document.getElementById("height-ft").value);
  let heightIn = parseInt(document.getElementById("height-in").value);
  let weightSt = parseInt(document.getElementById("weight-st").value);
  let weightLbs = parseInt(document.getElementById("weight-lbs").value);
  const imperialResults = document.querySelector(".imperialresult");
  const welcomeText = document.querySelector(".imperial-text");
  // welcomeText.style.display = "none";
  // imperialResults.style.display = "block";

  setTimeout(() => {
    imperialResults.style.display = "block";
    welcomeText.style.display = "none";
  }, 1);
  setTimeout(() => {
    welcomeText.style.display = "block";
    imperialResults.style.display = "none";
  }, 5000);

  let heightFt_status = false,
    heightIn_status = false,
    weightSt_status = false,
    weightLbs_status = false;

  // console.log(error);

  if (isNaN(heightFt) || heightFt <= 0 || heightFt === "") {
    // alert("please fill");
    // error[0].innerHTML = "please fill";
  } else {
    error[0].innerHTML = "";
    heightFt_status = true;
  }

  if (isNaN(heightIn) || heightIn <= 0 || heightIn === "") {
    // alert("please fill");
    // error[1].innerHTML = "please fill";
  } else {
    error[1].innerHTML = "";
    heightIn_status = true;
  }
  if (isNaN(weightSt) || weightSt <= 0 || weightSt === "") {
    // alert("please fill");
    // error[2].innerHTML = "please fill";
    imperialResults.textContent = "pls fill";
  } else {
    error[2].innerHTML = "";
    weightSt_status = true;
  }
  if (isNaN(weightLbs) || weightLbs <= 0 || weightLbs === "") {
    // alert("please fill");
    // error[3].innerHTML = "please fill";
  } else {
    error[3].innerHTML = "";
    weightLbs_status = true;
  }
  // convert weught to pounds
  const weightLbsTotal = weightSt * 14 + weightLbs;
  // convert height to inches
  const heightInchesTotal = heightFt * 12 + heightIn;
  // calculate the bmi
  const bmi = (weightLbsTotal / heightInchesTotal ** 2) * 703;
  // imperialResults.innerHTML = "Your BMI: " + bmi.toFixed();

  if (isNaN(bmi)) {
    imperialResults.textContent = "Please fill all fields";
  } else {
    imperialResults.innerHTML = "Your BMI: " + bmi.toFixed();
  }

  // console.log(bmi);
});
