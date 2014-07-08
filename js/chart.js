$(document).ready(function(){
	$("#show-chart").on("click",function(){
		var air=0, health=0, land=0, neighbor=0, trans=0, waste=0, c1=1, c2=2;
		var mode = 1;
		console.log($('#filter1').is(':checked'));
		if($('input[name=air]:checked').val()){
			air = $('input[name=air]:checked').val();
		};
		if($('input[name=health]:checked').val()){
			health = $('input[name=health]:checked').val();
		};
		if($('input[name=land]:checked').val()){
			land = $('input[name=land]:checked').val();
		};
		if($('input[name=neighbor]:checked').val()){
			neighbor = $('input[name=neighbor]:checked').val();
		};
		if($('input[name=trans]:checked').val()){
			trans = $('input[name=trans]:checked').val();
		};
		if($('input[name=waste]:checked').val()){
			waste = $('input[name=waste]:checked').val();
		};
		if ($('#c1 option:selected').val()) {
			c1 = $('#c1 option:selected').val();
		};
		if ($('#c2 option:selected').val()) {
			c2 = $('#c2 option:selected').val();
		};
		console.log(air,health,land,neighbor,trans,waste,c1,c2);
		if (air+health+land+neighbor+trans+waste>0) {
			drawChart(air,health,land,neighbor,trans,waste,c1,c2);
		};
	});

	$("#show-table").on("click",function(){
		var air=0, health=0, land=0, neighbor=0, trans=0, waste=0, c1=1, c2=2;
		var mode = 2;
		if($('input[name=air]:checked').val()){
			air = $('input[name=air]:checked').val();
		};
		if($('input[name=health]:checked').val()){
			health = $('input[name=health]:checked').val();
		};
		if($('input[name=land]:checked').val()){
			land = $('input[name=land]:checked').val();
		};
		if($('input[name=neighbor]:checked').val()){
			neighbor = $('input[name=neighbor]:checked').val();
		};
		if($('input[name=trans]:checked').val()){
			trans = $('input[name=trans]:checked').val();
		};
		if($('input[name=waste]:checked').val()){
			waste = $('input[name=waste]:checked').val();
		};
		if ($('#c1 option:selected').val()) {
			c1 = $('#c1 option:selected').val();
		};
		if ($('#c2 option:selected').val()) {
			c2 = $('#c2 option:selected').val();
		};
		console.log(air,health,land,neighbor,trans,waste,c1,c2);
		if (air+health+land+neighbor+trans+waste>0) {
			drawTable(air,health,land,neighbor,trans,waste,c1,c2);
		};
	});

});
function drawChart(air,health,land,neighbor,trans,waste,c1,c2){
	d3.json("js/fake2.json", function(error, data) {
		var count = 1;
		var width_ratio = 180;
		if (air) {
			air_data = data.air[air-1].years;
			drawBarChart(count, air_data, c1, c2, "Air", data.air[air-1].variable, data.air[air-1].unit, width_ratio);
			count++;
		};
		if (health) {
			health_data = data.health[health-1].years;
			drawBarChart(count, health_data, c1, c2, "Health", data.health[health-1].variable, data.health[health-1].unit, width_ratio);
			count++;
		};
		if (land) {
			land_data = data.land[land-1].years;
			drawBarChart(count, land_data, c1, c2, "Land", data.land[land-1].variable, data.land[land-1].unit, width_ratio);
			count++;
		};
		if (neighbor) {
			neighbor_data = data.neighbor[neighbor-1].years;
			drawBarChart(count, neighbor_data, c1, c2, "Neighborhoods", data.neighbor[neighbor-1].variable, data.neighbor[neighbor-1].unit, width_ratio);
			count++;
		};
		if (trans) {
			d3.select("#chart"+"1"+count).selectAll("svg").remove();
			svg1 = d3.select("#chart"+"1"+count).append("svg").attr("width",255).attr("height",70);
			trans_data = data.trans[trans-1].years;
			max_width = Math.max(trans_data[0].districts[c1],trans_data[0].districts[c2],trans_data[1].districts[c1],trans_data[1].districts[c2]);
			svg1.append("text").text(trans_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg1.append("rect").attr("width",trans_data[0].districts[c1]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19");
			svg1.append("text").text(trans_data[0].districts[c1]).attr("x",70).attr("y",20).attr("fill","black");
			svg1.append("text").text(trans_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg1.append("rect").attr("width",trans_data[1].districts[c1]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775");
			svg1.append("text").text(trans_data[1].districts[c1]).attr("x",70).attr("y",60).attr("fill","black");
			var info1 = "<p>Category : " + "Transportation" + "</p><p>Variable :" +  data.trans[trans-1].variable + "</p><p>Unit : " + data.trans[trans-1].unit 
						+ "</p><p>Year" + trans_data[0].year + " : " + trans_data[0].districts[c1] +  "</p><p>Year" + trans_data[1].year + " : " + trans_data[1].districts[c1];
			d3.select("#intro"+"1"+count).selectAll("p").remove();
			d3.select("#intro"+"1"+count).html(info1);
			d3.select("#intro"+"1"+count).style("border-bottom","1px solid #fbd775");

			d3.select("#chart"+"2"+count).selectAll("svg").remove();
			svg2 = d3.select("#chart"+"2"+count).append("svg").attr("width",255).attr("height",70);
			svg2.append("text").text(trans_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg2.append("rect").attr("width",trans_data[0].districts[c2]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19");
			svg2.append("text").text(trans_data[0].districts[c2]).attr("x",70).attr("y",20).attr("fill","black");
			svg2.append("text").text(trans_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg2.append("rect").attr("width",trans_data[1].districts[c2]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775");
			svg2.append("text").text(trans_data[1].districts[c2]).attr("x",70).attr("y",60).attr("fill","black");
			var info2 = "<p>Category : " + "Transportation" + "</p><p>Variable :" +  data.trans[trans-1].variable + "</p><p>Unit : " + data.trans[trans-1].unit 
						+ "</p><p>Year" + trans_data[0].year + " : " + trans_data[0].districts[c2] +  "</p><p>Year" + trans_data[1].year + " : " + trans_data[1].districts[c2];
			d3.select("#intro"+"2"+count).selectAll("p").remove();
			d3.select("#intro"+"2"+count).html(info2);
			d3.select("#intro"+"2"+count).style("border-bottom","1px solid #fbd775");

			max_total = Math.max(trans_data[0].districts.total,trans_data[1].districts.total);
			d3.select("#chart"+"3"+count).selectAll("svg").remove();
			d3.select("#table"+"3"+count).selectAll("table").remove();
			svg3 = d3.select("#chart"+"3"+count).append("svg").attr("width",255).attr("height",70);
			svg3.append("text").text(trans_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg3.append("rect").attr("width",trans_data[0].districts.total/max_total*width_ratio).attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19");
			svg3.append("text").text(trans_data[0].districts.total).attr("x",70).attr("y",20).attr("fill","black");
			svg3.append("text").text(trans_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg3.append("rect").attr("width",trans_data[1].districts.total/max_total*width_ratio).attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775");
			svg3.append("text").text(trans_data[1].districts.total).attr("x",70).attr("y",60).attr("fill","black");
			var info3 = "<p>Category : " + "Transportation" + "</p><p>Variable :" +  data.trans[trans-1].variable + "</p><p>Unit : " + data.trans[trans-1].unit 
						+ "</p><p>Year" + trans_data[0].year + " : " + trans_data[0].districts.total +  "</p><p>Year" + trans_data[1].year + " : " + trans_data[1].districts.total;
			d3.select("#intro"+"3"+count).selectAll("p").remove();
			d3.select("#intro"+"3"+count).html(info3);
			d3.select("#block"+"3"+count).style("border-bottom","1px solid #fbd775");

			count++;
		};
		if (waste) {
			d3.select("#chart"+"1"+count).selectAll("svg").remove();
			svg1 = d3.select("#chart"+"1"+count).append("svg").attr("width",255).attr("height",70);
			waste_data = data.waste[waste-1].years;
			max_width = Math.max(waste_data[0].districts[c1],waste_data[0].districts[c2],waste_data[1].districts[c1],waste_data[1].districts[c2]);
			svg1.append("text").text(waste_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg1.append("rect").attr("width",waste_data[0].districts[c1]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19");
			svg1.append("text").text(waste_data[0].districts[c1]).attr("x",70).attr("y",20).attr("fill","black");
			svg1.append("text").text(waste_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg1.append("rect").attr("width",waste_data[1].districts[c1]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775");
			svg1.append("text").text(waste_data[1].districts[c1]).attr("x",70).attr("y",60).attr("fill","black");
			var info1 = "<p>Category : " + "Waste" + "</p><p>Variable :" +  data.waste[waste-1].variable + "</p><p>Unit : " + data.waste[waste-1].unit 
						+ "</p><p>Year" + waste_data[0].year + " : " + waste_data[0].districts[c1] +  "</p><p>Year" + waste_data[1].year + " : " + waste_data[1].districts[c1];
			d3.select("#intro"+"1"+count).selectAll("p").remove();
			d3.select("#intro"+"1"+count).html(info1);
			d3.select("#intro"+"1"+count).style("border-bottom","1px solid #fbd775");

			d3.select("#chart"+"2"+count).selectAll("svg").remove();
			svg2 = d3.select("#chart"+"2"+count).append("svg").attr("width",255).attr("height",70);
			svg2.append("text").text(waste_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg2.append("rect").attr("width",waste_data[0].districts[c2]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19");
			svg2.append("text").text(waste_data[0].districts[c2]).attr("x",70).attr("y",20).attr("fill","black");
			svg2.append("text").text(waste_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg2.append("rect").attr("width",waste_data[1].districts[c2]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775");
			svg2.append("text").text(waste_data[1].districts[c2]).attr("x",70).attr("y",60).attr("fill","black");
			var info2 = "<p>Category : " + "Waste" + "</p><p>Variable :" +  data.waste[waste-1].variable + "</p><p>Unit : " + data.waste[waste-1].unit 
						+ "</p><p>Year" + waste_data[0].year + " : " + waste_data[0].districts[c2] +  "</p><p>Year" + waste_data[1].year + " : " + waste_data[1].districts[c2];
			d3.select("#intro"+"2"+count).selectAll("p").remove();
			d3.select("#intro"+"2"+count).html(info2);
			d3.select("#intro"+"2"+count).style("border-bottom","1px solid #fbd775");

			max_total = Math.max(waste_data[0].districts.total,waste_data[1].districts.total);
			d3.select("#chart"+"3"+count).selectAll("svg").remove();
			d3.select("#table"+"3"+count).selectAll("table").remove();
			svg3 = d3.select("#chart"+"3"+count).append("svg").attr("width",255).attr("height",70);
			svg3.append("text").text(waste_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg3.append("rect").attr("width",waste_data[0].districts.total/max_total*width_ratio).attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19");
			svg3.append("text").text(waste_data[0].districts.total).attr("x",70).attr("y",20).attr("fill","black");
			svg3.append("text").text(waste_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg3.append("rect").attr("width",waste_data[1].districts.total/max_total*width_ratio).attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775");
			svg3.append("text").text(waste_data[1].districts.total).attr("x",70).attr("y",60).attr("fill","black");
			var info3 = "<p>Category : " + "Waste" + "</p><p>Variable :" +  data.waste[waste-1].variable + "</p><p>Unit : " + data.waste[waste-1].unit 
						+ "</p><p>Year" + waste_data[0].year + " : " + waste_data[0].districts.total +  "</p><p>Year" + waste_data[1].year + " : " + waste_data[1].districts.total;
			d3.select("#intro"+"3"+count).selectAll("p").remove();
			d3.select("#intro"+"3"+count).html(info3);
			d3.select("#block"+"3"+count).style("border-bottom","1px solid #fbd775");

			count++;
		};		
	});
	
}
function drawTable(air,health,land,neighbor,trans,waste,c1,c2){
	d3.json("js/fake2.json", function(error, data) {
		var count = 1;
		if (air) {
			d3.select("#chart"+"1"+count).selectAll("svg").remove();
			d3.select("#chart"+"1"+count).selectAll("table").remove();
			air_data = data.air[air-1].years;
			var info1 = "<table><tr><td style='font-size:15px;'>Air</td><td>" + air_data[0].year + "</td><td>" + air_data[1].year + "</td></tr><tr><td>"
						+ data.air[air-1].variable + "("+ data.air[air-1].unit +")</td><td>"+air_data[0].districts[c1]+"</td><td>"+air_data[1].districts[c1]+"</td></tr></table>";
			d3.select("#intro"+"1"+count).html(info1);
			d3.select("#intro"+"1"+count).style("border-bottom","1px solid #fbd775");

			d3.select("#chart"+"2"+count).selectAll("svg").remove();
			d3.select("#chart"+"2"+count).selectAll("table").remove();
			air_data = data.air[air-1].years;
			var info2 = "<table><tr><td style='font-size:15px;'>Air</td><td>" + air_data[0].year + "</td><td>" + air_data[1].year + "</td></tr><tr><td>"
						+ data.air[air-1].variable + "("+ data.air[air-1].unit +")</td><td>"+air_data[0].districts[c2]+"</td><td>"+air_data[1].districts[c2]+"</td></tr></table>";
			d3.select("#intro"+"2"+count).html(info2);
			d3.select("#intro"+"2"+count).style("border-bottom","1px solid #fbd775");

			d3.select("#block"+"3"+count).selectAll("svg").remove();
			d3.select("#block"+"3"+count).selectAll("p").remove();
			d3.select("#table"+"3"+count).selectAll("table").remove();
			air_data = data.air[air-1].years;
			var info2 = "<table><tr><td style='font-size:15px;'>Air</td><td>" + air_data[0].year + "</td><td>" + air_data[1].year + "</td></tr><tr><td>"
						+ data.air[air-1].variable + "("+ data.air[air-1].unit +")</td><td>"+air_data[0].districts.total+"</td><td>"+air_data[1].districts.total+"</td></tr></table>";
			d3.select("#table"+"3"+count).html(info2);
			d3.select("#block"+"3"+count).style("border-bottom","1px solid #fbd775");

			count++;
		};
		if (health) {
			d3.select("#chart"+"1"+count).selectAll("svg").remove();
			d3.select("#chart"+"1"+count).selectAll("table").remove();
			health_data = data.health[health-1].years;
			var info1 = "<table><tr><td style='font-size:15px;'>Health</td><td>" + health_data[0].year + "</td><td>" + health_data[1].year + "</td></tr><tr><td>"
						+ data.health[health-1].variable + "("+ data.health[health-1].unit +")</td><td>"+health_data[0].districts[c1]+"</td><td>"+health_data[1].districts[c1]+"</td></tr></table>";
			d3.select("#intro"+"1"+count).html(info1);
			d3.select("#intro"+"1"+count).style("border-bottom","1px solid #fbd775");

			d3.select("#chart"+"2"+count).selectAll("svg").remove();
			d3.select("#chart"+"2"+count).selectAll("table").remove();
			health_data = data.health[health-1].years;
			var info2 = "<table><tr><td style='font-size:15px;'>Health</td><td>" + health_data[0].year + "</td><td>" + health_data[1].year + "</td></tr><tr><td>"
						+ data.health[health-1].variable + "("+ data.health[health-1].unit +")</td><td>"+health_data[0].districts[c2]+"</td><td>"+health_data[1].districts[c2]+"</td></tr></table>";
			d3.select("#intro"+"2"+count).html(info2);
			d3.select("#intro"+"2"+count).style("border-bottom","1px solid #fbd775");
			d3.select("#block"+"3"+count).selectAll("svg").remove();
			d3.select("#block"+"3"+count).selectAll("p").remove();
			d3.select("#table"+"3"+count).selectAll("table").remove();
			health_data = data.health[health-1].years;
			var info2 = "<table><tr><td style='font-size:15px;'>Health</td><td>" + health_data[0].year + "</td><td>" + health_data[1].year + "</td></tr><tr><td>"
						+ data.health[health-1].variable + "("+ data.health[health-1].unit +")</td><td>"+health_data[0].districts.total+"</td><td>"+health_data[1].districts.total+"</td></tr></table>";
			d3.select("#table"+"3"+count).html(info2);
			d3.select("#block"+"3"+count).style("border-bottom","1px solid #fbd775");
			count++;
		};
		if (land) {
			d3.select("#chart"+"1"+count).selectAll("svg").remove();
			d3.select("#chart"+"1"+count).selectAll("table").remove();
			land_data = data.land[land-1].years;
			var info1 = "<table><tr><td style='font-size:15px;'>Land</td><td>" + land_data[0].year + "</td><td>" + land_data[1].year + "</td></tr><tr><td>"
						+ data.land[land-1].variable + "("+ data.land[land-1].unit +")</td><td>"+land_data[0].districts[c1]+"</td><td>"+land_data[1].districts[c1]+"</td></tr></table>";
			d3.select("#intro"+"1"+count).html(info1);
			d3.select("#intro"+"1"+count).style("border-bottom","1px solid #fbd775");

			d3.select("#chart"+"2"+count).selectAll("svg").remove();
			d3.select("#chart"+"2"+count).selectAll("table").remove();
			land_data = data.land[land-1].years;
			var info2 = "<table><tr><td style='font-size:15px;'>Land</td><td>" + land_data[0].year + "</td><td>" + land_data[1].year + "</td></tr><tr><td>"
						+ data.land[land-1].variable + "("+ data.land[land-1].unit +")</td><td>"+land_data[0].districts[c2]+"</td><td>"+land_data[1].districts[c2]+"</td></tr></table>";
			d3.select("#intro"+"2"+count).html(info2);
			d3.select("#intro"+"2"+count).style("border-bottom","1px solid #fbd775");
			d3.select("#block"+"3"+count).selectAll("svg").remove();
			d3.select("#block"+"3"+count).selectAll("p").remove();
			d3.select("#table"+"3"+count).selectAll("table").remove();
			land_data = data.land[land-1].years;
			var info2 = "<table><tr><td style='font-size:15px;'>Land</td><td>" + land_data[0].year + "</td><td>" + land_data[1].year + "</td></tr><tr><td>"
						+ data.land[land-1].variable + "("+ data.land[land-1].unit +")</td><td>"+land_data[0].districts.total+"</td><td>"+land_data[1].districts.total+"</td></tr></table>";
			d3.select("#table"+"3"+count).html(info2);
			d3.select("#bl"+"3"+count).style("border-bottom","1px solid #fbd775");
			count++;
		};
		if (neighbor) {
			d3.select("#chart"+"1"+count).selectAll("svg").remove();
			d3.select("#chart"+"1"+count).selectAll("table").remove();
			neighbor_data = data.neighbor[neighbor-1].years;
			var info1 = "<table><tr><td style='font-size:15px;'>Neighborhoods</td><td>" + neighbor_data[0].year + "</td><td>" + neighbor_data[1].year + "</td></tr><tr><td>"
						+ data.neighbor[neighbor-1].variable + "("+ data.neighbor[neighbor-1].unit +")</td><td>"+neighbor_data[0].districts[c1]+"</td><td>"+neighbor_data[1].districts[c1]+"</td></tr></table>";
			d3.select("#intro"+"1"+count).html(info1);
			d3.select("#intro"+"1"+count).style("border-bottom","1px solid #fbd775");

			d3.select("#chart"+"2"+count).selectAll("svg").remove();
			d3.select("#chart"+"2"+count).selectAll("table").remove();
			neighbor_data = data.neighbor[neighbor-1].years;
			var info2 = "<table><tr><td style='font-size:15px;'>Neighborhoods</td><td>" + neighbor_data[0].year + "</td><td>" + neighbor_data[1].year + "</td></tr><tr><td>"
						+ data.neighbor[neighbor-1].variable + "("+ data.neighbor[neighbor-1].unit +")</td><td>"+neighbor_data[0].districts[c2]+"</td><td>"+neighbor_data[1].districts[c2]+"</td></tr></table>";
			d3.select("#intro"+"2"+count).html(info2);
			d3.select("#intro"+"2"+count).style("border-bottom","1px solid #fbd775");
			d3.select("#block"+"3"+count).selectAll("svg").remove();
			d3.select("#block"+"3"+count).selectAll("p").remove();
			d3.select("#table"+"3"+count).selectAll("table").remove();
			neighbor_data = data.neighbor[neighbor-1].years;
			var info2 = "<table><tr><td style='font-size:15px;'>Neighborhoods</td><td>" + neighbor_data[0].year + "</td><td>" + neighbor_data[1].year + "</td></tr><tr><td>"
						+ data.neighbor[neighbor-1].variable + "("+ data.neighbor[neighbor-1].unit +")</td><td>"+neighbor_data[0].districts.total+"</td><td>"+neighbor_data[1].districts.total+"</td></tr></table>";
			d3.select("#table"+"3"+count).html(info2);
			d3.select("#block"+"3"+count).style("border-bottom","1px solid #fbd775");
			count++;
		};
		if (trans) {
			d3.select("#chart"+"1"+count).selectAll("svg").remove();
			d3.select("#chart"+"1"+count).selectAll("table").remove();
			trans_data = data.trans[trans-1].years;
			var info1 = "<table><tr><td style='font-size:15px;'>Transportation</td><td>" + trans_data[0].year + "</td><td>" + trans_data[1].year + "</td></tr><tr><td>"
						+ data.trans[trans-1].variable + "("+ data.trans[trans-1].unit +")</td><td>"+trans_data[0].districts[c1]+"</td><td>"+trans_data[1].districts[c1]+"</td></tr></table>";
			d3.select("#intro"+"1"+count).html(info1);
			d3.select("#intro"+"1"+count).style("border-bottom","1px solid #fbd775");

			d3.select("#chart"+"2"+count).selectAll("svg").remove();
			d3.select("#chart"+"2"+count).selectAll("table").remove();
			trans_data = data.trans[trans-1].years;
			var info2 = "<table><tr><td style='font-size:15px;'>Transportation</td><td>" + trans_data[0].year + "</td><td>" + trans_data[1].year + "</td></tr><tr><td>"
						+ data.trans[trans-1].variable + "("+ data.trans[trans-1].unit +")</td><td>"+trans_data[0].districts[c2]+"</td><td>"+trans_data[1].districts[c2]+"</td></tr></table>";
			d3.select("#intro"+"2"+count).html(info2);
			d3.select("#intro"+"2"+count).style("border-bottom","1px solid #fbd775");
			d3.select("#block"+"3"+count).selectAll("svg").remove();
			d3.select("#block"+"3"+count).selectAll("p").remove();
			d3.select("#table"+"3"+count).selectAll("table").remove();
			trans_data = data.trans[trans-1].years;
			var info2 = "<table><tr><td style='font-size:15px;'>Transportation</td><td>" + trans_data[0].year + "</td><td>" + trans_data[1].year + "</td></tr><tr><td>"
						+ data.trans[trans-1].variable + "("+ data.trans[trans-1].unit +")</td><td>"+trans_data[0].districts.total+"</td><td>"+trans_data[1].districts.total+"</td></tr></table>";
			d3.select("#table"+"3"+count).html(info2);
			d3.select("#block"+"3"+count).style("border-bottom","1px solid #fbd775");
			count++;
		};
		if (waste) {
			d3.select("#chart"+"1"+count).selectAll("svg").remove();
			d3.select("#chart"+"1"+count).selectAll("table").remove();
			waste_data = data.waste[waste-1].years;
			var info1 = "<table><tr><td style='font-size:15px;'>Waste</td><td>" + waste_data[0].year + "</td><td>" + waste_data[1].year + "</td></tr><tr><td>"
						+ data.waste[waste-1].variable + "("+ data.waste[waste-1].unit +")</td><td>"+waste_data[0].districts[c1]+"</td><td>"+waste_data[1].districts[c1]+"</td></tr></table>";
			d3.select("#intro"+"1"+count).html(info1);
			d3.select("#intro"+"1"+count).style("border-bottom","1px solid #fbd775");

			d3.select("#chart"+"2"+count).selectAll("svg").remove();
			d3.select("#chart"+"2"+count).selectAll("table").remove();
			waste_data = data.waste[waste-1].years;
			var info2 = "<table><tr><td style='font-size:15px;'>Waste</td><td>" + waste_data[0].year + "</td><td>" + waste_data[1].year + "</td></tr><tr><td>"
						+ data.waste[waste-1].variable + "("+ data.waste[waste-1].unit +")</td><td>"+waste_data[0].districts[c2]+"</td><td>"+waste_data[1].districts[c2]+"</td></tr></table>";
			d3.select("#intro"+"2"+count).html(info2);
			d3.select("#intro"+"2"+count).style("border-bottom","1px solid #fbd775");
			d3.select("#block"+"3"+count).selectAll("svg").remove();
			d3.select("#block"+"3"+count).selectAll("p").remove();
			d3.select("#table"+"3"+count).selectAll("table").remove();
			waste_data = data.waste[waste-1].years;
			var info2 = "<table><tr><td style='font-size:15px;'>Waste</td><td>" + waste_data[0].year + "</td><td>" + waste_data[1].year + "</td></tr><tr><td>"
						+ data.waste[waste-1].variable + "("+ data.waste[waste-1].unit +")</td><td>"+waste_data[0].districts.total+"</td><td>"+waste_data[1].districts.total+"</td></tr></table>";
			d3.select("#table"+"3"+count).html(info2);
			d3.select("#block"+"3"+count).style("border-bottom","1px solid #fbd775");
			count++;
		};
	});
}

function drawBarChart(count, filter_data, c1, c2, category, variable, unit,width_ratio){
	d3.select("#chart"+"1"+count).selectAll("svg").remove();
			var svg1 = d3.select("#chart"+"1"+count).append("svg").attr("width",255).attr("height",70);
			max_width = Math.max(filter_data[0].districts[c1],filter_data[0].districts[c2],filter_data[1].districts[c1],filter_data[1].districts[c2]);
			svg1.append("text").text(filter_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg1.append("rect").attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19").attr("width",0).transition().duration(1000).attr("width",filter_data[0].districts[c1]/max_width*width_ratio);
			svg1.append("text").text(numberFormat(filter_data[0].districts[c1])).attr("x",70).attr("y",20).attr("fill","black");
			svg1.append("text").text(filter_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg1.append("rect").attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775").attr("width",0).transition().duration(1000).attr("width",filter_data[1].districts[c1]/max_width*width_ratio);
			svg1.append("text").text(numberFormat(filter_data[1].districts[c1])).attr("x",70).attr("y",60).attr("fill","black");
			var info1 = "<p>Category : " + category + "</p><p>Variable :" +  variable + "</p><p>Unit : " + unit
						+ "</p><p>Year" + filter_data[0].year + " : " + numberFormat(filter_data[0].districts[c1]) +  "</p><p>Year" + filter_data[1].year + " : " + numberFormat(filter_data[1].districts[c1]);
			d3.select("#intro"+"1"+count).selectAll("p").remove();
			d3.select("#intro"+"1"+count).html(info1);
			d3.select("#intro"+"1"+count).style("border-bottom","1px solid #fbd775");

			d3.select("#chart"+"2"+count).selectAll("svg").remove();
			svg2 = d3.select("#chart"+"2"+count).append("svg").attr("width",255).attr("height",70);
			svg2.append("text").text(filter_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg2.append("rect").attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19").attr("width",0).transition().duration(1000).attr("width",filter_data[0].districts[c2]/max_width*width_ratio);
			svg2.append("text").text(numberFormat(filter_data[0].districts[c2])).attr("x",70).attr("y",20).attr("fill","black");
			svg2.append("text").text(filter_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg2.append("rect").attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775").attr("width",0).transition().duration(1000).attr("width",filter_data[1].districts[c2]/max_width*width_ratio);
			svg2.append("text").text(numberFormat(filter_data[1].districts[c2])).attr("x",70).attr("y",60).attr("fill","black");
			var info2 = "<p>Category : " + category + "</p><p>Variable :" +  variable + "</p><p>Unit : " + unit
						+ "</p><p>Year" + filter_data[0].year + " : " + numberFormat(filter_data[0].districts[c2]) +  "</p><p>Year" + filter_data[1].year + " : " + numberFormat(filter_data[1].districts[c2]);
			d3.select("#intro"+"2"+count).selectAll("p").remove();
			d3.select("#intro"+"2"+count).html(info2);
			d3.select("#intro"+"2"+count).style("border-bottom","1px solid #fbd775");
}

function numberFormat(num){
	if(num <= 1){
		return Math.round(num*10000)/100 + "%";
	}
	else if (num >= 1000) {
		num += '';
	    var x = num.split('.');
	    var x1 = x[0];
	    var x2 = x.length > 1 ? '.' + x[1] : '';
	    var rgx = /(\d+)(\d{3})/;
	    while (rgx.test(x1)) {
	        x1 = x1.replace(rgx, '$1' + ',' + '$2');
	    }
	    return x1 + x2;
	} else {
		return num;
	}
}








