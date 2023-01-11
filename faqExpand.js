const faqItems = document.querySelectorAll(".faqItem");
const faqTitles = document.querySelectorAll(".faqTitle");
let faqShown = null;

faqTitles.forEach((faqTitle, faqTitleIndex) => {
	faqTitle.addEventListener("click", () => faqExpand(faqTitleIndex));
});

function faqExpand(showIndex) {
	faqItems.forEach((faqItem) => faqItem.classList.remove("faqShown"));

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
