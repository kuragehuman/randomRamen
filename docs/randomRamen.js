
function readCSV(str){
    var req = new XMLHttpRequest();

    req.open("GET", str, true);
    req.send(null);

    req.onload = function(){
        csvData = convertCSVtoData(req.responseText);
    }
    //return Array(csvData)
}
function convertCSVtoData(str){
    var dataset = [];
    var row = str.split("\n");

    for(var i=0; i<row.length; i++){
        dataset[i] = row[i].split(',');
    }

    //return Array(dataset)
    alert(dataset[0]);
}

csvFile = "restaurants.csv"
restaurantData = readCSV(str);
//alert(restaurantData[0][1])

