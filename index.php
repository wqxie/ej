<?php
require_once "header.php";
?>

<div class="main">
	<div class="intro">
		<p class="intro-title">EJ Dashboard</p>
		<p>This year's upcoming municipal election will be the first time in nearly 100 years that Detroiters will elect the city council from defined districts, historically. </p>
		<p>Use this interactive tool to explore the new districts!</p></p>

	</div>
	<div class="image-row map"><a class="fancybox fancybox.iframe" href="http://www.datadrivendetroit.org/council_districts/cdistricts.html"><img class="example-image" src="img/map.png" alt="image-1" /></a></div>
	<div class="filter-block">
		<div class="filter-head"><p>Variables</p></div>
		<div class="filter-content">
			<div class="filter-title">Air</div>
			<div class="filter-option">
				<input type="radio" name="air" value = "1"><p>GHG Emissions by TRI Facilities</p></input><br />
				<input type="radio" name="air" value = "2"><p>Total Air Releases</p></input><br />
			</div>
			<div class="filter-title">Health</div>
			<div class="filter-option">
				<input type="radio" name="health" value = "1"><p>Elevated Blood Lead Level(EBLL)</p></input><br />
				<input type="radio" name="health" value = "2"><p>Infant Mortality Rate</p></input><br />
			</div>
			<div class="filter-title">Land</div>
			<div class="filter-option">
				<input type="radio" name="land" value = "1"><p>Cumulative Trees Planted</p></input><br />
			</div>
			<div class="filter-title">Neighborhoods</div>
			<div class="filter-option">
				<input type="radio" name="neighbor" value = "1"><p>Residential in need of demo</p></input><br />
			</div>
			<div class="filter-title">Transportation</div>
			<div class="filter-option">
				<input type="radio" name="trans" value = "1"><p>Cumulative Miles of Bike Lanes</p></input><br />
			</div>
			<div class="filter-title">Waste</div>
			<div class="filter-option">
				<input type="radio" name="waste" value = "1"><p>Percent of Households Covered by Curbside Recycling</p></input><br />
				<input type="radio" name="waste" value = "2"><p>Total Onsite Land Releases (TRI)</p></input><br />
			</div>
			<div class="filter-btn" id="show-chart">Show in Charts</div>
			<div class="filter-btn" id="show-table">Show in Tables</div>
		</div>
		
	</div>
	<div class="tabs">
    
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