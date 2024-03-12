// Write your helper functions here!

require('cross-fetch/polyfill');

function addDestinationInfo(document, name, diameter, star, distance, moons, imageUrl) {
    // Here is the HTML formatting for our mission target div.
    /*
                 <h2>Mission Destination</h2>
                 <ol>
                     <li>Name: </li>
                     <li>Diameter: </li>
                     <li>Star: ${star}</li>
                     <li>Distance from Earth: </li>
                     <li>Number of Moons: </li>
                 </ol>
                 <img src="">
    */
    const missionTarget = document.getElementById("missionTarget");
    missionTarget.innerHTML = `
                     <h2>Mission Destination</h2>
                     <ol>
                         <li>Name: ${name}</li>
                         <li>Diameter: ${diameter}</li>
                         <li>Star: ${star}</li>
                         <li>Distance from Earth: ${distance}</li>
                         <li>Number of Moons: ${moons}</li>
                     </ol>
                     <img src="${imageUrl}">
                 `;
 }
 
 function validateInput(testInput) {
   
    if (testInput === "") {
        return 'Empty';
    } else if (isNaN(testInput)) {
        return 'Not a Number';
    } else {
        return 'Is a Number';
    }
 }
 
 function formSubmission(document,list,pilot, copilot, fuelLevel, cargoLevel) {
 
    //validation for the fields
    if(validateInput(pilot)==='Empty' || validateInput(copilot)==='Empty' || validateInput(fuelLevel)==='Empty'|| validateInput(cargoLevel)==='Empty'){
    alert("All Fields are required!");
    return;
   }

   if(validateInput(pilot)==='Is a Number'){
    alert('Pilot Name should be a valid string');
    return;
   }

   if(validateInput(copilot)==='Is a Number'){
    alert('Copilot name should be a valid string');
    return;
   }
  
   if(validateInput(fuelLevel)==='Not a Number'){
    alert("FuelLevel should be a valid number");
    return;
   }

   if(validateInput(cargoLevel)==='Not a Number'){
    alert("CargoLevel should be a valid number!");
    return;
   } 
 
   //Update Pilot and Copilot status
   document.getElementById("pilotStatus").textContent = `Pilot ${pilot} is ready for launch`;
   document.getElementById("copilotStatus").textContent = `Co-pilot ${copilot} is ready for launch`;
  
   // Check fuel level
   if (fuelLevel < 10000 && cargoLevel < 10000) {
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
    document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
    document.getElementById("launchStatus").style.color = "red";
    return;
    }
    
    // Check cargo mass
    if (cargoLevel > 10000 && fuelLevel >= 10000) {
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
        document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
        return;
    }

    if(fuelLevel <10000 && cargoLevel >=10000){
        document.getElementById("faultyItems").style.visibility = "visible";
        document.getElementById("fuelStatus").textContent = "Fuel level too low for launch";
        document.getElementById("cargoStatus").textContent = "Cargo mass too heavy for launch";
        document.getElementById("launchStatus").textContent = "Shuttle Not Ready for Launch";
        document.getElementById("launchStatus").style.color = "red";
        return; 
    }

    // Update Launch status
    if(fuelLevel >=10000 && cargoLevel <=10000){
    document.getElementById("faultyItems").style.visibility = "visible";
    document.getElementById("fuelStatus").textContent = "Fuel level high enough for launch";
    document.getElementById("cargoStatus").textContent = "Cargo mass low enough for launch";
    document.getElementById("launchStatus").textContent = "Shuttle is Ready for Launch";
    document.getElementById("launchStatus").style.color = "green";
    }

 }
 
 async function myFetch() {
     let planetsReturned;
 
     planetsReturned = await fetch("https://handlers.education.launchcode.org/static/planets.json").then( function(response) {
       return response.json()
         });
 
     return planetsReturned;
 }
 
 function pickPlanet(planets) {
    return planets[Math.floor(Math.random() * planets.length)];
 }
 
 module.exports.addDestinationInfo = addDestinationInfo;
 module.exports.validateInput = validateInput;
 module.exports.formSubmission = formSubmission;
 module.exports.pickPlanet = pickPlanet; 
 module.exports.myFetch = myFetch;