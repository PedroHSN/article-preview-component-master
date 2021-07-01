const socials = document.querySelector(" .open-share")

const shareBtn = document.getElementById("share")

shareBtn.addEventListener("click", () => {
    socials.classList.add("clicked")
})