function floatMenu(position){
	var position = window.pageYOffset;
	if (window.pageYOffset > 115){
		document.getElementById('float-navbar').style.zIndex='-1'
	}else{
		document.getElementById('float-navbar').style.zIndex='100'
	}
}
function mencari(){
	if (kategori.cari.value == "komputer")
		window.location.href='komputer-cari.html';
	else if (kategori.cari.value == "handphone")
		window.location.href='handphone-cari.html';
	else
		alert('Tidak ada masukkan!');
}
