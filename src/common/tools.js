function downloadPDF() {
	let downloadBtn = document.querySelector('#downloadBtn');
	downloadBtn.disabled = true;

	let loadingIcon = new Image();
	loadingIcon.src =
		'data:image/png;base64,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';
	loadingIcon.className = 'loading';
	downloadBtn.insertBefore(loadingIcon, downloadBtn.children[0]);

	let pheight = document.querySelector('div.page').clientHeight;
	let pwidth = document.querySelector('div.page').clientWidth;

	let qwidth = pwidth * 0.1;
	let qheight = pheight * 0.1;

	let canvasArray = new Array();
	let imagesArray = new Array();

	document.querySelectorAll('.page').forEach(function (elem, i) {
		let canvas = document.createElement('canvas');
		canvas.width = pwidth;
		canvas.height = pheight;
		canvas.setAttribute('complete', '0');
		canvasArray.push(canvas);

		let ctx = canvas.getContext('2d');
		ctx.fillStyle = 'white';
		ctx.fillRect(0, 0, pwidth, pheight);

		let image = new Image();
		imagesArray.push(image);

		image.src = elem.hasAttribute('bg')
			? elem.getAttribute('bg')
			: $(elem)
					.children('span')
					.first()
					.css('background-image')
					.split('"')[1]
					.split(/\\/)
					.slice(-1)[0];

		image.addEventListener('load', (e) => {
			$(elem)
				.children('span')
				.each(function (j, s) {
					ctx.drawImage(
						image,
						-parseInt($(s).css('background-position-x')),
						-parseInt($(s).css('background-position-y')),
						qwidth,
						qheight,
						$(s).attr('class').split('-')[1] * qwidth,
						$(s).attr('class').split('-')[2] * qheight,
						qwidth + 1,
						qheight
					);
				});
			canvas.setAttribute('complete', '1');
		});
	});

	let timer = setInterval(() => {
		for (let i = 0; i < canvasArray.length; i++) {
			const element = canvasArray[i];
			if (element.getAttribute('complete') != '1') {
				return;
			}
		}

		const { jsPDF } = window.jspdf;
		const pdf = new jsPDF('p', 'px', [pwidth, pheight]);

		let title = $('title').text().split('|')[1].toString().trim();
		canvasArray.forEach(function (e, i) {
			pdf.addImage(
				e.toDataURL('image/jpeg'),
				'jpeg',
				0,
				0,
				pwidth,
				pheight,
				'',
				'MEDDIUM'
			);
			pdf.addPage();
		});

		let targetPage = pdf.internal.getNumberOfPages();
		pdf.deletePage(targetPage);

		pdf.save(title + '.pdf');
		clearInterval(timer);
		downloadBtn.disabled = false;
		downloadBtn.removeChild(downloadBtn.children[0]);
	}, 500);
}
