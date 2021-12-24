exports.bodyhtml = (title, body, linkText, link) => `
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
        <h1>Hey! Thank you for purchasing Film<span>Coin</span></h1>
        <p>Our 20% discounted General Pre-Sale offer has been applied to your purchase.</p>
    </div>

    <div class="main">
        <div class="title-p">
            <h3>Film<span>Coin</span></h3>
            <p>ERC20: The FilmCoin Utility Token will be created on the 28th February 2022 using the ERC-20 standard and
                deployed to the Ethereum blockchain acting as a native currency for the Darkhorse Film Studios
                decentralized application program (DAPP)</p>
            <p>If you don’t already have a digital wallet please visit our partner website <a href="https://www.fmfw.io"
                    target="_blank">www.fmfw.io</a> and create your personal wallet prior to the 28th February 2022
                and forward your wallet details to our FilmCoin customer care team.</p>
        </div>

        <div class="title-p">
            <h3>ERC<span>20</span></h3>
            <p>An ERC20 token is a standard used for creating and issuing smart contracts on the Ethereum blockchain.
                Smart contracts can then be used to create smart property or tokenized assets that people can invest in.
                ERC stands for "Ethereum request for comment," and the ERC20 standard was implemented in 2015.</p>
            <p>The ERC-20 introduces a standard for Fungible Tokens, in other words, they have a property that makes
                each
                Token be exactly the same (in type and value) of another Token. For example, an ERC-20 Token acts just
                like
                the ETH, meaning that 1 Token is and will always be equal to all the other Tokens.</p>
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
            <a href="#" target="_blank">
                <img src="http://imgfz.com/i/5pg1DT8.png"></img>
            </a>
            <a href="#" target="_blank">
                <img src="http://imgfz.com/i/IpehxQm.png"></img>
            </a>
            <a href="#" target="_blank">
                <img src="http://imgfz.com/i/OnEoghA.png"></img>
            </a>
            <a href="#" target="_blank">
                <img src="http://imgfz.com/i/ecSQKa2.png"></img>
            </a>
            <a href="#" target="_blank">
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