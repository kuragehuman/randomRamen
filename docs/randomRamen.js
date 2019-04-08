
function readCSV(str){
    var req = new XMLHttpRequest();

    req.open("GET", "restaurants.csv", true);
    req.send(null);

    req.onload = function(){
        csvData = convertCSVtoData(req.responseText);
        return Array(csvData);
    }
}
function convertCSVtoData(str){
    var dataset = [];
    var row = str.split("\n");

    for(var i=0; i<row.length; i++){
        dataset[i] = row[i].split(',');
    }

    return Array(dataset);
    //alert(dataset[1][1]);
}

csvFile = "restaurants.csv";
restaurantData = readCSV(csvFile);
alert(restaurantData[1][1]);

