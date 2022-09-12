let menuState = (active) => {
    let menu = document.getElementById("menu").classList

    active?
    menu.add("open"):menu.remove("open")
}