const data = fetch("https://raw.githubusercontent.com/julkarzunayed/Calculator-Pure-JS/refs/heads/main/keys.json")
    .then(res => res.json())
    .then(keys => displayKeys(keys))


const displayKeys = (keys) => {
    const keysContainer = document.getElementById("keys-container");

    // console.log(keys)
    for (const key of keys) {
        const div = document.createElement("div")
        div.innerHTML = `
            <div id="${key.id}" class="${key.class}" > 
                ${key.key}
            </div>
        
        `
        keysContainer.appendChild(div)
    }

}

function liAdd() {

    const back = document.getElementById("2")
    const i = document.createElement("i")
    i.classList.add("fa-solid", "fa-delete-left")
    back.appendChild(i)
}
// liAdd()
// const textContainer = document.getElementById("text-box")
//     const textAria = document.createElement("textarea")
//     textAria.classList.add("text-area-box")
//     // textAria.id.add("text-area-box")
//     textContainer.appendChild(textAria)

let textHolder = ''

function textareaUpdater() {
    document.getElementById("text-box").innerText = textHolder
    // document.getElementById("text-area-box").value = textHolder
}

function spaceChecker() {
    // const space = document.getElementById("text-area-box").value
    // if(space)
    // console.log(space.includes(" "))
}
spaceChecker()

function calculate() {
    // if (!textHolder.includes("/") ||
    //     !textHolder.includes("*")||
    //     !textHolder.includes("-")||
    //     !textHolder.includes("+")){
    //         return textHolder;
    // }
    if (!/[/*-+-]/.test(textHolder)) {
        return textHolder
    }
    let string2 = textHolder.split(/[/*-+-]/)
    // let string2 = []
    // if(textHolder)

    let sum = 0;

    if (string2.length >= 2) {
        const stringF = textHolder.split("")
        console.log(stringF)

        for (let i = 0; i < stringF.length; i++) {
            const first = Number(string2[0])
            const second = Number(string2[1])
            // if(){

            // }
            // console.log(stringF[i])
            if (stringF[i] === "-") {
                sum = first - second;
                string2.shift()
                string2.shift()
                string2.unshift(sum)

                // if (first < second) {
                //     sum = second - first;
                //     console.log("jksfjksdjf")
                //     string2.shift()
                //     string2.shift()
                //     string2.unshift(-sum)
                // }
                // else {
                //     sum = first - second;
                //     string2.shift()
                //     string2.shift()
                //     string2.unshift(sum)
                // }
                console.log(string2, "kdjkfjdk", first, second)
            }
            else if (stringF[i] === "+") {
                sum = first + second;
                string2.shift()
                string2.shift()
                string2.unshift(sum)
                console.log(string2)
            }
            if (stringF[i] === "/") {
                sum = first / second;
                string2.shift()
                string2.shift()
                string2.unshift(sum)
                console.log(string2)
            }
            if (stringF[i] === "*") {
                sum = first * second;
                string2.shift()
                string2.shift()
                string2.unshift(sum)
                console.log(string2)
            }
            

        }
        console.log(sum)
        return sum;
    }
}

function textContainerUpdate(text) {
    // const textarea = document.getElementById("text-area-box")
    // if()
    if (text === "C") {
        textHolder = ""
        textareaUpdater();
        return;
    }
    if (text === "=") {
        const result = calculate()
        textHolder = result
        textareaUpdater();
        return;
    }
    if(text === "%"){
        const result = calculate()
        textHolder = `${result/100}`
        textareaUpdater();
        return;
    }
    textHolder += text
    textareaUpdater()
    // const jj = document.getElementById("text-area-box").value = textHolder
    // jj.forEach(element => {
    //     console.log(element)
    // });
    // console.log(jj)

}
function backSpace() {
    const newTextHolder = textHolder.slice(0, -1);
    textHolder = newTextHolder;
    textareaUpdater()
    // textContainerUpdate()
}

const handleKeys = () => {
    document.getElementById("keys-container")
        .addEventListener("click", function (key) {
            // console.log(key.target.id)
            if (key.target.id == 2) {
                backSpace();
                return;
            }
            if (key.target.id === "keys-container") {
                return;
            }
            console.log(key.target.innerText)

            textContainerUpdate(key.target.innerText)
            // textContainer.innerText(key.target.innerText)
        })
};

handleKeys()

let string = "12345/*-+6";

console.log(!/[/*-+-]/.test(string))
// console.log(string.match(""))
// console.log(string.includes())


// const newStr = string.slice(0, -1);
// string = newStr

// console.log(string)

let string2 = string.split(/[/*-+-]/)
let numbers = []
for (const num of string2) {
    numbers.unshift(Number(-num))
}
// console.log(string2)
// console.log(numbers)


// if (string2.length >= 2) {
//     const stringF = string.split("")
//     // const first = Number(string2[0])
//     // const second = Number(string2[1])
//     let sum = 0;
//     console.log(stringF)

//     for (let i = 0; i < stringF.length; i++) {
//         const first = Number(string2[0])
//         const second = Number(string2[1])
//         // console.log(stringF[i])
//         if (stringF[i] === "-") {
//             if (first < second) {
//                 sum = second - first;
//                 console.log("jksfjksdjf")
//                 string2.shift()
//                 string2.shift()
//                 string2.unshift(-sum)
//             }
//             else {
//                 sum = first - second;
//                 string2.shift()
//                 string2.shift()
//                 string2.unshift(sum)
//             }
//             // string2.shift()
//             // string2.shift()
//             // string2.unshift(sum)
//             console.log(string2, "kdjkfjdk", first, second)
//         }
//         else if (stringF[i] === "+") {
//             sum = first + second;
//             string2.shift()
//             string2.shift()
//             string2.unshift(sum)
//             console.log(string2)
//         }
//         if (stringF[i] === "/") {
//             sum = first / second;
//             string2.shift()
//             string2.shift()
//             string2.unshift(sum)
//             console.log(string2)
//         }
//         if (stringF[i] === "*") {
//             sum = first * second;
//             string2.shift()
//             string2.shift()
//             string2.unshift(sum)
//             console.log(string2)
//         }
//     }
// }

// console.log("test", 1  0)
console.log("test", Number("1.252525"))


