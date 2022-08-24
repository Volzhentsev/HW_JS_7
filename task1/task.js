let btn = document.querySelector('.dropdown');
  
btn.addEventListener('click', hendler);

function hendler() {
    const menuValues = Array.from(document.querySelectorAll('.dropdown__item'));
    const menuActive = document.querySelector('.dropdown__list'); 
    const value = document.querySelector('.dropdown__value');
    if (menuActive.className == "dropdown__list dropdown__list_active") {

        menuActive.className = "dropdown__list";
    } else {
        menuActive.className = "dropdown__list dropdown__list_active"
        for (let i = 0; i < menuValues.length; i++) {
            menuValues[i].onclick = () => {
                    value.textContent = menuValues[i].textContent;
                    return false;
            }
            
        }
    }
}
