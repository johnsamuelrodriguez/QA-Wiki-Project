$( function() {

    

    
});


const gen__table = (elem,arr, title ) => {


    // let summary_released = document.getElementsByClassName('summary-released')[0];
    let summary_released = document.getElementsByClassName(elem)[0];
    console.log(summary_released);


    let summary = document.createElement('div');
    summary.classList.add('summary');


    let table = document.createElement('table');
    table.classList.add('table--summary');

    let cap = document.createElement('caption');
    cap.innerText = title;
    let trH = document.createElement('tr');

    [...summaries_header].forEach( e => {
        let trh = document.createElement('th');
        trh.innerText = e;
        trH.append(trh);
    });
    table.append(trH);


    [...arr].forEach( sr => {

       for ( let [s,r] of Object.entries(sr))
       {
            let trD = document.createElement('tr');

           let id = document.createElement('td');
           trD.append(id);
           id.innerText = s;


           for ( let v of Object.values(r))
           {
                let td = document.createElement('td');
                td.innerText = v;
                trD.append(td);

                delete td;
           }

           table.append(trD);



       }

    });



    table.append(cap);
    summary.append(table);
    summary_released.append(summary);
};
    
    