function init() {
	var jspdfScript = document.createElement('script');
	jspdfScript.src =
		'https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js';
	document.querySelector('head').appendChild(jspdfScript);

	var container = document.createElement('div');
	document.querySelector('body').appendChild(container);
	container.className = 'downloader_container';
	container.style.zIndex = "999";

	var downloadButton = document.createElement('button');
	container.appendChild(downloadButton);
	downloadButton.innerHTML = '<span>下载PDF</span>';
	downloadButton.addEventListener('click', downloadPDF);
	downloadButton.id = 'downloadBtn';

	var progressText = document.createElement('span');
	container.appendChild(progressText);
	progressText.id = 'progressText';
	progressText.innerHTML = '如需滚动请缓慢滚动，以免缓存图像错位';
}
