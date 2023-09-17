var button = document.querySelector("input[type = 'submit']");
var caname = document.querySelector("input[name='cname']");
var errcna = document.querySelector("span.cname");
var cardnu = document.querySelector("input[name='cardnu']");
var errcnu = document.querySelector("span.cardnu");
var exp_month = document.querySelector("input[name='exp_month']");
var errmon = document.querySelector("span.exp_date");
var exp_year = document.querySelector("input[name='exp_year']");
var cvv = document.querySelector("input[name='cvv']");
var subm = document.querySelector("input[type='submit']");
var forms = document.querySelector(".card-form ");
var cont = document.querySelector("input[value='Continue']");
var thank = document.querySelector(".end ");
var errcolr = "hsl(0, 100%, 66%)";

var point = 0;

caname.addEventListener("input", function () {
  if (/^[0-9]+$/.test(this.value)) {
    errcna.innerHTML = "Can't be number";
    errcna.style.display = "initial";
    caname.style.borderColor = errcolr;
  } else if (/^$/.test(this.value)) {
    document.querySelector(".card-details span:nth-child(3)").innerHTML =
      "Jane Appleseed";
    errcna.innerHTML = "Can't be blank";
    errcna.style.display = "initial";
    caname.style.borderColor = errcolr;
  } else {
    document.querySelector(".card-details span:nth-child(3)").innerHTML =
      this.value;
    caname.style.borderColor = "hsl(270, 3%, 87%)";
    errcna.style.display = "none";
  }
});

cardnu.addEventListener("input", function () {
  if (/^$/.test(this.value)) {
    document.querySelector(".card-details span:nth-child(2)").innerHTML =
      "0000 0000 0000 0000";
    errcnu.innerHTML = "Can't be blank";
    errcnu.style.display = "initial";
    cardnu.style.borderColor = errcolr;
  } else if (/^[a-zA-Z]+$/.test(this.value)) {
    errcnu.innerHTML = "Wrong format, numbers only";
    errcnu.style.display = "initial";
    cardnu.style.borderColor = errcolr;
  } else {
    document.querySelector(".card-details span:nth-child(2)").innerHTML =
      this.value;
    cardnu.style.borderColor = "hsl(270, 3%, 87%)";
    errcnu.style.display = "none";
  }
});

exp_month.addEventListener("input", function () {
  if (this.value > 12) {
    errmon.innerHTML = "Can't be more than 12";
    errmon.style.display = "initial";
    exp_month.style.borderColor = errcolr;
  } else if (/^$/.test(this.value)) {
    document.querySelector(".date span:nth-child(1)").innerHTML = "00";
    errmon.innerHTML = "Can't be blank";
    errmon.style.display = "initial";
    exp_month.style.borderColor = errcolr;
  } else {
    document.querySelector(".date span:nth-child(1)").innerHTML =
      this.value + "/";
    exp_month.style.borderColor = "hsl(270, 3%, 87%)";
    errmon.style.display = "none";
  }
});

exp_year.addEventListener("input", function () {
  if (/^[0-9]{3}$/.test(this.value)) {
    errmon.innerHTML = "Wrong format";
    errmon.style.display = "initial";
    exp_year.style.borderColor = errcolr;
  } else if (/^$/.test(this.value)) {
    document.querySelector(".date span:nth-child(2)").innerHTML = "00";
    errmon.innerHTML = "Can't be blank";
    errmon.style.display = "initial";
    exp_year.style.borderColor = errcolr;
  } else {
    document.querySelector(".date span:nth-child(2)").innerHTML = this.value;
    exp_year.style.borderColor = "hsl(270, 3%, 87%)";
    errmon.style.display = "none";
  }
});

cvv.addEventListener("input", function () {
  if (/^[0-9]{4}$/.test(this.value)) {
    errmon.innerHTML = "Wrong format";
    errmon.style.display = "initial";
    cvv.style.borderColor = errcolr;
  } else if (/^$/.test(this.value)) {
    document.querySelector(".card-back span").innerHTML = "000";
    errmon.innerHTML = "Can't be blank";
    errmon.style.display = "initial";
    cvv.style.borderColor = errcolr;
  } else {
    document.querySelector(".card-back span").innerHTML = this.value;
    cvv.style.borderColor = "hsl(270, 3%, 87%)";
    errmon.style.display = "none";
  }
});

subm.addEventListener("click", function () {
  forms.style.display = "none";
  thank.style.display = "flex";
});

cont.addEventListener("click", function () {
  forms.style.display = "flex";
  thank.style.display = "none";
});
