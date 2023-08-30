 const measure = prompt("Set a number in meters:")

 const unitMeasurement = prompt(
    "Unities: \n(a) Milimeters (mm) \n(b) Centimeters (cm) \n(c) Decimeters (dm) \n(d) Decameter (dam) \n(e) Hectometer (hm) \n(f) Kilometers (km)")

 var number

if (unitMeasurement == "a" || unitMeasurement == "b" || unitMeasurement == "c" || unitMeasurement == "d" || unitMeasurement == "e" || unitMeasurement == "f") { 
 switch (unitMeasurement){
    case "a":
        number = (measure*1000 + " (mm)")
        alert(measure*1000 + " mm")
        break
    case "b":
        number = (measure*100 + " (cm)")
        alert(measure*100 + " cm")
        break
    case "c":
        number = (measure*10 + " (dm)")
        alert(measure*10 + " dm")
        break
    case "d":
        number = (measure/10 + " (dam)")
        alert(measure/10 + " dam")
        break
    case "e":
        number = (measure/100 + " (hm)")
        alert(measure/100 + " hm")
        break
    case "f":
        number = (measure/1000 + " (km)")
        alert(measure/1000 + " km")
        break
    default:
        alert("Finish...")
 } 
 
 document.getElementById("text").innerHTML= "Number: " + measure + " (m) -----> " + number 

} else { 
    alert("Invalid option!")
} 
 