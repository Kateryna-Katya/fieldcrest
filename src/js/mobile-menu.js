document.addEventListener('DOMContentLoaded', () => {
    const menuBtn = document.querySelector('.menu-button');
    const iconContainer = menuBtn.querySelector('.icon');
    const modalMenu = document.querySelector('.modal');
    const menuItem = document.querySelectorAll('.menu-list-item');
    const header = document.querySelector('.header');
  
    let isMenuOpen = false;
  
    const burgerIcon = `
<svg width="37" height="37" viewBox="0 0 37 37" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M6.1665 9.25H30.8332M6.1665 18.5H30.8332M6.1665 27.75H30.8332" stroke="black" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" />
</svg>
    `;
  
    const crossIcon = `
<svg width="41" height="41" viewBox="0 0 41 41" fill="none" xmlns="http://www.w3.org/2000/svg">
  <path d="M33.4149 5.69076C33.678 5.51535 33.9937 5.43654 34.3083 5.46778C34.6229 5.49902 34.9169 5.63836 35.1403 5.86208C35.3637 6.08579 35.5026 6.38004 35.5334 6.69469C35.5642 7.00934 35.4849 7.32493 35.3091 7.5877L35.1342 7.8009L22.4324 20.5L35.1342 33.2018L35.3091 33.415C35.4833 33.6778 35.5613 33.9928 35.5298 34.3065C35.4983 34.6202 35.3593 34.9134 35.1363 35.1364C34.9134 35.3593 34.6202 35.4983 34.3065 35.5298C33.9927 35.5613 33.6778 35.4834 33.4149 35.3092L33.2017 35.1342L20.4999 22.4324L7.80087 35.1342C7.6748 35.2648 7.52399 35.3689 7.35725 35.4405C7.19051 35.5121 7.01118 35.5498 6.82971 35.5514C6.64825 35.553 6.46829 35.5184 6.30033 35.4497C6.13237 35.381 5.97978 35.2795 5.85146 35.1512C5.72314 35.0228 5.62166 34.8703 5.55294 34.7023C5.48423 34.5343 5.44965 34.3544 5.45122 34.1729C5.4528 33.9914 5.4905 33.8121 5.56213 33.6454C5.63375 33.4786 5.73787 33.3278 5.8684 33.2018L18.5675 20.5L5.8684 7.8009L5.69073 7.5877C5.51369 7.32473 5.43356 7.0084 5.46408 6.69286C5.4946 6.37733 5.63386 6.08221 5.85802 5.85805C6.08218 5.63389 6.3773 5.49463 6.69283 5.46411C7.00837 5.4336 7.3247 5.51372 7.58767 5.69076L7.80087 5.86843L20.4999 18.5675L33.2017 5.86843L33.4149 5.69076Z" fill="black" />
</svg>
    `;
  
    menuBtn.addEventListener('click', () => {
      isMenuOpen = !isMenuOpen;
      iconContainer.innerHTML = isMenuOpen ? crossIcon : burgerIcon;
      isMenuOpen ? openModal() : closeModal();
    });
  
    menuItem.forEach(item =>
      item.addEventListener('click', () => {
        closeModal();
        iconContainer.innerHTML = burgerIcon;
        isMenuOpen = false;
      })
    );
  
    window.addEventListener('scroll', blurHeader);
  
    function openModal() {
      modalMenu.style.display = 'block';
    }
  
    function closeModal() {
      modalMenu.style.display = 'none';
    }
  
    function blurHeader() {
      if (!header) return;
      if (window.scrollY > 60) {
        header.classList.add('header-scroll');
      } else {
        header.classList.remove('header-scroll');
      }
    }
  });