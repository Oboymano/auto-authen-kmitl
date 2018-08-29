chrome.tabs.onUpdated.addListener(function(tabId, changeInfo, tab) {

    function modifyDOM() {
        /* -----------------------------------username----------------------------------------- */
        var user = ""       // username field
        var pass = ""       // password field
        var timeout = 0          // time delay ( millisecond )
        /* -----------------------------------password----------------------------------------- */
        function setLoginTimeout(time) {

            setTimeout(function (){
                var username = document.getElementById('username')
                var password = document.getElementById('password')
                var clickButton = document.getElementById('loginBtn')
                if (username != null && password != null){
                    username.classList.remove("input-empty")
                    username.value = user
                    password.classList.remove("input-empty")
                    password.value = pass
                    clickButton.click()
                }
                /*
                    setLoginTimeout() //Call loop
                */
            },time)

        }
        
        setLoginTimeout(timeout)

    }

    console.log('neen')
    chrome.tabs.executeScript(tab.id,{
        code: '(' + modifyDOM + ')();' //argument here is a string but function.toString() returns function's code
    });

});