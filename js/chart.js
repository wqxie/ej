$(document).ready(function(){
	svg1 = d3.select("#chart1").append("svg").attr("width",255).attr("height",70);
	svg1.append("text").text("2011").attr("x",0).attr("y",20).attr("fill","#1CA9C9");
	svg1.append("rect").attr("width",150).attr("height",20).attr("x",60).attr("y",5).attr("fill","#1CA9C9");
	svg1.append("text").text("235").attr("x",170).attr("y",20).attr("fill","white");
	svg1.append("text").text("2013").attr("x",0).attr("y",60).attr("fill","#FFCF48");
	svg1.append("rect").attr("width",100).attr("height",20).attr("x",60).attr("y",45).attr("fill","#FFCF48");
	svg1.append("text").text("107").attr("x",120).attr("y",60).attr("fill","white");

	svg2 = d3.select("#chart2").append("svg").attr("width",255).attr("height",140);
	var r1 = 60, r2 = 40, center = 120;
	svg2.append("circle").attr("cx",center+10).attr("cy",r1+10).attr("r",r1).attr("fill","#1CA9C9").attr("stroke","blue");
	svg2.append("circle").attr("cx",center+10).attr("cy",r1+r1-r2+10).attr("r",r2).attr("fill","#1FCECB").attr("stroke","purple");	
	svg2.append("text").attr("x",center).attr("y",r1-25).attr("font-size","10px").attr("fill","white").text("8.1");
	svg2.append("text").attr("x",center).attr("y",r1-10).attr("font-size","10px").attr("fill","white").text("2011");
	svg2.append("text").attr("x",center).attr("y",r1+r1-r2).attr("font-size","10px").attr("fill","white").text("6.2");
	svg2.append("text").attr("x",center).attr("y",r1+r1-r2+15).attr("font-size","10px").attr("fill","white").text("2013");

	svg3 = d3.select("#chart3").append("svg").attr("width",255).attr("height",70);
	svg3.append("text").text("2011").attr("x",0).attr("y",20).attr("fill","#1CA9C9");
	svg3.append("rect").attr("width",200).attr("height",20).attr("x",60).attr("y",5).attr("fill","#1CA9C9");
	svg3.append("text").text("369").attr("x",220).attr("y",20).attr("fill","white");
	svg3.append("text").text("2013").attr("x",0).attr("y",60).attr("fill","#FFCF48");
	svg3.append("rect").attr("width",80).attr("height",20).attr("x",60).attr("y",45).attr("fill","#FFCF48");
	svg3.append("text").text("71").attr("x",100).attr("y",60).attr("fill","white");

	svg4 = d3.select("#chart4").append("svg").attr("width",255).attr("height",140);
	var r1 = 50, r2 = 30, center = 120;
	svg4.append("circle").attr("cx",center+10).attr("cy",r1+10).attr("r",r1).attr("fill","#1CA9C9").attr("stroke","blue");
	svg4.append("circle").attr("cx",center+10).attr("cy",r1+r1-r2+10).attr("r",r2).attr("fill","#1FCECB").attr("stroke","purple");	
	svg4.append("text").attr("x",center).attr("y",r1-25).attr("font-size","10px").attr("fill","white").text("5.9");
	svg4.append("text").attr("x",center).attr("y",r1-10).attr("font-size","10px").attr("fill","white").text("2011");
	svg4.append("text").attr("x",center).attr("y",r1+r1-r2).attr("font-size","10px").attr("fill","white").text("4.8");
	svg4.append("text").attr("x",center).attr("y",r1+r1-r2+15).attr("font-size","10px").attr("fill","white").text("2013");

	svg5 = d3.select("#chart5").append("svg").attr("width",255).attr("height",70);
	svg5.append("text").text("2011").attr("x",0).attr("y",20).attr("fill","#1CA9C9");
	svg5.append("rect").attr("width",200).attr("height",20).attr("x",60).attr("y",5).attr("fill","#1CA9C9");
	svg5.append("text").text("369").attr("x",220).attr("y",20).attr("fill","white");
	svg5.append("text").text("2013").attr("x",0).attr("y",60).attr("fill","#FFCF48");
	svg5.append("rect").attr("width",80).attr("height",20).attr("x",60).attr("y",45).attr("fill","#FFCF48");
	svg5.append("text").text("71").attr("x",100).attr("y",60).attr("fill","white");

	svg6 = d3.select("#chart6").append("svg").attr("width",255).attr("height",140);
	var r1 = 50, r2 = 30, center = 120;
	svg6.append("circle").attr("cx",center+10).attr("cy",r1+10).attr("r",r1).attr("fill","#1CA9C9").attr("stroke","blue");
	svg6.append("circle").attr("cx",center+10).attr("cy",r1+r1-r2+10).attr("r",r2).attr("fill","#1FCECB").attr("stroke","purple");	
	svg6.append("text").attr("x",center).attr("y",r1-25).attr("font-size","10px").attr("fill","white").text("5.9");
	svg6.append("text").attr("x",center).attr("y",r1-10).attr("font-size","10px").attr("fill","white").text("2011");
	svg6.append("text").attr("x",center).attr("y",r1+r1-r2).attr("font-size","10px").attr("fill","white").text("4.8");
	svg6.append("text").attr("x",center).attr("y",r1+r1-r2+15).attr("font-size","10px").attr("fill","white").text("2013");
});