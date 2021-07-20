// Write your JavaScript code here.
// Remember to pay attention to page loading!

let x = 0;
let y = 0;

window.addEventListener("load", function() {
    
    let takeoffButton = this.document.getElementById("takeoff");
    let flightStatus = this.document.getElementById("flightStatus");
    let shuttleFlightScreen = this.document.getElementById("shuttleBackground");
    let landButton = this.document.getElementById("landing");
    let abortButton = this.document.getElementById("missionAbort");

    takeoffButton.addEventListener('click', event => {
       let confirmation = window.confirm("Confirm that the shuttle is ready for takeoff!");

       if (confirmation === true) {
        flightStatus.innerHTML = 'Shuttle in flight.';
        shuttleFlightScreen.setAttribute('style', 'background-color: Blue;'); // can use style. instead of .setattribute
        document.getElementById("spaceShuttleHeight").innerText = "10000";
        }
    });

    landButton.addEventListener('click', function() {
        window.alert("The shuttle is landing. Landing gear engaged.");
        flightStatus.innerText = 'The shuttle has landed.';
        shuttleFlightScreen.style.backgroundColor = "Green";
        document.getElementById('spaceShuttleHeight').innerText = '0';
        rocket.setAttribute("style", "top:0 px;  left:0 px;  position: relative;");
    });

    abortButton.addEventListener('click', function() {
        let abortConfirmation = window.confirm("Confirm that you want to abort the mission.");

        if (abortConfirmation === true) {
            flightStatus.innerText = 'Mission aborted.';
            shuttleFlightScreen.style.backgroundColor = "Green";
            document.getElementById('spaceShuttleHeight').innerText = '0';
            rocket.setAttribute("style", "top:0 px;  left:0 px;  position: relative;");
        }
    });

    // up
    this.document.getElementById('up').addEventListener('click', event => {
        if (y - 10 < 0) return;
        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) + 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;
        let rocket = this.document.getElementById('rocket');
        y = y - 10;
        rocket.setAttribute("style", "top: " + y + "px; left: " + x +"px; position: relative;");
    });
    // down
    this.document.getElementById('down').addEventListener('click', event => {
        let container = this.document.getElementById('shuttleBackground');
        let rocket = this.document.getElementById('rocket');
        if (y + 10 > container.offsetHeight - rocket.height) return;
        let myHeight = document.getElementById('spaceShuttleHeight').innerText;
        myHeight = Number(myHeight) - 10000;
        document.getElementById('spaceShuttleHeight').innerText = myHeight;
        y = y + 10;
        rocket.setAttribute("style", "top: " + y + "px; left: " + x +"px; position: relative;");
    });

    // left
    this.document.getElementById('left').addEventListener('click', event => {
        let container = this.document.getElementById('shuttleBackground');
        if (x - 10 < (-1 * (container.offsetleft) / 2) )return;
        let rocket = this.document.getElementById('rocket');
        x = x - 10;
        rocket.setAttribute("style", "top: " + y + "px; left: " + x +"px; position: relative;");
    });

    // right
    this.document.getElementById('right').addEventListener('click', event => {
        let container = document.getElementById('shuttleBackground');
        if (x + 10 > (container.offsetleft) / 2) return;
        let rocket = this.document.getElementById('rocket');
        x = x + 10;
        rocket.setAttribute("style", "top: " + y + "px; left: " + x +"px; position: relative;");
    });

 });