function calculate(){
    let r = document.getElementById('screen').innerText;
    if(15<String(eval(r)).length){
        document.getElementById('screen').innerText ='very big number !';
    }
    else{
        document.getElementById('screen').innerText=eval(r);
    }
    
}

function inp(c){
    if('0'==document.getElementById('screen').innerText&&c!='.'){
        document.getElementById('screen').innerText='';
    }
    if(c=='l'){
        document.getElementById('screen').innerText +='(';
    }
    else if(c=='r'){
        document.getElementById('screen').innerText += ')';
    }
    else{
        document.getElementById('screen').innerText += c;
    }
    
}

function ce_button(){
    document.getElementById('screen').innerText='0';
}
