function check(){
    let yearMale = +document.getElementById("yearBirthMale").value;
    let yearFemale = +document.getElementById("yearBirthFemale").value;

    chiMale = yearMale%12;
    chiFemale = yearFemale%12;
    let b="";
    let g="";
    switch(chiMale){
        case 0:
            b = "Thân";
            break;
        case 1:
            b = "Dậu";
            break;
        case 2:
            b = "Tuất";
            break;
        case 3:
            b = "Hợi";
            break;
        case 4:
            b = "Tý";
            break;
        case 5:
            b = "Sửa";
            break;
        case 6:
            b = "Dần";
            break;
        case 7:
            b = "Mẹo";
            break;
        case 8:
            b = "Thìn";
            break;
        case 9:
            b = "Tỵ";
            break;
        case 10:
            b = "Ngọ";
            break;
        case 11:
            b = "Mùi";
            break;
    }

    switch(chiFemale){
        case 0:
            g = "Thân";
            break;
        case 1:
            g = "Dậu";
            break;
        case 2:
            g = "Tuất";
            break;
        case 3:
            g = "Hợi";
            break;
        case 4:
            g = "Tý";
            break;
        case 5:
            g = "Sửa";
            break;
        case 6:
            g = "Dần";
            break;
        case 7:
            g = "Mẹo";
            break;
        case 8:
            g = "Thìn";
            break;
        case 9:
            g = "Tỵ";
            break;
        case 10:
            g = "Ngọ";
            break;
        case 11:
            g = "Mùi";
            break;
    }

    document.getElementById("ageBoy").innerHTML = "Tuổi " + b;
    document.getElementById("ageGirl").innerHTML = "Tuổi " + g;

    if(chiMale==0 && chiFemale==6 || chiMale==6 && chiFemale==0){
        txt = "Dần khắc Thân => Không hợp nhau";
    }else if(chiMale==9 && chiFemale==3 || chiMale==3 && chiFemale==9){
        txt = "Tỵ khắc Hợi => Không hợp nhau";
    }else if(chiMale==2 && chiFemale==8 || chiMale==8 && chiFemale==2){
        txt = "Thìn khắc Tuất => Không hợp nhau";
    }else if(chiMale==5 && chiFemale==11 || chiMale==11 && chiFemale==5){
        txt = "Sửu khắc Mùi => Không hợp nhau";
    }else if(chiMale==8 && chiFemale==5 || chiMale==5 && chiFemale==8){
        txt = "Thìn chỉ xung với Sửu chứ không khắc mạnh => Vẫn bên nhau được";
    }else if(chiMale==8 && chiFemale==11 || chiMale==11 && chiFemale==8){
        txt = "Thìn chỉ xung với Mùi chứ không khắc mạnh => Vẫn bên nhau được";
    }else if(chiMale==4 && chiFemale==10 || chiMale==10 && chiFemale==4){
        txt = "Tý khắc Ngọ => Không hợp nhau";
    }else if(chiMale==1 && chiFemale==7 || chiMale==7 && chiFemale==1){
        txt = "Mẹo khắc Dậu => Không hợp nhau";
    }else if(chiMale==4 && chiFemale==7 || chiMale==7 && chiFemale==4){
        txt = "Tý kết hợp với Mão chỉ xung nhẹ chứ không khắc chế => Vẫn bên nhau được";
    }else if(chiMale==4 && chiFemale==1 || chiMale==1 && chiFemale==4){
        txt = "Tý kết hợp với Dậu chỉ xung nhẹ chứ không khắc chế => Vẫn bên nhau được";
    }else if(chiMale==9 && chiFemale==11 || chiMale==11 && chiFemale==9){
        txt = "Kết hợp không hài hòa, rủi ro dễ xảy ra";
    }else if(chiMale==5 && chiFemale==10 || chiMale==10 && chiFemale==5){
        txt = "Mang đến nhiều điều không may";
    }else if(chiMale==6 && chiFemale==9 || chiMale==9 && chiFemale==6){
        txt = "Mối quan hệ không lâu dài";
    }else if(chiMale==3 && chiFemale==0 || chiMale==0 && chiFemale==3){
        txt = "Tính cách đối nghịch nhau";
    }else if(chiMale==7 && chiFemale==8 || chiMale==8 && chiFemale==7   ){
        txt = "Gặp nhau chỉ thêm muộn phiền";
    }else if(chiMale==10 && chiFemale==1 || chiMale==1 && chiFemale==10){
        txt = "Cản trở con đường làm ăn, công danh";
    }else{
        txt = "Hợp nhau";
    }

    document.getElementById("CheckHopNhau").innerHTML = txt;
}