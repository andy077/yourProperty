const menuToggle = () => {
    const menuClick = document.getElementById('menuclick');
    const closeClick = document.getElementById('menuclose');
    const navMenu = document.getElementById('navId');

    // menuClick.style.display='none';
    // closeClick.style.display='block';

        if(navMenu.style.width == '100%'){
            navMenu.style.width = '0%';
        }
        else{
            navMenu.style.width = '100%';
        }
}

export default menuToggle;