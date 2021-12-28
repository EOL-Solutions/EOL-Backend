exports.bodyhtmlAuthentication = (token) => `
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Document</title>


    <style>    
        @font-face {
          font-family: 'Monument Extended';
          font-style: normal;
          font-weight: 400;
          src: local('Monument Extended'), url('https://fonts.cdnfonts.com/s/19595/MonumentExtended-Regular.woff') format('woff');}
    </style>

    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
    <link href="https://fonts.googleapis.com/css2?family=Titillium+Web:wght@600&display=swap" rel="stylesheet">


</head>
<body style="margin: 0;">
    <span style="display: none;" lass=“preheader”>Check out this email! </span>


    <table align=”center” border="0" cellpadding=”0” cellspacing=”0” width=”100%” style="border-collapse: collapse;">
        <td align=”center” height="100%" width="100%" style="border: none;">           
            <table align=”top” border="0" bgcolor="#171616" cellpadding=”0” cellspacing=”0” width=”600” style="border-collapse: collapse;">

                <tr width="100%" height="100%" style="background:url(http://imgfz.com/i/ONB0t4j.png), radial-gradient(78.74% 131.71% at 97.24% -34.1%, #00ED65 0%, #04C857 8.09%, #089946 19.99%, #0C7137 32.3%, #0F4F2B 44.81%, #123621 57.6%, #14231A 70.78%, #151916 84.57%, #151515 100%); background-size: cover;">
                    <td width="600" height="150" style="text-align: center;">
                        <h1 style="margin: 10% 8% 2% 8%; font-family: 'Monument Extended', 'Titillium Web', Tahoma, sans-serif; font-weight: 400; text-transform: uppercase; font-size: 24px; line-height: 28.8px; color: #FFFFFF;">Hey! you are one step away from buying Film<span style="color: #009242;">Coin</span></h1>
                        <p style=" margin: 0 12% 10% 12%; color: #FFFFFF; font-family: 'Space Mono', monospace; text-transform: uppercase; font-weight: 400; line-height: 19.25px; font-size: 13px;"> We are on our 20% discounted General Pre-Sale fro December 2021.</p>
                    </td>
                </tr>
                <tr width="100%" height="100%" bgcolor="#FFFFFF" style="color: #333333;">
                    <td width="600" height="300" style="text-align: center; padding:0 15% 0 15%;">                       
                            
                        <h3 style="font-family: 'Space Mono', monospace;">Please Click on the Following link to purchase FilmCoin:</h3>
                        <a style="font-family: 'Space Mono', monospace; color: #009242; font-size: 24px;" href="http://thefilmcoin.io/#/payment2/?token=${token}" target="_blank">${token}</a>                

                        <p style="font-family: 'Space Grotesk', sans-serif;">Please contact our customer care representatives for any further assistance:
                            <a href="mailto:support@thefilmcoin.io" target="_blank" style="color: #009242;">support@thefilmcoin.io</a>
                        </p>
                    </td>
                </tr>
                <tr width="100%" height="100%" bgcolor="#171616" align="center" style="color: white;">
                    <td width="600" height="150" style="padding: 5% 0 5% 0;">
                        <table style="margin-bottom: 4%; margin-top: 2%;"> 
                            <tr>
                                <td>
                                    <a href="https://twitter.com/TheFilmCoin" target="_blank" style="color: #009242; margin-right: 20px;">
                                        <img src="http://imgfz.com/i/5pg1DT8.png" style="width: auto; height: 20px;">
                                    </a>
                                </td>
                                <td>
                                    <a href="https://www.instagram.com/thefilmcoin/?hl=es-la" target="_blank" style="color: #009242; margin-right: 20px;">
                                        <img src="http://imgfz.com/i/IpehxQm.png" style="width: auto; height: 20px;">
                                    </a>
                                </td>
                                <td>
                                    <a href="#" target="_blank" style="color: #009242; margin-right: 20px;">
                                        <img src="http://imgfz.com/i/OnEoghA.png" style="width: auto; height: 20px;">
                                    </a>
                                </td>
                                <td>        
                                    <a href="https://www.facebook.com/The-Film-Coin-111549944695856" target="_blank" style="color: #009242; margin-right: 20px;">
                                        <img src="http://imgfz.com/i/ecSQKa2.png" style="width: auto; height: 20px;">
                                    </a>
                                </td>
                                <td>
                                    <a href="https://www.tiktok.com/@thefilmcoin?lang=es" target="_blank" style="color: #009242; margin-right: 0;">
                                        <img src="http://imgfz.com/i/3ZbxdB2.png" style="width: auto; height: 20px;">
                                    </a>
                                </td>
                            </tr>
                        </table>
                        <p style="font-family: 'Space Grotesk', sans-serif; margin-bottom: 4%;">Powered by DarkHorse Film Studios</p>
                        <p style="font-family: 'Space Grotesk', sans-serif; margin-bottom: 4%;">Copyright &copy; 2021 FilmCoin - All Rights Reserved</p>
                        <p style="font-family: 'Space Grotesk', sans-serif; margin-bottom: 0;"> <a href="http://thefilmcoin.io/filmcoin-webpage/#/privacy" target="_blank" style="color: #009242;">PRIVACY POLICY</a></p>

                    </td>
                </tr>
            </table>
          
        </td>
     </table>
</body>
`