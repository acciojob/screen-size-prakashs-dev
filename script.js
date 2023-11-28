//your JS code here. If required.
const header = document.getElementById("sizeInfo");
window.addEventListener("resize", () => {
	header.textContent = `Width: ${window.outerWidth} and Height: ${window.outerHeight}`;
});