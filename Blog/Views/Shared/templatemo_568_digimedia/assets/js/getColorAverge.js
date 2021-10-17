



function getAverageRGB(element) { 
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

   
  return rgb;
}


 

const listElement = document.getElementsByClassName("shawdow-color-by-img");

for (let item of listElement){
  
   var rgb = getAverageRGB(item);
    // console.log(rgb.r);

  var att = document.createAttribute("data-shadow-color"); // Create a "class" attribute
  att.value = "rgb(" + rgb.r + "," + rgb.g + "," + rgb.b + ")"; // Set the value of the class attribute
  item.setAttributeNode(att);

  // item.style.backgroundColor = 'rgb('+rgb.r+','+rgb.g+','+rgb.b+',.2)';

  // console.log(item.getAttribute("data-shadow-color"));
 
}
 

function  showShawdow(element){
  var colorShadow = element.getAttribute("data-shadow-color");
  // console.log(element);
  // console.log("showshadow"+colorShadow);

  element.style.boxShadow= "10px 15px 20px  "+colorShadow.toString() +"" ; 
  // console.log(colorShadow);
}


function shadowNomal(element) {
  element.style.boxShadow =
    "rgb(255 255 255) 5px 10px 15px ";
  // console.log("shadowNomal"+element);
}
