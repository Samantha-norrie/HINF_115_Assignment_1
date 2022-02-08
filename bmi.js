/*
* A helper function that determines whether valid inputs were used or not.
* If one or more inputs are valid, the function will trigger an alert that lists
* the incorrect inputs and will return false.
*/
function areInputsValid(age, weight, height, race) {

    var alertMessage = "";

    // Check if each input is valid or not
    if (isNaN(age) || age <= 19) {

        // If an actual number was entered, display it in the alert
        if (!isNaN(age)){
            alertMessage += age + " is an invalid age. ";
        }
        alertMessage += "An age 20 or greater must be used.\n"; 
    } 

    if (isNaN(weight) || weight <= 0) {
        if (!isNaN(weight)) {
            alertMessage += weight + " is an invalid weight. ";
        }
        alertMessage += "Only positive numbers can be used for weight.\n";
    }

    if (isNaN(height) || height <= 0) {
        if (!isNaN(height)) {
            alertMessage += height + " is an invalid height. ";
        }
        alertMessage += "Only positive numbers can be used for height.\n";
    }

    if (race == "") {
        alertMessage += "Please select an input for race."
    }

    // If the alertMessage String variable is not empty, at least one input is invalid. Display alert.
    if (alertMessage) {
        alert(alertMessage);
        return false;
    }

    return true;

}

function calcBMI() {
	var age = parseFloat(document.getElementById("patient-age").value);
	var weight = parseFloat(document.getElementById("patient-weight").value);
	var height = parseFloat(document.getElementById("patient-height").value);
	var race = "";
	var races = document.getElementsByName("patient-race");

	for (i = 0; i < races.length; i++) {
		if (races[i].checked) {
			race = races[i].value;
		}

	}

    // If all inputs are valid, begin calculating BMI
    if (areInputsValid(age, weight, height, race)) {
        var bmi = weight / (height ** 2);
        if (race == "other") {
			if (bmi < 18.5) {
				document.getElementById("statement").innerText = "Underweight";
			} else if (bmi > 18.5 && bmi < 24.9) {
				document.getElementById("statement").innerText = "Normal";
			} else if (bmi > 24.9 && bmi < 29.9) {
				document.getElementById("statement").innerText = "Overweight";
			} else if (bmi > 29.9) {
				document.getElementById("statement").innerText = "Obese";
			}
		} else {
			if (bmi < 22) {
				document.getElementById("statement").innerText = "Underweight";
			} else if (bmi > 22 && bmi < 27.9) {
				document.getElementById("statement").innerText = "Normal";
			} else if (bmi > 27.9 && bmi < 32.9) {
				document.getElementById("statement").innerText = "Overweight";
			} else if (bmi > 32.9) {
				document.getElementById("statement").innerText = "Obese";
			}
		}
        document.getElementById("result").innerText = bmi.toFixed(2);
    }
};
