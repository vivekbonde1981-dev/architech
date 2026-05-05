
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Tak Logo - Pure CSS</title>
    <style>
        /* Base Reset */
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }

        body {
            display: flex;
            justify-content: center;
            align-items: center;
            min-height: 100vh;
            background-color: #060606; /* Dark background to match the image */
            overflow: hidden;
            font-family: sans-serif;
        }

        /* Container for the entire scene */
        .scene {
            position: relative;
            width: 800px;
            height: 400px;
            display: flex;
            justify-content: center;
            align-items: center;
        }

        /* * ----------------------------------------
         * BACKGROUND SKYLINE EFFECT
         * ----------------------------------------
         */
        .skyline {
            position: absolute;
            right: 50px;
            bottom: 0;
            height: 200px;
            width: 250px;
            display: flex;
            align-items: flex-end;
            gap: 4px;
            opacity: 0.2; /* Restored static opacity */
            z-index: 1;
        }

        .building {
            background-color: #222;
            background-image: radial-gradient(circle at 2px 2px, #444 1px, transparent 1px);
            background-size: 8px 10px;
        }

        .b1 { width: 30px; height: 120px; }
        .b2 { width: 45px; height: 180px; }
        .b3 { width: 35px; height: 140px; }
        .b4 { width: 50px; height: 90px; }
        .b5 { width: 40px; height: 160px; }
        .b6 { width: 25px; height: 110px; }


        /* * ----------------------------------------
         * EXACT LOGO GEOMETRY - MATHEMATICALLY PERFECTED
         * ----------------------------------------
         */
        .logo-container {
            position: relative;
            width: 390px;
            height: 220px;
            z-index: 2;
            transform: scale(1.2); 
        }

        .logo-part {
            position: absolute;
            background-color: #ffffff; 
        }

        /* THE RED DOT */
        .red-dot {
            background-color: #E22028; 
            width: 35px;
            height: 35px;
            top: 0;
            left: 30px; 
            border-radius: 0 100% 0 0; 
        }

        /* THE LETTER 't' */
        .t-crossbar {
            width: 100px;
            height: 35px;
            top: 80px;
            left: 0;
        }

        .t-stem-straight {
            width: 35px;
            height: 110px;
            top: 40px;
            left: 30px;
        }

        .t-stem-hook {
            background-color: transparent;
            width: 70px;
            height: 70px; 
            top: 150px;
            left: 30px;
            border-left: 35px solid #ffffff;
            border-bottom: 35px solid #ffffff;
            border-bottom-left-radius: 70px; 
        }

        /* THE LETTER 'a' */
        .a-ring {
            background-color: transparent;
            width: 140px;
            height: 140px;
            top: 80px;
            left: 105px; 
            border: 35px solid #ffffff; 
            border-radius: 50%; 
        }

        .a-stem {
            width: 35px;
            height: 140px;
            top: 80px;
            left: 220px; 
        }

        /* THE LETTER 'k' */
        .k-stem {
            width: 35px;
            height: 220px;
            top: 2px;
            left: 280px; 
        }

        .k-arms {
            width: 95px;
            height: 140px;
            top: 80px;
            left: 315px;
            clip-path: polygon(
                0 45px,       
                45px 0,       
                95px 0,       
                25px 70px,    
                95px 140px,   
                45px 140px,   
                0 95px        
            );
        }

    </style>
</head>
<body>

    <div class="scene">
        <div class="skyline">
            <div class="building b1"></div>
            <div class="building b2"></div>
            <div class="building b3"></div>
            <div class="building b4"></div>
            <div class="building b5"></div>
            <div class="building b6"></div>
        </div>

        <div class="logo-container">
            <!-- The 't' components -->
            <div class="logo-part red-dot"></div>
            <div class="logo-part t-crossbar"></div>
            <div class="logo-part t-stem-straight"></div>
            <div class="logo-part t-stem-hook"></div>

            <!-- The 'a' components -->
            <div class="logo-part a-ring"></div>
            <div class="logo-part a-stem"></div>

            <!-- The 'k' components -->
            <div class="logo-part k-stem"></div>
            <div class="logo-part k-arms"></div>
        </div>
    </div>

</body>
</html>