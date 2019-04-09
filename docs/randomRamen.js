var csvData;

function readCSV(str){
    var req = new XMLHttpRequest();

    req.open("GET", "restaurants.csv", true);
    req.send(null);

    req.onload = function(){
        csvData = convertCSVtoData(req.responseText);
        alert(csvData[0][0]);
        //return csvData;
        
    }
}
function convertCSVtoData(str){
    var dataset = [];
    var row = str.split("\n");

    for(var i=0; i<row.length; i++){
        dataset[i] = row[i].split(',');
    }

    alert(dataset[1][1]);
    return dataset;
}

csvFile = "restaurants.csv";
readCSV(csvFile);
alert(csvData[1][1]);

