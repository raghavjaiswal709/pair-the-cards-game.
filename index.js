const cards = document.querySelectorAll(".card");
const weldone = document.querySelector(".welldone-div");

let matchedCard=0;
let cardOne, cardTwo;
let disableDeck = false;



function flipcard(e){   //here inthe place of f any other alphabet can be there 
    let clickedcard = e.target;
    if(clickedcard !== cardOne && !disableDeck){
        clickedcard.classList.add("flip");
    if(!cardOne) {
        return cardOne = clickedcard;
    }
    
    cardTwo = clickedcard;
    disableDeck = true;
    let cardOneImg = cardOne.querySelector(".back-image").src,
    cardTwoImg = cardTwo.querySelector(".back-image").src;

    matchCards(cardOneImg,cardTwoImg);
    }
}

function matchCards(img1,img2){
    if(img1===img2){
        matchedCard++;
        if (matchedCard == 8){
            
            setTimeout(() => {
                alert("well done...!");
                
                return suffleCard();
                
            },1000);
        }
        cardOne.removeEventListener("click",flipcard);
        cardTwo.removeEventListener("click",flipcard);
        cardOne = cardTwo = "";
        return disableDeck = false;

    }
    
    setTimeout(() => {
        cardOne.classList.add("shake");
    cardTwo.classList.add("shake");
    }, 400);

    setTimeout(() => {
        cardOne.classList.remove("shake","flip");
    cardTwo.classList.remove("shake","flip");
    cardOne = cardTwo = "";
    disableDeck = false;
    }, 1200);
}

function suffleCard(){
    matchedCard=0;
    cardOne = cardTwo ="";
    disableDeck = false;

    let arr = [1,2,3,4,5,6,7,8,1,2,3,4,5,6,7,8];
    arr.sort(() => Math.random() > 0.5 ? 1 : -1);

    cards.forEach((card, index) => {
        card.classList.remove("flip");
        let imageTag = card.querySelector(".back-image");
        imageTag.src = `./assets/img-${arr[index]}.svg`
        card.addEventListener("click",flipcard); //here in the bracket first word is click which signifies that something will happen of we click on any of the card what will happen is written as the second part of the bracket i.e. flip card but we have to write a function that will flip the card which is written above.
    });
    
}

suffleCard();

cards.forEach(card => {
    
    card.addEventListener("click",flipcard); //here in the bracket first word is click which signifies that something will happen of we click on any of the card what will happen is written as the second part of the bracket i.e. flip card but we have to write a function that will flip the card which is written above.
});
