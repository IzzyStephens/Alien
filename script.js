//Display the current date and time on the Communication Form //

function updateShipClock() {
    const now = new Date();
    const date = now.toLocaleDateString();
    const time = now.toLocaleTimeString();
    document.getElementById("ship-date").textContent = date;
    document.getElementById("ship-time").textContent = time;
}

updateShipClock();
setInterval(updateShipClock, 1000);

//Message after Communication Form is submitted//

const crewForm = document.getElementById("crew-form");
crewForm.addEventListener("submit", function(event) {
    event.preventDefault();
    const crewName = document.getElementById("crew-name").value.trim();
    const response = document.getElementById("transmission-response");
    if (crewName === "") {
        response.textContent = "ERROR: CREW IDENTIFICATION REQUIRED.";
    } else {
        response.textContent =
        "TRANSMISSION ACCEPTED. THANK YOU, " + crewName.toUpperCase() +
        ". WEYLAND-YUTANI HAS RECIVED YOUR MESSAGE." +
        "THANK YOU FOR YOUR COOPERATION.";
    }
});