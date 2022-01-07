const tittel = ["Arbeidsplass", "Kontortype", "Jobbtittel", "Lønn (netto)"]

let jobber = []

console.log(jobber)

function updateTableBody()
{
    let tableRow = ""

    for(let i = 0; i < jobber.length; i++)
    {
        let tableElement = ""
        for(let j = 0; j < jobber[i].length; j++)
        {
            tableElement += "<td>" + jobber[i][j] + "</td>"
        }
        tableElement += "<td onclick='deleteRow(" + i + ");' style='color:red;cursor:pointer;'>X</td>"
        tableRow += "<tr>" + tableElement + "</tr>"
    }
    document.getElementById("tableBody").innerHTML = tableRow
}



function updateTableHead()
{
    let tableRow = ""
    let tableHead = ""

    for(let i = 0; i < tittel.length; i++)
    {
        tableHead += "<th>" + tittel[i] + "</th>"
    }
    tableHead += "<th>Slett</th>"
    tableRow = "<tr>" + tableHead + "</tr>"

    document.getElementById("tableHead").innerHTML = tableRow
}



function saveModal()
{
    const jobb = document.getElementById("jobb").value
    const type = document.getElementById("type").value
    const posisjon = document.getElementById("posisjon").value
    const lønn = document.getElementById("lønn").value

    if(jobb.length === 0 || type.length === 0 || posisjon.length === 0 || lønn.length === 0) {
        alert("Alle felter må fylles ut");
        return
    }

    const aJobber = [jobb, type, posisjon, lønn]

    jobber.push(aJobber)

    updateTableBody()

    document.getElementById("jobb").value = ""
    document.getElementById("type").value = ""
    document.getElementById("posisjon").value = ""
    document.getElementById("lønn").value = ""

    hideModal()

}

function hideModal()
{
    const myModalEl = document.getElementById('exampleModal');
    const modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
}

function deleteRow(index)
{
    jobber.splice(index, index + 1)
    updateTableBody()
}

updateTableBody()
updateTableHead()