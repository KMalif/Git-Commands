const bandingkanAngka = (angka1, angka2)=>{
  if(angka1 < angka2){
    return true;
  }else if(angka1 > angka2){
    return false;
  }else if(angka1 === angka2){
    return -1;
  }
}

const balikKata = (kata) =>{
  for (let i = kata.length-1; i >=0 ; i--){
    return kata[i];
  }
}

const konversiMenit = (detik)=>{
  const minutes = `${Math.floor(detik / 60)}`
  const seconds = `${detik - minutes * 60}`.padStart(2, "0");
  return `${minutes}:${seconds}`;
}


const xo = (str) =>{
  
}

const dataHandling = (params) =>{
  
}




