function change(){
    let ci = document.getElementById("in").value;
    document.getElementById("cn").style.background = ci;
    document.getElementById("hex").innerHTML = ci;
    let x = ci[1] + ci[2];
    let y = ci[3] + ci[4];
    let z = ci[5] + ci[6];

    let r = parseInt(x,16);
    let g = parseInt(y,16);
    let b = parseInt(z,16);

    document.getElementById('rgb').innerHTML = "rgb(" + r.toString() + "," + g.toString() + "," + b.toString() + ")";
}