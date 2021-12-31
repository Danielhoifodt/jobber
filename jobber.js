/*let jobber =[
    ["netsense","delt","under opplæring", 0],

    ["multiconsult","hjemmekontor","fullstack", "900 000"],

    ["capgemini", "kontor", "backend", "600 000"]
]
*/
let tittel = ["Jobb", "Kontortype", "Jobbtittel", "Lønn (netto)"]

let jobber = []

function output_tbody()
{
    let tr = ""

    for(let i = 0; i < jobber.length; i++)
    {
        let td = ""
        for(let j = 0; j < jobber[i].length; j++)
        {
            td += "<td>" + jobber[i][j] + "</td>"
        }
        td += "<td onclick='deleteRow(" + i + ");' style='color:red;cursor:pointer;'>X</td>"
        tr += "<tr>" + td + "</tr>"
    }
    document.getElementById("output_tbody").innerHTML = tr
}

output_tbody()

function output_thead()
{
    let tr = ""
    let th = ""

    for(let i = 0; i < tittel.length; i++)
    {
        th += "<th>" + tittel[i] + "</th>"
    }
    th += "<th>Slett</th>"
    tr = "<tr>" + th + "</tr>"

    document.getElementById("output_thead").innerHTML = tr
}

output_thead()

function saveModal()
{
    let jobb = document.getElementById("jobb").value
    let type = document.getElementById("type").value
    let posisjon = document.getElementById("posisjon").value
    let lønn = document.getElementById("lønn").value

    let aJobber = [jobb, type, posisjon, lønn]

    jobber.push(aJobber)

    output_tbody()

    document.getElementById("jobb").value = ""
    document.getElementById("type").value = ""
    document.getElementById("posisjon").value = ""
    document.getElementById("lønn").value = ""

    hide_modal()

}

function hide_modal()
{
    var myModalEl = document.getElementById('exampleModal');
    var modal = bootstrap.Modal.getInstance(myModalEl)
    modal.hide();
}

function deleteRow(index)
{
    jobber.splice(index, index + 1)

    output_tbody()
}