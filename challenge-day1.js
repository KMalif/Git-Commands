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
    console.log(kata[i]);
  }
}

const konversiMenit = (detik)=>{
  const mnt = Math.floor(detik/60);
  const scd = detik%60;
  console.log(mnt + ':' + scd);
}


const xo = (str) =>{
  
}

const dataHandling = (params) =>{
  
}




