// функция контроля высоты блока main ---------------------------------------------------
export function setHeightMain() {
    const windowHeight = document.documentElement.clientHeight;
    const headerFooterHeight = document.querySelector('header').clientHeight + document.querySelector('footer').clientHeight;
    document.querySelector('main').style.height = windowHeight - headerFooterHeight + 'px';
}
// функция контроля высоты блока main ---------------------------------------------------


// функция контроля высоты блока chat-choose ---------------------------------------------------
export function setHeightChatChoose() {
    const colRightHeight = document.querySelector('.col-right').clientHeight;
    const menuHeight = document.querySelector('.menu').clientHeight;
    document.querySelector('.chat-choose').style.height = colRightHeight - menuHeight + 'px';
}
// функция контроля высоты блока chat-choose ---------------------------------------------------

window.addEventListener(`resize`, ()=>{
    setHeightMain();
    setHeightChatChoose();
});


