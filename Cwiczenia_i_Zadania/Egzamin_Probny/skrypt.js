function szczegoly(){
    var marka=document.getElementById("marka").value;
    var wynik=document.getElementById("szczegoly-pojazdu");
    console.log(marka);
    if(marka=='Renault'){
        wynik.innerHTML="Renault Range T, 460 KM, 131531 km, tablica rejestracyjna KR130RE";
    }
    else if(marka=='Man'){
        wynik.innerHTML="MAN TGX XXL, 510 KM, 341833 km, tablica rejestracyjna KR131RE";
    }
    else if(marka=='Scania'){
        wynik.innerHTML="Scania Streamline, 460 KM Euro 6, 143371 km,tablica rejestracyjna KR130RF";
    }
    else if(marka=='Mercedes-Benz'){
        wynik.innerHTML="Mercedes-Benz New Actros, 460 KM Euro 6,143313 km, tablica rejestracyjna KR130TB";
    }
}

function licz(){
    var tony=document.getElementById("tony").value;
    var km=document.getElementById("km").value;
    var rodzaj=document.getElementById("rodzaj").value;
    var koszt=document.getElementById("koszt");
    if(rodzaj=="Chlodniczy"){
        koszt.innerHTML="Koszt zlecenia: "+km*0.15+"zł";
    }
    else if(rodzaj=="Zwykly"){
        koszt.innerHTML="Koszt zlecenia: "+km*0.05+"zł";
    }
    else if(rodzaj=="Gabaryt"){
        koszt.innerHTML="Koszt zlecenia: "+km*0.95+"zł";
    }
}