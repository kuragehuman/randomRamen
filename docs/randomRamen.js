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

function randomSelect(){
    var openRestaurant;
    //日時検索
    var today = new Date();
    var oneweek = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    for(var i = 0; i < csvData.length; i++){
        if(oneweek[today.getDay()] == csvData[i][1]){
            openRestaurant.pushcsvData[i];
        }
    }
    alert(openRestaurant[0]);
}

