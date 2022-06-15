// Bài tập 1: Xuất 3 số theo thứ tự tăng dần
// input: soThuNhat: Number, soThuHai:Number, soThuBa:Number
// output: sapxepTangDan: string
// xử lý: nếu - a > b && b > c => c < b < a
            //- a > c && c > b => b < c < 
            //- b > a && a > c => c < a < b
            // b > c && c > a => a < c < b
            // c > a && a > b => b < a < c
            // c >b && b > a) => a < b <c

document.getElementById('btnSapXep').onclick = function(){
    var a = Number(document.getElementById('soThuNhat').value);
    var b = Number(document.getElementById('soThuHai').value);
    var c = Number(document.getElementById('soThuBa').value);
    var ketQuab1 = '';
    
    if (a > b && b > c ) {
        ketQuab1  = c + "<" + b +"<" + a;
    } else if (a > c && c > b){
        ketQuab1 = b + "<" + c + "<" + a;

    } else if(b > a && a > c) {
        ketQuab1 = c + "<"+ a + "<" + b;
    } else if(b > c && c > a ) {
        sapxepTangDan = a+"<"+ c + "<"+ b;
    } else if(c > a && a > b) {
        ketQuab1 = b + "<"+ a+ "<"+ c;
    } else if(c >b && b > a) {
        ketQuab1 = a+ "<"+ b+ "<" +c;
    } else {
        ketQuab1 = 'Không xác định';
    }
    document.getElementById('sapxepTangDan').innerHTML = ketQuab1;

        
    

}


// Bài tập 2: Chương trình chào hỏi
// input: chọn thành viên/ bo, me, anhTrai, emGai : String
// output: nội dung lời chào khi chọn thành viên
// xử lý: 
document.getElementById('btnLoiChao').onclick = function(){
    var chonLoiChao = document.getElementById('chonLoiChao').value;
    var ketQuab2= '';
    if (chonLoiChao == 'B' ) {
     ketQuab2= 'Xin chào Bố';
        
    } else if(chonLoiChao == 'M'){
     ketQuab2= 'Xin chào Mẹ';

        
    }else if (chonLoiChao == 'A'){
     ketQuab2= 'Xin chào Anh Trai';

    } else if(chonLoiChao == 'E'){
     ketQuab2= 'Xin chào Em gái';

    }


document.getElementById('loiChao').innerHTML = ketQuab2;
}
// Bài tập 3: Đếm số chẵn lẻ
// input: sothunhat, sothuhai,sothuba: Number
// output: in ra có bao nhiêu số chẵn bao nhiêu số lẻ
// xử lý: số lẻ là số % 2 === 0
        //   số chẵn là số % 2 !== 0


document.getElementById('btnDemSo').onclick = function(){
    var so1 = Number(document.getElementById('sothunhat').value);
    var so2 = Number(document.getElementById('sothuhai').value);
    var so3 = Number(document.getElementById('sothuba').value);
    var ketQuab3 = 0;
    
    if (so1 % 2 === 0) {
       ketQuab3 = ketQuab3 + 1;
        
    } else if(so2 % 2 === 0){
       ketQuab3 = ketQuab3 + 1;

        // ketQuab3 = ;
        
    } else if (so3 % 2 === 0){
       ketQuab3 = ketQuab3 + 1;

        // ketQuab3 = ;
    }
     document.getElementById('demSo').innerHTML= 'số chẵn là:' + ketQuab3 + 'số lẻ là:' + (3 - ketQuab3);
}




// Bài tập 4: Đoán hình tam giác
// INPUT: 3 cạnh tam giác
// OUTPUT: Xác định là tam giác gì
// xử lý: Đều: Nếu 3 cạnh bằng nhau.
    //    Cân: Nếu 2 cạnh bằng nhau
    //    Vuông: c^2 = a^2 + b^2

document.getElementById('btnTamGiac').onclick = function(){
    var d = Number(document.getElementById('canhA').value);
    var e = Number(document.getElementById('canhB').value);
    var f = Number(document.getElementById('canhC').value);
    var ketQuab4 = '';
    if (d == e && d == f && f ==e) {
        ketQuab4 = 'Tam giác đều';
    } else if (d == e || d == f || f == e){
        ketQuab4 = 'Tam giác cân';
        
    } else if(f * f == (d * d + e * e)){
        ketQuab4 = 'Tam giác vuông';

    }else{
        ketQuab4 = 'Tam giác khác';

    }
    document.getElementById('tamGiac').innerHTML = ketQuab4;

}