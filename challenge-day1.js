const bandingkanAngka = (angka1, angka2)=>{
  if(angka1 < angka2){
    return true;
  }else if(angka1 > angka2){
    return false;
  }else if(angka1 === angka2){
    return -1;
  }
}


const konversiMenit = (detik)=>{
  const mnt = Math.floor(detik/60);
  const scd = detik%60;
  console.log(mnt + ':' + scd);
}


