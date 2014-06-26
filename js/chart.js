$(document).ready(function(){
	
	$("#show-chart").on("click",function(){
		var air=0, health=0, land=0, neighbor=0, trans=0, waste=0, c1=1, c2=2;
		var mode = 1;
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
			d3.select("#chart"+"1"+count).selectAll("svg").remove();
			svg1 = d3.select("#chart"+"1"+count).append("svg").attr("width",255).attr("height",70);
			air_data = data.air[air-1].years;
			max_width = Math.max(air_data[0].districts[c1],air_data[0].districts[c2],air_data[1].districts[c1],air_data[1].districts[c2]);
			svg1.append("text").text(air_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg1.append("rect").attr("width",air_data[0].districts[c1]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19");
			svg1.append("text").text(air_data[0].districts[c1]).attr("x",70).attr("y",20).attr("fill","black");
			svg1.append("text").text(air_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg1.append("rect").attr("width",air_data[1].districts[c1]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775");
			svg1.append("text").text(air_data[1].districts[c1]).attr("x",70).attr("y",60).attr("fill","black");
			var info1 = "<p>Category : " + "Air" + "</p><p>Variable :" +  data.air[air-1].variable + "</p><p>Unit : " + data.air[air-1].unit 
						+ "</p><p>Year" + air_data[0].year + " : " + air_data[0].districts[c1] +  "</p><p>Year" + air_data[1].year + " : " + air_data[1].districts[c1];
			d3.select("#intro"+"1"+count).selectAll("p").remove();
			d3.select("#intro"+"1"+count).html(info1);
			d3.select("#intro"+"1"+count).style("border-bottom","1px solid #fbd775");

			d3.select("#chart"+"2"+count).selectAll("svg").remove();
			svg2 = d3.select("#chart"+"2"+count).append("svg").attr("width",255).attr("height",70);
			svg2.append("text").text(air_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg2.append("rect").attr("width",air_data[0].districts[c2]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19");
			svg2.append("text").text(air_data[0].districts[c2]).attr("x",70).attr("y",20).attr("fill","black");
			svg2.append("text").text(air_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg2.append("rect").attr("width",air_data[1].districts[c2]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775");
			svg2.append("text").text(air_data[1].districts[c2]).attr("x",70).attr("y",60).attr("fill","black");
			var info2 = "<p>Category : " + "Air" + "</p><p>Variable :" +  data.air[air-1].variable + "</p><p>Unit : " + data.air[air-1].unit 
						+ "</p><p>Year" + air_data[0].year + " : " + air_data[0].districts[c2] +  "</p><p>Year" + air_data[1].year + " : " + air_data[1].districts[c2];
			d3.select("#intro"+"2"+count).selectAll("p").remove();
			d3.select("#intro"+"2"+count).html(info2);
			d3.select("#intro"+"2"+count).style("border-bottom","1px solid #fbd775");

			max_total = Math.max(air_data[0].districts.total,air_data[1].districts.total);
			d3.select("#chart"+"3"+count).selectAll("svg").remove();
			d3.select("#table"+"3"+count).selectAll("table").remove();
			svg3 = d3.select("#chart"+"3"+count).append("svg").attr("width",255).attr("height",70);
			svg3.append("text").text(air_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg3.append("rect").attr("width",air_data[0].districts.total/max_total*width_ratio).attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19");
			svg3.append("text").text(air_data[0].districts.total).attr("x",70).attr("y",20).attr("fill","black");
			svg3.append("text").text(air_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg3.append("rect").attr("width",air_data[1].districts.total/max_total*width_ratio).attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775");
			svg3.append("text").text(air_data[1].districts.total).attr("x",70).attr("y",60).attr("fill","black");
			var info3 = "<p>Category : " + "Air" + "</p><p>Variable :" +  data.air[air-1].variable + "</p><p>Unit : " + data.air[air-1].unit 
						+ "</p><p>Year" + air_data[0].year + " : " + air_data[0].districts.total +  "</p><p>Year" + air_data[1].year + " : " + air_data[1].districts.total;
			d3.select("#intro"+"3"+count).selectAll("p").remove();
			d3.select("#intro"+"3"+count).html(info3);
			d3.select("#block"+"3"+count).style("border-bottom","1px solid #fbd775");

			count++;
		};
		if (health) {
			d3.select("#chart"+"1"+count).selectAll("svg").remove();
			svg1 = d3.select("#chart"+"1"+count).append("svg").attr("width",255).attr("height",180);
			health_data = data.health[health-1].years;
			max_radius = Math.max(health_data[0].districts[c1],health_data[0].districts[c2],health_data[1].districts[c1],health_data[1].districts[c2]);
			
			var radius_ratio = 80;
			var center = 120;
			var r1 = health_data[0].districts[c1]/max_radius*radius_ratio;
			var r2 = health_data[1].districts[c1]/max_radius*radius_ratio;
			if (r1 > r2) {
				svg1.append("circle").attr("cx",center+10).attr("cy",r1+10).attr("r",r1).attr("fill","#f8bc19");
				svg1.append("circle").attr("cx",center+10).attr("cy",r1+r1-r2+10).attr("r",r2).attr("fill","#fbd775");
				svg1.append("text").attr("x",center).attr("y",20).attr("font-size","10px").attr("fill","black").text(health_data[0].districts[c1]);
				svg1.append("text").attr("x",center).attr("y",30).attr("font-size","10px").attr("fill","black").text(health_data[0].year);
				svg1.append("text").attr("x",center).attr("y",r1*2-10).attr("font-size","10px").attr("fill","black").text(health_data[1].districts[c1]);
				svg1.append("text").attr("x",center).attr("y",r1*2).attr("font-size","10px").attr("fill","black").text(health_data[1].year);
			} else {
				svg1.append("circle").attr("cx",center+10).attr("cy",r2+10).attr("r",r2).attr("fill","#fbd775");
				svg1.append("circle").attr("cx",center+10).attr("cy",r2+r2-r1+10).attr("r",r1).attr("fill","#f8bc19");
				svg1.append("text").attr("x",center).attr("y",r2*2-10).attr("font-size","10px").attr("fill","black").text(health_data[0].districts[c1]);
				svg1.append("text").attr("x",center).attr("y",r2*2).attr("font-size","10px").attr("fill","black").text(health_data[0].year);
				svg1.append("text").attr("x",center).attr("y",20).attr("font-size","10px").attr("fill","black").text(health_data[1].districts[c1]);
				svg1.append("text").attr("x",center).attr("y",30).attr("font-size","10px").attr("fill","black").text(health_data[1].year);
			}
			
			var info1 = "<p>Category : " + "Health" + "</p><p>Variable :" +  data.health[health-1].variable + "</p><p>Unit : " + data.health[health-1].unit 
						+ "</p><p>Year" + health_data[0].year + " : " + health_data[0].districts[c1] +  "</p><p>Year" + health_data[1].year + " : " + health_data[1].districts[c1];
			d3.select("#intro"+"1"+count).selectAll("p").remove();
			d3.select("#intro"+"1"+count).html(info1);
			d3.select("#intro"+"1"+count).style("border-bottom","1px solid #fbd775");

			d3.select("#chart"+"2"+count).selectAll("svg").remove();
			svg2 = d3.select("#chart"+"2"+count).append("svg").attr("width",255).attr("height",180);
			var r3 = health_data[0].districts[c2]/max_radius*radius_ratio;
			var r4 = health_data[1].districts[c2]/max_radius*radius_ratio;
			if (r3 > r4) {
				svg2.append("circle").attr("cx",center+10).attr("cy",r3+10).attr("r",r3).attr("fill","#f8bc19");
				svg2.append("circle").attr("cx",center+10).attr("cy",r3+r3-r4+10).attr("r",r4).attr("fill","#fbd775");
				svg2.append("text").attr("x",center).attr("y",20).attr("font-size","10px").attr("fill","black").text(health_data[0].districts[c2]);
				svg2.append("text").attr("x",center).attr("y",30).attr("font-size","10px").attr("fill","black").text(health_data[0].year);
				svg2.append("text").attr("x",center).attr("y",r3*2-10).attr("font-size","10px").attr("fill","black").text(health_data[1].districts[c2]);
				svg2.append("text").attr("x",center).attr("y",r3*2).attr("font-size","10px").attr("fill","black").text(health_data[1].year);
			} else {
				svg2.append("circle").attr("cx",center+10).attr("cy",r4+10).attr("r",r4).attr("fill","#fbd775");
				svg2.append("circle").attr("cx",center+10).attr("cy",r4+r4-r3+10).attr("r",r3).attr("fill","#f8bc19");
				svg2.append("text").attr("x",center).attr("y",r4*2-10).attr("font-size","10px").attr("fill","black").text(health_data[0].districts[c2]);
				svg2.append("text").attr("x",center).attr("y",r4*2).attr("font-size","10px").attr("fill","black").text(health_data[0].year);
				svg2.append("text").attr("x",center).attr("y",20).attr("font-size","10px").attr("fill","black").text(health_data[1].districts[c2]);
				svg2.append("text").attr("x",center).attr("y",30).attr("font-size","10px").attr("fill","black").text(health_data[1].year);
			}
			var info2 = "<p>Category : " + "Health" + "</p><p>Variable :" +  data.health[health-1].variable + "</p><p>Unit : " + data.health[health-1].unit 
						+ "</p><p>Year" + health_data[0].year + " : " + health_data[0].districts[c2] +  "</p><p>Year" + health_data[1].year + " : " + health_data[1].districts[c2];
			d3.select("#intro"+"2"+count).selectAll("p").remove();
			d3.select("#intro"+"2"+count).html(info2);
			d3.select("#intro"+"2"+count).style("border-bottom","1px solid #fbd775");

			max_total = Math.max(health_data[0].districts.total,health_data[1].districts.total);
			d3.select("#chart"+"3"+count).selectAll("svg").remove();
			d3.select("#table"+"3"+count).selectAll("table").remove();
			svg3 = d3.select("#chart"+"3"+count).append("svg").attr("width",255).attr("height",180);
			var r5 = health_data[0].districts.total/max_total*radius_ratio;
			var r6 = health_data[1].districts.total/max_total*radius_ratio;
			if (r5 > r6) {
				svg3.append("circle").attr("cx",center+10).attr("cy",r5+10).attr("r",r5).attr("fill","#f8bc19");
				svg3.append("circle").attr("cx",center+10).attr("cy",r5+r5-r6+10).attr("r",r6).attr("fill","#fbd775");
				svg3.append("text").attr("x",center).attr("y",20).attr("font-size","10px").attr("fill","black").text(health_data[0].districts.total);
				svg3.append("text").attr("x",center).attr("y",30).attr("font-size","10px").attr("fill","black").text(health_data[0].year);
				svg3.append("text").attr("x",center).attr("y",r5*2-10).attr("font-size","10px").attr("fill","black").text(health_data[1].districts.total);
				svg3.append("text").attr("x",center).attr("y",r5*2).attr("font-size","10px").attr("fill","black").text(health_data[1].year);
			} else {
				svg3.append("circle").attr("cx",center+10).attr("cy",r6+10).attr("r",r6).attr("fill","#fbd775");
				svg3.append("circle").attr("cx",center+10).attr("cy",r6+r6-r5+10).attr("r",r5).attr("fill","#f8bc19");
				svg3.append("text").attr("x",center).attr("y",r6*2-10).attr("font-size","10px").attr("fill","black").text(health_data[0].districts.total);
				svg3.append("text").attr("x",center).attr("y",r6*2).attr("font-size","10px").attr("fill","black").text(health_data[0].year);
				svg3.append("text").attr("x",center).attr("y",20).attr("font-size","10px").attr("fill","black").text(health_data[1].districts.total);
				svg3.append("text").attr("x",center).attr("y",30).attr("font-size","10px").attr("fill","black").text(health_data[1].year);
			}
			var info3 = "<p>Category : " + "Health" + "</p><p>Variable :" +  data.health[health-1].variable + "</p><p>Unit : " + data.health[health-1].unit 
						+ "</p><p>Year" + health_data[0].year + " : " + health_data[0].districts.total +  "</p><p>Year" + health_data[1].year + " : " + health_data[1].districts.total;
			d3.select("#intro"+"3"+count).selectAll("p").remove();
			d3.select("#intro"+"3"+count).html(info3);
			d3.select("#block"+"3"+count).style("border-bottom","1px solid #fbd775");

			count++;
		};
		if (land) {
			d3.select("#chart"+"1"+count).selectAll("svg").remove();
			svg1 = d3.select("#chart"+"1"+count).append("svg").attr("width",255).attr("height",70);
			land_data = data.land[land-1].years;
			max_width = Math.max(land_data[0].districts[c1],land_data[0].districts[c2],land_data[1].districts[c1],land_data[1].districts[c2]);
			svg1.append("text").text(land_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg1.append("rect").attr("width",land_data[0].districts[c1]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19");
			svg1.append("text").text(land_data[0].districts[c1]).attr("x",70).attr("y",20).attr("fill","black");
			svg1.append("text").text(land_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg1.append("rect").attr("width",land_data[1].districts[c1]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775");
			svg1.append("text").text(land_data[1].districts[c1]).attr("x",70).attr("y",60).attr("fill","black");
			var info1 = "<p>Category : " + "Land" + "</p><p>Variable :" +  data.land[land-1].variable + "</p><p>Unit : " + data.land[land-1].unit 
						+ "</p><p>Year" + land_data[0].year + " : " + land_data[0].districts[c1] +  "</p><p>Year" + land_data[1].year + " : " + land_data[1].districts[c1];
			d3.select("#intro"+"1"+count).selectAll("p").remove();
			d3.select("#intro"+"1"+count).html(info1);
			d3.select("#intro"+"1"+count).style("border-bottom","1px solid #fbd775");

			d3.select("#chart"+"2"+count).selectAll("svg").remove();
			svg2 = d3.select("#chart"+"2"+count).append("svg").attr("width",255).attr("height",70);
			svg2.append("text").text(land_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg2.append("rect").attr("width",land_data[0].districts[c2]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19");
			svg2.append("text").text(land_data[0].districts[c2]).attr("x",70).attr("y",20).attr("fill","black");
			svg2.append("text").text(land_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg2.append("rect").attr("width",land_data[1].districts[c2]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775");
			svg2.append("text").text(land_data[1].districts[c2]).attr("x",70).attr("y",60).attr("fill","black");
			var info2 = "<p>Category : " + "Land" + "</p><p>Variable :" +  data.land[land-1].variable + "</p><p>Unit : " + data.land[land-1].unit 
						+ "</p><p>Year" + land_data[0].year + " : " + land_data[0].districts[c2] +  "</p><p>Year" + land_data[1].year + " : " + land_data[1].districts[c2];
			d3.select("#intro"+"2"+count).selectAll("p").remove();
			d3.select("#intro"+"2"+count).html(info2);
			d3.select("#intro"+"2"+count).style("border-bottom","1px solid #fbd775");

			max_total = Math.max(land_data[0].districts.total,land_data[1].districts.total);
			d3.select("#chart"+"3"+count).selectAll("svg").remove();
			d3.select("#table"+"3"+count).selectAll("table").remove();
			svg3 = d3.select("#chart"+"3"+count).append("svg").attr("width",255).attr("height",70);
			svg3.append("text").text(land_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg3.append("rect").attr("width",land_data[0].districts.total/max_total*width_ratio).attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19");
			svg3.append("text").text(land_data[0].districts.total).attr("x",70).attr("y",20).attr("fill","black");
			svg3.append("text").text(land_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg3.append("rect").attr("width",land_data[1].districts.total/max_total*width_ratio).attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775");
			svg3.append("text").text(land_data[1].districts.total).attr("x",70).attr("y",60).attr("fill","black");
			var info3 = "<p>Category : " + "Land" + "</p><p>Variable :" +  data.land[land-1].variable + "</p><p>Unit : " + data.land[land-1].unit 
						+ "</p><p>Year" + land_data[0].year + " : " + land_data[0].districts.total +  "</p><p>Year" + land_data[1].year + " : " + land_data[1].districts.total;
			d3.select("#intro"+"3"+count).selectAll("p").remove();
			d3.select("#intro"+"3"+count).html(info3);
			d3.select("#block"+"3"+count).style("border-bottom","1px solid #fbd775");

			count++;
		};
		if (neighbor) {
			d3.select("#chart"+"1"+count).selectAll("svg").remove();
			svg1 = d3.select("#chart"+"1"+count).append("svg").attr("width",255).attr("height",70);
			neighbor_data = data.neighbor[neighbor-1].years;
			max_width = Math.max(neighbor_data[0].districts[c1],neighbor_data[0].districts[c2],neighbor_data[1].districts[c1],neighbor_data[1].districts[c2]);
			svg1.append("text").text(neighbor_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg1.append("rect").attr("width",neighbor_data[0].districts[c1]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19");
			svg1.append("text").text(neighbor_data[0].districts[c1]).attr("x",70).attr("y",20).attr("fill","black");
			svg1.append("text").text(neighbor_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg1.append("rect").attr("width",neighbor_data[1].districts[c1]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775");
			svg1.append("text").text(neighbor_data[1].districts[c1]).attr("x",70).attr("y",60).attr("fill","black");
			var info1 = "<p>Category : " + "Neighborhoods" + "</p><p>Variable :" +  data.neighbor[neighbor-1].variable + "</p><p>Unit : " + data.neighbor[neighbor-1].unit 
						+ "</p><p>Year" + neighbor_data[0].year + " : " + neighbor_data[0].districts[c1] +  "</p><p>Year" + neighbor_data[1].year + " : " + neighbor_data[1].districts[c1];
			d3.select("#intro"+"1"+count).selectAll("p").remove();
			d3.select("#intro"+"1"+count).html(info1);
			d3.select("#intro"+"1"+count).style("border-bottom","1px solid #fbd775");

			d3.select("#chart"+"2"+count).selectAll("svg").remove();
			svg2 = d3.select("#chart"+"2"+count).append("svg").attr("width",255).attr("height",70);
			svg2.append("text").text(neighbor_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg2.append("rect").attr("width",neighbor_data[0].districts[c2]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19");
			svg2.append("text").text(neighbor_data[0].districts[c2]).attr("x",70).attr("y",20).attr("fill","black");
			svg2.append("text").text(neighbor_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg2.append("rect").attr("width",neighbor_data[1].districts[c2]/max_width*width_ratio).attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775");
			svg2.append("text").text(neighbor_data[1].districts[c2]).attr("x",70).attr("y",60).attr("fill","black");
			var info2 = "<p>Category : " + "Neighborhoods" + "</p><p>Variable :" +  data.neighbor[neighbor-1].variable + "</p><p>Unit : " + data.neighbor[neighbor-1].unit 
						+ "</p><p>Year" + neighbor_data[0].year + " : " + neighbor_data[0].districts[c2] +  "</p><p>Year" + neighbor_data[1].year + " : " + neighbor_data[1].districts[c2];
			d3.select("#intro"+"2"+count).selectAll("p").remove();
			d3.select("#intro"+"2"+count).html(info2);
			d3.select("#intro"+"2"+count).style("border-bottom","1px solid #fbd775");

			max_total = Math.max(neighbor_data[0].districts.total,neighbor_data[1].districts.total);
			d3.select("#chart"+"3"+count).selectAll("svg").remove();
			d3.select("#table"+"3"+count).selectAll("table").remove();
			svg3 = d3.select("#chart"+"3"+count).append("svg").attr("width",255).attr("height",70);
			svg3.append("text").text(neighbor_data[0].year).attr("x",0).attr("y",20).attr("fill","#f8bc19");
			svg3.append("rect").attr("width",neighbor_data[0].districts.total/max_total*width_ratio).attr("height",20).attr("x",60).attr("y",5).attr("fill","#f8bc19");
			svg3.append("text").text(neighbor_data[0].districts.total).attr("x",70).attr("y",20).attr("fill","black");
			svg3.append("text").text(neighbor_data[1].year).attr("x",0).attr("y",60).attr("fill","#fbd775");
			svg3.append("rect").attr("width",neighbor_data[1].districts.total/max_total*width_ratio).attr("height",20).attr("x",60).attr("y",45).attr("fill","#fbd775");
			svg3.append("text").text(neighbor_data[1].districts.total).attr("x",70).attr("y",60).attr("fill","black");
			var info3 = "<p>Category : " + "Neighborhoods" + "</p><p>Variable :" +  data.neighbor[neighbor-1].variable + "</p><p>Unit : " + data.neighbor[neighbor-1].unit 
						+ "</p><p>Year" + neighbor_data[0].year + " : " + neighbor_data[0].districts.total +  "</p><p>Year" + neighbor_data[1].year + " : " + neighbor_data[1].districts.total;
			d3.select("#intro"+"3"+count).selectAll("p").remove();
			d3.select("#intro"+"3"+count).html(info3);
			d3.select("#block"+"3"+count).style("border-bottom","1px solid #fbd775");

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










