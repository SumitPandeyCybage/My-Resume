var image = ["url('IMAGES/banner.jpg')","url('IMAGES/banner2.jpg')","url('IMAGES/banner3.jpg')"];
var banner = document.getElementsByClassName("banner")[0];
var Chng = 0;
function next()
  {
    switch(Chng)
	{
    case image.length - 1:
      Chng=0;
      break;
    default:
      Chng++;
      break;
    }
    banner.style.backgroundImage = image[Chng];
  }
banner.style.backgroundImage = image[0];
  setInterval(next, 4000);