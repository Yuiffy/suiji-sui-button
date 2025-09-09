const voices = require("../voices.json")

// console.log(voices)

const list = []

voices.voices.forEach(voice=>{
    categoryCn = voice.categoryDescription["zh-CN"]
    // vlist = []
    vlist = voice.voiceList.map(({description})=>description["zh-CN"])
    list.push({
        categoryCn,
        voiceList: vlist,
    })
})

console.log(list.map((({categoryCn})=>categoryCn)))
console.log(JSON.stringify(list))
