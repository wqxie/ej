$(document).ready(function(){
	$("label.css-label img").on("mouseover",function(){
		var tooltip = d3.select("body").append("div")
			                  .style("position", "absolute")
			                  .style("z-index", "100")
			                  .attr("class","tooltip");
		tooltip.html($(this).data("name"));
		tooltip.style("visibility", "visible");	
		tooltip.style("top",(event.pageY-40)+"px").style("left",(event.pageX-30)+"px");	
	});
	$("label.css-label img").on("mouseout",function(){
		d3.selectAll(".tooltip").remove();
	});
	$("input[type=checkbox]").click(function(){
		updateSvg();
	});
	$("#showoption").on("change",function(){
		updateSvg();
	});
	$("#c1").on("change",function(){
		updateSvg();
	});
	$("#c2").on("change",function(){
		updateSvg();
	});
	function updateSvg(){
		var mode = $("#showoption option:selected").val();
		if(mode == 1){
			var air1=0, air2=0,health1=0,health2=0,land=0,neighbor=0,trans=0,waste1=0,waste2=0, c1=1, c2=2;
			var mode = 1;
			d3.selectAll("svg").remove();
			d3.selectAll(".chart-intro").selectAll("p").remove();
			d3.selectAll(".chart-intro").style("border-bottom","0px");
			d3.selectAll(".chart-block").style("border-bottom","0px");
			if($('#air1').is(':checked')){
				air1=1;
			}
			if($('#air2').is(':checked')){
				air2=1;
			}
			if($('#health1').is(':checked')){
				health1=1;
			}
			if($('#health2').is(':checked')){
				health2=1;
			}
			if($('#land').is(':checked')){
				land=1;
			}
			if($('#neighbor').is(':checked')){
				neighbor=1;
			}
			if($('#trans').is(':checked')){
				trans=1;
			}
			if($('#waste1').is(':checked')){
				waste1=1;
			}
			if($('#waste2').is(':checked')){
				waste2=1;
			}
			if ($('#c1 option:selected').val()) {
				c1 = $('#c1 option:selected').val();
			};
			if ($('#c2 option:selected').val()) {
				c2 = $('#c2 option:selected').val();
			};
			if (air1+ air2+health1+health2+land+neighbor+trans+waste1+waste2>0) {
				drawChart(air1, air2,health1,health2,land,neighbor,trans,waste1,waste2,c1,c2);
			};
		} else if(mode == 2){
			var air1=0, air2=0,health1=0,health2=0,land=0,neighbor=0,trans=0,waste1=0,waste2=0, c1=1, c2=2;
			var mode = 2;
			d3.selectAll("svg").remove();
			d3.selectAll("table").remove();
			d3.selectAll(".chart-intro").selectAll("p").remove();
			d3.selectAll(".chart-intro").style("border-bottom","0px");
			d3.selectAll(".chart-block").style("border-bottom","0px");
			if($('#air1').is(':checked')){
				air1=1;
			}
			if($('#air2').is(':checked')){
				air2=1;
			}
			if($('#health1').is(':checked')){
				health1=1;
			}
			if($('#health2').is(':checked')){
				health2=1;
			}
			if($('#land').is(':checked')){
				land=1;
			}
			if($('#neighbor').is(':checked')){
				neighbor=1;
			}
			if($('#trans').is(':checked')){
				trans=1;
			}
			if($('#waste1').is(':checked')){
				waste1=1;
			}
			if($('#waste2').is(':checked')){
				waste2=1;
			}
			if ($('#c1 option:selected').val()) {
				c1 = $('#c1 option:selected').val();
			};
			if ($('#c2 option:selected').val()) {
				c2 = $('#c2 option:selected').val();
			};
			if (air1+ air2+health1+health2+land+neighbor+trans+waste1+waste2>0) {
				drawTable(air1, air2,health1,health2,land,neighbor,trans,waste1,waste2,c1,c2);
			};
		}
	}

});
function drawChart(air1, air2,health1,health2,land,neighbor,trans,waste1,waste2,c1,c2){
	d3.json("js/fake2.json", function(error, data) {
		var count = 1;
		var width_ratio = 180;
		if (air1) {
			air_data = data.air[0].years;
			drawBarChart(count, air_data, c1, c2, "Air", data.air[0].variable, data.air[0].unit, width_ratio);
			drawTotal(count, air_data, c1, c2, "Air", data.air[0].variable, data.air[0].unit, width_ratio);
			count++;
		};
		if (air2) {
			air_data = data.air[1].years;
			drawBarChart(count, air_data, c1, c2, "Air", data.air[1].variable, data.air[1].unit, width_ratio);
			drawTotal(count, air_data, c1, c2, "Air", data.air[0].variable, data.air[0].unit, width_ratio);
			count++;
		};
		if (health1) {
			health_data = data.health[0].years;
			drawAreaChart(count, health_data, c1, c2, "Health", data.health[0].variable, data.health[0].unit, width_ratio);
			drawTotal(count, health_data, c1, c2, "Health", data.health[0].variable, data.health[0].unit, width_ratio);
			count++;
		};
		if (health2) {
			health_data = data.health[1].years;
			drawBarChart(count, health_data, c1, c2, "Health", data.health[1].variable, data.health[1].unit, width_ratio);
			drawTotal(count, health_data, c1, c2, "Health", data.health[1].variable, data.health[1].unit, width_ratio);
			count++;
		};
		if (land) {
			land_data = data.land[0].years;
			drawAreaChart(count, land_data, c1, c2, "Land", data.land[0].variable, data.land[0].unit, width_ratio);
			drawTotal(count, land_data, c1, c2, "Land", data.land[0].variable, data.land[0].unit, width_ratio);
			count++;
		};
		if (neighbor) {
			neighbor_data = data.neighbor[0].years;
			drawBarChart(count, neighbor_data, c1, c2, "Neighborhoods", data.neighbor[0].variable, data.neighbor[0].unit, width_ratio);
			drawTotal(count, neighbor_data, c1, c2, "Neighborhoods", data.neighbor[0].variable, data.neighbor[0].unit, width_ratio);
			count++;
		};
		if (trans) {
			trans_data = data.trans[0].years;
			drawAreaChart(count, trans_data, c1, c2, "Transportation", data.trans[0].variable, data.trans[0].unit, width_ratio);
			drawTotal(count, trans_data, c1, c2, "Transportation", data.trans[0].variable, data.trans[0].unit, width_ratio);
			count++;
		};
		if (waste1) {
			waste_data = data.waste[0].years;
			drawAreaChart(count, waste_data, c1, c2, "Waste", data.waste[0].variable, data.waste[0].unit, width_ratio);
			drawTotal(count, waste_data, c1, c2, "Waste", data.waste[0].variable, data.waste[0].unit, width_ratio);
			count++;
		};
		if (waste2) {
			waste_data = data.waste[1].years;
			drawBarChart(count, waste_data, c1, c2, "Waste", data.waste[1].variable, data.waste[1].unit, width_ratio);
			drawTotal(count, waste_data, c1, c2, "Waste", data.waste[1].variable, data.waste[1].unit, width_ratio);
			count++;
		};			
	});
	
}
function drawTable(air1, air2,health1,health2,land,neighbor,trans,waste1,waste2,c1,c2){
	d3.json("js/fake2.json", function(error, data) {
		var count = 1;
		if (air1) {
			air_data = data.air[0].years;
			drawDataTable(count, air_data, c1, c2, "Air", data.air[0].variable, data.air[0].unit);
			count++;
		};
		if (air2) {
			air_data = data.air[1].years;
			drawDataTable(count, air_data, c1, c2, "Air", data.air[1].variable, data.air[1].unit);
			count++;
		};
		if (health1) {
			health_data = data.health[0].years;
			drawDataTable(count, health_data, c1, c2, "Health", data.health[0].variable, data.health[0].unit);
			count++;
		};
		if (health2) {
			health_data = data.health[1].years;
			drawDataTable(count, health_data, c1, c2, "Health", data.health[1].variable, data.health[1].unit);
			count++;
		};
		if (land) {
			land_data = data.land[0].years;
			drawDataTable(count, land_data, c1, c2, "Land", data.land[0].variable, data.land[0].unit);
			count++;
		};
		if (neighbor) {
			neighbor_data = data.neighbor[0].years;
			drawDataTable(count, neighbor_data, c1, c2, "Neighborhoods", data.neighbor[0].variable, data.neighbor[0].unit);
			count++;
		};
		if (trans) {
			trans_data = data.trans[0].years;
			drawDataTable(count, trans_data, c1, c2, "Transportation", data.trans[0].variable, data.trans[0].unit);
			count++;
		};
		if (waste1) {
			waste_data = data.waste[0].years;
			drawDataTable(count, waste_data, c1, c2, "Waste", data.waste[0].variable, data.waste[0].unit);
			count++;
		};
		if (waste2) {
			waste_data = data.waste[1].years;
			drawDataTable(count, waste_data, c1, c2, "Waste", data.waste[1].variable, data.waste[1].unit);
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

function drawAreaChart(count, filter_data, c1, c2, category, variable, unit, width_ratio){
	d3.select("#chart"+"1"+count).selectAll("svg").remove();
	d3.select("#chart"+"2"+count).selectAll("svg").remove();
	var svg1 = d3.select("#chart"+"1"+count).append("svg").attr("width",255).attr("height",150);
	max_width = Math.max(filter_data[0].districts[c1],filter_data[0].districts[c2],filter_data[1].districts[c1],filter_data[1].districts[c2]);
	width = 185;
	height = 110;
	var margin = {top: 20, right: 20, bottom: 20, left: 50};
	var x = d3.scale.linear().range([0, width]);
	var y = d3.scale.linear().range([height, 0]);
	
	var xAxis = d3.svg.axis()
	    .scale(x).ticks(1).tickFormat(d3.format("d"))
	    .orient("bottom");

	var yAxis = d3.svg.axis()
	    .scale(y).ticks(3)
	    .orient("left");
	var area0 = d3.svg.area()
		.x(function(d) { return x(d.year); })
	    .y0(height)
	    .y1(function(d) { return y(0); });
	var area1 = d3.svg.area()
	    .x(function(d) { return x(d.year); })
	    .y0(height)
	    .y1(function(d) { return y(d.districts[c1]); });

	var svg3 = svg1.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");


	  x.domain(d3.extent(filter_data, function(d) { return d.year; }));
	  y.domain([0,max_width]);

	  svg3.append("path")
	      .datum(filter_data)
	      .attr("class", "area")
	      .attr("d",area0)
	      .transition()
	      .duration(1000)
	      .attr("d", area1);

	  svg3.append("g")
	      .attr("class", "x axis")
	      .attr("transform", "translate(0," + height + ")")
	      .call(xAxis);

	  svg3.append("g")
	      .attr("class", "y axis")
	      .call(yAxis);


	 var svg2 = d3.select("#chart"+"2"+count).append("svg").attr("width",255).attr("height",150);
	 var svg4 = svg2.append("g").attr("transform", "translate(" + margin.left + "," + margin.top + ")");
	 var area2 = d3.svg.area()
	    .x(function(d) { return x(d.year); })
	    .y0(height)
	    .y1(function(d) { return y(d.districts[c2]); });
	svg4.append("path")
	      .datum(filter_data)
	      .attr("class", "area")
	      .attr("d",area0)
	      .transition()
	      .duration(1000)
	      .attr("d", area2);

	svg4.append("g")
	      .attr("class", "x axis")
	      .attr("transform", "translate(0," + height + ")")
	      .call(xAxis);

	svg4.append("g")
	      .attr("class", "y axis")
	      .call(yAxis);

	var info1 = "<p>Category : " + category + "</p><p>Variable :" +  variable + "</p><p>Unit : " + unit
						+ "</p><p>Year" + filter_data[0].year + " : " + numberFormat(filter_data[0].districts[c1]) +  "</p><p>Year" + filter_data[1].year + " : " + numberFormat(filter_data[1].districts[c1]);
			d3.select("#intro"+"1"+count).selectAll("p").remove();
			d3.select("#intro"+"1"+count).html(info1);
			d3.select("#intro"+"1"+count).style("border-bottom","1px solid #fbd775");
	var info2 = "<p>Category : " + category + "</p><p>Variable :" +  variable + "</p><p>Unit : " + unit
						+ "</p><p>Year" + filter_data[0].year + " : " + numberFormat(filter_data[0].districts[c2]) +  "</p><p>Year" + filter_data[1].year + " : " + numberFormat(filter_data[1].districts[c2]);
			d3.select("#intro"+"2"+count).selectAll("p").remove();
			d3.select("#intro"+"2"+count).html(info2);
			d3.select("#intro"+"2"+count).style("border-bottom","1px solid #fbd775");

}
function drawTotal(count, filter_data, c1, c2, category, variable, unit, width_ratio){
	max_total = Math.max(filter_data[0].districts[7],filter_data[0].districts[1],filter_data[0].districts[2],filter_data[0].districts[3],filter_data[0].districts[4],filter_data[0].districts[5],filter_data[0].districts[6],
		filter_data[1].districts[7],filter_data[1].districts[1],filter_data[1].districts[2],filter_data[1].districts[3],filter_data[1].districts[4],filter_data[1].districts[5],filter_data[1].districts[6]);
	d3.select("#chart"+"3"+count).selectAll("svg").remove();
	d3.select("#table"+"3"+count).selectAll("table").remove();
	var svg3 = d3.select("#chart"+"3"+count).append("svg").attr("width",500).attr("height",250);
	for(var i = 1; i<=7 ; i++){
		svg3.append("rect").attr("width",20).attr("height",0).attr("fill","#f8bc19").attr("x",i*70-70).attr("y",200).transition().duration(1000).attr("height",filter_data[0].districts[i]/max_total*180).attr("y",200-filter_data[0].districts[i]/max_total*180);
		svg3.append("rect").attr("width",20).attr("height",0).attr("fill","#fbd775").attr("x",i*70-40).attr("y",200).transition().duration(1000).attr("height",filter_data[1].districts[i]/max_total*180).attr("y",200-filter_data[1].districts[i]/max_total*180);
		svg3.append("text").attr("x",i*70-70).attr("fill","#f8bc19").attr("y",210).attr("font-size","10px").text(filter_data[0].year);
		svg3.append("text").attr("x",i*70-40).attr("fill","#fbd775").attr("y",210).attr("font-size","10px").text(filter_data[1].year);
		svg3.append("text").attr("fill","#f8bc19").attr("x",i*70-70).attr("y",190-filter_data[0].districts[i]/max_total*180).attr("font-size","8px").text(numberFormat(filter_data[0].districts[i]));
		svg3.append("text").attr("fill","#fbd775").attr("x",i*70-40).attr("y",190-filter_data[1].districts[i]/max_total*180).attr("font-size","8px").text(numberFormat(filter_data[1].districts[i]));
		svg3.append("text").attr("x",i*70-70).attr("fill","black").attr("y",225).attr("font-size","13px").text("District"+i);
	}
	
	var info3 = "<p>Category : " + category + "</p><p>Variable :" +  variable + "</p><p>Unit : " + unit 
				+ "</p><p>Year" + filter_data[0].year + " : " + numberFormat(filter_data[0].districts.total) +  "</p><p>Year" + filter_data[1].year + " : " + numberFormat(filter_data[1].districts.total);
	d3.select("#intro"+"3"+count).selectAll("p").remove();
	d3.select("#intro"+"3"+count).html(info3);
	d3.select("#block"+"3"+count).style("border-bottom","1px solid #fbd775");
}
function drawDataTable(count, filter_data, c1, c2, category, variable, unit){
	d3.select("#chart"+"1"+count).selectAll("svg").remove();
	d3.select("#chart"+"1"+count).selectAll("table").remove();
	var info1 = "<table><tr><td style='font-size:15px;'>"+category+"</td><td>" + filter_data[0].year + "</td><td>" + filter_data[1].year + "</td></tr><tr><td>"
				+ variable + "("+ unit +")</td><td>"+numberFormat(filter_data[0].districts[c1])+"</td><td>"+numberFormat(filter_data[1].districts[c1])+"</td></tr></table>";
	d3.select("#intro"+"1"+count).html(info1);
	d3.select("#intro"+"1"+count).style("border-bottom","1px solid #fbd775");

	d3.select("#chart"+"2"+count).selectAll("svg").remove();
	d3.select("#chart"+"2"+count).selectAll("table").remove();
	var info2 = "<table><tr><td style='font-size:15px;'>"+category+"</td><td>" + filter_data[0].year + "</td><td>" + filter_data[1].year + "</td></tr><tr><td>"
				+ variable + "("+ unit +")</td><td>"+numberFormat(filter_data[0].districts[c2])+"</td><td>"+numberFormat(filter_data[1].districts[c2])+"</td></tr></table>";
	d3.select("#intro"+"2"+count).html(info2);
	d3.select("#intro"+"2"+count).style("border-bottom","1px solid #fbd775");

	d3.select("#block"+"3"+count).selectAll("svg").remove();
	d3.select("#block"+"3"+count).selectAll("p").remove();
	d3.select("#table"+"3"+count).selectAll("table").remove();
	var info3 = "<table><tr><td style='font-size:15px;'>"+category+"</td><td>" + filter_data[0].year + "</td><td>" + filter_data[1].year + "</td></tr><tr><td>"
				+ variable + "("+ unit +")</td><td>"+numberFormat(filter_data[0].districts.total)+"</td><td>"+numberFormat(filter_data[1].districts.total)+"</td></tr></table>";
	d3.select("#table"+"3"+count).html(info3);
	d3.select("#block"+"3"+count).style("border-bottom","1px solid #fbd775");
}




