$( function(){


    let col = document.querySelectorAll('.col-heading');

    col.forEach( c => {
        c.setAttribute('colspan', 5);
    });

});