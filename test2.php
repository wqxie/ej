<?php
header('Content-Type:text/html;charset=utf-8');
?>
  
<script type="text/javascript"src="js/jquery-1.10.2.min.js"></script>
<script type="text/javascript">
$(function() {
    $("#subbtn").click(function() {
        var params = $('.filter').serialize();
        var url = "你的服务器端 php";
  
        $.ajax({
            type: "post",
            url: "post.php",
            dataType: "json",
            data: params,
            success: function(msg){
                var tishi = msg ;
                console.log(tishi);
                $("#tishi").html(tishi);
                $("#tishi").css({color: "green"});
            }
        });
    });
  
});
  
</script>
<p>Air:</p>
<input type="radio" name="air" value = "1" class="filter">GHG Emissions by TRI Facilities</input><br />
<input type="radio" name="air" value = "2" class="filter">Total Air Releases</input><br />
<p>Health:</p>
<input type="radio" name="health" value ="1" class="filter">Elevated Blood Lead Level (EBLL)</input><br />
<input type="radio" name="health" value ="2" class="filter">Infant Mortality Rate</input><br />

<p>Land:</p>
<input type="radio" name="land" value ="1" class="filter">Cumulative Trees Planted</input><br />

  
<span id="tishi"></span>
<p><input id="subbtn"type="button"value="ajax 测试"/></p>