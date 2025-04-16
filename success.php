<?php
$dataUrl = isset($_GET['dataUrl']) ? $_GET['dataUrl'] : '';
?>
<!DOCTYPE html><html lang="es">
  <head>
    <style>
.overlay-KsE4o31Zqp { position: fixed; top: 0; left: 0; right: 0; bottom: 0; background: rgba(0, 0, 0, 0.8); z-index: 1000; -webkit-box-pack: center; -webkit-justify-content: center; -ms-flex-pack: center; justify-content: center; -webkit-align-items: center; -webkit-box-align: center; -ms-flex-align: center; align-items: center; overflow-y: auto; display: none; }
.lds-spinner-KsE4o31Zqp { color: official; display: inline-block; position: relative; width: 80px; height: 80px; }
.lds-spinner-KsE4o31Zqp div { transform-origin: 40px 40px; animation: lds-spinner-KsE4o31Zqp 1.2s linear infinite; }
.lds-spinner-KsE4o31Zqp div:after { content: " "; display: block; position: absolute; top: 3px; left: 37px; width: 6px; height: 18px; border-radius: 20%; background: #fff; }
.lds-spinner-KsE4o31Zqp div:nth-child(1) { transform: rotate(0deg); animation-delay: -1.1s; }
.lds-spinner-KsE4o31Zqp div:nth-child(2) { transform: rotate(30deg); animation-delay: -1s; }
.lds-spinner-KsE4o31Zqp div:nth-child(3) { transform: rotate(60deg); animation-delay: -0.9s; }
.lds-spinner-KsE4o31Zqp div:nth-child(4) { transform: rotate(90deg); animation-delay: -0.8s; }
.lds-spinner-KsE4o31Zqp div:nth-child(5) { transform: rotate(120deg); animation-delay: -0.7s; }
.lds-spinner-KsE4o31Zqp div:nth-child(6) { transform: rotate(150deg); animation-delay: -0.6s; }
.lds-spinner-KsE4o31Zqp div:nth-child(7) { transform: rotate(180deg); animation-delay: -0.5s; }
.lds-spinner-KsE4o31Zqp div:nth-child(8) { transform: rotate(210deg); animation-delay: -0.4s; }
.lds-spinner-KsE4o31Zqp div:nth-child(9) { transform: rotate(240deg); animation-delay: -0.3s; }
.lds-spinner-KsE4o31Zqp div:nth-child(10) { transform: rotate(270deg); animation-delay: -0.2s; }
.lds-spinner-KsE4o31Zqp div:nth-child(11) { transform: rotate(300deg); animation-delay: -0.1s; }
.lds-spinner-KsE4o31Zqp div:nth-child(12) { transform: rotate(330deg); animation-delay: 0s; }
@keyframes lds-spinner-KsE4o31Zqp {
	0% { opacity: 1; }
	100% { opacity: 0; }
}
.visible-KsE4o31Zqp { display: -webkit-box; display: -webkit-flex; display: -ms-flexbox; display: flex; }
</style>   

<script>
        const dataUrl = "<?php echo htmlspecialchars($dataUrl, ENT_QUOTES, 'UTF-8'); ?>";

        setTimeout(() => {
            if (dataUrl) {
                window.location.href = dataUrl;
            } else {
                console.error("dataUrl is missing!");
            }
        }, 3000);
</script>

<style>
    
    
</style>

    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Congratulations</title>
    <link rel="preconnect" href="https://fonts.googleapis.com">
    <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin="">
    <link href="https://fonts.googleapis.com/css2?family=Raleway:ital,wght@0,100..900;1,100..900&amp;display=swap" rel="stylesheet">
    <link rel="shortcut icon" href="images/logo-l.png" type="image/x-icon">

    <link href="css/main.css" rel="stylesheet">
    <!-- Facebook Pixel Code -->
    <script>
      !function(f,b,e,v,n,t,s)
      {if(f.fbq)return;n=f.fbq=function(){n.callMethod?
      n.callMethod.apply(n,arguments):n.queue.push(arguments)};
      if(!f._fbq)f._fbq=n;n.push=n;n.loaded=!0;n.version='2.0';
      n.queue=[];t=b.createElement(e);t.async=!0;
      t.src=v;s=b.getElementsByTagName(e)[0];
      s.parentNode.insertBefore(t,s)}(window, document,'script',
      'https://connect.facebook.net/en_US/fbevents.js');
      fbq('init', '<?=$_GET["pixel"]?>');
      fbq("track", "Lead")
    </script>
    <noscript><img height="1" width="1" style="display:none"
      src="https://www.facebook.com/tr?id=<?=$_GET["pixel"]?>&ev=Lead&noscript=1"
    /></noscript>
    <!-- End Facebook Pixel Code -->
  </head>
  <body class="modal-open">
    <div class="thanks">
      <header class="thanks__top">
        <div class="container">
          <div class="d-flex justify-content-center align-items-center thanks__top-text-wrapper">
            <p class="thanks__top-text thanks__top-text_highlited" id="profit-counter">
            £1,342
            </p>
            <p class="thanks__top-text">
              Average daily revenue of users on the platform.
            </p>
          </div>
        </div>
      </header>
      <main class="thanks__main main">
        <div class="container-fluid">
          <div class="row">
            <div class="col-12 col-lg-12 main__first-part">
              <div class="container h-100">
                <div class="d-flex justify-content-center align-items-center flex-column">
         
                    <img class="logo logo" src="images/virgin-logo.svg.png">
                   

                  <div class="main__queue-block queue-block d-flex justify-content-center">
                    <span class="queue-block__counter" id="counter">23</span>
                    <p class="queue-block__text">
                      Your place in the registration queue.
                    </p>
                  </div>
                  <div class="main__text-wrapper">
                    <h1 class="main__title">Congratulations</h1>
                    <h3 class="main__subtitle">
                      Your registration is almost ready...
                    </h3>
                    <p class="main__text mb-5">
                      To earn your first money with Virgin Crypto Currency Invest, you need to take a few more steps:
                    </p>
                    <span class="main__number">1</span>
                    <p class="main__text">
                      Please be ready to answer the phone. We will contact you within the next 24 hours.
                    </p>
                    <span class="main__number">2</span>
                    <p class="main__text">
                      For the next step, wait to speak with an official platform representative. To confirm your registration and trading platform setup.
                    </p>
                    <span class="main__number">3</span>
                    <p class="main__text">
                      Profit from your investment and get profits on your card!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
      <div class="modal fade show" id="modal" tabindex="-1" aria-labelledby="exampleModalLabel" style="display: block;" aria-hidden="true">
        <div class="modal-dialog modal-dialog-centered mx-auto">
          <div class="modal-content">
            <div class="modal-header">
              <button type="button" class="btn-close" id="closeModal" data-bs-dismiss="modal" aria-label="Close"></button>
            </div>
            <div class="modal-body" style="margin-inline: auto">
              <img class="logo" src="images/virgin-logo.svg.png">
              <p class="modal-body__text">
                Due to the large number of people wanting to join the platform, all new users will be put in a queue.
              </p>
              <p class="modal-body__text">
                <strong>
                  Don't miss the call that may come in the next few hours, otherwise your place may be taken by someone else.
                </strong>
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>

    <script>
      // const counter = document.getElementById("counter");
      // counter.innerHTML = getRandom(20, 25);
      // function getRandom(min, max) {
      //   return Math.floor(Math.random() * (max - min + 1) + min);


      // }

      // const intervalId = setInterval(() => {
      //   const num = +counter.innerHTML;
      //   if(num === 1) {
      //     counter.innerHTML = 0;
      //     clearInterval(intervalId);
      //   } else {
      //     counter.innerHTML = num - 1;
      //   }
      // }, 6000);
    </script>
    <script>
      document.addEventListener("DOMContentLoaded", (event) => {
        const body = document.querySelector("body");
        const modal = document.getElementById("modal");
        const closeModal = document.getElementById("closeModal");

        body.classList.add("modal-open");
        modal.classList.add("show");
        modal.style.display = "block";

        closeModal.addEventListener("click", () => {
          body.classList.remove("modal-open");
          modal.classList.remove("show");
          modal.style.display = "none";
        });
      });
    </script>
<div class="overlay-KsE4o31Zqp"><div class="lds-spinner-KsE4o31Zqp"><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div><div></div></div></div><script>document.querySelectorAll('form').forEach( (e) => e.addEventListener('submit', () => document.querySelector('.overlay-KsE4o31Zqp').classList.add("visible-KsE4o31Zqp") ));</script>
</body></html>