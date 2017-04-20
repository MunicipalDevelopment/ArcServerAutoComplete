(function(){



http=new XMLHttpRequest();
http.open("GET", "http://SERVERNAME/ArcGIS/rest/services?f=json", true);
http.setRequestHeader("Content-type", "application/x-www-form-urlencoded");
http.onreadystatechange = function() {//Call a function when the state changes.
	if(http.readyState == 4 && http.status == 200) {
		
		var result= JSON.parse(http.responseText);
		for(var x = 0; x<result.services.length;x++){
	
			if(result.services[x].type!=="MapServer"){
			}else{
				list.push(["show me "+result.services[x].name,result.services[x].name]);
				functionCall[result.services[x].name]="map";
				value[result.services[x].name]="http://SERVERNAME/arcgis/rest/services/"+result.services[x].name+"/MapServer";

			}
}
		
		
	
		

}
}
http.send();
})();