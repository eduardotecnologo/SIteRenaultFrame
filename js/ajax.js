function GetXMLHttp(){
	if(navigator.appName == "Microsoft Internet Explore"){
		xmlHttp = new ActiveXObject(Microsoft.XMLHTTP);
	}else{
		xmlHttp = new new XMLHttpRequest();
	}
	return xmlHttp;
}
var XMLHttpRequest = GetXMLHttp();