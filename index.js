const names = ["Charlie", "Samip", "Ali"]
const event = surprise

function  writeCards(names, event){
    var newArr = []
    for (let i=0; i < names.length; i++){
        newArr.push(`Thank you, ${names[i]}, for the wonderful ${event} gift!`)
    }
    return newArr
}



let count = 10;

function countDown(count){
    if (count % 2 === 0){

        while (count >= 0) {
            console.log(count--)
          }
    }
}

countDown(count)