<!doctype html>
<html lang="en">
  <head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1, shrink-to-fit=no">
    <meta name="description" content="">
    <meta name="author" content="">
    <link rel="icon" href="../../../../favicon.ico">
	

    <title>SENSE</title>

    <!-- HIGHCHARTS -->
    <!-- 1. Add these JavaScript inclusions in the head of your page -->
    <script type="text/javascript" src="https://code.jquery.com/jquery-1.10.1.js"></script>
    <script type="text/javascript" src="https://code.highcharts.com/highcharts.js"></script>
    <script type="text/javascript" src="https://code.highcharts.com/modules/exporting.js"></script>
    <script type="text/javascript" src="https://code.highcharts.com/highcharts.js"></script>
    <script type="text/javascript" src="https://code.highcharts.com/modules/offline-exporting.js"></script>
    <!-- HIGHCHARTS -->

    <!-- Bootstrap core CSS -->
    <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/css/bootstrap.min.css" 
          integrity="sha384-Zug+QiDoJOrZ5t4lssLdxGhVrurbmBWopoEl+M6BdEfwnCJZtKxi1KgxUyJq13dy" crossorigin="anonymous">
	<link rel="stylesheet" href="https://cdnjs.cloudflare.com/ajax/libs/font-awesome/4.7.0/css/font-awesome.min.css">
	<!-- Bootstrap core CSS -->
	
	<script type="text/javascript" src="index.js"></script>
	
	<link rel="stylesheet" type="text/css" href="index.css">
	
  </head>
  
  <body>
     <nav class="navbar navbar-expand-md navbar-dark bg-dark">
      <a class="navbar-brand" href="#">SENSE</a>
      <button class="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarsExample04" aria-controls="navbarsExample04" aria-expanded="false" aria-label="Toggle navigation">
        <span class="navbar-toggler-icon"></span>
      </button>

      <div class="collapse navbar-collapse" id="navbarsExample04">
        <ul class="navbar-nav mr-auto ulstyle">
          <li class="nav-item">
            <a class="nav-link">Scene:</a>
          </li>
          <li class="nav-item">
            <a onclick="functionSceneNight()" class="nav-link" href="#">Night</a>
          </li>
		  <li class="nav-item">
            <a onclick="functionSceneDay()" class="nav-link" href="#">Day</a>
          </li>
          <li class="nav-item dropdown">
            <a class="nav-link dropdown-toggle" href="http://example.com" id="dropdown04" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">Manual</a>
            <div class="dropdown-menu" aria-labelledby="dropdown04">
              <a onclick="functionRC1ON()" class="dropdown-item" href="#">Light ON - Kitchen</a>
			  <a onclick="functionRC1OFF()" class="dropdown-item" href="#">Light OFF - Kitchen</a>
              <a onclick="functionRC2ON()" class="dropdown-item" href="#">Light ON - Living room</a>
			  <a onclick="functionRC2OFF()" class="dropdown-item" href="#">Light OFF - Living room</a>
              <a onclick="functionRC3ON()" class="dropdown-item" href="#">Light ON - Bedroom</a>
              <a onclick="functionRC3OFF()" class="dropdown-item" href="#">Light OFF - Bedroom</a>
            </div>
          </li>
        </ul>
      </div>
    </nav> 
	<div>
		<ul class="selful">
			<li><a onclick="functionHome()" class="left" href="#">Home</a></li>
			<li><a onclick="functionAway()" class="right" href="#">Away</a></li>
		</ul>
	</div>
	<div></div>
	<div id="PIR" class="loader"></div>
		
	<!-- HIGHCHARTS -->
	<!-- 3. Add the container -->
	<div id="container"></div>
	
	<div id="snackbar">Some text some message..</div>
	
	<!-- Bootstrap core JavaScript
    ================================================== -->
    <!-- Placed at the end of the document so the pages load faster -->

	<script src="https://cdnjs.cloudflare.com/ajax/libs/popper.js/1.12.9/umd/popper.min.js" 
          integrity="sha384-ApNbgh9B+Y1QKtv3Rn7W3mgPxhU9K/ScQsAP7hUibX39j7fakFPskvXusvfa0b4Q" crossorigin="anonymous">
  </script>
	<script src="https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0-beta.3/js/bootstrap.min.js" 
          integrity="sha384-a5N7Y/aK3qNeh15eJKGWxsqtnX/wWdSZSKp+81YjTmS15nvnvxKHuzaWwXHDli+4" crossorigin="anonymous">
  </script>

  </body>
</html>
