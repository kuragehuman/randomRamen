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

function timeCheck(openTime, closeTime){
    var openTimeSplit = openTime.split(':');
    var closeTimeSplit = closeTime.split(':');
    var today = new Date();

    var openTimeDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), Number(openTimeSplit[0]), Number(openTimeSplit[1]));
    var closeTimeDate = new Date(today.getFullYear(), today.getMonth(), today.getDate(), Number(closeTimeSplit[0]), Number(closeTimeSplit[1]));

    if(Number(openTimeDate.getTime()) < today.getTime() < closeTimeDate.getTime()){
        return 1;
    }
    /*
    else if((Number(openTimeSplit[0]) == today.getHours()) && (Number(openTimeSplit[1]) <= today.getMinutes()) && (today.getMinutes() <= Number(closeTimeSplit[1]))){
        return 1;
    }
    else if((Number(closeTimeSplit[0]) == today.getHours()) && (Number(openTimeSplit[1]) <= today.getMinutes()) && (today.getMinutes() <= Number(closeTimeSplit[1]))){
        return 1;
    }*/
    return 0;

}

function openCheck(restaurants){
    var oneweek = new Array("Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat");
    var today = new Date();
    var tmp = restaurants.filter(value => value.days == oneweek[today.getDay()]);
    var openDT = restaurants.filter(value => value.days == oneweek[today.getDay()]);
    for(var i=0; i<tmp.length; i++){
        var open = tmp[i].time.split(' ');
        if(open.length < 2){
            openDT.splice(i, 1);
        }
        else if(open.length%2==0){
            for(var j=0; j<open.length/2; j++){
                if(timeCheck(open[2*j], open[2*j+1]) == 0){
                    var spliced = openDT.splice(i, 1);
                    alert(spliced.name + ", " + spliced.days + ", " + spliced.time);
                    break;
                }
            }
        }
    }
    return openDT;
}

function randomSelect(){
    //日時検索
    
    var openRestaurant = openCheck(csvData);
    
    var id = Math.floor(Math.random() * Math.floor(openRestaurant.length));

    // リストチェック用
    /*
    for (var i = 0; i < openRestaurant.length; i++){
        alert(openRestaurant[i].name + " 営業時間:" + openRestaurant[i].time);
    }
    */
    alert(openRestaurant[id].name + " 営業時間:" + openRestaurant[id].time);
}
