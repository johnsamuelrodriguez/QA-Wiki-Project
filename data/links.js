var links = {
    'youtube': 'www.youtube.com',
    'dota2': 'www.dota2.com',
};



const check = (search, arr) => { 
    for( const search of arr )
    {
        if( arr == search) { return  search;}
    }
    return '';
}