window.onload = function () {
    let canvas = document.getElementById("#canvas");
    let ctx = canvas.getContext("2d");
    let width = canvas.width;
    let height = canvas.height;

    ctx.fillStyle = "#000";
    ctx.fillRect(0, 0, width, height);
}