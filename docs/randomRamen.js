var csvData = [{name:"name", days:"days", dist:"dist", money:"money", genre:"genre", favorite:"fav"}];

function readCSV(str){
    var req = new XMLHttpRequest();

    req.open("GET", "restaurants.csv", true);
    req.send(null);

    req.onload = function(){
        csvData = convertCSVtoData(req.responseText);
        alert(csvData[0].name);
        //return csvData;
        
    }
}
function convertCSVtoData(str){
    var dataset = [];
    var row = str.split("\n");

    for(var i=0; i<row.length; i++){
        var tmp = row[i].split(',');
        dataset[i].name = tmp[0];
        dataset[i].days = tmp[1];
        dataset[i].dist = tmp[2];
        dataset[i].money = tmp[3];
        dataset[i].genre = tmp[4];
        dataset[i].favorite = tmp[5];
    }

    alert(dataset[1].name);
    return dataset;
}

csvFile = "restaurants.csv";
readCSV(csvFile);

function randomSelect(){
    //日時検索
    var today = new Date();
    var oneweek = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    
    var openRestaurant = csvData[1].filter(value => value.days == oneweek[today.getDay()]);
    
    alert(openRestaurant[0]);
}

