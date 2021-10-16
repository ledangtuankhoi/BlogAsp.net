// var rgb = getAverageRGB(document.getElementById('i'));
// document.body.style.backgroundColor = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+')';


function getAverageRGB(element) {
  // console.log(element.getElementsByTagName("img")[0]);
  // console.log(element);
  imgEl = element.getElementsByTagName("img")[0];
  var blockSize = 5, // only visit every 5 pixels
    defaultRGB = { r: 0, g: 0, b: 0 }, // for non-supporting envs
    canvas = document.createElement("canvas"),
    context = canvas.getContext && canvas.getContext("2d"),
    data,
    width,
    height,
    i = -4,
    length,
    rgb = { r: 0, g: 0, b: 0 },
    count = 0;

  if (!context) {
    return defaultRGB;
  }

  height = canvas.height =
    imgEl.naturalHeight || imgEl.offsetHeight || imgEl.height;
  width = canvas.width = imgEl.naturalWidth || imgEl.offsetWidth || imgEl.width;

  context.drawImage(imgEl, 0, 0);

  try {
    data = context.getImageData(0, 0, width, height);
  } catch (e) {
    /* security error, img on diff domain */ alert("x");
    return defaultRGB;
  }

  length = data.data.length;

  while ((i += blockSize * 4) < length) {
    ++count;
    rgb.r += data.data[i];
    rgb.g += data.data[i + 1];
    rgb.b += data.data[i + 2];
  }

  // ~~ used to floor values
  rgb.r = ~~(rgb.r / count);
  rgb.g = ~~(rgb.g / count);
  rgb.b = ~~(rgb.b / count);

  document.getElementsByClassName("img-text"); 
  element.getElementsByClassName("portfolio-item")[0].style.boxShadow= "5px 10px 15px  rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")" ;
 

  console.log( rgb);
}

function  shadowNomal(element) {
    element.getElementsByClassName("portfolio-item")[0].style.boxShadow= "rgb(255 255 255) 5px 10px 15px " ;
    console.log("end");
}