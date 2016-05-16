\\ Assignment 2
\\ location display coordinates and zoom

        var map;
        function initMap() 
        \\ initialise map not required in cache
        {
            map = new google.maps.Map(document.getElementById('map'), {
                center: {lat: -29.2744, lng: 133.7751},
                zoom: 5
                \\ Map of Aus full size 
           });

            var melbourne = 
            {
            center: {lat: -37.8141, lng: 144.9633}, 
            zoom: 15
            };
            var sydney = 
            {
            center: {lat: -33.8675, lng: 151.2070}, 
            zoom: 15
            };  
            var canberra = 
            {
            center: {lat: -35.2820, lng: 149.1287}, 
            zoom: 15
            };
            var darwin = 
            {
            center: {lat: -12.4628, lng: 130.8418}, 
            zoom: 15
            };
            var adelaide = 
            {
            center: {lat: -34.9286, lng: 138.6000}, 
            zoom: 15};
            var perth = 
            {
            center: {lat: -31.9535, lng: 115.8570}, 
            zoom: 15
            };
            var brisbane = 
            {
            center: {lat: -27.4710, lng: 153.0234}, 
            zoom: 15
            };
            var monashClayton = 
            {
            center: {lat: -37.9092552, lng: 145.1338553}, 
            zoom: 17
            };
            \\ location coords and zoom for cache
