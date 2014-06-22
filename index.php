<?php
require_once "header.php";
?>

<div class="main">
	<div class="intro">
		<p class="intro-title">EJ Dashboard</p>
		<p>This year's upcoming municipal election will be the first time in nearly 100 years that Detroiters will elect the city council from defined districts, historically. </p>
		<p>Use this interactive tool to explore the new districts!</p></p>

	</div>
	<div class="image-row map"><a class="example-image-link" href="img/map_big.png" data-lightbox="example-1"><img class="example-image" src="img/map.png" alt="image-1" /></a></div>
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
				<input type="radio" name="health" value = "1"><p>Elevated Blood Lead Level (EBLL)</p></input><br />
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
			<div class="filter-btn">Show in Charts</div>
			<div class="filter-btn">Show in Tables</div>
		</div>
		
	</div>
	<div class="tabs">
    
	   <div class="tab">
	       <input type="radio" id="tab-1" name="tab-group-1" checked>
	       <label for="tab-1" class="tab1">District</label>
	       
	       <div class="content">
	           <div class="half-tab first-half-tab">
	           		<div class="styled-select">
					   <select>
					      <option>Distritct 1</option>
					      <option>Distritct 2</option>
					      <option>Distritct 3</option>
					      <option>Distritct 4</option>
					      <option>Distritct 5</option>
					      <option>Distritct 6</option>
					      <option>Distritct 7</option>
					   </select>
					</div>
					<div id="chart1" class="chart"></div>
					<div class="chart-intro">
						<p>Category: Neighborhoods</p>
						<p>Variable: Residential in need of demo</p>
						<p>Unit: Structures</p>
						<p>Year 2011: 235</p>
						<p>Year 2013: 172</p>
					</div>
					<div id="chart2" class="chart"></div>
					<div class="chart-intro">
						<p>Category: Health</p>
						<p>Variable: Elevated Blood Lead Level (EBLL)</p>
						<p>Unit: Children 0-5 with Confirmed EBLL as a Percent of Total Children Tested</p>
						<p>Year 2011: 8.1%</p>
						<p>Year 2013: 6.2%</p>
					</div>
	       		</div>
	       		<div class="half-tab">
	       			<div class="styled-select">
					   <select>
					      <option>Distritct 1</option>
					      <option>Distritct 2</option>
					      <option>Distritct 3</option>
					      <option>Distritct 4</option>
					      <option>Distritct 5</option>
					      <option>Distritct 6</option>
					      <option>Distritct 7</option>
					   </select>
					</div>
					<div id="chart3" class="chart"></div>
					<div class="chart-intro">
						<p>Category: Neighborhoods</p>
						<p>Variable: Residential in need of demo</p>
						<p>Unit: Structures</p>
						<p>Year 2011: 369</p>
						<p>Year 2013: 71</p>
					</div>
					<div id="chart4" class="chart"></div>
					<div class="chart-intro">
						<p>Category: Health</p>
						<p>Variable: Elevated Blood Lead Level (EBLL)</p>
						<p>Unit: Children 0-5 with Confirmed EBLL as a Percent of Total Children Tested</p>
						<p>Year 2011: 5.9%</p>
						<p>Year 2013: 4.8%</p>
					</div>
	       		</div>
	       </div> 
	   </div>
	    
	   <div class="tab">
	       <input type="radio" id="tab-2" name="tab-group-1">
	       <label for="tab-2" class="tab2">City Total</label>
	       
	       <div class="content">
	       		<div class="chart-block">
	       			<div id="chart5" class="chart"></div>
					<div class="chart-intro">
						<p>Category: Neighborhoods</p>
						<p>Variable: Residential in need of demo</p>
						<p>Unit: Structures</p>
						<p>Year 2011: 369</p>
						<p>Year 2013: 71</p>
					</div>
				</div>
	           	<div class="chart-block">
					<div id="chart6" class="chart"></div>
					<div class="chart-intro">
						<p>Category: Health</p>
						<p>Variable: Elevated Blood Lead Level (EBLL)</p>
						<p>Unit: Children 0-5 with Confirmed EBLL as a Percent of Total Children Tested</p>
						<p>Year 2011: 5.9%</p>
						<p>Year 2013: 4.8%</p>
					</div>
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