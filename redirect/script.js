//Code from ahmetacr61

//Change the "link" to your link and if you want add some other things or change/delete the existing ones, it's all up to you
//The pictures for the Website are located at the "assets" folder.
const cardData = [
    { title: "Youtube", desc: "The link to my Youtube channel", link: "https://www.youtube.com/@ahmetacr61", img: "./assets/youtube.png" },
    { title: "Instagram", desc: "The link to my Instagram account", link: "https://www.instagram.com/ahmetacr61", img: "./assets/instagram.png" },
    { title: "Github", desc: "The link to my Github", link: "https://github.com/ahmetacr61", img: "./assets/github.png" }
];

//First Card
const cardList = document.getElementsByClassName("card");
const firstCard = cardList[0];
//All Cards
const cards = document.getElementsByClassName("cards")[0];

for (i = 1; i < cardData.length; i++) {
    cards.appendChild(firstCard.cloneNode(true));
}

let actElement;
for (i = 0; i < cardList.length; i++) {
    //Get the "i" amount of cards
    let actCard = cardList[i];
    //Set Title
    actElement = actCard.getElementsByClassName("card-title")[0];
    actElement.innerHTML = cardData[i].title;
    //Set Description
    actElement = actCard.getElementsByClassName("card-desc")[0];
    actElement.innerHTML = cardData[i].desc;
    //Set Link
    actElement = actCard.getElementsByClassName("link")[0];
    actElement.setAttribute("href", cardData[i].link);
    //Set Picture
    actElement = actCard.getElementsByClassName("img")[0];
    actElement.setAttribute("src", cardData[i].img);
}