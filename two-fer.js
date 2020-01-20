
  /* const twoFer = (name) => {

    if(name == "Alice"  || name == "Zaphod"){
  return (`One for ${name}, one for me`);
  }if(name == "Bob"){
    return (`One for ${name}, one for me` +" "+ ' One for you, one for me');
  }else{
    return ('One for you, one for me');
  }
};
//twoFer('Bob');*/

/*function twoFer(name){

  //let name = "";

  if(!name){
    return ("One for you, one for me.");
  } if (name == "Alice" || name == "Bob") {

    return ("One for" + " " + name +", one for me.");
  }else{
    return ("One for you, one for me.");
  }
};*/
export function twoFer(name = 'you'){

  return (`One for ${name}, one for me.`);
};
twoFer('Bob');
