 
 

function detectDevice() {
     let type = new MobileDetect(window.navigator.userAgent)
     //let button = document.getElementById("button")
     let osname ;
     window.isMobile = false;
       if (type.os() === "iOS") {
         osname = "Download for iOS";
         window.isMobile = true;
       } else if (type.os() === "AndroidOS") {
         osname = "Download for Android";
         window.isMobile = true;
       } else if (type.os() === "BlackBerryOS") {
         osname = "Download for Blackberry";
         window.isMobile = true;
       } else if (type.os() === "WindowsOS") {
         osname = "Download for Windows";
         window.isMobile = true;
       } else if (type.os() === "MacOS") {
        osname = "Download for Mac";
        window.isMobile = true;
       } else {
         osname = "Download on your device";
       }
     console.log("Operating system: "+osname)
     console.log("window.isMobile: "+window.isMobile)
 
 //other datatype
 console.log( type.mobile() );          // 'Sony'
 console.log( type.phone() );           // 'Sony'
 console.log( type.tablet() );          // null
 console.log( type.userAgent() );       // 'Safari'
 console.log( type.os() );              // 'AndroidOS'
 console.log( type.is('iPhone') );      // false
 console.log( type.is('bot') );         // false
 console.log( type.version('Webkit') );         // 534.3
 console.log( type.versionStr('Build') );       // '4.1.A.0.562'
 console.log( type.match('playstation|xbox') ); // false
 
     }
     
     window.addEventListener("load", detectDevice);
