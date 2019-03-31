for (let r = 0; r < 256; r++) {
    for (let g = 0; g < 256; g++) {
        for (let b = 0; b < 256; b++) {
            let div = document.createElement("div")
            div.style.backgroundColor = "rgb(" + r + "," + g + "," + b + ")"
            document.getElementsByTagName('body')[0].appendChild(div)
        }
    }
}