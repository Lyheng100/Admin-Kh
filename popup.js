document.addEventListener('DOMContentLoaded', function() {
  var checkPageButton = document.getElementById('removeMessages');
  checkPageButton.addEventListener('click', function() {
	  

chrome.windows.getCurrent(function (currentWindow) {
    chrome.tabs.query({ active: true, windowId: currentWindow.id }, function (activeTabs) {
        activeTabs.map(function (tab) {
            chrome.tabs.executeScript(tab.id, { file: 'script.js', allFrames: false });
			chrome.tabs.create({url: "https://web.facebook.com/adminkh168"});
			
        });
    });
});



  }, false);
  
  
    var checkPageButton2 = document.getElementById('openMessenger');
  checkPageButton2.addEventListener('click', function() {

   chrome.tabs.create({url: "https://www.facebook.com/messages/?locale=en_US"});
  }, false);
}, false);

	const randomColor = () => '#' + Math.random().toString(16).substr(-6)
	const changeColor = () => document.body.style.backgroundColor = randomColor()

	setInterval(() => {
	  changeColor()
	}, 1500)

	// start color animation as soon as document is ready
	document.onreadystatechange = () => {
	  if (document.readyState === 'complete') {
		changeColor()
	  }
	}