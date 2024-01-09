const palindrome=(kata) => {
    let newStr = '';
    for(let i = kata.length-1 ; i >= 0; i-- ){
        newStr += kata[i];
    }
    return kata === newStr ? true : false
  }

// console.log(palindrome('katak'));

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

// console.log(hitungJumlahKata('khafidul mualif kasdkjla'));


const changeVocals = (str) =>{
    const vocals = ['a', 'i' , 'u', 'e', 'o', 'A', 'I', 'U', 'E','O' ];
    const change = ['b', 'j', 'v', 'f', 'p', 'B', 'J', 'V', 'F', 'P'];
    let newStr = '';
    const splitStr = [];

    for(let i = 0 ; i <= str.length-1 ; i++){
        splitStr.push(str[i]);
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

console.log(changeVocals('aiuEo'));


String.prototype.reverseWord = function(){
    let newStr= '';
    for(let i = this.length-1 ; i >= 0; i-- ){
        newStr += this[i];
    }
    return newStr;
}

const value = 'Alif'
console.log(value.reverseWord())

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


// console.log(passwordGenerator('Alif'))