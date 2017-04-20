//takes the URL to to a MapServer service: http://server/arcgis/rest/services/Barricades_EdgeSoft/MapServer

function showMap(value){
        response.innerHTML="";
	var url = '<iframe src="showme.html?m='+value+'" width="600" height="400"></iframe>';
	map.innerHTML=url;
	
	

}//showmap




