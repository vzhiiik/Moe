
async function addObservation() {
    document.getElementById("addButton").style.display = "block";

    let response = await fetch("/observation", {
        method: "POST",
        body: JSON.stringify({
            date: document.getElementById("addFormDate").value,
            specie: document.getElementById("addFormSpecie").value,
            location: document.getElementById("addFormLocation").value,
            notes: document.getElementById("addFormNotes").value,
        }),
        headers: {
            "Content-Type": "application/json"
        }

    });
    if (response.status === 200) {
        let id = await response.json();
        console.log(`Observation with id = ${id} added`);

    } else {
        console.log("Unexpected error", response);
    }
}

async function getAllObservations() {
    //document.getElementById("getAllButton").style.display = "block";
    let response = await fetch("/observation", { method: "GET" });

    if (response.status === 200) {
        let allSpecie = await response.json();

        let html = `
        <tr>
        <th>Date</<th>
        <th>Specie</<th>
        <th>Location</<th>
        <th>Notes</<th>
        </tr>`
        for (let observation of allSpecie) {
            html += `
            <tr>
            <td>${observation.date}</td>
            <td>${observation.specie}</td>
            <td>${observation.location}</td>
            <td>${observation.notes}</td>
        </tr>`

        }
        document.getElementById("observationsFeed").innerHTML = html;

    } else {
        console.log("Unexpected error", response);
    }


}

async function recreateDatabase() {
    document.getElementById("recreateButton").style.display = "none";
    document.body.style.backgroundColor = "blue";

    let response = await fetch("/observation/recreate", {
        method: "POST"
    });

    if (response.status === 200) {
        document.getElementById("recreateButton").style.display = "block";
        document.body.style.backgroundColor = "green";

    } else {
        document.getElementById("recreateButton").style.display = "block";
        document.body.style.backgroundColor = "red";

    }

}
