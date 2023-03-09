document.addEventListener("DOMContentLoaded", () => {
    const saveBtn = document.g7etElementById("saveBtn");
    const changeThemeBtn = document.getElementById("changeThemeBtn");
    const inputIdentification = document.getElementById("inputIdentification");
    const inputName = document.getElementById("inputName");
    const inputDireccion = document.getElementById("inputDireccion");
    const inputEstrato = document.getElementById("inputEstrato");
    const inputEmail = document.getElementById("inputEmail");
    let tableBody = document.getElementById("tableBody")

    function loadData(){
        tableBody.innerHTML =`
        <tr id="noData">
            <td> No existen registros<td>
        </tr>
        `;

        console.log("Entro a load data.");
        const data=JSON.parse(localStorage.getItem("data")) || [];
        if(data.length){Document.getItemById("noData").remove()};

        data.forEach((poblacion, index)=> {
            let tr =document.createElement("tr");
            tr.innerHTML=`
            <td>${index+1}</td>
            <td>${poblacion.identification}</td>
            <td>${poblacion.name}</td>
            <td>${poblacion.direccion}</td>
            <td>${poblacion.estrato}</td>
            <td>${poblacion.email}</td>
            <td class="text center">
                <button type="button" class="btn btn-warning btn-edit" data-index="${index}">Actualizar</button>
                <button type="button" class="btn btn-danger btn-edit" data-index="${index}">Eliminar</button>
            </td>
            `;
            tableBody.appendChild(tr);
        });
    } // this is the end of my function

    const cleanForm=()=>{
        inputIdentification.value="";
        inputName.value="";
        inputDireccion.value="";
        inputEstrato.value="";
        inputEmail.value="";
    }

    saveBtn.addEventListener("click", () =>{
        const identificacion=inputIdentification.value;
        const name=inputName.value;
        const direccion=inputDireccion;
        const estrato=inputEstrato;
        const email=inputEmail;
        if(!name){
            return;
        }
        console.log(identificacion);
        console.log(name);
        console.log(direccion);
        console.log(estrato);
        console.log(email);
        let data =JSON.parse(localStorage.getItem ("data")) ||[];
        const index=saveBtn.getAttribute("data-index")
        console.log(index)
        if(index){
            data[index]={identification,name, direccion, estrato, email}
            saveBtn.removeAttribute("data-index")
        } else {
            data.push({identification,name, direccion, estrato, email});
        }
        localStorage.setItem("data", JSON.stringify(data));
        cleanForm();
        loadData();
    });

});