const data = fetch("../keys.json")
    .then(res => res.json())
    .then(keys => displayKeys(keys))


const displayKeys = (keys) => {
    const keysContainer = document.getElementById("keys-container");

    console.log(keys)
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

let textHolder = '123 11'

function textareaUpdater () {
    document.getElementById("text-area-box").value = textHolder
}

function spaceChaker () {
    const space = document.getElementById("text-area-box").value
    // if(space)
    console.log(space.includes(" "))
}
spaceChaker()

function textContainerUpdate(text) {
    const textarea = document.getElementById("text-area-box")
    // if()
    if (text === "C") {
        textHolder = ""
        textarea.value = textHolder
        return;
    }
    if (text === "=") {
        textHolder = ""
        textarea.value = textHolder
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
function backSpace () {
    const newTextHolder = textHolder.slice(0, -1);
    textHolder = newTextHolder;
    textareaUpdater()
    // textContainerUpdate()
}

const handleKeys = () => {
    document.getElementById("keys-container")
        .addEventListener("click", function (key) {
            // console.log(key.target.id)
            if(key.target.id == 2 ){
                backSpace();
                return
            }
            console.log(key.target.innerText)

            textContainerUpdate(key.target.innerText)
            // textContainer.innerText(key.target.innerText)
        })
};

handleKeys()

let string = "123 45-123+1*11";

// const newStr = string.slice(0, -1);
// string = newStr

// console.log(string)

let string2 = string.split(/[/*-+-]/)
console.log(string2)



