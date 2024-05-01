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
        const car = result[x];
        document.getElementById("tables").innerHTML += `
        <table id="table-${car.id_auto}">
        <tr>
            <th>Categoría</th>
            <th>Valor Actual</th>
            <th>Nuevo Valor</th>
        </tr>
        <tr>
            <td>Id del Auto:</td>
            <td>${car.id_auto}</td>
            <td></td>
        </tr>
        <tr>
            <td>Marca:</td>
            <td>${car.marca}</td>
            <td><input type="text" id="marca-${car.id_auto}" value="${car.marca}"></td>
        </tr>
        <tr>
            <td>Modelo:</td>
            <td>${car.modelo}</td>
            <td><input type="text" id="modelo-${car.id_auto}" value="${car.modelo}"></td>
        </tr>
        <tr>
            <td>Pasajeros:</td>
            <td>${car.cant_pasajeros}</td>
            <td><input type="text" id="cantPasajeros-${car.id_auto}" value="${car.cant_pasajeros}"></td>
        </tr>
        <tr>
            <td>Kit de Seguridad:</td>
            <td>${car.kit_seguridad}</td>
            <td><input type="text" id="kitSeguridad-${car.id_auto}" value="${car.kit_seguridad}"></td>
        </tr>
    </table>
        <button onclick="deleteCar(${car.id_auto})">Eliminar Auto</button>
        <button onclick="updateCar(${car.id_auto})">Actualizar Auto</button>
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

async function updateCar(id){
    const data = {
        id_auto: id,
        marca: document.getElementById("marca-" + id).value,
        modelo: document.getElementById("modelo-" + id).value,
        cant_pasajeros: document.getElementById("cantPasajeros-" + id).value,
        kit_seguridad: document.getElementById("kitSeguridad-" + id).value
    }
    console.log(JSON.stringify(data))
    const response = await fetch("http://localhost:3000/autos", {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
    })
}