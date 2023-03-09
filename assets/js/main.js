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
    }


});