function arith() {
  let a1v = Number(document.getElementById("a1").value);
  let dVal = Number(document.getElementById("d").value);
  let n = Number(document.getElementById("n_arith").value);

  let an = a1v + (n - 1) * dVal;
  let seq = Array.from({length:n}, (_,i)=>a1v+i*dVal).join(", ");
  document.getElementById("arith_result").innerText =
    "aₙ = " + an + "\nSequence: " + seq;
}

function geo() {
  let a1v = Number(document.getElementById("g1").value);
  let rVal = Number(document.getElementById("r").value);
  let n = Number(document.getElementById("n_geo").value);

  let an = a1v * Math.pow(rVal, n-1);
  let seq = Array.from({length:n}, (_,i)=>a1v*Math.pow(rVal,i)).join(", ");
  document.getElementById("geo_result").innerText =
    "aₙ = " + an + "\nSequence: " + seq;
}
