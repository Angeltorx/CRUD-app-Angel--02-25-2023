document.addEventListener("DOMContentLoaded", () => {
    const saveBtn = document.getElementById("saveBtn");
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

        if(data.length){
            document.getElementById("noData").remove()
        };

        data.forEach((poblacion, index)=> {
            let tr =document.createElement("tr");
            tr.innerHTML=`
            <td>${index+1}</td>
            <td>${poblacion.identificacion}</td>
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
        const direccion=inputDireccion.value;
        const estrato=inputEstrato.value;
        const email=inputEmail.value;
        if(!name){
            return;
        }
        console.log(identificacion);
        console.log(name);
        console.log(direccion);
        console.log(estrato);
        console.log(email);
        let data = JSON.parse(localStorage.getItem ("data")) ||[];
        const index=saveBtn.getAttribute("data-index")
        console.log(index)
        if(index){
            data[index]={identificacion,name, direccion, estrato, email}
            saveBtn.removeAttribute("data-index")
        } else {
            data.push({identificacion,name, direccion, estrato, email});
        }
        localStorage.setItem("data", JSON.stringify(data));
        cleanForm();
        loadData();
    });

    tableBody.addEventListener("click",(e) => {
        console.log(e.target.classList);
        if(e.target.classList.contains('btn-edit')){
            const index = e.target.dataset.index;
            const data = JSON.parse(localStorage.getItem("data"))
            const item = data[index];
            inputIdentification.value = item.identificacion
            inputName.value = item.name
            inputDireccion.value = item.direccion
            inputEstrato.value = item.estrato// aqui esta el error
            inputEmail.value = item.email
            saveBtn.setAttribute("data-index", index)
            data.splice(index, 1, {...item})
        } else if (e.target.classList.contains('btn-delete')){
            const index=JSON.parse(localStorage.getItem("data"))
            loadData()
        }
    })
    loadData()
});

