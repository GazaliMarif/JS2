var ronde = 1;
var skor1 = 0;
var skor2 = 0;

alert ('Selamat datang di game tebak angka, anda dipersilahkan menebak angka dari 1 sampai 3 selama 5 babak, pemain yang menebak angka paling banyak yang menjadi pemenangnya');

while(ronde <= 5) {

        alert ('Rounde ' + ronde);

        var tebak = Math.round(Math.random() * 2) + 1;

        var nilai1 = prompt('Player 1 silahkan menebak :');
        var nilai2 = prompt('Player 2 silahkan menebak :');

        if(nilai1 === '' ){
            ronde--
            alert ('harap masukan nilai');  
        }

        else if(nilai2 === '' ){
            ronde--
            alert ('harap masukan nilai');  
        }
        
        else if(nilai1 == nilai2 ){
            ronde--
            alert ('Angka tidak boleh sama \nSilahkan ulangi');
        }

        else if(nilai1 == tebak ){
           
            skor1++
            alert ('Player 1 benar \nAngka yang dicari adalah : ' + tebak +  '\n---------------  \nSkor Player 1 : ' + skor1 + '\nSkor Player 2 : ' + skor2);
        }

        else if(nilai2 == tebak ){
            
            skor2++
            alert ('Player 2 benar \nAngka yang dicari adalah : ' + tebak +  '\n---------------  \nSkor Player 1 : ' + skor1 + '\nSkor Player 2 : ' + skor2);
        }

        else if(nilai1 < 1){
            alert ('masukan angka antara 1-3');
            var cek = confirm('Apakah kamu ingin mengulang ?');
                if( cek === true ) {
                    ronde--
                }
                
        }

        else if(nilai2 < 1){
            alert ('masukan angka antara 1-3');
            var cek = confirm('Apakah kamu ingin mengulang ?');
                if( cek === true ) {
                    ronde--
                }
                
        }

        else if(nilai1 > 3){
            alert ('masukan angka antara 1-3');
            var cek = confirm('Apakah kamu ingin mengulang ?');
                if( cek === true ) {
                    ronde--
                }
                
        }

        else if(nilai2 > 3){
            alert ('masukan angka antara 1-3');
            var cek = confirm('Apakah kamu ingin mengulang ?');
                if( cek === true ) {
                    ronde--
                }
                
        }

        else {
            alert ('Hasil seri tidak ada yang benar \nAngka yang dicari adalah : ' + tebak + '\n---------------  \nSkor Player 1 : ' + skor1 + '\nSkor Player 2 : ' + skor2);
        }

    ronde++    

}

if(skor1 > skor2){
    alert ('Selamat Player 1 menang');       
}

else if(skor1 < skor2){
    alert ('Selamat Player 2 menang');       
}

else{
    alert ('Hasil Seri');       
}

alert ('terimaksih sudah bermain')
















