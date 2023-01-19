/**
 *
 */


class Items
{
    constructor(heading, mainContent, subContent, link, images )
    {
        this.heading = heading;
        this.mainContent = mainContent;
        this.subContent = subContent;
        this.link = link;
        this.images = images;
    }
}

/**
 * @params {Items} item
 */

$( function(){

    // console.log("ready");

    // let hello = document.querySelector('.hello');
    // hello.innerHTML += " JS";


    let cards = document.querySelectorAll(".card");
    let main = document.querySelector(".main-content");
    let title = document.querySelector("#title");


    title.textContent += cards.length;

    console.log(main);
    console.log(cards);

    console.log(document.styleSheets[0]);
    // console.log(document.styleSheets[0].cssRules);

    [...items].forEach( e => {
        let item = JSON.parse(JSON.stringify(e));
        // alert(item);
        let card = document.createElement('div');
        card.classList.add('card');
        card.innerText = `\nhalo world

        asdsadsa
        sadas
        d
        sadsadsadsa
        asdasdasdasd
        asdsadsadad
        asdsadsa


        `;
        console.log( links.print() );
        // console.log`${ check(e.link)}`;



        main.appendChild(card);
    });

    cards = document.querySelectorAll(".card");
    // $('aside').css('grid-row',`1 /  span(2)`);

    let rows = cards.length * 3;
    $(".main-content").css('grid-template-rows',`repeat( ${rows},1fr)` );
    $(".main-content").css('grid-rows',`1 / span(3)` );


});


$( function()
{
    let logo = document.querySelector('#QA-logo');
    logo.addEventListener('click', e => {
        if( !window.location.href.includes('index.html'))
        {
            window.location.replace('../index.html');
        }
    });


    if( window.location.href.includes('index.html') )
    {
        $('html').css('overflow','hidden scroll');
    }
});