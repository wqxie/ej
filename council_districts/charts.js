function make_pie(r, d, id, shadow, tt) {
	var total = 0;
	for (x in d) {total = total + d[x][1];}
	var angle = .5*Math.PI;
	var line = r + ",0 "
	var w = (shadow == true)?(r*2)+5:r*2;

	var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
	svg.setAttribute('version', '1.1');
	svg.setAttribute('width', w+"px");
	svg.setAttribute('height', w+"px");
	document.getElementById(id).innerHTML = "";
	document.getElementById(id).appendChild(svg);
	
	if (shadow == true){
	var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
		circle.setAttribute("cx",r+2);
		circle.setAttribute("cy",r+5);
		circle.setAttribute("r",r);				
		circle.setAttribute("fill","gray");
		circle.setAttribute("fill-opacity","0.5");
		circle.setAttribute("class","shadow");
		svg.appendChild(circle);
	}
	
	for (x in d) {
		var pct = d[x][1]/total;
		var t_angle = angle + (pct*Math.PI);
		var angle = angle + (pct*2*Math.PI);
		var sweep = (pct > 0.5)?"1":"0";
		var ex = (Math.cos(angle)*-r)+r;
		var ey = (Math.sin(angle)*-r)+r;
		var tx = Math.cos(t_angle)*(r+5)*-1;
		var ty = Math.sin(t_angle)*(r+5)*-1;
		var path = "M"+r+","+r+" L"+line+" A"+r+","+r+" 0 "+sweep+",1 " + ex +","+ey+" z";
		var wedge = document.createElementNS('http://www.w3.org/2000/svg', 'path');
		wedge.setAttribute("fill",d[x][2]);
		wedge.setAttribute("d",path);
		wedge.setAttribute("class", "w"+x +" wedges");
		wedge.setAttribute("onmouseover","tt_in([this],"+tt+")");
		wedge.setAttribute("onmouseout","tt_out()");		
		var row = [tx,ty,d[x][0],d[x][1],pct,"dchart"+id.slice(1),r,d[x][2]];
		$(svg.appendChild(wedge)).data("row",row)
		line = ex+","+ey;
	}
	
};

function make_pdot(r, d, id, shadow, tt) {
	var w = (shadow == true)?(r*2)+10:r*2;

	var target = document.getElementById(id);
	target.innerHTML = "";
	var ml = (target.offsetWidth-(r*2))/2;
	var mt = (target.offsetHeight-(r*2))/2;
	
	var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
	svg.setAttribute('version', '1.1');
	svg.setAttribute('width', w+"px");
	svg.setAttribute('height', w+"px");
	svg.setAttribute('style',"margin-top:"+mt+"px; margin-left:"+ml+"px")
	target.appendChild(svg);
	
	if (shadow == true){
	var circle = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
		circle.setAttribute("cx",r+2);
		circle.setAttribute("cy",r+5);
		circle.setAttribute("r",r);				
		circle.setAttribute("fill","gray");
		circle.setAttribute("fill-opacity","0.5");
		circle.setAttribute("class","shadow");
		svg.appendChild(circle);
	}

	var row = [0,(r*-1)-3,d[0][0],d[0][1],100,"dchart"+id.slice(1),r,d[0][2]];
	
	var pdot = document.createElementNS('http://www.w3.org/2000/svg', 'circle');
		pdot.setAttribute("cx",r);
		pdot.setAttribute("cy",r);
		pdot.setAttribute("r",r);				
		pdot.setAttribute("fill",d[0][2]);
		pdot.setAttribute("class","w0 wedges");
		pdot.setAttribute("onmouseover","tt_in([this],"+tt+")");
		pdot.setAttribute("onmouseout","tt_out()");	
		$(svg.appendChild(pdot)).data("row",row)
	
};

function make_bar(d, s, id, shadow, tt) {
	var max = 0;
	for (x in d){var b = d[x][1]; if (b>max){max=b;}}
	var h = max * s;
	var w = d.length * 20;
	if (shadow == true){h=h+5;w=w+3;}

	var target = document.getElementById(id);
	target.innerHTML = "";
	var tw = target.offsetWidth;
	var th = target.offsetHeight;
	
	var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
	svg.setAttribute('version', '1.1');
	svg.setAttribute('width', w+"px");
	svg.setAttribute('height', h+"px");
	svg.setAttribute('style',"margin-top:"+(th-h)/2+"px; margin-left:"+(tw-w)/2+"px")
	target.appendChild(svg);

	for (x in d){
		var row = [10+(x*20)-(w/2),(h/2)+3,d[x][0],d[x][1],0,"dchart"+id.slice(1),0,d[x][2]];	
		var q = d[x][1]*s;
		var bar = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
		bar.setAttribute("x",x*20);
		bar.setAttribute("y",h-q);
		bar.setAttribute("width",20);
		bar.setAttribute("height",q);
		bar.setAttribute("fill",d[x][2]);		
		bar.setAttribute("class","w"+x+" wedges");
		bar.setAttribute("onmouseover","tt_in([this],"+tt+")");
		bar.setAttribute("onmouseout","tt_out()");	
		$(svg.appendChild(bar)).data("row",row)
		}
	
};

function make_bbar(d, int, bh, bw, id, shadow, tt) {
	var max = 0;
	for (x in d){var b = d[x][1]; if (b>max){max=b;}}
	var h = (max/int)*(bh+2);
	var w = (d.length*(bw+2))-2;
	if (shadow == true){h=h+5;w=w+3;}

	var target = document.getElementById(id);
	target.innerHTML = "";
	var tw = target.offsetWidth;
	var th = target.offsetHeight;
	
	var svg = document.createElementNS('http://www.w3.org/2000/svg', 'svg');
	svg.setAttribute('xmlns:xlink', 'http://www.w3.org/1999/xlink');
	svg.setAttribute('version', '1.1');
	svg.setAttribute('width', w+"px");
	svg.setAttribute('height', h+"px");
	svg.setAttribute('style',"margin-top:"+(th-h)/2+"px; margin-left:"+(tw-w)/2+"px")
	target.appendChild(svg);

	for (x in d){
		var a = d[x][1];
		var row = [(bw/2)+(x*(bw+2))-(w/2),(h/2)+3,d[x][0],d[x][1],0,"dchart"+id.slice(1),0,d[x][2]];	
		for (var i=d[x][1],q=1;i>0;i=i-int,q++)
  			{
			var b = (i>int)?bh:(i/int)*bh;
			var block = document.createElementNS('http://www.w3.org/2000/svg', 'rect');
			block.setAttribute("x",x*(bw+2));
			block.setAttribute("y",h-(q*(bh+2))+(bh-b));
			block.setAttribute("width",bw);
			block.setAttribute("height",b);
			block.setAttribute("fill",d[x][2]);		
			if (q==1){block.setAttribute("class","w"+x+" wedges");}else{block.setAttribute("class","wedges");}
			block.setAttribute("onmouseover","tt_in([this],"+tt+")");
			block.setAttribute("onmouseout","tt_out()");	
			$(svg.appendChild(block)).data("row",row)
			}
		}
	
};

function array_w_average(d,index,weight){
	var total = 0;
	var wtotal = 0;
	for (x in d){total = total + (parseInt(d[x][index])*parseInt(d[x][weight])); wtotal = wtotal + parseInt(d[x][weight])};
	var ave = total/wtotal;
	return ave;
};

function size_chart(a,t_area,average){
	var b = a/average;
	var area = b * t_area;
	var s = Math.sqrt(area/Math.PI);
	return s
};

function array_max(a,index){
	var max = 0;
	for (x in a){var b = parseInt(a[x][index]); if(b>max){max=b;}};
	return max;
};