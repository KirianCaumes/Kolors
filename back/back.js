const fs = require('fs');

console.log("Generating colors...")
let colors = []
for (let r = 0; r < 256; r++) {
    for (let g = 0; g < 256; g++) {
        for (let b = 0; b < 256; b++) {
            colors.push({ r, g, b })
        }
    }
}

console.log("Writing file...")
fs.writeFile("./back/colors.json", JSON.stringify(colors), (err) => {
    if (err) {
        return console.log(err);
    }
    console.log("The file was saved!");
}); 