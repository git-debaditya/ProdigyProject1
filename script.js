window.onscroll = function() {scrollFunction()};

function scrollFunction()
{
  if (document.body.scrollTop > 50 || document.documentElement.scrollTop > 50)
  {
    document.getElementById("container").style.backgroundColor = "rgb(51, 51, 51)";
  }
  else 
  {
    document.getElementById("container").style.backgroundColor = "rgb(51, 51, 51)";
  }
}

function updateContainer()
{
  const container = document.getElementById('container');
  const content = document.querySelector('.content');
  const gallery = document.querySelector('.gallery');
  const liza = document.querySelector('.liza');
  const donsr = document.querySelector('.donsr');
  const beagle = document.querySelector('.beagle');
  const donjr = document.querySelector('.donjr');
  if(window.innerWidth<=975)
  {
    container.classList.add('mobile-nav');
    if(window.innerHeight<600)
    {
      container.style.overflowY = 'scroll';
    }
    else
    {
      container.style.overflowY = 'auto';
    }
    if(content) content.style.marginLeft = '170px';
    if(gallery) gallery.style.marginLeft = '170px';
    if(liza) liza.style.marginLeft = '170px';
    if(donsr) donsr.style.marginLeft = '170px';
    if(beagle) beagle.style.marginLeft = '170px';
    if(donjr) donjr.style.marginLeft = '170px';
  }
  else
  {
    container.classList.remove('mobile-nav');
    if(content) content.style.marginLeft = '20px';
    if(liza) liza.style.marginLeft = '20px';
    if(donsr) donsr.style.marginLeft = '20px';
    if(beagle) beagle.style.marginLeft = '20px';
    if(donjr) donjr.style.marginLeft = '20px';
    if(gallery) gallery.style.marginLeft = '20px';
  }
}

/* update the nav-menu when the window is resized*/
window.addEventListener('resize',updateContainer);

/* Initial update */
updateContainer();