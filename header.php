<!DOCTYPE html>
<html>
<head>
	<title>EJ dashboard</title>
	<link rel="stylesheet" type="text/css" href="css/style.css">
	<script type="text/javascript" src="js/jquery-1.10.2.min.js"></script>
	<script src="js/d3.v3.min.js" charset="utf-8"></script>
	<link href='http://fonts.googleapis.com/css?family=Oswald' rel='stylesheet' type='text/css'>
	<link rel="stylesheet" href="css/jquery.fancybox.css" type="text/css" media="screen" />
	<script type="text/javascript" src="js/jquery.fancybox.pack.js"></script>
	<script type="text/javascript">
		$(document).ready(function(){
			$("a.fancybox").fancybox({
                    autoSize: false,
                    autoDimensions: false,
                    width: 800,
                    height: 500,
                    fitToView: false,
                    padding: 0,
                    href: $(this).attr('href'),
                    type: 'iframe'
                });
		});
	</script>
</head>
<body>
	<header>
		<div class="nav">
			<img src="img/logo.png" class="logo"/>
			<span class="title">EJ Dashboard</span>
		</div>
	</header>