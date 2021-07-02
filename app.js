const socials = document.querySelector(" .open-share")

const shareBtn = document.getElementById("share")

const removeShareBtn = document.querySelector("remove-share")

shareBtn.addEventListener("click", () => {
    socials.classList.add("clicked")
})


removeShareBtn.addEventListener("click", () => {
    socials.classList.remove("clicked")
})