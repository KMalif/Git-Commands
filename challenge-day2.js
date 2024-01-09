// No.1
const palindrome=(kata) => {
    let newStr = '';
    for(let i = kata.length-1 ; i >= 0; i-- ){
        newStr += kata[i];
    }
    return kata === newStr ? true : false
  }


// No. 2
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




// No.3
String.prototype.changeVocals = function(){
    const vocals = ['a', 'i' , 'u', 'e', 'o', 'A', 'I', 'U', 'E','O' ];
    const change = ['b', 'j', 'v', 'f', 'p', 'B', 'J', 'V', 'F', 'P'];
    let newStr = '';
    const splitStr = [];

    for(let i = 0 ; i <= this.length-1 ; i++){
        splitStr.push(this[i]);
    }

    for (let i = 0; i < splitStr.length ; i++){
        for(let j = 0; j < vocals.length; j++){
            if(vocals[j] == splitStr[i]){
                newStr += change[j];
            }
        }
        if(newStr.length < i + 1){
            newStr += splitStr[i];
        }
    }
    return newStr;
}


String.prototype.reverseWord = function(){
    let newStr= '';
    for(let i = this.length-1 ; i >= 0; i-- ){
        newStr += this[i];
    }
    return newStr;
}


String.prototype.setLowerUpperCase = function() {
    let splitStr = []
    let newStr = ''
    for(let i = 0 ; i <= this.length-1 ; i++){
        splitStr.push(this[i]);
    }

    for(let i = 0 ; i <= splitStr.length-1 ; i++){
        const element = splitStr[i];
        if(element === element.toUpperCase()){
            newStr += splitStr[i].toLowerCase()
        }else if(element === element.toLowerCase()){
            newStr += element.toUpperCase()
        }
    }
    return newStr;
}


String.prototype.removeSpaces = function(){
    let newStr = '';
    for (let i = 0 ; i <= this.length-1; i++){
        if(this[i] !== ' '){
            newStr += this[i];
        }
    }
    return newStr;
}

const passwordGenerator = (str) =>{
    return str.length >= 5 ? str.removeSpaces().setLowerUpperCase().changeVocals().reverseWord() : console.log('Minimal karakter yang diinputkan adalah 5 karakter');
}

// console.log(passwordGenerator('Khafidul Mualif', '<<<Generate password'));

// No.4

// 'Razor-Ranged,Invoker-Ranged,Meepo-Melee,Axe-Melee,Sniper-Ranged'

const meleeRangedGrouping = (str) => {
    let resultArr = []
    let meleeArr = []
    let rangedArr = []
    let tempArr = []
    let tempStr = ''

    // pecah string jadi array dg delimiter comma
    for (let i = 0; i <= str.length-1 ; i++){
        if(str[i] !== ','){
            tempStr += str[i];
        }else{
            tempArr.push(tempStr);
            tempStr = ''
        }
    }
    if(tempStr){
            tempArr.push(tempStr);
    }

    console.log(tempArr, '<<TEmp arr');

    // masukan hero sesuai kategori ke setiap array
    for(let i = 0; i <= tempArr; i++){
        
    }

}

meleeRangedGrouping('Razor-Ranged,Meepo-Melee');




// No.5
const stringToArray = (str) =>{
    let tempArr = [];
    let resultArr = [];
    let tempResArr = []

    //ubah string ke char array
    for(let i = 0 ; i <= str.length-1 ; i++){
        tempArr.push(str[i]);
    }

    // masukan char arr ke temp arr trus ke result array
    for(let i = 0 ; i <= tempArr.length-1 ; i++){
        if(tempArr[i] !== ' '){
            tempResArr.push(tempArr[i]);
        }else{
            resultArr.push(tempResArr)
            tempResArr = []
        }
    }
    // triger push temp array ke result array jika masih ada value
    if(tempResArr.length > 0){
        resultArr.push(tempResArr);
    }
    return resultArr;
}



// console.log(stringToArray('Alif Alif Mualif'));
