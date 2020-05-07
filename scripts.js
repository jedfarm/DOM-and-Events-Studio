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

    let imgObj = document.getElementById('rocket');
    imgObj.style.position= 'absolute'; 
    imgObj.style.left = '0px'; 
    imgObj.style.bottom = '0px';

    btTakeOff.addEventListener("click", function(){
        let result = window.confirm("Confirm that the shuttle is ready to takeoff");
        if (result) {
            flightStatus.innerHTML = "Shuttle in flight";
            shuttleBackground.style.backgroundColor = "blue";
            shuttleHeight.innerHTML = "10000";
            imgObj.style.bottom = 10 +"px";
        }
    });

    btLand.addEventListener("click", function(){
        alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerHTML = "The shuttle has landed.";
        shuttleBackground.style.backgroundColor = "green";
        shuttleHeight.innerHTML = "0";
        imgObj.style.bottom = 0 +"px";
    });

    btAbortMission.addEventListener("click", function(){
        let abortMissionAns = window.confirm("Confirm that you want to abort the mission.");
        if (abortMissionAns){
            flightStatus.innerHTML = "Mission aborted.";
            shuttleBackground.style.backgroundColor = "green";
            shuttleHeight.innerHTML = "0";
            imgObj.style.bottom = 0 +"px";
        }
    });


    

    let right = this.document.getElementById('right');
    right.addEventListener("click", function () {
        movement = parseInt(imgObj.style.left) + 10 + 'px';
        imgObj.style.left = movement;
        //flightStatus.innerHTML = "Move to the Right!";
    });

    let left = this.document.getElementById('left');
    left.addEventListener("click", function () {
        movement = parseInt(imgObj.style.left) - 10 +'px';
        imgObj.style.left = movement;
    });

    let down = this.document.getElementById('down');
    down.addEventListener("click", function () {
        movement = parseInt(imgObj.style.bottom) - 10 + 'px';
        imgObj.style.bottom = movement;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) - 10000;
    });
    let up = this.document.getElementById('up');
    up.addEventListener("click", function () {
        movement = parseInt(imgObj.style.bottom) + 10 + 'px';
        imgObj.style.bottom = movement;
        shuttleHeight.innerHTML = parseInt(shuttleHeight.innerHTML) + 10000;
    });

});    





