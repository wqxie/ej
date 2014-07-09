<?php
require_once "header.php";
?>

<div class="main">
	<div class="intro">
		<p class="intro-title">EJ Dashboard</p>
		<p>This year's upcoming municipal election will be the first time in nearly 100 years that Detroiters will elect the city council from defined districts, historically. </p>
		<p>Use this interactive tool to explore the new districts!</p></p>

	</div>
	<div class="image-row map"><a class="fancybox fancybox.iframe" href="council_districts/cdistricts.html"><img class="example-image" src="img/map.png" alt="image-1" /></a></div>
	<div class="filter-block">
		<div class="filter-head"><p>Variables</p></div>
		<div class="filter-content">
			<div class="filter-title">Air</div>
			<div class="filter-option">
				<input id="air1" class="css-checkbox" type="checkbox" />
				<label for="air1" name="air_1" class="css-label">GHG Emissions by TRI Facilities<img src="img/info.png" width="10" height="10" data-name="GHG Emissions by TRI Facilities"/></label>
				<input id="air2" class="css-checkbox" type="checkbox" />
				<label for="air2" name="air_2" class="css-label">Total Air Releases<img src="img/info.png" width="10" height="10" data-name="Total Air Releases"/></label>
			</div>
			<div class="filter-title">Health</div>
			<div class="filter-option">
				<input id="health1" class="css-checkbox" type="checkbox" />
				<label for="health1" name="health_1" class="css-label">Elevated Blood Lead Level(EBLL)<img src="img/info.png" width="10" height="10" data-name="Elevated Blood Lead Level(EBLL)"/></label>
				<input id="health2" class="css-checkbox" type="checkbox" />
				<label for="health2" name="health_2" class="css-label">Infant Mortality Rate<img src="img/info.png" width="10" height="10" data-name="Infant Mortality Rate"/></label>
			</div>
			<div class="filter-title">Land</div>
			<div class="filter-option">
				<input id="land" class="css-checkbox" type="checkbox" />
				<label for="land" name="land" class="css-label">Cumulative Trees Planted<img src="img/info.png" width="10" height="10" data-name="Cumulative Trees Planted"/></label>
			</div>
			<div class="filter-title">Neighborhoods</div>
			<div class="filter-option">
				<input id="neighbor" class="css-checkbox" type="checkbox" />
				<label for="neighbor" name="neighbor" class="css-label">Residential in need of demo<img src="img/info.png" width="10" height="10" data-name="Residential in need of demo"/></label>
			</div>
			<div class="filter-title">Transportation</div>
			<div class="filter-option">
				<input id="trans" class="css-checkbox" type="checkbox" />
				<label for="trans" name="trans" class="css-label">Cumulative Miles of Bike Lanes<img src="img/info.png" width="10" height="10" data-name="Cumulative Miles of Bike Lanes"/></label>
 			</div>
			<div class="filter-title">Waste</div>
			<div class="filter-option">
				<input id="waste1" class="css-checkbox" type="checkbox" />
				<label for="waste1" name="waste_1" class="css-label">Percent of Households Covered by Curbside Recycling<img src="img/info.png" width="10" height="10" data-name="Percent of Households Covered by Curbside Recycling"/></label>
				<input id="waste2" class="css-checkbox" type="checkbox" />
				<label for="waste2" name="waste_2" class="css-label">Total Onsite Land Releases (TRI)<img src="img/info.png" width="10" height="10" data-name="Total Onsite Land Releases (TRI)"/></label>
			</div>
			
		</div>
		
	</div>
	<div class="tabs">
    	<div class="show-option">
    		<select id="showoption">
					      <option value="1" selected>Show in Chart</option>
					      <option value="2">Show in Table</option>
			</select>
    	</div>
	   <div class="tab">
	       <input type="radio" id="tab-1" name="tab-group-1" checked>
	       <label for="tab-1" class="tab1">District</label>
	       
	       <div class="content">
	           <div class="half-tab first-half-tab">
	           		<div class="styled-select">
					   <select id="c1">
					      <option value="1" selected>Distritct 1</option>
					      <option value="2">Distritct 2</option>
					      <option value="3">Distritct 3</option>
					      <option value="4">Distritct 4</option>
					      <option value="5">Distritct 5</option>
					      <option value="6">Distritct 6</option>
					      <option value="7">Distritct 7</option>
					   </select>
					</div>
					<div id="chart11" class="chart"></div>
					<div class="chart-intro" id="intro11"></div>
					<div id="chart12" class="chart"></div>
					<div class="chart-intro" id = "intro12"></div>
					<div id="chart13" class="chart"></div>
					<div class="chart-intro" id="intro13"></div>
					<div id="chart14" class="chart"></div>
					<div class="chart-intro" id="intro14"></div>
					<div id="chart15" class="chart"></div>
					<div class="chart-intro" id="intro15"></div>
					<div id="chart16" class="chart"></div>
					<div class="chart-intro" id="intro16"></div>
					<div id="chart17" class="chart"></div>
					<div class="chart-intro" id="intro17"></div>
					<div id="chart18" class="chart"></div>
					<div class="chart-intro" id="intro18"></div>
					<div id="chart19" class="chart"></div>
					<div class="chart-intro" id="intro19"></div>
	       		</div>
	       		<div class="half-tab">
	       			<div class="styled-select">
					   <select id="c2">
					      <option value="1">Distritct 1</option>
					      <option value="2" selected>Distritct 2</option>
					      <option value="3">Distritct 3</option>
					      <option value="4">Distritct 4</option>
					      <option value="5">Distritct 5</option>
					      <option value="6">Distritct 6</option>
					      <option value="7">Distritct 7</option>
					   </select>
					</div>
					<div id="chart21" class="chart"></div>
					<div class="chart-intro" id="intro21"></div>
					<div id="chart22" class="chart"></div>
					<div class="chart-intro" id = "intro22"></div>
					<div id="chart23" class="chart"></div>
					<div class="chart-intro" id="intro23"></div>
					<div id="chart24" class="chart"></div>
					<div class="chart-intro" id = "intro24"></div>
					<div id="chart25" class="chart"></div>
					<div class="chart-intro" id="intro25"></div>
					<div id="chart26" class="chart"></div>
					<div class="chart-intro" id="intro26"></div>
					<div id="chart27" class="chart"></div>
					<div class="chart-intro" id="intro27"></div>
					<div id="chart28" class="chart"></div>
					<div class="chart-intro" id="intro28"></div>
					<div id="chart29" class="chart"></div>
					<div class="chart-intro" id="intro29"></div>
	       		</div>
	       </div> 
	   </div>
	    
	   <div class="tab">
	       <input type="radio" id="tab-2" name="tab-group-1">
	       <label for="tab-2" class="tab2">City Total</label>
	       
	       <div class="content" id="total">
	       		<div class="chart-block" id="block31">
	       			<div id="table31"></div>
	       			<div id="chart31" class="chart"></div>
					<div id="intro31"class="chart-intro"></div>
				</div>
				<div class="chart-block" id="block32">
					<div id="table32"></div>
	       			<div id="chart32" class="chart"></div>
					<div id="intro32"class="chart-intro"></div>
				</div>
				<div class="chart-block" id="block33">
					<div id="table33"></div>
	       			<div id="chart33" class="chart"></div>
					<div id="intro33"class="chart-intro"></div>
				</div>
				<div class="chart-block" id="block34">
					<div id="table34"></div>
	       			<div id="chart34" class="chart"></div>
					<div id="intro34"class="chart-intro"></div>
				</div>
				<div class="chart-block" id="block35">
					<div id="table35"></div>
	       			<div id="chart35" class="chart"></div>
					<div id="intro35"class="chart-intro"></div>
				</div>
				<div class="chart-block" id="block36">
					<div id="table36"></div>
	       			<div id="chart36" class="chart"></div>
					<div id="intro36"class="chart-intro"></div>
				</div>
				<div class="chart-block" id="block37">
					<div id="table37"></div>
	       			<div id="chart37" class="chart"></div>
					<div id="intro37"class="chart-intro"></div>
				</div>
				<div class="chart-block" id="block38">
					<div id="table38"></div>
	       			<div id="chart38" class="chart"></div>
					<div id="intro38"class="chart-intro"></div>
				</div>
				<div class="chart-block" id="block39">
					<div id="table39"></div>
	       			<div id="chart39" class="chart"></div>
					<div id="intro39"class="chart-intro"></div>
				</div>
	       
	       </div> 
	   </div>
    
	</div>

	<div class="footer">
	Note on Source: All figures have been calculated by aggregating census block group data to council districts. There are minor differences between council district boundaries and the boundaries of block groups.
	</div>
</div>


<?php
require_once "footer.php";
?>