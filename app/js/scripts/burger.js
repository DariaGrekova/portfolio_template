export function testFunction() {
  const menuBtn = document.querySelector('.menu-btn');
  const menu = document.querySelector('.menu');
  const bg = document.querySelector('.bg');


  menuBtn.addEventListener('click', function () {
    menuBtn.classList.toggle('active');
    menu.classList.toggle('active');
    bg.classList.toggle('active');
    document.body.style.overflow = menu.classList.contains('active') ? 'hidden' : '';
  })

  // scroll
  const navigation = document.querySelector('.navigation');
  navigation.querySelectorAll('a[href^="#"').forEach(link => {
    link.addEventListener('click', function (e) {
      e.preventDefault();

      let href = this.getAttribute('href').substring(1);
      const scrollTarget = document.getElementById(href);
      const topOffset = 0;
      const elementPosition = scrollTarget.getBoundingClientRect().top;
      const offsetPosition = elementPosition - topOffset;

      window.scrollBy({
        top: offsetPosition,
        behavior: 'smooth'
      });

      if (menu.classList.contains('active')) {
        menuBtn.classList.remove('active');
        menu.classList.remove('active');
        bg.classList.remove('active');
        document.body.style.overflow = ''
      }
    });
  });
}