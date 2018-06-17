/*****************
  omikuji.js
  Ryosuke Takata
******************/

function omikuji() {
  // get rand value
  rand = Math.floor(Math.random() * 100);

  // set message
  // 大吉(10%)
  // 中吉(20%)
  // 吉(40%)
  // 凶(20%)
  // 大凶(10%)
  msg = "大吉";
  if (rand >  9) msg = "中吉";
  if (rand > 29) msg = "吉";
  if (rand > 69) msg = "凶";
  if (rand > 89) msg = "大凶";

  // output
  alert(msg);
}
