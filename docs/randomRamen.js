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

function openCheck(restaurants){
    var tmp = restaurant.filter(value => value.days == oneweek[today.getDay()]);
    for(var i=0; i<restaurants.length; i++){
        var openTime = restaurants[i].time.split(' ');
        if(openTime.length%2==0){
            var today = new Date();
            var count=0;
            for(var j=0; j<openTime.length/2; j++){
                if(openTime[j] < today.getHours() < openTime[j+1]){
                    break;
                }
                else{
                    count++;
                }
            }
            if(count==openTime.length){
                openTime.splice(i, 1);
            }
        }
    }
    return openTime;
}

function randomSelect(){
    //日時検索
    var today = new Date();
    var oneweek = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    
    var openRestaurant = csvData.filter(value => value.days == oneweek[today.getDay()]);
    
    var id = Math.floor(Math.random() * Math.floor(openRestaurant.length));

    alert(openRestaurant[id].name + " 営業時間:" + openRestaurant[id].time);
    //alert(openRestaurant[1].name);
    //alert(openRestaurant[2].name);
}
