/*Configure the script to make the animation the way you like it*/

var c = document.getElementById('canv');
var $ = c.getContext('2d');
var w = c.width = window.innerWidth;
var h = c.height = window.innerHeight;
var a = [2 / 200];
var colors = ['hsla(210, 65%, 55%, 1)',
  'hsla(232, 5%, 95%, 1)',
  'hsla(282, 95%, 15%, 1)',
  'hsla(232, 5%, 95%, 1)',
  'hsla(232, 5%, 95%, 1)',
  'hsla(232, 5%, 95%, 1)',
  'hsla(232, 5%, 95%, 1)',
  'hsla(232, 5%, 95%, 1)',
  'hsla(232, 5%, 95%, 1)',
  'hsla(282, 95%, 15%, 1)',
  'hsla(232, 5%, 95%, 1)',
  'hsla(232, 5%, 95%, 1)',
  'hsla(232, 5%, 95%, 1)',
  'hsla(232, 5%, 95%, 1)',
  'hsla(232, 5%, 95%, 1)',
];

function draw() {
  $.setTransform(2, 0, 0, 1, 0, 0);
  $.clearRect(0, 0, w, h);

  a[1] = Math.sin(a[0] * Math.PI / 580);
  a[2] = Math.cos(a[0] * Math.PI / 580);

  for (var i = 0; i < colors.length; i++) {

    $.setTransform(1, 0, 0, 1, w / 2, h / 2);
    $.rotate(Math.PI * a[0] * (i + 3) / 360);
    $.transform(a[1], 0, 0, a[2], 0, 0);
    $.shadowColor = 'hsla(0,0%,0%,1)';
    $.shadowBlur = 9;
    $.shadowOffsetX = 9;
    $.shadowOffsetY = 9;
    $.strokeStyle = colors[i];
    $.lineWidth = i + 95;
    $.beginPath();
    $.arc(0, 0, 2 * Math.pow(i + 6, 2), 0, Math.PI * 31 / 16, false);
    $.stroke();
  }

  a[0]++;
  a[0] %= 1000;

};
run();

function run() {
  window.requestAnimationFrame(run);
  draw();
}

window.addEventListener('resize', function () {
  c.width = w = window.innerWidth;
  c.height = h = window.innerHeight;
}, true);