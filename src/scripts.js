// функция контроля высоты блока main ---------------------------------------------------
function setHeightMain() {
    const windowHeight = document.documentElement.clientHeight;
    const headerFooterHeight = document.querySelector('header').clientHeight + document.querySelector('footer').clientHeight;
    document.querySelector('main').style.height = windowHeight - headerFooterHeight + 'px';
}
// функция контроля высоты блока main ---------------------------------------------------


// функция контроля высоты блока chat-choose ---------------------------------------------------
function setHeightChatChoose() {
    const colRightHeight = document.querySelector('.col-right').clientHeight;
    console.log(colRightHeight);
    const menuHeight = document.querySelector('.menu').clientHeight;
    console.log(menuHeight);
    document.querySelector('.chat-choose').style.height = colRightHeight - menuHeight + 'px';
}
// функция контроля высоты блока chat-choose ---------------------------------------------------


window.onload = function() {
    setHeightMain();
    setHeightChatChoose();
}

window.addEventListener(`resize`, ()=>{
    setHeightMain();
    setHeightChatChoose();
});