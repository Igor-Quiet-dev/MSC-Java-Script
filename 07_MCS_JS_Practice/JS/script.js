console.log('You are at' + window.cocation);

const ColoredPage = document.querySelector('.page');
const ColoredFont = document.querySelector('.page');
const NameMan     = document.querySelector('.name');
const Image       = document.querySelector('img');
const TextPage    = document.querySelector('.shortBio');
console.log(ColoredPage, ColoredFont, NameMan, Image, TextPage, TextPage);


let questColoredPage = prompt('Какой будет фон у страницы?');
ColoredPage.style.backgroundColor = questColoredPage;

let questColoredFont = prompt('Какой будет цвет текста на странице?');
ColoredFont.style.color = questColoredFont;

let questNameMan     = prompt('Как зовут человека, который вас вдохновляет?'); 
//Dalai Lama
NameMan.innerHTML    = questNameMan;


let questImage       = prompt('Введите адрес картинки');
Image.setAttribute('src', (questImage));  
//https://c7.hotpng.com/preview/109/737/230/neytiri-avatar-deviantart-icon-avatar-png.jpg


let questTextPage    = prompt('Введите текст страницы');  
//Since the time of the 5th Dalai Lama in the 17th century, his personage has always been a symbol of unification of the state of Tibet, where he has represented Buddhist values and traditions.[9] The Dalai Lama was an important figure of the Geluk tradition, which was politically and numerically dominant in Central Tibet, but his religious authority went beyond sectarian boundaries. While he had no formal or institutional role in any of the religious traditions, which were headed by their own high lamas, he was a unifying symbol of the Tibetan state, representing Buddhist values and traditions above any specific school.[10] The traditional function of the Dalai Lama as an ecumenical figure, holding together disparate religious and regional groups, has been taken up by the present fourteenth Dalai Lama. He has worked to overcome sectarian and other divisions in the exiled community and has become a symbol of Tibetan nationhood for Tibetans both in Tibet and in exile
TextPage.innerHTML   = questTextPage;
TextPage.className += ' animated';