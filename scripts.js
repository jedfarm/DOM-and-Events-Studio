// Write your JavaScript code here.
// Remember to pay attention to page loading!

//let btTakeOff;
window.addEventListener("load", function(){
    alert("window loaded");

    let btTakeOff = this.document.getElementById("takeoff");
    let btLand = this.document.getElementById("landing");
    let btAbortMission = this.document.getElementById("missionAbort");
    let flightStatus = this.document.getElementById("flightStatus");
    let shuttleBackground = this.document.getElementById("shuttleBackground");
    let shuttleHeight = this.document.getElementById("spaceShuttleHeight");

    btTakeOff.addEventListener("click", function(){
        let result = window.confirm("Confirm that the shuttle is ready to takeoff");
        if (result) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = "10000";
        }
    });

    btLand.addEventListener("click", function(){
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
    });

    btAbortMission.addEventListener("click", function(){
        let abortMissionAns = window.confirm("Confirm that you want to abort the mission.");
        if (abortMissionAns){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
        }
    });


});    





