$( function() {


    let content = document.querySelector('.content-black ');
    
    
 

    [...quotes].forEach( quote => {
    
        let hr1 = document.createElement('hr');
        let hr2 = document.createElement('hr');
        let header = document.createElement('h3');
        let p = document.createElement('p');
        let block = document.createElement('div');

        p.classList.add('content-black--p');
        p.classList.add('spacing--p');
        block.classList.add('quotes--section-block');

        // block.style.cssText = "scroll-snap-align: start;";
        header.classList.add('spacing');

        let title = '';

        [...quote.header].forEach( line => {
            title += line + "\n";
        });

        header.textContent = title;
        block.append(hr1);
        block.append(header);
        block.append(hr2);

        [...quote.content].forEach( line => {
            p.textContent += line + "\n";
        });

        block.append(p);

        content.append(block);
        delete block;


    });



});