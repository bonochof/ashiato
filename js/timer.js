/*****************
  timer.js
  Ryosuke Takata
******************/

timer_set();

function timer_set() {
  timer_fix = 2;

  // start time
  var now = new Date();

  // 1/1000[sec]
  nt = now.getTime();

  // timer set
  timerID = setInterval('timer_output()', 1000/Math.pow(10,timer_fix));
}

function timer_output() {
  // now time
  var now = new Date();

  // 1/1000[sec]
  mt = now.getTime();
	
  // output
  document.form_count.counter.value = count_format((mt-nt)/1000, timer_fix);
}

function count_format(sec,fix) {
  var ts = sec.toFixed(fix);
  var tm = Math.floor(ts / 60);
  ts = ts % 60;
  var th = Math.floor(tm / 60);
  tm = tm % 60;

  // shape display
  if (ts < 10) ts = "0" + ts;
  if (tm < 10) tm = "0" + tm;
  if (th < 10) th = "0" + th;

  // return string
  return th + ":" + tm + ":" + ts;
}
