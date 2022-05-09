const btnSubmit = document.getElementById("submit-tab")
const inputX = document.getElementById("nbr-rows")
const inputY = document.getElementById("nbr-columns")
const output = document.getElementById("output")

function createTable(X, Y) {
    var tbl = document.createElement("table")
    var tblBody = document.createElement("tbody")
    console.log(X + ":::" + Y)


    // cells creation
    for (var j = 1; j <= X; j++) {
        // table row creation
        var row = document.createElement("tr");

        for (var i = 1; i <= Y; i++) {
            // create element <td> and text node 
            var cell = document.createElement("td");
            var cellText = document.createTextNode(j + "," + i);

            cell.appendChild(cellText);
            row.appendChild(cell);
        }

        //row added to end of table body
        tblBody.appendChild(row);
    }

    // append the <tbody> inside the <table>
    tbl.appendChild(tblBody)
    return tbl
}


btnSubmit.onclick = (e) => {
    e.preventDefault()
    //var valueX = Number(inputX.value)
    //var valueY = Number(inputY.value)

    let inputs = prompt("Saisir le nombre de lignes et le nombre de colonnes séparés par un espace :");
    inputs = inputs.split(' ');
    var valueX = Number(inputs[0])
    var valueY = Number(inputs[1])

    var tbl = createTable(valueX, valueY)
    output.appendChild(tbl)

}