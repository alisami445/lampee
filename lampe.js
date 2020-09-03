function changeImage() {
    var image = document.getElementById('myimage');
    if (image.src.match("bulbon")) {
        image.src = "../res/pic_bulboff.png";
    } else {
        image.src = "../res/pic_bulbon.png";
    }
}