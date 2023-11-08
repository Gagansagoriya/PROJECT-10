{/* <form id="tempCalculator" onsubmit="calculateTemp(); return false"> */}
const calculateTemp = () =>{
    const numberTemp = document.getElementById('temp').value;
    // console.log(numberTemp);
    const tempSelect = document.getElementById('temp-difference');
     const valueTemp = tempSelect.options[tempSelect.selectedIndex].value;
    //  console.log(valueTemp);

    const celciusToFeh = (celcius) =>{
        let fahrenheit = Math.round((celcius * 9 / 5) + 32);
        return fahrenheit;

    }
    const kelvinToCel = (kelvin) =>{
        let celcius = Math.round(kelvin - 273.15);
        return celcius;
        // C = K - 273.15
    }
    const fehToCel = (fahrenheit) =>{
        let celcius = Math.round((fahrenheit -32) * 5/9);
        return celcius;
    }
    let result;
    if(valueTemp == 'celcius'){
        result = celciusToFeh(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Fahrenheit`
    }else if(valueTemp == 'kelvin') {       
        result = kelvinToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Celcius` 
    }else{
        result = fehToCel(numberTemp);
        document.getElementById('resultContainer').innerHTML = `= ${result} °Celcius`  
    }
    

}