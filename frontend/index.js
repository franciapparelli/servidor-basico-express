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
        document.getElementById("tables").innerHTML += `
        <table>
            <tr>
                <th>Categoría</th>
                <th>Valor</th>
            </tr>
            <tr>
                <td>Id del Auto:</td>
                <td>${result[x].id_auto}</td>
            </tr>
            <tr>
                <td>Marca:</td>
                <td>${result[x].marca}</td>
            </tr>
            <tr>
                <td>Modelo:</td>
                <td>${result[x].modelo}</td>
            </tr>
            <tr>
                <td>Pasajeros:</td>
                <td>${result[x].cant_pasajeros}</td>
            </tr>
            <tr>
                <td>Kit de Seguridad:</td>
                <td>${result[x].kit_seguridad}</td>
            </tr>
        </table>
        <br>`;
    }

    for(let i = 0; i < result.length; i++){
        drawTable(i)
    }

    // document.getElementById("cell00").innerHTML = result[0].id
}

async function addNewAuto(){
    auto = {
        marca: document.getElementById("marca").value,
        modelo: document.getElementById("modelo").value,
        cant_pasajeros: document.getElementById("cantPasajeros").value,
        kit_seguridad: document.getElementById("kitSeguridad").value
    }
    
    const response = await fetch("http://localhost:3000/autos", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(auto)
    })

    let res = await response.json()
    console.log(res)
    
}