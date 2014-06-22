<?php
require_once "header.php";
?>
<script type="text/javascript">
$('.submit').on("click",function(){
	var txt = <?php echo $_POST["dis"];?> ;
	$(".tag").text(txt);
}
);

</script>
<p class="tag">Fruit</p>
<p>Form</p>
<form method="post">
<p>Air:</p>
<input type="radio" name="air" value = "1">GHG Emissions by TRI Facilities</input><br />
<input type="radio" name="air" value = "2">Total Air Releases</input><br />
<p>Health:</p>
<input type="radio" name="health" value ="1">Elevated Blood Lead Level (EBLL)</input><br />
<input type="radio" name="health" value ="2">Infant Mortality Rate</input><br />
<p>Land:</p>
<input type="radio" name="land" value ="1">Cumulative Trees Planted</input><br />
<input type="submit" class="submit" value="ok">
</form>
<?php
require_once "footer.php";
?>