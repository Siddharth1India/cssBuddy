let elem = document.querySelector('input[type="range"]');

let rangeValue = function(){
  let newValue = elem.value;
  let target = document.querySelector('.show');
  target.innerHTML = "Transparency = " +newValue.toString();
  document.getElementById("glass").style.backgroundColor = "rgba(255,255,255,"+newValue+")";
  let s = document.getElementsByClassName("final")[0].innerHTML = "background-color: rgba(255,255,255,"+newValue+")";
}

elem.addEventListener("input", rangeValue);