
let openEl = document.getElementById("open-el")
let closeEl = document.getElementById("close-el")
let count = 0



function open() {
    count += 1
    countEl.textContent = count

}


function close() {
    let countStr = count + " - "
    closeEl.textContent += countStr
    countEl.textContent = 0
    count = 0
   
    

}

