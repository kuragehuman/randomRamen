
function readCSV(){
    var req = new XMLHttpRequest();

    req.open("GET", "restaurants.csv", true);
    req.send(null);

    req.onload = function(){
        convertCSVtoData(req.responseText);
    }
}
function convertCSVtoData(str){
    var dataset = [];
    var row = str.split("\n");

    for(var i=0; i<row.length; i++){
        dataset[i] = row[i].split(',');
    }

    alert(dataset[1][1]);
}

readCSV();

