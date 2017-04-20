//takes the URL to to a MapServer service: http://server/arcgis/rest/services/Barricades_EdgeSoft/MapServer

function showMap(value){
        response.innerHTML="";
	var url = '<iframe src="showme.html?m='+value+'" width="600" height="400"></iframe>';
	map.innerHTML=url;
	
	

}//showmap





// takes GIS URL: http://SERVERNAME/arcgis/rest/services/DMD_Projects_By_Division/MapServer/5/query?where=1=1&returnCountOnly=true&f=json
// and returns a count

function how(value){
        map.innerHTML="";
	var http=new XMLHttpRequest();
	http.open("GET", value, true);
	http.onreadystatechange = function() {//Call a function when the state changes.
  	if(http.readyState == 4 && http.status == 200) {
		
		console.log(http.responseText);
		var d=JSON.parse(http.responseText);
		response.innerHTML=d.count;
		


  	}//end if
					}
	http.send();

}//how

