function highlightIfInputNotValid(idForm) {
	let elChild = document.querySelector("#tenthSection__form").children;
	for (var i = 0; i < elChild.length; i++) {
		elChild[i].classList.add("chek-valid"); //second console output
	}
}
let cookies_notice = document.getElementById("cookies-notice");
setTimeout(() => {
	cookies_notice.classList.add("_active");
}, 2000);

function hideCookiesNotice() {
	cookies_notice.classList.remove("_active");
}
