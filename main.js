run_command = function(command){

    var argv = command.split(" ")

    switch(argv.shift()){
    case "make":
	switch(argv.join(" ")){
	case "all":
	    return $("div#nojs").html();
	default:
	    return "<span class='error'>Unknown argument: " + argv.join(" ") + "</span>";
	}
    case "map":
	return $("div#nojs div#location").html();
    case "tickets":
	return $("div#nojs div#tickets").html();
    case "eval":
	eval(argv.join(""));
	return "";
    case "help":
	var retval;
	retval = "<span class='text'>Commands:</span>"
	retval += "<ul>";
	retval += "<li>make all - All event info</li>";
	retval += "<li>map - Map</li>";
	retval += "<li>tickets - ticket info</li>";
	retval += "<li>print - print page</li>";
	retval += "<li>echo - echo a string</li>";
	retval += "<li>eval - eval some js</li>";
	retval += "<li>help - print this message</li>";
	retval += "</ul>";
	return retval;
    case "print":
	window.print();
	return "";
    case "echo":
	return "<span class='text'>" + argv.join(" ") + "</span>";
    default:
	return "<span class='error'>COMMAND NOT FOUND</span>";
    }

};

$("div#prompt").show();
$("div#prompt input").on("keydown", function(e){
    if(e.keyCode == 13){
	$("div#stdout").append("<span class='command'><span class='arrow'> &gt; </span>" + String(this.value) + "</span><br />");
	$("div#stdout").append(run_command(this.value) + "<br/>");
	$("div#prompt input").val("");
	window.scrollBy(0,999999);
    }
});
