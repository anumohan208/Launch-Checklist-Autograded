// Write your JavaScript code here!

window.addEventListener("load", function() {

    let listedPlanets;
    // Set listedPlanetsResponse equal to the value returned by calling myFetch()
    let listedPlanetsResponse=myFetch();
    listedPlanetsResponse.then(function (result) {
        listedPlanets = result;
       // console.log(listedPlanets);
    }).then(function () {
       // console.log(listedPlanets);
        // Below this comment call the appropriate helper functions to pick a planet fom the list of planets and add that information to your destination.
        const planetSelected = pickPlanet(listedPlanets); 
        addDestinationInfo(this.document,planetSelected.name,planetSelected.diameter,planetSelected.star,planetSelected.distance,planetSelected.moons,planetSelected.image);

    })

    const submitButton = document.getElementById("formSubmit");
    submitButton.addEventListener('click', event => {
        
        event.preventDefault();
        const pilot = document.getElementById("pilotName").value;
        const copilot = document.getElementsByName("copilotName")[0].value;
        const fuelLevel = document.getElementsByName("fuelLevel")[0].value;
        const cargoMass = document.getElementsByName("cargoMass")[0].value;

        list = document.getElementById("faultyItems");

        formSubmission(this.document,list,pilot,copilot,fuelLevel,cargoMass);
        
    });
    
 });