var i = 0; 			// Start Point
var images = [];	// array kosong untuk menampung gambar
var time = 3000;	// waktu jeda sebelum ganti gambar
	 
// Image List
images[0] = "assets/magetan1.jfif";
images[1] = "assets/magetan2.jfif";
images[2] = "assets/magetan3.jpg";
images[3] = "assets/magetan1.jfif";

// function untuk ganti image dengan jeda waktu tertentu
function changeImg(){
	document.slide.src = images[i];

	
    // cek jika index array dibawah panjang array (maximal panjang array)
	if(i < images.length - 1){
	  // tambah 1 ke index
	  i++; 
	} else { 
		// Reset kembali ke array[0]
		i = 0;
	}

	// menjalankan function berdasarkan time 3000ms
	setTimeout("changeImg()", time);
}

// mejalankan function saat reload
window.onload=changeImg;