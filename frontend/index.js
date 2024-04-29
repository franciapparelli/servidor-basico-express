console.log("hello world!")

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
        <button onclick="deleteCar(${result[x].id_auto})">Eliminar Auto</button>
        <br>`;
    }

    for(let i = 0; i < result.length; i++){
        drawTable(i)
    }

}

async function addNewCar(){
    const auto = {
        marca: document.getElementById("marca").value,
        modelo: document.getElementById("modelo").value,
        cant_pasajeros: document.getElementById("cantPasajeros").value,
        kit_seguridad: document.getElementById("kitSeguridad").value
    }
    console.log(auto)
    const response = await fetch("http://localhost:3000/autos", {
        method: "POST",
        headers: {
            Accept: 'application/json',
            "Content-Type": "application/json"
        },
        body: JSON.stringify(auto)
    })

    let res = await response.json()
    console.log(res)
    
}

async function deleteCar(id){
    const response = await fetch("http://localhost:3000/autos", {
        method: "DELETE",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({id_auto: id})
    })

    let res = await response.json()
    console.log(res)
    location.reload()
}