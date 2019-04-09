var csvData = [];
csvFile = "restaurants.csv";
readCSV(csvFile);

function readCSV(str){
    var req = new XMLHttpRequest();

    req.open("GET", str, true);
    req.send(null);

    req.onload = function(){
        csvData = convertCSVtoData(req.responseText);        
    }
}
function convertCSVtoData(str){
    var dataset = [];
    var row = str.split("\n");

    for(var i=1; i<row.length; i++){
        var tmp = row[i].split(',');
        num = dataset.length;
        dataset.push(new Object());
        dataset[num].name   = tmp[0];
        dataset[num].days   = tmp[1];
        dataset[num].time   = tmp[2];
        dataset[num].dist   = tmp[3];
        dataset[num].money  = tmp[4];
        dataset[num].genre  = tmp[5];
        dataset[num].fav    = tmp[6];
    }

    return dataset;
}

function randomSelect(){
    //日時検索
    var today = new Date();
    var oneweek = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    
    var openRestaurant = csvData.filter(value => value.days == oneweek[today.getDay()]);
    
    alert(openRestaurant[0].name + " 営業時間:" + openRestaurant[0].time);
    //alert(openRestaurant[1].name);
    //alert(openRestaurant[2].name);
}
