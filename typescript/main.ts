type str = string;
type num = number;

changeListItems();

function changeListItems() {
    let home = <HTMLElement>document.getElementById("home");
    let about = <HTMLElement>document.getElementById("about");

    function removeFullScreenFromAllSections() {
        document.querySelectorAll("section").forEach((sec) => {
            sec.classList.remove("full-screen-left", "full-screen-right");
        });
    }

    Array.from(document.querySelectorAll(".main .list li")).forEach((li) => {
        li.addEventListener("click", () => {

            removeFullScreenFromAllSections();

            if (li.getAttribute("id") === "item-home") {
                home.classList.add("full-screen-left");
            } else if (li.getAttribute("id") === "item-about") {
                about.classList.add("full-screen-right");
            }
        });
    });

    function readMoreHome() {
        let btnHome = <HTMLElement>document.getElementById("read-more-home");
        btnHome.addEventListener("click", () => {
            removeFullScreenFromAllSections();
            about.classList.add("full-screen-right");
        });
    }

    readMoreHome();
}