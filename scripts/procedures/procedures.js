var shown_contents = [];

$( function() {

    console.clear();
    let sidebar = document.querySelector('.sidebar-contents');

    let heading = document.createElement('span');
    let info = document.querySelector('.info');
    heading.classList.add('headings');

    sidebar.append(heading);

    console.log(sidebar);
   
    [...new Array(procedures)].forEach( e => {

        // heading.innerText = 
     
       
        for ( let [i,v] of Object.entries(e) )
        {
          let item = document.createElement('span');
          item.classList.add('main-headings');
         

        //   item.append(heading);
          item.innerText = i;
          sidebar.append(item);

          
         
          
          for ( let kv of Object.values(v) )
          {
            
                for( let sh of Object.keys(kv) )
                {
                    let sub = document.createElement('span');
                    sub.classList.add('sub-headings');
                    sub.innerText = sh;

               

                    // let subheading = document.createElement('a');
                    // subheading.classList.add('a-headings');
                    // subheading.innerText = kv[sh];
                    // subheading.href = '';


                    let inf = document.createElement('div');
                    inf.classList.add('info-content');
                    inf.setAttribute('header',sh);
                    inf.innerText = kv[sh];
                    

               

                    // console.log(info);

                    info.append(inf);
                    sub.addEventListener( 'click', e => {

                   
                
                        [...document.querySelectorAll('.show')].forEach( e => {
                            e.classList.remove('show');
                        });
     
                        inf.classList.toggle('show');
                    });

                    item.append(sub);


               
                  
                    delete sub;
                    // console.log('sh')
                    // console.log(sh)
                    // console.log(kv[sh]);

                 
                }
           
                // alert(kv);
          }

          heading.append(item);
          delete item;


        }
    });

});


$( function() {

    let icon = document.getElementsByClassName('icon-book')[0];
    let sidebar = document.querySelector('.sidebar-contents');
    let info = document.getElementsByClassName('INFO')[0];

    icon.addEventListener('click', e => {
        $(sidebar).toggle('swing');
        $(info).css('flex', '15 0 0');
        $(sidebar).css('margin: 20px');

        sidebar.classList.toggle('open');

        if( sidebar.classList.contains('open'))
        {
           $(icon).css('background-image', "url('../data//images/icons/book0000.png'");
        }
        else
        {
            $(icon).css('background-image', "url('../data//images/icons/book0001.png'");
        }
    });
});