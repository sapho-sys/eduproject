const menuItem = () =>{
    const submenu = document.getElementsByClassName('menu__sub')[0];
    submenu.style.display = 'block';
};

const menuItemleave = () =>{
    const submenu = document.getElementsByClassName('menu__sub')[0];
    submenu.style.display = 'none';   
};

const onMenuItemMouseEnter = () =>{
    item.classlist.add('menu__main__item--active');
    menuItem();
};

const menuItems = document.getElementsByClassName('menu__main__item');
for(const menuItem of menuItems){
    menuItem.onmouseenter = () => onMenuItemMouseEnter(menuItem)
};

const menu = document.getElementsByClassName('menu')[0];
menu.onmouseleave = menuItemleave