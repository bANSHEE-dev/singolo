document.addEventListener('scroll', onScroll);

function onScroll(event) {
  const curPos = window.scrollY;
  const menu = document.querySelectorAll('nav>ul');
  const links = document.querySelectorAll('nav>ul>li>a');
  

  menu.forEach((el) => {
    if(el.offsetTop <= curPos && (el.offsetTop + el.offsetHeight) > curPos) {
        links.forEach((a) => {
          a.classList.remove('active');
          debugger;
          if(el.getAttribute('id') === a.getAttribute('href').substring(1)) {
            a.classList.add('active')
          }
        })
    }
  });

}

