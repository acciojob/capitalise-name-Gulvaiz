//your JS code here. If required.
let uppercase = document.querySelector("#fname")

uppercase.addEventListener("blur", (event) => {
	   event.target.value = event.target.value.toUpperCase()
})
 