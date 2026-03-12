/*2.OTP Countdown Simulator (Console App)
------------------------------------
        
        Simulate OTP sending flow in Node.js:
        
        Show “OTP Sent Successfully”
        
        Start 10-second countdown
        
        Allow resend only after countdown ends */
console.log("OTP Sent Successfully")
let a=10;
id=setInterval(()=>{console.log(a--);
                    if(a==0)
                    {
                     clearInterval(id)
                     console.log("Resend OTP")
                    }
                   },1000)
