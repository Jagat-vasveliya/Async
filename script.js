function firstName() {
	document.getElementById("display").innerText = "Jagat";
	// console.log('Jagat');
}
async function main() {
	setTimeout(firstName, 5000);
	let lastName = new Promise(function (resolve) {
		setTimeout(function () {
			resolve("Vasveliya");
		}, 10000);
	});
	document.getElementById("display1").innerText = await lastName;
	// console.log(await lastName);
}
main();
