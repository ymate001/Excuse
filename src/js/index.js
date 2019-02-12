// //import $ from "jquery";
// import "bootstrap"; //breathecode dom for more explicit errors
// //import 'breathecode-dom'; //DOM override to make JS easier to use
// import "../style/index.scss";
window.onload = function() {
  let who = ["the neighbor", "my granma", "my beareded dragon", "the roach"];
  let what = [
    "ate my dinner",
    "peed on my foot",
    "crushed my car",
    "burned my hair"
  ];
  let when = [
    "on my way home",
    "right in time",
    "when I finished cleaning",
    "right when I parked",
    "while I was praying"
  ];

  var mywho = who[Math.floor(Math.random() * who.length)];
  var mywhat = what[Math.floor(Math.random() * what.length)];
  var mywhen = when[Math.floor(Math.random() * when.length)];

  var final = mywho.concat(mywhat, mywhen);

  document.querySelector("#excuse").innerHTML = final;
};
