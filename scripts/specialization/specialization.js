$( function() {

    let links = document.querySelectorAll('a[href^="#"].toc');
    links.forEach( link => {
        link.addEventListener('click', e => {
            e.preventDefault();

           let href = link.getAttribute('href');
           let ref = document.querySelector(href);
           

        $('html').animate( {
            scrollTop: ref.offsetTop - 30 }, 1000, 
            function() { window.location.hash = href; });

         
        });
    });
});