/*! mobappcreator-plugin-base - v1.0.0 - 2016-10-21 */function mbMailTo(a,b,c){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),a=a||"",b=b||"",c=c||"",mbGetRequest("mobileapp://mail",{to:encodeURIComponent(a),subject:encodeURIComponent(b),body:encodeURIComponent(c)})}function mbTel(a){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),isMobile.iOS()?mbGetRequest("tel:"+a):mbGetRequest("mobileapp://tel",{tel:encodeURIComponent(a)})}function mbSms(a,b){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://sms",{to:encodeURIComponent(a),body:encodeURIComponent(b)})}function mbOpenApp(a,b){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),a=a||"",b=b||"",mbGetRequest("mobileapp://openapp",{scheme:encodeURIComponent(a),url:encodeURIComponent(b)})}function mbNavigatePush(a){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://navigate.push",{page:a})}function mbNavigateModal(a){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://navigate.modal",{page:a})}function mbNavigateBack(){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://navigate.back")}function mbSetTitle(a){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://settitle",{title:a})}function mbShare(a,b){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),a&&(b=b||"",mbGetRequest("mobileapp://share",{text:encodeURIComponent(a),link:encodeURIComponent(b)}))}function mbGetMedia(a,b){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),a=a||"photo",b=b||"all",mbGetRequest("mobileapp://getmedia",{type:a,source:b})}function mbGetQR(){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://getqr")}function mbGetLocation(){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://getlocation")}function mbSetPreference(a,b){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://setpreference",{key:a,value:encodeURIComponent(b)})}function mbGetPreference(a){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://getpreference",{key:a})}function mbShowMessage(a,b){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://showmessage",{title:encodeURIComponent(a),message:encodeURIComponent(b)})}function mbOpenSection(a){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://opensection",{sectionID:a})}function mbOpenSectionOnSelf(a){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://opensectiononself",{sectionID:a})}function mbCloseLoginModuleAndOpenSection(a){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://closeloginmoduleandopensection",{sectionID:a})}function mbOpenModule(a){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbOpenSection(a)}function mbCloseStartupModule(){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://closestartupmodule")}function mbShowLoading(){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://showloading")}function mbHideLoading(){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://hideloading")}function mbAuthenticateFB(a,b,c){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),c=c||"email",mbGetRequest("mobileapp://authenticateFB",{client_id:a,redirect_uri:b,scope:c})}function mbAddRightButtonImage(a){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://addrightbuttonimage",{imgSrc:a})}function mbAddLeftButtonImage(a){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://addleftbuttonimage",{imgSrc:a})}function mbAddRightButtonText(a){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://addrightbuttontext",{title:a})}function mbAddLeftButtonText(a){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://addleftbuttontext",{title:a})}function mbSetBounces(a){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://setbounces",{bounces:a})}function mbCameraResolution(a){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),mbGetRequest("mobileapp://setcameraresolution",{resolution:a})}function mbGetRequest(a,b){mbsdkDebug&&alert(arguments.callee.toString().match(/function ([^\(]+)/)[1]),b=b||{};var c=a;if(mbIsEmpty(b)||(c+="?"+mbConstructQueryString(b)),"undefined"!=typeof MbAndroid&&"undefined"!=MbAndroid.sendCmd)return void MbAndroid.sendCmd(c);var d="iframeID"+Math.floor(1e3*Math.random()+1e3),e=document.createElement("iframe");e.style.display="none",e.src=c,e.id=d,document.body.appendChild(e),setTimeout(function(){var a=document.getElementById(d);a&&a.remove()},1e3)}function mbConstructQueryString(a){var b="";for(var c in a)a.hasOwnProperty(c)&&(""!=b&&(b+="&"),b+=c+"="+a[c]);return b}function mbIsEmpty(a){var b;for(b in a)if(a.hasOwnProperty(b))return!1;return!0}var anchor_links_method="push";anchor_links_method&&$(document).on("click","a",function(a){$(this).hasClass("mbLink")||!$(this).attr("href")||!$(this).attr("href").length<3||("push"==anchor_links_method?(a.preventDefault(),mbNavigatePush($(this).attr("href"))):"modal"==anchor_links_method&&(a.preventDefault(),mbNavigateModal($(this).attr("href"))))}),"undefined"!=typeof mbsdkDebug&&mbsdkDebug>0?alert("Debug active"):mbsdkDebug=0;var isMobile={Android:function(){return navigator.userAgent.match(/Android/i)},iOS:function(){return navigator.userAgent.match(/iPhone|iPad|iPod/i)},any:function(){return isMobile.Android()||isMobile.iOS()}};$(document).on("click",".mbLink",function(a){a.preventDefault();var b=$(this).attr("mbLink").split(":");if(!(b.length<1))switch(b[0]){case"mbNavigateBack":case"navigateBack":case"back":mbNavigateBack();break;case"reload":location.reload();break;case"mbCloseStartupModule":case"closeStartupModule":mbCloseStartupModule();break;case"tel":case"mbTel":mbTel(b[1]);break;case"mailTo":case"mbMailTo":mbMailTo(b[1],b[2],b[3]);break;case"sms":case"mbSms":mbSms(b[1],b[2]);break;case"share":case"mbShare":mbShare(b[1],b[2]);break;case"openApp":case"mbOpenApp":b.splice(0,1);var c=b.join(":");b.splice(0,1),b=b.join(":").split("//"),b.splice(0,1);var d=b.join("//");mbOpenApp(c,d);break;case"openSection":case"mbOpenSection":mbOpenSection(b[1]);break;case"openModule":case"mbOpenModule":mbOpenModule(b[1]);break;case"modal":case"mbNavigateModal":b.splice(0,1);var e=b.join(":");mbNavigateModal(e);break;case"push":case"mbNavigatePush":b.splice(0,1);var e=b.join(":");mbNavigatePush(e);break;default:var e=b.join(":");mbNavigatePush(e)}});