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
    
    if (window.location.href.includes('guidelines.html') )
    {
        [...items].forEach( e => {
            

            let main = document.querySelector('.content-black');
            let block = document.createElement('div');
    
            let section = document.createElement('div');
            let contentHiglight = document.createElement('p');
            let contentMain = document.createElement('p');
            let button = document.createElement('button');
            let buttonHide = document.createElement('button');
            let hr1 = document.createElement('hr');
            let hr2 = document.createElement('hr');
            let h3 = document.createElement('h3');
            
            contentHiglight.classList.add('content-black--p-highlight');
            contentMain.classList.add('content-black--p');

            contentHiglight.innerText = e.mainContent ;
            contentMain.innerText =  e.subContent
            
            let br = document.createElement('br');
            let br1 = document.createElement('br');
    
    
            let title = e.heading;
            h3.innerText = title;
            button.textContent = 'SHOW MORE';
            buttonHide.textContent = 'HIDE';
            button.classList.add('button--guidelines');
            buttonHide.classList.add('button--guidelines');
            
    
            section.classList.add('guidelines--section-block');
            section.prepend(hr1);
            section.append(br1);
            section.append(h3);
            section.append(br);
            section.prepend(hr2);
            section.append( hr2);

            buttonHide.style.display = 'none';
            contentMain.style.display = 'none';

            buttonHide.style.display = 'none';

            button.addEventListener( 'click', e => {
            // button.style.display = 'none';
            //  buttonHide.style.display = 'block';
            //  contentMain.style.display = 'block';
            $(button).slideToggle();
            $(buttonHide).slideToggle();
            $(contentMain).slideToggle();
            });

            buttonHide.addEventListener('click', e => {
                // button.style.display = 'block';
                // buttonHide.style.display = 'none';
                // contentMain.style.display = 'none';
                $(button).slideToggle();
                $(buttonHide).slideToggle();
                $(contentMain).slideToggle();
            });

    
    
            section.append(contentHiglight);
            section.append(button);
    
            section.append(contentMain);
            section.appendChild(buttonHide);    
    
            main.appendChild(section);

        });

    }
});



