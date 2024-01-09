const palindrome=(kata) => {
    let newStr = '';
    for(let i = kata.length-1 ; i >= 0; i-- ){
        newStr += kata[i];
    }
    return kata === newStr ? true : false
  }

console.log(palindrome('katak'));

const hitungJumlahKata = (kalimat) =>{
    let newArr = [];
    let str = '';
    for(let i = 0 ; i <= kalimat.length-1 ; i++){
        if(kalimat[i] !== ' '){
            str += kalimat[i];
        }else{
            newArr.push(str);
            str = '';
        }
    }
    // push kata terakhir
    if(str){
        newArr.push(str);
    }
    return newArr.length;
}

console.log(hitungJumlahKata('khafidul mualif kasdkjla'));


const changeVocals = (str) =>{
    const vocals = ['a, i , u, e, o'];
    const change = ['b, j, v, f, p'];
    let newStr = '';
    const splitStr = [];

    for (let i = 0 ; i <= str.length -1 ; i++){
            
    }



    for (let i = 0 ; i <= str.length -1 ; i++){
        
    }
}

const reverseWord = (str) =>{
    let newStr= '';
    for(let i = str.length-1 ; i >= 0; i-- ){
        newStr += str[i];
    }
    return newStr;
}

// console.log(reverseWord('Alif '))

const setLowerUpperCase = (str) =>{

}

const removeSpaces = (str) =>{
    let newStr = '';
    for (let i = 0 ; i <= str.length-1; i++){
        if(str[i] !== ' '){
            newStr += str[i];
        }
    }
    return newStr;
}

const passwordGenerator = (str) =>{
    
}

// console.log(removeSpaces(' Khafidul Mualif '));

// console.log(passwordGenerator('Alif'))