var display = document.getElementById('display');

function calculate () {
    if (display.value.includes("%")) {
        let solve = display.value.replace("%", "/100")
        display.value = eval(solve);
    } else if (display.value.includes("\u00F7")) {
        let solve = display.value.replace("\u00F7", "/")
        display.value = eval(solve);
    } else if (display.value.includes("(") && display.value.indexOf('(') !== -1 ) {
        let solve = display.value.replace("(", "*(")
        display.value = eval(solve);
    } else {
        display.value = eval(display.value);
    }
}
    