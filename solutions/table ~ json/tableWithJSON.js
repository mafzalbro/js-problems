var htmlTable = document.getElementById("my-table");

function jsonToTable(json) {
  var table = "<table>";
  table += "<tr>";
  for (var key in json[0]) {
    table += "<th>" + key + "</th>";
  }
  table += "</tr>";

  for (var i = 0; i < json.length; i++) {
    table += "<tr>";
    for (var key in json[i]) {
      table += "<td>" + json[i][key] + "</td>";
    }
    table += "</tr>";
  }

  table += "</table>";
  return table;
}


// Convert JSON back to HTML table
const json = [
  {
    Company: "Alfreds Futterkiste",
    Contact: "Maria Anders",
    Country: "Germany",
  },
  {
    Company: "Centro comercial Moctezuma",
    Contact: "Francisco Chang",
    Country: "Mexico",
  },
  {
    Company: "Ghazi Ali",
    Contact: "Ghazi",
    Country: "Pakistan",
  },
  {
    Company: "Alfreds Futterkiste",
    Contact: "Maria Anders",
    Country: "Germany",
  },
  {
    Company: "Centro comercial Moctezuma",
    Contact: "Francisco Chang",
    Country: "Mexico",
  },
  {
    Company: "Ghazi Ali",
    Contact: "Ghazi",
    Country: "Pakistan",
  },
  {
    Company: "Alfreds Futterkiste",
    Contact: "Maria Anders",
    Country: "Germany",
  },
  {
    Company: "Centro comercial Moctezuma",
    Contact: "Francisco Chang",
    Country: "Mexico",
  },
  {
    Company: "Ghazi Ali",
    Contact: "Ghazi",
    Country: "Pakistan",
  },
  {
    Company: "Alfreds Futterkiste",
    Contact: "Maria Anders",
    Country: "Germany",
  },
  {
    Company: "Centro comercial Moctezuma",
    Contact: "Francisco Chang",
    Country: "Mexico",
  },
  {
    Company: "Ghazi Ali",
    Contact: "Ghazi",
    Country: "Pakistan",
  },
  {
    Company: "Alfreds Futterkiste",
    Contact: "Maria Anders",
    Country: "Germany",
  },
  {
    Company: "Centro comercial Moctezuma",
    Contact: "Francisco Chang",
    Country: "Mexico",
  },
  {
    Company: "Ghazi Ali",
    Contact: "Ghazi",
    Country: "Pakistan",
  },
  {
    Company: "Alfreds Futterkiste",
    Contact: "Maria Anders",
    Country: "Germany",
  },
  {
    Company: "Centro comercial Moctezuma",
    Contact: "Francisco Chang",
    Country: "Mexico",
  },
  {
    Company: "Ghazi Ali",
    Contact: "Ghazi",
    Country: "Pakistan",
  },
];

const tableHtml = jsonToTable(json);
console.log(tableHtml);


htmlTable.innerHTML = tableHtml




function tableToJson(table) {
  var data = [];
  // First row needs to be headers
  var headers = [];
  for (var i = 0; i < table.rows[0].cells.length; i++) {
    headers[i] = table.rows[0].cells[i].innerHTML
      .toLowerCase()
      .replace(/ /gi, "");
  }

  // Go through cells
  for (var i = 1; i < table.rows.length; i++) {
    var tableRow = table.rows[i];
    var rowData = {};

    for (var j = 0; j < tableRow.cells.length; j++) {
      rowData[headers[j]] = tableRow.cells[j].innerHTML;
    }

    data.push(rowData);
  }

  return data;
}


// var htmlTable = "<table><tr><th>Company</th><th>Contact</th><th>Country</th></tr><tr><td>Alfreds Futterkiste</td><td>Maria Anders</td><td>Germany</td></tr><tr><td>Centro comercial Moctezuma</td><td>Francisco Chang</td><td>Mexico</td></tr></table>"


var jsonData = tableToJson(htmlTable);
console.log(jsonData);