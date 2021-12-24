exports.bodyhtmlAuthentication = (token) => `
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FilmCoin</title>
</head>

<style>

@font-face {
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    src: local('Monument Extended'), url('https://fonts.cdnfonts.com/s/19595/MonumentExtended-Regular.woff') format('woff');
}

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

:root{
    --primary: #0C7137;
    --secondary: #009242;
    --light: #FFFFFF;
    --dark: #171616;
}

a:hover{
    cursor: pointer;
}

h1, h3{
    font-family: "Monument Extended";
    font-weight: 400;
    text-transform: uppercase;
    font-size: 24px;
    line-height: 28.8px;
    color: var(--dark);
}

span, a{
    color: var(--secondary);
}

.header{
    background: radial-gradient(78.74% 131.71% at 97.24% -34.1%, #00ED65 0%, #04C857 8.09%, #089946 19.99%, #0C7137 32.3%, #0F4F2B 44.81%, #123621 57.6%, #14231A 70.78%, #151916 84.57%, #151515 100%);
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.header img{
    position: absolute;
    width: 100%;
    top: 0;
}

.header h1, .header p{
    color: var(--light);
}

.header p{
    font-family: "Space Mono", monospace;
    text-transform: uppercase;
    font-weight: 400;
    line-height: 19.25px;
    font-size: 13px;
}

.main{
    padding: 3rem 3rem 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.main p{
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 19.44px;
}

.main .title-p{
    margin-bottom: 2rem;
}

.main .title-p:last-of-type{
    margin-bottom: 0;
}

.main .title-p p{
    margin-bottom: 2rem;
}

.main .title-p p:last-of-type{
    margin-bottom: 0;
}

.main .order-id h3{
    font-family: "Space Mono", monospace;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 1rem;
}

.main .order-id a{
    text-decoration: none;
    font-family: "Space Grotesk", sans-serif;
    font-size: 18px;
    font-weight: 700;
}

.section{
    padding: 3rem 3rem 3rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-transform: uppercase;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    text-align: center;
}

.footer{
    padding: 3rem;
    background-color: var(--dark);
    color: var(--light);
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.footer .links-footer{
    display: flex;
    flex-direction: row;
    align-items: center;    
    margin-bottom: 2rem;
}

.footer .links-footer a{
    margin-right: 20px;
}

.footer .links-footer a img{
    width: auto;
    height: 20px;
}

.footer .links-footer a:last-of-type{
    margin-right: 0;
}

.copyright p{
    margin-bottom: 1rem;
}

.copyright p:last-of-type{
    margin-bottom: 0;
}

</style>

<body>
    <div class="header">
        <img src="http://imgfz.com/i/ONB0t4j.png"></img>
        <h1>Hey! Thank you for registering with Film<span>Coin</span></h1>
        <p>Our 20% discounted General Pre-Sale is on for December 2021.</p>
    </div>

    <div class="main">
        <div class="order-id">
            <h3> We are please to advise you can purchase your 20% discounted FilmCoin from 08:00am GMT on Monday the 27th December 2021</h3>
        </div>        
    </div>
    <div class="section">
        <p>Please contact our customer care representatives for any further assistance:
            <a href="mailto:support@thefilmcoin.io" target="_blank">support@thefilmcoin.io</a>
        </p>
    </div>

    <div class="footer">
        <div class="links-footer">
            <a href="https://twitter.com/TheFilmCoin" target="_blank">
                <img src="http://imgfz.com/i/5pg1DT8.png"></img>
            </a>
            <a href="https://www.instagram.com/thefilmcoin/?hl=es-la" target="_blank">
                <img src="http://imgfz.com/i/IpehxQm.png"></img>
            </a>
            <a href="#" target="_blank">
                <img src="http://imgfz.com/i/OnEoghA.png"></img>
            </a>
            <a href="https://www.facebook.com/The-Film-Coin-111549944695856" target="_blank">
                <img src="http://imgfz.com/i/ecSQKa2.png"></img>
            </a>
            <a href="https://www.tiktok.com/@thefilmcoin?lang=es" target="_blank">
                <img src="http://imgfz.com/i/3ZbxdB2.png"></img>
            </a>
        </div>

        <div class="copyright">
            <p>Powered by DarkHorse Film Studios</p>
            <p>Copyright &copy; 2021 FilmCoin - All Rights Reserved</p>
            <p>PRIVACY POLICY</p>
        </div>
    </div>
</body>
`

/* `
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>FilmCoin</title>
</head>

<style>

@font-face {
    font-family: 'Monument Extended';
    font-style: normal;
    font-weight: 400;
    src: local('Monument Extended'), url('https://fonts.cdnfonts.com/s/19595/MonumentExtended-Regular.woff') format('woff');
}

@import url('https://fonts.googleapis.com/css2?family=Space+Grotesk&display=swap');
@import url('https://fonts.googleapis.com/css2?family=Space+Mono&display=swap');

*,
*::after,
*::before {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
}

:root{
    --primary: #0C7137;
    --secondary: #009242;
    --light: #FFFFFF;
    --dark: #171616;
}

a:hover{
    cursor: pointer;
}

h1, h3{
    font-family: "Monument Extended";
    font-weight: 400;
    text-transform: uppercase;
    font-size: 24px;
    line-height: 28.8px;
    color: var(--dark);
}

span, a{
    color: var(--secondary);
}

.header{
    background: radial-gradient(78.74% 131.71% at 97.24% -34.1%, #00ED65 0%, #04C857 8.09%, #089946 19.99%, #0C7137 32.3%, #0F4F2B 44.81%, #123621 57.6%, #14231A 70.78%, #151916 84.57%, #151515 100%);
    padding: 3rem;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    text-align: center;
}

.header img{
    position: absolute;
    width: 100%;
    top: 0;
}

.header h1, .header p{
    color: var(--light);
}

.header p{
    font-family: "Space Mono", monospace;
    text-transform: uppercase;
    font-weight: 400;
    line-height: 19.25px;
    font-size: 13px;
}

.main{
    padding: 3rem 3rem 0 3rem;
    display: flex;
    flex-direction: column;
    align-items: center;
    text-align: center;
}

.main p{
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 19.44px;
}

.main .title-p{
    margin-bottom: 2rem;
}

.main .title-p:last-of-type{
    margin-bottom: 0;
}

.main .title-p p{
    margin-bottom: 2rem;
}

.main .title-p p:last-of-type{
    margin-bottom: 0;
}

.main .order-id h3{
    font-family: "Space Mono", monospace;
    font-weight: 700;
    text-transform: capitalize;
    margin-bottom: 1rem;
}

.main .order-id a{
    text-decoration: none;
    font-family: "Space Grotesk", sans-serif;
    font-size: 18px;
    font-weight: 700;
}

.section{
    padding: 3rem 3rem 3rem 3rem;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-transform: uppercase;
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
    font-size: 14px;
    line-height: 15px;
    text-align: center;
}

.footer{
    padding: 3rem;
    background-color: var(--dark);
    color: var(--light);
    font-family: 'Space Grotesk', sans-serif;
    font-weight: 400;
    font-size: 12px;
    line-height: 14px;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}

.footer .links-footer{
    display: flex;
    flex-direction: row;
    align-items: center;    
    margin-bottom: 2rem;
}

.footer .links-footer a{
    margin-right: 20px;
}

.footer .links-footer a img{
    width: auto;
    height: 20px;
}

.footer .links-footer a:last-of-type{
    margin-right: 0;
}

.copyright p{
    margin-bottom: 1rem;
}

.copyright p:last-of-type{
    margin-bottom: 0;
}

</style>

<body>
    <div class="header">
        <img src="http://imgfz.com/i/ONB0t4j.png"></img>
        <h1>Hey! Your are just from a Step to purchase The Film<span>Coin</span></h1>
        <p>Our 20% discounted General Pre-Sale is on for December 2021.</p>
    </div>

    <div class="main">
        <div class="order-id">
            <h3>Please Click on the Following link to purchase FilmCoin:</h3>
            <a href="http://thefilmcoin.io/#/payment2/?token=${token}" target="_blank">${token}</a>
        </div>

        
    </div>

    <div class="section">
        <p>NOTICE: All FilmCoin Token holders must complete KYC, please send your Passport or Driving Licence and a current Utility Bill for verification to: 
            <a href="mailto:support@thefilmcoin.io" target="_blank">support@thefilmcoin.io</a>
        </p>
        <br>
        <p>Please contact our customer care representatives for any further assistance:
            <a href="mailto:support@thefilmcoin.io" target="_blank">support@thefilmcoin.io</a>
        </p>
    </div>

    <div class="footer">
        <div class="links-footer">
            <a href="https://twitter.com/TheFilmCoin" target="_blank">
                <img src="http://imgfz.com/i/5pg1DT8.png"></img>
            </a>
            <a href="https://www.instagram.com/thefilmcoin/?hl=es-la" target="_blank">
                <img src="http://imgfz.com/i/IpehxQm.png"></img>
            </a>
            <a href="#" target="_blank">
                <img src="http://imgfz.com/i/OnEoghA.png"></img>
            </a>
            <a href="https://www.facebook.com/The-Film-Coin-111549944695856" target="_blank">
                <img src="http://imgfz.com/i/ecSQKa2.png"></img>
            </a>
            <a href="https://www.tiktok.com/@thefilmcoin?lang=es" target="_blank">
                <img src="http://imgfz.com/i/3ZbxdB2.png"></img>
            </a>
        </div>

        <div class="copyright">
            <p>Powered by DarkHorse Film Studios</p>
            <p>Copyright &copy; 2021 FilmCoin - All Rights Reserved</p>
            <p>PRIVACY POLICY</p>
        </div>
    </div>
</body>
` */