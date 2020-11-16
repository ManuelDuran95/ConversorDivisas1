var myArrayObject = [];window.onload = load;
   function load() {
      console.log("Restaurando arreglo de datos desde localStorage.");
      var myArrayObject = JSON.parse(sessionStorage.getItem("convert"));
      for(var i=0; i<myArrayObject.length; i++){
      var personObject = myArrayObject[i];
     var fila="<tr><td>"+personObject.txtmoneda1+" $"+personObject.op1+"</td><td>"+personObject.txtmoneda2 +" $"+personObject.op2+"</td></tr>";
     var btn = document.createElement("TR");
     btn.innerHTML=fila;
     document.getElementById("lista").appendChild(btn);
      }
      }
      
      function operar(){
         var op1 = document.getElementById("importe1.txt").value;
       var op2 = document.getElementById("importe2.txt").value;
       var opcion1=document.getElementById("txtmoneda1").value;
       var opcion2=document.getElementById("txtmoneda2").value;
   
   
       //dolar
       if(opcion1=="US Dólar"&&opcion2=="US Dólar"){
       var resultado=alert("La moneda de entrada es la misma que la de salida.");
       document.getElementById("txtmoneda2").value="Seleccione una opción";
       }else if(opcion1=="US Dólar" && opcion2=="Euro"){
       var resultado1=(op1*0.84)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
           
          //agregando elemento a la tabla
          var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"US Dólar $"+x+"</td><td>"+ "Euro $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       
       }
   
       }else if(opcion1=="Seleccione una opción" || opcion2=="Seleccione una opción"){
         alert("No ah seleccionado el tipo de moneda de entrada o de salida.")
         document.getElementById("txtmoneda2").value="Seleccione una opción";
         document.getElementById("txtmoneda2").value="Seleccione una opción";
       }else if(opcion1=="US Dólar" && opcion2==" Libra esterlina"){
       var resultado1=(op1*0.76)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
       
       //agregando elemento a la tabla
       var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"US Dólar $"+x+"</td><td>"+ "Libra esterlina $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="US Dólar" && opcion2=="གྷ Franco suizo"){
       var resultado1=(op1*0.90)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"US Dólar $"+x+"</td><td>"+ "Franco suizo $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="US Dólar" && opcion2==" Yen japonés"){
       var resultado1=(op1*103.34)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
       
       //agregando elemento a la tabla
       var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"US Dólar $"+x+"</td><td>"+ "Yen japonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="US Dólar" && opcion2==" Dólar hongkonés"){
       var resultado1=(op1*7.75)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"US Dólar $"+x+"</td><td>"+ "Dólar hongkonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="US Dólar" && opcion2==" Dólar canadiense"){
       var resultado1=(op1*1.30)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"US Dólar $"+x+"</td><td>"+ "Dólar canadiense $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="US Dólar" && opcion2==" Yuan chino"){
       var resultado1=(op1*6.61)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
       
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"US Dólar $"+x+"</td><td>"+ "Yuan chino $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="US Dólar" && opcion2==" Dólar australiano"){
       var resultado1=(op1*1.37)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
       //agregando elemento a la tabla
       var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"US Dólar $"+x+"</td><td>"+ "Dólar australiano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="US Dólar" && opcion2==" Real brasileño"){
       var resultado1=(op1*5.37)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"US Dólar $"+x+"</td><td>"+ "Real brasileño $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="US Dólar" && opcion2==" Rublo ruso"){
       var resultado1=(op1*77.49)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"US Dólar $"+x+"</td><td>"+ "Rublo ruso $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="US Dólar" && opcion2==" Peso mexicano"){
       var resultado1=(op1*20.46)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"US Dólar $"+x+"</td><td>"+ "Peso mexicano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }
   
       //Euro
       else if(opcion1=="Euro" && opcion2=="Euro"){
       var resultado=alert("La moneda de entrada es la misma que la de salida.");
       document.getElementById("txtmoneda2").value="Seleccione una opción";
       }else if(opcion1=="Euro" && opcion2=="US Dólar"){
       var resultado1=(op1*1.19)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Euro $"+x+"</td><td>"+ "US Dólar $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="Euro" && opcion2==" Libra esterlina"){
       var resultado1=(op1*0.90)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Euro $"+x+"</td><td>"+ "Libra esterlina $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="Euro" && opcion2=="གྷ Franco suizo"){
       var resultado1=(op1*1.07)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Euro $"+x+"</td><td>"+ "Franco suizo $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
   
       }else if(opcion1=="Euro" && opcion2==" Yen japonés"){
       var resultado1=(op1*122.82)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
       //agregando elemento a la tabla
       var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Euro $"+x+"</td><td>"+ "Yen japonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="Euro" && opcion2==" Dólar hongkonés"){
       var resultado1=(op1*9.22)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Euro $"+x+"</td><td>"+ "Dólar hongkonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="Euro" && opcion2==" Dólar canadiense"){
       var resultado1=(op1*1.55)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Euro $"+x+"</td><td>"+ "Dólar canadiense $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="Euro" && opcion2==" Yuan chino"){
       var resultado1=(op1*7.86)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Euro $"+x+"</td><td>"+ "Yuan chino $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="Euro" && opcion2==" Dólar australiano"){
       var resultado1=(op1*1.63)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Euro $"+x+"</td><td>"+ "Dólar australiano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="Euro" && opcion2==" Real brasileño"){
       var resultado1=(op1*6.38)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Euro $"+x+"</td><td>"+ "Real brasileño $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="Euro" && opcion2==" Rublo ruso"){
       var resultado1=(op1*91.89)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
          //agregando elemento a la tabla
          var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Euro $"+x+"</td><td>"+ "Rublo ruso $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="Euro" && opcion2==" Peso mexicano"){
       var resultado1=(op1*24.33)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Euro $"+x+"</td><td>"+ "Peso mexicano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }
   
       //Libra esterlina
       else if(opcion1==" Libra esterlina" && opcion2==" Libra esterlina"){
       var resultado=alert("La moneda de entrada es la misma que la de salida.");
       document.getElementById("txtmoneda2").value="Seleccione una opción";
       }else if(opcion1==" Libra esterlina" && opcion2=="US Dólar"){
       var resultado1=(op1*1.32)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Libra esterlina $"+x+"</td><td>"+ "US Dólar $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Libra esterlina" && opcion2=="Euro"){
       var resultado1=(op1*1.11)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Libra esterlina $"+x+"</td><td>"+ "Euro $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Libra esterlina" && opcion2=="གྷ Franco suizo"){
       var resultado1=(op1*1.19)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Libra esterlina $"+x+"</td><td>"+ "Franco suizo $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Libra esterlina" && opcion2==" Yen japonés"){
       var resultado1=(op1*136.21)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Libra esterlina $"+x+"</td><td>"+ "Yen japonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Libra esterlina" && opcion2==" Dólar hongkonés"){
       var resultado1=(op1*10.22)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Libra esterlina $"+x+"</td><td>"+ "Dólar hongkonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Libra esterlina" && opcion2==" Dólar canadiense"){
       var resultado1=(op1*1.72)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
          //agregando elemento a la tabla
          var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Libra esterlina $"+x+"</td><td>"+ "Dólar canadiense $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Libra esterlina" && opcion2==" Yuan chino"){
       var resultado1=(op1*8.73)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
          //agregando elemento a la tabla
          var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Libra esterlina $"+x+"</td><td>"+ "Yuan chino $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
   
       }else if(opcion1==" Libra esterlina" && opcion2==" Dólar australiano"){
       var resultado1=(op1*1.81)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Libra esterlina $"+x+"</td><td>"+ "Dólar australiano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Libra esterlina" && opcion2==" Real brasileño"){
       var resultado1=(op1*7.07)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Libra esterlina $"+x+"</td><td>"+ "Real brasileño $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
   
       }else if(opcion1==" Libra esterlina" && opcion2==" Rublo ruso"){
       var resultado1=(op1*102.14)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Libra esterlina $"+x+"</td><td>"+ "Rublo ruso $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Libra esterlina" && opcion2==" Peso mexicano"){
       var resultado1=(op1*26.97)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Libra esterlina $"+x+"</td><td>"+ "Peso mexicano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }
   
       //Franco suizo
       else if(opcion1=="གྷ Franco suizo" && opcion2=="གྷ Franco suizo"){
       var resultado=alert("La moneda de entrada es la misma que la de salida.");
       document.getElementById("txtmoneda2").value="Seleccione una opción";
       }else if(opcion1=="གྷ Franco suizo" && opcion2=="US Dólar"){
       var resultado1=(op1*1.11)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
   
          //agregando elemento a la tabla
          var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Franco suizo $"+x+"</td><td>"+ "US Dólar $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="གྷ Franco suizo" && opcion2==" Libra esterlina"){
       var resultado1=(op1*0.84)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
          //agregando elemento a la tabla
          var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Franco suizo $"+x+"</td><td>"+ "Libra esterlina $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="གྷ Franco suizo" && opcion2=="Euro"){
       var resultado1=(op1*0.93)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
            //agregando elemento a la tabla
            var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Franco suizo $"+x+"</td><td>"+ "Euro $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="གྷ Franco suizo" && opcion2==" Yen japonés"){
       var resultado1=(op1*114.85)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Franco suizo $"+x+"</td><td>"+ "Yen japonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="གྷ Franco suizo" && opcion2==" Dólar hongkonés"){
       var resultado1=(op1*8.62)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Franco suizo $"+x+"</td><td>"+ "Dólar hongkonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="གྷ Franco suizo" && opcion2==" Dólar canadiense"){
       var resultado1=(op1*1.45)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
          //agregando elemento a la tabla
          var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Franco suizo $"+x+"</td><td>"+ "Dólar canadiense $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="གྷ Franco suizo" && opcion2==" Yuan chino"){
       var resultado1=(op1*7.36)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Franco suizo $"+x+"</td><td>"+ "Yuan chino $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="གྷ Franco suizo" && opcion2==" Dólar australiano"){
       var resultado1=(op1*1.53)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Franco suizo $"+x+"</td><td>"+ "Dólar australiano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="གྷ Franco suizo" && opcion2==" Real brasileño"){
       var resultado1=(op1*5.96)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
       //agregando elemento a la tabla
       var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Franco suizo $"+x+"</td><td>"+ "Real brasileño $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
   
       }else if(opcion1=="གྷ Franco suizo" && opcion2==" Rublo ruso"){
       var resultado1=(op1*86.13)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
       //agregando elemento a la tabla
       var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Franco suizo $"+x+"</td><td>"+ "Rublo ruso $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1=="གྷ Franco suizo" && opcion2==" Peso mexicano"){
       var resultado1=(op1*22.74)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Franco suizo $"+x+"</td><td>"+ "Peso mexicano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }
   
       //Yen japones
       else if(opcion1==" Yen japonés" && opcion2==" Yen japonés"){
       var resultado=alert("La moneda de entrada es la misma que la de salida.");
       document.getElementById("txtmoneda2").value="Seleccione una opción";
       }else if(opcion1==" Yen japonés" && opcion2=="US Dólar"){
       var resultado1=(op1*0.0097)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yen japonés $"+x+"</td><td>"+ "US Dólar $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yen japonés" && opcion2==" Libra esterlina"){
       var resultado1=(op1*0.0073)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yen japonés $"+x+"</td><td>"+ "Libra esterlina $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yen japonés" && opcion2=="Euro"){
       var resultado1=(op1*0.0081)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yen japonés $"+x+"</td><td>"+ "Euro $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yen japonés" && opcion2=="གྷ Franco suizo"){
       var resultado1=(op1*0.0087)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yen japonés $"+x+"</td><td>"+ "Franco suizo $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yen japonés" && opcion2==" Dólar hongkonés"){
       var resultado1=(op1*0.075)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yen japonés $"+x+"</td><td>"+ "Dólar hongkonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yen japonés" && opcion2==" Dólar canadiense"){
       var resultado1=(op1*0.013)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yen japonés $"+x+"</td><td>"+ "Dólar canadiense $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yen japonés" && opcion2==" Yuan chino"){
       var resultado1=(op1*0.064)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
          //agregando elemento a la tabla
          var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yen japonés $"+x+"</td><td>"+ "Yuan chino $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yen japonés" && opcion2==" Dólar australiano"){
       var resultado1=(op1*0.013)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
          //agregando elemento a la tabla
          var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yen japonés $"+x+"</td><td>"+ "Dólar australiano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yen japonés" && opcion2==" Real brasileño"){
       var resultado1=(op1*0.052)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
          //agregando elemento a la tabla
          var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yen japonés $"+x+"</td><td>"+ "Real brasileño $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yen japonés" && opcion2==" Rublo ruso"){
       var resultado1=(op1*0.75)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yen japonés $"+x+"</td><td>"+ "Rublo ruso $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yen japonés" && opcion2==" Peso mexicano"){
       var resultado1=(op1*0.20)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yen japonés $"+x+"</td><td>"+ "Peso mexicano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       } 
   
       //Dólar hongkonés
       else if(opcion1==" Dólar hongkonés" && opcion2==" Dólar hongkonés"){
       var resultado=alert("La moneda de entrada es la misma que la de salida.");
       document.getElementById("txtmoneda2").value="Seleccione una opción";
       }else if(opcion1==" Dólar hongkonés" && opcion2=="US Dólar"){
       var resultado1=(op1*0.13)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
          //agregando elemento a la tabla
          var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar hongkonés $"+x+"</td><td>"+ "US Dólar $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar hongkonés" && opcion2==" Libra esterlina"){
       var resultado1=(op1*0.098)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
          //agregando elemento a la tabla
          var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar hongkonés $"+x+"</td><td>"+ "Libra esterlina $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar hongkonés" && opcion2=="Euro"){
       var resultado1=(op1*0.11)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
          //agregando elemento a la tabla
          var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar hongkonés $"+x+"</td><td>"+ "Euro $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar hongkonés" && opcion2=="གྷ Franco suizo"){
       var resultado1=(op1*0.12)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
             //agregando elemento a la tabla
             var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar hongkonés $"+x+"</td><td>"+ "Franco suizo $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar hongkonés" && opcion2==" Yen japonés"){
       var resultado1=(op1*13.33)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar hongkonés $"+x+"</td><td>"+ "Yen japonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar hongkonés" && opcion2==" Dólar canadiense"){
       var resultado1=(op1*0.17)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar hongkonés $"+x+"</td><td>"+ "Dólar canadiense $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar hongkonés" && opcion2==" Yuan chino"){
       var resultado1=(op1*0.85)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar hongkonés $"+x+"</td><td>"+ "Yuan chino $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar hongkonés" && opcion2==" Dólar australiano"){
       var resultado1=(op1*0.18)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
          //agregando elemento a la tabla
          var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar hongkonés $"+x+"</td><td>"+ "Dólar australiano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar hongkonés" && opcion2==" Real brasileño"){
       var resultado1=(op1*0.69)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar hongkonés $"+x+"</td><td>"+ "Real brasileño $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar hongkonés" && opcion2==" Rublo ruso"){
       var resultado1=(op1*9.99)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar hongkonés $"+x+"</td><td>"+ "Rublo ruso $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
   
       }else if(opcion1==" Dólar hongkonés" && opcion2==" Peso mexicano"){
       var resultado1=(op1*2.64)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar hongkonés $"+x+"</td><td>"+ "Peso mexicano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       } 
   
       //Dólar canadiense
       else if(opcion1==" Dólar canadiense" && opcion2==" Dólar canadiense"){
       var resultado=alert("La moneda de entrada es la misma que la de salida.");
       document.getElementById("txtmoneda2").value="Seleccione una opción";
       }else if(opcion1==" Dólar canadiense" && opcion2=="US Dólar"){
       var resultado1=(op1*0.77)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
       
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar canadiense $"+x+"</td><td>"+ "US Dólar $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar canadiense" && opcion2==" Libra esterlina"){
       var resultado1=(op1*0.58)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar canadiense $"+x+"</td><td>"+ "Libra esterlina $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar canadiense" && opcion2=="Euro"){
       var resultado1=(op1*0.65)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
            //agregando elemento a la tabla
            var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar canadiense $"+x+"</td><td>"+ "Euro $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar canadiense" && opcion2=="གྷ Franco suizo"){
       var resultado1=(op1*0.69)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar canadiense $"+x+"</td><td>"+ "Franco suizo $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar canadiense" && opcion2==" Yen japonés"){
       var resultado1=(op1*79.43)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar canadiense $"+x+"</td><td>"+ "Yen japonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar canadiense" && opcion2==" Dólar hongkonés"){
       var resultado1=(op1*5.96)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar canadiense $"+x+"</td><td>"+ "Dólar hongkonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar canadiense" && opcion2==" Yuan chino"){
       var resultado1=(op1*5.08)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar canadiense $"+x+"</td><td>"+ "Yuan chino $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar canadiense" && opcion2==" Dólar australiano"){
       var resultado1=(op1*1.06)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar canadiense $"+x+"</td><td>"+ "Dólar australiano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar canadiense" && opcion2==" Real brasileño"){
       var resultado1=(op1*4.12)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar canadiense $"+x+"</td><td>"+ "Real brasileño $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar canadiense" && opcion2==" Rublo ruso"){
       var resultado1=(op1*59.54)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar canadiense $"+x+"</td><td>"+ "Rublo ruso $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar canadiense" && opcion2==" Peso mexicano"){
       var resultado1=(op1*15.72)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar canadiense $"+x+"</td><td>"+ "Peso mexicano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       } 
   
       //Yuan chino
       else if(opcion1==" Yuan chino" && opcion2==" Yuan chino"){
       var resultado=alert("La moneda de entrada es la misma que la de salida.");
       document.getElementById("txtmoneda2").value="Seleccione una opción";
       }else if(opcion1==" Yuan chino" && opcion2=="US Dólar"){
       var resultado1=(op1*0.15)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
             //agregando elemento a la tabla
             var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yuan chino $"+x+"</td><td>"+ "US Dólar $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yuan chino" && opcion2==" Libra esterlina"){
       var resultado1=(op1*0.11)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
              //agregando elemento a la tabla
              var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yuan chino $"+x+"</td><td>"+ "Libra esterlina $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yuan chino" && opcion2=="Euro"){
       var resultado1=(op1*0.13)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
              //agregando elemento a la tabla
              var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yuan chino $"+x+"</td><td>"+ "Euro $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yuan chino" && opcion2=="གྷ Franco suizo"){
       var resultado1=(op1*0.14)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
              //agregando elemento a la tabla
              var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yuan chino $"+x+"</td><td>"+ "Franco suizo $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yuan chino" && opcion2==" Yen japonés"){
       var resultado1=(op1*15.64)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
              //agregando elemento a la tabla
              var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yuan chino $"+x+"</td><td>"+ "Yen japonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yuan chino" && opcion2==" Dólar hongkonés"){
       var resultado1=(op1*1.17)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
              //agregando elemento a la tabla
              var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yuan chino $"+x+"</td><td>"+ "Dólar hongkonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yuan chino" && opcion2==" Dólar canadiense"){
       var resultado1=(op1*0.20)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
              //agregando elemento a la tabla
              var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yuan chino $"+x+"</td><td>"+ "Dólar canadiense $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yuan chino" && opcion2==" Dólar australiano"){
       var resultado1=(op1*0.21)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
              //agregando elemento a la tabla
              var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yuan chino $"+x+"</td><td>"+ "Dólar australiano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yuan chino" && opcion2==" Real brasileño"){
       var resultado1=(op1*0.81)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
              //agregando elemento a la tabla
              var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yuan chino $"+x+"</td><td>"+ "Real brasileño $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yuan chino" && opcion2==" Rublo ruso"){
       var resultado1=(op1*11.72)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
              //agregando elemento a la tabla
              var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yuan chino $"+x+"</td><td>"+ "Rublo ruso $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Yuan chino" && opcion2==" Peso mexicano"){
       var resultado1=(op1*3.09)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
              //agregando elemento a la tabla
              var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Yuan chino $"+x+"</td><td>"+ "Peso mexicano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       } 
   
       //Dólar australiano
       else if(opcion1==" Dólar australiano" && opcion2==" Dólar australiano"){
       var resultado=alert("La moneda de entrada es la misma que la de salida.");
       document.getElementById("txtmoneda2").value="Seleccione una opción";
       }else if(opcion1==" Dólar australiano" && opcion2=="US Dólar"){
       var resultado1=(op1*0.73)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
              //agregando elemento a la tabla
              var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar australiano $"+x+"</td><td>"+ "US Dólar $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar australiano" && opcion2==" Libra esterlina"){
       var resultado1=(op1*0.55)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
             //agregando elemento a la tabla
             var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar australiano $"+x+"</td><td>"+ "Libra esterlina $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar australiano" && opcion2=="Euro"){
       var resultado1=(op1*0.61)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar australiano $"+x+"</td><td>"+ "Euro $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar australiano" && opcion2=="གྷ Franco suizo"){
       var resultado1=(op1*0.66)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
             //agregando elemento a la tabla
             var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar australiano $"+x+"</td><td>"+ "Franco suizo $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar australiano" && opcion2==" Yen japonés"){
       var resultado1=(op1*75.31)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
               //agregando elemento a la tabla
               var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar australiano $"+x+"</td><td>"+ "Yen japonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar australiano" && opcion2==" Dólar hongkonés"){
       var resultado1=(op1*5.65)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
             //agregando elemento a la tabla
             var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar australiano $"+x+"</td><td>"+ "Dólar hongkonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar australiano" && opcion2==" Dólar canadiense"){
       var resultado1=(op1*0.95)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
            //agregando elemento a la tabla
            var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar australiano $"+x+"</td><td>"+ "Dólar canadiense $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar australiano" && opcion2==" Yuan chino"){
       var resultado1=(op1*4.82)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
              //agregando elemento a la tabla
              var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar australiano $"+x+"</td><td>"+ "Yuan chino $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar australiano" && opcion2==" Real brasileño"){
       var resultado1=(op1*3.91)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
              //agregando elemento a la tabla
              var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar australiano $"+x+"</td><td>"+ "Real brasileño $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar australiano" && opcion2==" Rublo ruso"){
       var resultado1=(op1*56.45)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar australiano $"+x+"</td><td>"+ "Rublo ruso $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Dólar australiano" && opcion2==" Peso mexicano"){
       var resultado1=(op1*14.90)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
               //agregando elemento a la tabla
               var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Dólar australiano $"+x+"</td><td>"+ "Peso mexicano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       } 
   
       //Real brasileño
       else if(opcion1==" Real brasileño" && opcion2==" Real brasileño"){
       var resultado=alert("La moneda de entrada es la misma que la de salida.");
       document.getElementById("txtmoneda2").value="Seleccione una opción";
       }else if(opcion1==" Real brasileño" && opcion2=="US Dólar"){
       var resultado1=(op1*0.19)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
            //agregando elemento a la tabla
            var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Real brasileño $"+x+"</td><td>"+ "US Dólar $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Real brasileño" && opcion2==" Libra esterlina"){
       var resultado1=(op1*0.14)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
             //agregando elemento a la tabla
             var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Real brasileño $"+x+"</td><td>"+ "Libra esterlina $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Real brasileño" && opcion2=="Euro"){
       var resultado1=(op1*0.16)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
              //agregando elemento a la tabla
              var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Real brasileño $"+x+"</td><td>"+ "Euro $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Real brasileño" && opcion2=="གྷ Franco suizo"){
       var resultado1=(op1*0.17)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
             //agregando elemento a la tabla
             var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Real brasileño $"+x+"</td><td>"+ "Franco suizo $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Real brasileño" && opcion2==" Yen japonés"){
       var resultado1=(op1*19.27)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
           //agregando elemento a la tabla
           var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Real brasileño $"+x+"</td><td>"+ "Yen japonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Real brasileño" && opcion2==" Dólar hongkonés"){
       var resultado1=(op1*1.45)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
             //agregando elemento a la tabla
             var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Real brasileño $"+x+"</td><td>"+ "Dólar hongkonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Real brasileño" && opcion2==" Dólar canadiense"){
       var resultado1=(op1*0.24)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
            //agregando elemento a la tabla
            var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Real brasileño $"+x+"</td><td>"+ "Dólar canadiense $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Real brasileño" && opcion2==" Yuan chino"){
       var resultado1=(op1*1.23)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
            //agregando elemento a la tabla
            var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Real brasileño $"+x+"</td><td>"+ "Yuan chino $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Real brasileño" && opcion2==" Dólar australiano"){
       var resultado1=(op1*0.26)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
            //agregando elemento a la tabla
            var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Real brasileño $"+x+"</td><td>"+ "Dólar australiano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Real brasileño" && opcion2==" Rublo ruso"){
       var resultado1=(op1*14.44)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
            //agregando elemento a la tabla
            var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Real brasileño $"+x+"</td><td>"+ "Rublo ruso $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Real brasileño" && opcion2==" Peso mexicano"){
       var resultado1=(op1*3.81)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
            //agregando elemento a la tabla
            var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Real brasileño $"+x+"</td><td>"+ "Peso mexicano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       } 
   
       //Rublo ruso
       else if(opcion1==" Rublo ruso" && opcion2==" Rublo ruso"){
       var resultado=alert("La moneda de entrada es la misma que la de salida.");
       document.getElementById("txtmoneda2").value="Seleccione una opción";
       }else if(opcion1==" Rublo ruso" && opcion2=="US Dólar"){
       var resultado1=(op1*0.013)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
          //agregando elemento a la tabla
          var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Rublo ruso $"+x+"</td><td>"+ "US Dólar $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Rublo ruso" && opcion2==" Libra esterlina"){
       var resultado1=(op1*0.0098)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Rublo ruso $"+x+"</td><td>"+ "Libra esterlina $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Rublo ruso" && opcion2=="Euro"){
       var resultado1=(op1*0.011)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Rublo ruso $"+x+"</td><td>"+ "Euro $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Rublo ruso" && opcion2=="གྷ Franco suizo"){
       var resultado1=(op1*0.012)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Rublo ruso $"+x+"</td><td>"+ "Franco suizo $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Rublo ruso" && opcion2==" Yen japonés"){
       var resultado1=(op1*1.33)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Rublo ruso $"+x+"</td><td>"+ "Yen japonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Rublo ruso" && opcion2==" Dólar hongkonés"){
       var resultado1=(op1*0.10)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Rublo ruso $"+x+"</td><td>"+ "Dólar hongkonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Rublo ruso" && opcion2==" Dólar canadiense"){
       var resultado1=(op1*0.017)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Rublo ruso $"+x+"</td><td>"+ "Dólar canadiense $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Rublo ruso" && opcion2==" Yuan chino"){
       var resultado1=(op1*0.085)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Rublo ruso $"+x+"</td><td>"+ "Yuan chino $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Rublo ruso" && opcion2==" Dólar australiano"){
       var resultado1=(op1*0.018)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Rublo ruso $"+x+"</td><td>"+ "Dólar australiano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Rublo ruso" && opcion2==" Real brasileño"){
       var resultado1=(op1*0.069)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Rublo ruso $"+x+"</td><td>"+ "Real brasileño $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Rublo ruso" && opcion2==" Peso mexicano"){
       var resultado1=(op1*0.26)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Rublo ruso $"+x+"</td><td>"+ "Peso mexicano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       } 
   
       //Peso mexicano
       else if(opcion1==" Peso mexicano" && opcion2==" Peso mexicano"){
       var resultado=alert("La moneda de entrada es la misma que la de salida.");
       document.getElementById("txtmoneda2").value="Seleccione una opción";
       }else if(opcion1==" Peso mexicano" && opcion2=="US Dólar"){
       var resultado1=(op1*0.049)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
        //agregando elemento a la tabla
        var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Peso mexicano $"+x+"</td><td>"+ "US Dólar $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Peso mexicano" && opcion2==" Libra esterlina"){
       var resultado1=(op1*0.037)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Peso mexicano $"+x+"</td><td>"+ "Libra esterlina $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Peso mexicano" && opcion2=="Euro"){
       var resultado1=(op1*0.041)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Peso mexicano $"+x+"</td><td>"+ "Euro $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Peso mexicano" && opcion2=="གྷ Franco suizo"){
       var resultado1=(op1*0.044)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
         //agregando elemento a la tabla
         var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Peso mexicano $"+x+"</td><td>"+ "Franco suizo $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Peso mexicano" && opcion2==" Yen japonés"){
       var resultado1=(op1*5.06)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
       //agregando elemento a la tabla
       var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Peso mexicano $"+x+"</td><td>"+ "Yen japonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Peso mexicano" && opcion2==" Dólar hongkonés"){
       var resultado1=(op1*0.38)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
       //agregando elemento a la tabla
       var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Peso mexicano $"+x+"</td><td>"+ "Dólar hongkonés $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Peso mexicano" && opcion2==" Dólar canadiense"){
       var resultado1=(op1*0.064)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
       //agregando elemento a la tabla
       var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Peso mexicano $"+x+"</td><td>"+ "Dólar canadiense $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Peso mexicano" && opcion2==" Yuan chino"){
       var resultado1=(op1*0.32)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
       //agregando elemento a la tabla
       var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Peso mexicano $"+x+"</td><td>"+ "Yuan chino $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Peso mexicano" && opcion2==" Dólar australiano"){
       var resultado1=(op1*0.067)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
       //agregando elemento a la tabla
       var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Peso mexicano $"+x+"</td><td>"+ "Dólar australiano $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Peso mexicano" && opcion2==" Real brasileño"){
       var resultado1=(op1*0.26)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
       //agregando elemento a la tabla
       var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Peso mexicano $"+x+"</td><td>"+ "Real brasileño $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
   
       }else if(opcion1==" Peso mexicano" && opcion2==" Rublo ruso"){
       var resultado1=(op1*3.79)/1;
       var resultado=resultado1.toFixed(2);
       document.getElementById("importe2.txt").value=resultado;
   
       //agregando elemento a la tabla
       var x=parseFloat(document.getElementById("importe1.txt").value);
          var y=parseFloat(resultado);
          var fila="<tr><td>"+"Peso mexicano $"+x+"</td><td>"+ "Rublo ruso $"+y +"</td><td>";
       if(x!="" && y!=""){
            var btn = document.createElement("TR");
         btn.innerHTML=fila;
       document.getElementById("lista").appendChild(btn);
       }
       }
       var form = document.getElementById('formulario').elements;
   
   var op1 = document.getElementById("importe1.txt");
   var op2 = document.getElementById("importe2.txt");
   var opcion1=document.getElementById("txtmoneda1");
   var opcion2=document.getElementById("txtmoneda2");
   
   var personObject1 = new Object();
   personObject1.txtmoneda1 = opcion1.value;
   personObject1.txtmoneda2 = opcion2.value;
   personObject1.op1= op1.value;
   personObject1.op2= op2.value;
   myArrayObject.push(personObject1);
   console.log("Guardando arreglo de datos en sesionStorage.");
   sessionStorage.setItem("convert", JSON.stringify(myArrayObject));
       } 
