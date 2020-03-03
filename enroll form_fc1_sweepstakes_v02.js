<style>p.text.type-small{font-size: 14px;}.winner{width:100%;display:flex;flex-direction:column;align-items:center}figure.winner-image{width:210px;margin:0 auto}.winner p{font-size:14px}.winner p span{display:block;font-weight:700}.footer-text{padding:50px 0}.footer-text p{margin-bottom:7px;font-size:14px}section.module-container{padding-top:15px}.checkbox__label a{color:#475860;text-decoration:underline}#ppi-h1{position:relative;margin:0 0 5px;font-size:16px;color:#475860}.mandate-field{margin:0 0 12px;display:inline-block;color:#475860;font-size:14px}#ppi-h1 p{margin:0}#ppi-h1 p::empty{margin:0}.btn-group{display:flex;flex-direction:column;align-items:flex-end}.btn-group span.btnbelow{font-size:12px;width:236px;text-align:center;padding:0 30px}.mobilespan{display:block}.desktopspan{display:none}img.lock-btn{width:15px;margin-left:7px;margin-top:-3px}.module-wrapper .width-one-quarter{width:35px;margin:0 15px 0 0}.module-wrapper .width-one-quarter{margin:0 5px 0 0;float:left;display:inline-block;width:30px}.module-wrapper .width-three-quarter p{margin:0!important}.module-wrapper .width-three-quarter{width:calc(100% - 30px)}.module-wrapper{border:0}nav{width:100%;display:block;justify-content:space-between;padding:15px 0;align-items:flex-end;margin:0 0 0;background:#262f33;min-height:auto}.header .module-container__content{display:block}.header .module-container__content{padding:0 22px}nav .logo{max-width:400px;display:inline-block;width:100%;float:left}nav .logo img{width:100%}.login-container{float:right;padding:8px 0 0}nav .login{font-weight:400;font-size:16px;display:inline-block;color:#c5ced4}.sidebar-content-list h3{position:relative;font-size:16px;color:#475860}.sidebar-content{display:flex;flex-direction:column}.sidebar-content .sidebar-content-list ul li{display:block;font-size:14px;position:relative;padding-left:35px;color:#475860}.sidebar-content .sidebar-content-list ul li span{font-weight:700}.sidebar-content .sidebar-content-list ul li:before{content:"";background:url(https://www.greendot.com/content/dam/greendot/enroll-form/ticks.png) no-repeat left center;height:25px;width:25px;position:absolute;left:0;background-size:80%}.sidebar-content .sidebar-content-list ul li:nth-child(n+2){margin-top:15px}.image{margin-bottom:30px;display:block;width:210px;margin:0 auto}#btn-getacard{text-transform:uppercase;background:#008732;height:58px;padding:10px 40px;width:100%;border-radius:22px;margin:0 auto}.checkbox{margin-bottom:10px!important}@media screen and (max-width:680px){#ppi-h1{padding-right:38%;margin:0 0 20px}}@media screen and (max-width:767px){#ppi-h1{padding-right:15px;margin:0 0 20px}nav .logo{width:200px}.sidebar-content{flex-direction:column}.sidebar-content-list ul{padding:10px 30px 30px}.sidebar-content .sidebar-content-list ul li{padding-left:26px}.container-sidebar{display:flex;flex-direction:column-reverse}.container-sidebar .image{width:190px}#btn-getacard{height:40px;margin:0 auto 13px}.btn-group{text-align:center;align-items:center}.btn-group span.btnbelow{font-size:11px;width:100%;text-align:center;padding:0 0}.winner p{padding:0 30px}}@media (min-width:768px){.mobilespan{display:none}.btn-group{padding-top:70px}.desktopspan{display:block}nav{padding:25px 0;min-height:auto}.login-container{padding:30px 0 0}#btn-getacard{text-transform:uppercase;background:#008732;height:43px;padding:10px 40px;width:auto;outline:0;border-radius:18px;margin:0 0 10px}}@media (min-width:1024px){nav{width:100%;display:block;justify-content:space-between;padding:25px 0;align-items:flex-end;margin:0 0 30px;background:#262f33;min-height:auto}}@media (min-width:1366px){sup{font-size:12px}.sidebar-content .sidebar-content-list ul li{padding-left:32px}.pad-top-zero .gap-top-medium{font-size:14px}.checkbox__label{font-size:14px}}@media (min-width:1600px){#ppi-h1{font-size:24px}nav .login{font-size:20px}.sidebar-content .sidebar-content-list ul li{padding-left:37px}.sidebar-content-list h3{font-size:24px}.sidebar-content .sidebar-content-list ul li{font-size:20px}.sidebar-content .sidebar-content-list ul li:before{left:6px}p.text.type-small{font-size: 14px;}.mandate-field{font-size:20px}.checkbox__label{font-size:20px}.winner p{font-size:20px}}</style>
<script>  
    var xx = setInterval(function () {
            //Heading Starts here
         
        //Heading Ends here

        //Right Rail starts here        
        if ($(".module-container__content-inner-column--second").is(":visible")) {
            clearInterval(xx);
            //Code starts here
            var child_p = document.querySelectorAll(".module-container__content-inner-column--second p.text");
            var side_panel = document.getElementById("side-panel");
            side_panel.remove();
            child_p.forEach(function(item,index){
                item.remove();
            });
            document.querySelector(".module-container__content-inner-column--second .type-large").remove();
            document.querySelector(".module-container__content-inner-column--second .type-small").remove();
			var bodydiv = document.querySelector("body");
            var headerNav = document.createElement("nav");
            headerNav.setAttribute("class", "header");
            bodydiv.prepend(headerNav);
            headerNav.innerHTML = '<div class="module-container__content"><a href="https://www.greendot.com/" class="logo"><img src="https://www.greendot.com/for-people.coreimg.png/structure/_jcr_content/root/sitenav_2/image2/1573663332616.png" class="cmp-image__image" itemprop="contentUrl" data-cmp-hook-image="image" alt="Unlimited by Green Dot Bank"></a> <div class="login-container"><a href="https://secure.greendot.com/greendot/login" class="login">LOG IN</a></div></div>';
               
                //HTML OFFER starts here
                    var sidebar_container = document.querySelector(".module-container__content-inner-column--second");
                    var offerDiv = document.createElement('div');
                    offerDiv.setAttribute("class", "sidebar-content");
                    sidebar_container.appendChild(offerDiv);
                    offerDiv.innerHTML = '<div class="container-sidebar"><div class="sidebar-content-list "> <h3 class="span_column">Enjoy the benefits of the Unlimited Cash Back Bank Account</h3><div class="winner"> <figure class="winner-image"> <img src="https://www.greendot.com/extreme-tax-sweepstakes/_jcr_content/root/responsivegrid/layout_container/col2Tile1/image.coreimg.png/1574801281536.png" alt="greendot"> </figure> <p><span>You could be our next winner!</span> Direct deposit your federal tax refund to your new Green Dot account to enter for a chance to win.</p></div></div></div>' ;
                //HTML OFFER ends here

                var divider = document.querySelector(".divider")
                var para1 = divider.nextElementSibling.remove();
                var  para2 = divider.nextElementSibling.remove();
                divider.remove();


                //Footer code Starts here
                var footerContent = document.querySelector(".module-container.pad-top-zero .module-container__content .module-container__content-inner");
                footerContent.innerHTML = '<div class="footer-text"><p>View Deposit Account Agreement for fees, terms and conditions. See App for free ATM locations.</p><p>NO PURCHASE NECESSARY. Extreme Tax Sweepstakes ends 4/30/20, subject to Entry Periods as outlined in the full <a href="https://www.greendot.com/extreme-tax-sweepstakes#rules" style="color: #262626; text-decoration:underline;" target="_blank"><u>Official Rules</u></a> available at <a href="https://www.greendot.com/extreme-tax-sweepstakes" style="color: #262626; text-decoration:underline;" target="_blank"><u>GreenDot.com/ExtremeTax</u></a>. Must be a resident of the 50 US (excl VT) or DC & 18 or older to enter. Void where prohibited. Green Dot reserves the right to extend, modify, eliminate, or reduce these promotions at any time.</p><p><sup>1</sup>Timing depends on deposit verification and when we get notice from your employer or benefits provider, and may vary from pay period to pay period.</sup></p><p><sup>2</sup>Interest is paid on each anniversary based on the average daily balance of the prior 365 days, up to a maximum balance of $10,000 if the bank account is in good standing and has a positive balance. 3% Annual Percentage Yield. Member FDIC. Annual Percentage Yields (APYs) are accurate as of 7/16/19 and may change before or after you open an account.</p><p>IMPORTANT INFORMATION ABOUT PROCEDURES FOR OPENING A NEW ACCOUNT <span>&#9473;</span> To help the government fight the funding of terrorism and money laundering activities, federal law requires all financial institutions to obtain, verify, and record information that identifies each person who opens an account. What this means for you: When you open an account, we will ask for your name, address, date of birth, and other information that will allow us to identify you. We may also ask to see your driver's license or other identifying documents.</p><p>Card issued by Green Dot Bank, Member FDIC, pursuant to a license from Visa U.S.A., Inc. Visa is a registered trademark of Visa International Service Association. Green Dot Bank operates under the following registered trade names: GoBank, Green Dot Bank and Bonneville Bank. All of these registered trade names are used by, and refer to, a single FDIC-insured bank, Green Dot Bank. Deposits under any of these trade names are deposits with Green Dot Bank and are aggregated for deposit insurance coverage.</p></div>'
                //Footer code Ends here

                //Button with lock icons starts here
                    var submitBtn = document.getElementById("btn-getacard")
                    submitBtn.innerHTML = "<span>SUBMIT SECURELY</span> <img src='https://www.greendot.com/content/dam/greendot/enroll-form/ic-error-outline-24px%20%2b%20ic-lock-24px.png' class='lock-btn' alt='btnlock' />"
                //Button with lock icons Ends here

                //Submit button below text Starts here
                    var btnSubmit = document.querySelector(".btn-group");
                    var btnBelowText = document.createElement("span");
                    btnBelowText.setAttribute("class", "btnbelow");
                    btnBelowText.innerHTML = "You'll receive a verification code via text upon submission";
                    btnSubmit.appendChild(btnBelowText);
                //Submit button below text Ends here


                //Heading of form Starts here
                    var head1 = document.getElementById("ppi-h1");
                    head1.innerHTML = "";
                    var spandesk = document.createElement("span");
                    spandesk.setAttribute("class","desktopspan");
                    spandesk.innerHTML = "Fill out this quick & easy form to open your Unlimited Cash Back Bank Account";
                    head1.appendChild(spandesk);

                    
                    var spanMobile = document.createElement("span");
                    spanMobile.setAttribute("class","mobilespan");
                    spanMobile.innerHTML = "Open your Unlimited Cash Back Bank Account";
                    head1.appendChild(spanMobile);

                    head1.insertAdjacentHTML("afterend", "<span class='mandate-field'>All fields required</span>");
                //Heading of form Ends here


                //mobile image icon start here
                var mwrapper = document.querySelector(".module-wrapper .module-wrapper .width-one-quarter");
                    if (mwrapper) {
                        mwrapper.innerHTML = '<img src="https://www.greendot.com/content/dam/greendot/enroll-form/mobile.png" alt="mobile-icon" />'
                    }

                //mobile image icon ends here

                //mobile image icon's content starts here
                var thirdQuarter = document.querySelector(".width-three-quarter p");
                thirdQuarter.innerHTML = "For security purposes, verification of a mobile phone number is required to open and use your account. Please ensure your mobile device is capable of receiving text messages. Message and data rates may apply."
                //mobile image icon's content ends here



                //Checkbox agree content update starts here
                    var checkboxAgree = document.getElementById("checkboxAgree");
                    checkboxAgree.nextElementSibling.innerHTML = 'I agree to the <a target="_blank" href="https://secure.greendot.com/docs/electroniccommunicationsagreement.pdf">Electronic Communications Agreement</a>, the <a target="_blank" href="https://www.greendot.com/about/docs/gdunlimited3daa.pdf">Deposit Account Agreement</a> and the <a target="_blank" href="https://secure.greendot.com/docs/privacypolicy(1-2016).pdf">Privacy Policy</a> and I consent to receive automated calls and text messages from or on behalf of Green Dot Bank about my account as needed. Message and data rates may apply.'
                    
                //Checkbox agree content update Ends here


                //Checkbox Consent content update starts here
                    var checkboxConsent = document.getElementById("checkboxConsent");
                    checkboxConsent.nextElementSibling.innerHTML = 'I consent to receive text messages from or on behalf of Green Dot Bank about special offers and promotions, up to a maximum of 3 per week. Consent is not required to use your account. You may cancel marketing messages by texting "STOP." Message and data rates may apply.'           
                //Checkbox Consent content update Ends here

            //Code ends here
        }
        //Right Rail starts here

    }, 1000);
</script>