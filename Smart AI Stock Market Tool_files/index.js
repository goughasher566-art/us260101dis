var actionBtn = document.querySelector("button.v19");
var reportModal = document.getElementById("report-modal");
var statusBars = [
	document.getElementById("status-bar-1"),
	document.getElementById("status-bar-2"),
	document.getElementById("status-bar-3"),
];
var progressPanel = document.getElementById("report-progress");
var resultPanel = document.getElementById("report-result");
var chatBtn = document.getElementById("chat-btn");
function initiateAnalysis(){
  var texts = $("#ticker-input").val().trim();
	if (!texts) {
		$(".v27").css("display", "flex");
		setTimeout(function () {
			$(".v27").css("display", "none");
		}, 1500);
		return false;
	} 
    gtag("event", "input", { 'content': texts });
// 	modal.style.display = "flex";
// 	aiProgress.style.display = "none";
// 	aiResult.style.display = "block";
// 	return;
  var oldText = actionBtn.textContent;
  actionBtn.textContent = "Analyzing...";
  actionBtn.disabled = true;
  actionBtn.style.opacity = "0.7";
  setTimeout(function () {
	actionBtn.textContent = oldText;
	actionBtn.disabled = false;
	actionBtn.style.opacity = "";
  }, 1500);

  reportModal.style.display = "flex";
  progressPanel.style.display = "block";
  resultPanel.style.display = "none";
  statusBars.forEach(function (bar) {
	bar.style.width = "0%";
  });
  var t = 0,
	interval = 30,
	duration = 1500;
  var timer = setInterval(function () {
	t += interval;
	var percent = Math.min(100, Math.round((t / duration) * 100));
	statusBars[0].style.width = percent + "%";
	if (percent > 33) statusBars[1].style.width = (percent - 33) * 1.5 + "%";
	if (percent > 66) statusBars[2].style.width = (percent - 66) * 3 + "%";
	if (t >= duration) {
	  clearInterval(timer);
	  statusBars.forEach(function (bar) {
		bar.style.width = "100%";
	  });
	  // 0.2秒后显示结果
	  setTimeout(function () {
		progressPanel.style.display = "none";
		resultPanel.style.display = "block";
	  }, 200);
	}
  }, interval);
}