// var texts = "ami to asi re aikhane ami"
// var word = [];

// var splits = texts.split(" ")
// // console.log(splits);

// for(const split of splits){
//     if (split.includes("ami")) {
//         word.push(split)
//     }
// }
// console.log(word.length);

document.getElementById('btn').addEventListener('click',()=>{
    const userInput = document.getElementById('user-input')
    const findWord = document.getElementById('find-word')
    const p = document.getElementById('matching-word');
    console.log(p);
    const userText = userInput.value

    let word = []
    const textSplit = userText.split(" ")

    for (const texts of textSplit) {
        var small = texts.toLowerCase()
        if (small.includes(findWord.value)) {
            word.push(texts)
        }
        else{
            p.innerText = 0
        }
    }
    if(word == "") {
        p.innerText = 0
        alert("The paragraph area is empty")
   }
    else{
        p.innerText = word.length
    }
    findWord.value = ""
})