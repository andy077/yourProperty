const closeToggle = () => {
    const menuClick = document.getElementById('menuclick');
    const closeClick = document.getElementById('menuclose');
    const navMenu = document.getElementsByClassName('nav');
    
    if(navMenu[0].style.display =='block')
    {
        navMenu[0].style.display='none';
    }
    else{
        navMenu[0].style.display='block';      
    }
   
}  

export default closeToggle;