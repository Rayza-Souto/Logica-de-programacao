function nameFormated(name, type){
    if (type == '1'){
        return console.log('Sr. ' + name);
    }
    else{
        return console.log('Sra. ' + name);
    }  
}

nameFormated('Ana', '2');