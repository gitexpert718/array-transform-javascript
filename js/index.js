var loadFile = function(event) {
    document.getElementById("upload_btn").style.visibility = "hidden";
    loadimg("uploaded");
    loadimg("top");
    loadimg("right");
    skew("top_skew", -45, 0);
    setposition("top_skew", 200, 50);
    skew("right_skew", 0, -45);
    setposition("right_skew", 450, 100);
    // drawing("canvas_right", -1, 1);
};

function loadimg(divname) {
    var imagefile = document.createElement("img");
    imagefile.src = URL.createObjectURL(event.target.files[0]);
    imagefile.id = divname + "img";
    imagefile.style.width = "98%";
    imagefile.style.height = "98%";
    imagefile.style.position = "absolute";
    imagefile.style.left = "1%";
    imagefile.style.top = "1%";
    let container = document.getElementById(divname);
    container.appendChild(imagefile);
}

function drawing(canid, flipH, flipV) {
    
    var canvas = document.getElementById(canid),
        ctx = canvas.getContext('2d'),
        img = new Image(),
        width = $("#" + canid).width();
        height = $("#" + canid).height();
        scaleH = flipH ? -1 : 1,
        scaleV = flipV ? -1 : 1,
        posX = flipH ? width * -1 : 0,
        posY = flipV ? height * -1 : 0;

    img.src = URL.createObjectURL(event.target.files[0]);
    ctx.save();
    ctx.scale(scaleH, scaleV);
    ctx.drawImage(img, posX, posY, width, height);
    ctx.restore(); 

    console.log("drawing_canvas", width, height, scaleH, scaleV, posX, posY);
}

function skew(imgid, value1, value2) {
    document.getElementById(imgid).style.visibility = "visible";
    document.getElementById(imgid).style.webkitTransform="skew("+value1+"deg,"+value2+"deg)";
    document.getElementById(imgid).style.msTransform ="skew("+value1 +"deg,"+value2 +"deg)";
    document.getElementById(imgid).style.MozTransform="skew("+value1+"deg,"+value2+"deg)";
    document.getElementById(imgid).style.OTransform ="skew("+value1 +"deg,"+value2 +"deg)";
    document.getElementById(imgid).style.transform="skew("+value1+"deg,"+value2+"deg)";
}

function setposition(divid, left, top) {
    $("#" + divid).css({"left": left, "top": top});
}