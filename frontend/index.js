async function getAllFromAutos() {
    const response = await fetch("http://localhost:3000/autos", {
        method: "GET",
        headers: {
            "Content-Type": "application/json"
        }
    })
    
    const result = await response.json()
    console.log(result)

    function drawTable(x) {
        document.getElementById("table").innerHTML += `        
            <div id="tableID${result[x].id}">
                <h5>Nota Nº: ${id}</h5>
                <h3 id="noteTitle${id}">${title}</h4>
                <p id="noteContent${id}">${content}</p>
                <br>
                <h5 id="noteCategory${id}">${category}</h5>
            </div>
            <br>`;
    }

    // document.getElementById("cell00").innerHTML = result[0].id
}

getAllFromAutos()