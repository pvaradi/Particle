    <!-- HIGHCHARTS -->
    <!-- 2. Add the JavaScript to initialize the chart on document ready -->

      var chart; // global

      /**
       * Request data from the server, add it to the graph and set a timeout to request again
       */
      function requestData() {
        $.ajax({
          url: 'live-server-data.php', 
          success: function(point) {
            var series = chart.series[0],
            shift = series.data.length > 20; // shift if the series is longer than 20

            var values = eval(point);


            // add the point
            chart.series[0].addPoint([values[0], values[1]], true, shift);
            chart.series[1].addPoint([values[0], values[2]], true, shift);
            // call it again after one second
            setTimeout(requestData, 5000);	
          },
          cache: false
        });
      }

      $(document).ready(function() {
        chart = new Highcharts.Chart({
          chart: {
            renderTo: 'container',
            defaultSeriesType: 'spline',
            events: {
              load: requestData
            }
          },
          title: {
            text: 'Temperature & Humidty'
          },
          subtitle: {
            text: 'Source: Particle Photon ID #0001'
          },
          xAxis: {
            type: 'datetime',
            tickPixelInterval: 150,
            maxZoom: 20 * 1000
          },
          yAxis: {
            title: {
              text: ' ',
              margin: 1
            }
          },
          series: [{
            name: 'Temperature',
            data: []
          },
          {
            name: 'Humidity',
            data: []
          }
          ]
        });		
      });

	
	<!-- HIGHCHARTS -->
	
	
      function functionHome() {
        
        var x = document.getElementById("PIR");
        x.style.display = "none";

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://192.168.1.8/test?PIROFF", true); // true for asynchronous   PHOTON IP CÍME
        xmlHttp.send(null);

        var x = document.getElementById("snackbar")
        x.className = "show";
        x.innerHTML = "Deactivated - Motion sense";

        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }

      function functionAway() {
        
        var x = document.getElementById("PIR");
        x.style.display = "block";

        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://192.168.1.8/test?PIRON", true);
        xmlHttp.send(null);

        var x = document.getElementById("snackbar")
        x.innerHTML = "Activated - Motion sense";
        x.className = "show";

        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
      
      function functionRC1ON() {
        
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://192.168.1.8/test?RC1ON", true);
        xmlHttp.send(null);

        var x = document.getElementById("snackbar")
        x.innerHTML = "RC1 Tuned ON";
        x.className = "show";

        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
      
      function functionRC1OFF() {
      
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://192.168.1.8/test?RC1OFF", true); 
        xmlHttp.send(null);

        var x = document.getElementById("snackbar")
        x.innerHTML = "RC1 Tuned OFF";
        x.className = "show";

        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
      
      function functionRC2ON() {
        
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://192.168.1.8/test?RC2ON", true);
        xmlHttp.send(null);

        var x = document.getElementById("snackbar")
        x.innerHTML = "RC2 Tuned ON";
        x.className = "show";

        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
      
      function functionRC2OFF() {
      
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://192.168.1.8/test?RC2OFF", true); 
        xmlHttp.send(null);

        var x = document.getElementById("snackbar")
        x.innerHTML = "RC2 Tuned OFF";
        x.className = "show";

        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
      
      function functionRC3ON() {
        
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://192.168.1.8/test?RC3ON", true);
        xmlHttp.send(null);

        var x = document.getElementById("snackbar")
        x.innerHTML = "RC3 Tuned ON";
        x.className = "show";

        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
      
      function functionRC3OFF() {
      
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://192.168.1.8/test?RC3OFF", true); 
        xmlHttp.send(null);

        var x = document.getElementById("snackbar")
        x.innerHTML = "RC3 Tuned OFF";
        x.className = "show";

        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
      
      function functionSceneNight() {
        
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://192.168.1.8/test?RC1ON&RC2ON&RC3ON", true);
        xmlHttp.send(null);

        var x = document.getElementById("snackbar")
        x.innerHTML = "Mood lighting turned ON";
        x.className = "show";

        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }
      
      function functionSceneDay() {
      
        var xmlHttp = new XMLHttpRequest();
        xmlHttp.open("GET", "http://192.168.1.8/test?RC1OFF&RC2OFF&RC3OFF", true); 
        xmlHttp.send(null);

        var x = document.getElementById("snackbar")
        x.innerHTML = "Mood lighting turned OFF";
        x.className = "show";

        setTimeout(function(){ x.className = x.className.replace("show", ""); }, 3000);
      }	
	
	
	<!-- HIGHCHARTS -->