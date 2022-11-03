
let openEl = document.getElementById("open-el")
let closeEl = document.getElementById("close-el")
let open = 0



function open() {
    open += 1
    openEl.textContent = count

}


function close() {
    let openStr = open + " - "
    closeEl.textContent += openStr
    openEl.textContent = 0
    open = 0
   
    

}

