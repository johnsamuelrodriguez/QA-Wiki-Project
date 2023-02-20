$( function(){



    let checks = document.querySelectorAll('.check');
    console.log(checks);

    checks.forEach( (check) => {

        // let div = document.createElement('div');
        // div.classList.add('check-svg');
        let svg = document.createElementNS('http://www.w3.org/2000/svg','svg');

        svg.setAttribute('width', '400');
        svg.setAttribute('height', '400');
        svg.setAttribute('viewBox', "0 0 1600 1600");

        let path = document.createElementNS('http://www.w3.org/2000/svg','path');
        path.setAttribute('d', 'M 100 200 l 100 100 l 100 -200 l -115 150 Z');
        path.setAttribute('stroke-width','5');
        path.setAttribute('stroke','rgb(31, 240, 16)');
        path.setAttribute('fill','green');
        path.classList.add('p1');

        svg.append(path);
        // div.append(svg);
        check.append(svg);
    
    });


});