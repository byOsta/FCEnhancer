var info = document.querySelectorAll("table.cajasprin tbody tr td.contenido div center table tbody tr td table tbody tr td table.cajasnews tbody tr td.texto table tbody tr a.texto");
var info2 = document.querySelectorAll("table.cajasprin tbody tr td.contenido div center table tbody tr td table tbody tr td table.cajasnews tbody tr td.texto table tbody tr a[href^=\"/foro/forumdisplay.php\"]");

for(var i = 0;i < info.length; i++){
	info[i].target = "_blank";
	if(info[i].title !== ""){
		info[i].innerHTML = info[i].title;
		//info[i].style.backgroundColor = "blue";
	}else{
		info[i].innerHTML = "➜";
	}
	
}
for(var i = 0;i < info2.length; i++){
	info2[i].target = "_blank";
	info2[i].style.color = "blue";
}
