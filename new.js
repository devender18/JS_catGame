function generate(){
    var image = document.createElement('img');
    image.setAttribute('src','cat.gif');
    image.setAttribute('id','cat');
    var div = document.getElementById('img-container');
    // image.src="cat.gif"
    div.appendChild(image);
    // document.getElementById('img-container').appendChild(image);

}

function del(){
    document.getElementById('cat').remove();
}