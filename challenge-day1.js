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
    for (let i = kata.length-1; i >= 0 ; i--){
      console.log(kata[i]);
    }
  }

const konversiMenit = (detik)=>{
  const minutes = `${Math.floor(detik / 60)}`
  const seconds = `${detik - minutes * 60}`.padStart(2, "0");
  return `${minutes}:${seconds}`;
}


const xo = str =>{
    const x = [];
    const o = [];
    for(let i = 0 ; i <= str.length-1; i++ ){
        if (str[i] === 'x'){
            x.push(str[i])
        }
        else if(str[i] === 'o'){
            o.push(str[i])
        }
    }
    return x.length == o.length ? true : false;
}

var input = [
  ["0001", "Roman Alamsyah", "Bandar Lampung", "21/05/1989", "Membaca"],
  ["0002", "Dika Sembiring", "Medan", "10/10/1992", "Bermain Gitar"],
  ["0003", "Winona", "Ambon", "25/12/1965", "Memasak"],
  ["0004", "Bintang Senjaya", "Martapura", "6/4/1970", "Berkebun"]
]

const dataHandling = (params) =>{
    for(let i = 0 ; i <= params.length-1; i++){
        console.log(`ID : ${params[i][0]}`);
        console.log(`Nama : ${params[i][1]}`);
        console.log(`Alamat : ${params[i][2]}`);
        console.log(`Tanngal Lahir : ${params[i][3]}`);
        console.log(`Hobby : ${params[i][4]}`);
        console.log('');
    }
  }
  }




