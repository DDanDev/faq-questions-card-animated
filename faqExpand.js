const faqItems = document.getElementsByClassName("faqItem");
const faqTitles = document.getElementsByClassName("faqTitle");
let faqShown = null;

for (let faqTitleIndex in faqTitles) {
	if (isNaN(Number(faqTitleIndex))) break;
	faqTitles[faqTitleIndex].addEventListener("click", (e) => {
		faqExpand(faqTitleIndex);
	});
}

function faqExpand(showIndex) {
	for (let faqItem of faqItems) {
		faqItem.classList.remove("faqShown");
	}

	setTimeout(
		() => {
			if (faqShown !== showIndex) {
				faqItems[showIndex].classList.add("faqShown");
				faqShown = showIndex;
				return;
			} else {
				faqShown = null;
			}
		},
		faqShown === null ? 0 : 500
	);
}
