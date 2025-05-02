const dialog = document.querySelector("dialog");
const showDialogBtn = document.querySelector(".add-btn");
const submitBtn = document.querySelector(".submit");
const cancelBtn = document.querySelector(".cancel");




tasks = [
    {
        title  : "Study Differential Equations",
        note   : "Continue through the textbook until page 130.",
        date   :  "29 Apr 2025",
        time   : "low",
        project: "default",
    },
    {
        title  : "Study Differential Equations",
        note   : "Continue through the textbook until page 130.",
        date   :  "29 Apr 2025",
        time   : "low",
        project: "default",
    },
    {
        title  : "Study Differential Equations",
        note   : "Continue through the textbook until page 130.",
        date   :  "29 Apr 2025",
        time   : "low",
        project: "default",
    },
    {
        title  : "Study Differential Equations",
        note   : "Continue through the textbook until page 130.",
        date   :  "29 Apr 2025",
        time   : "low",
        project: "default",
    }
]

showDialogBtn.addEventListener("click", () => {
    dialog.showModal();
});

// submitBtn.addEventListener("click", () => {
//     dialog.close();
// });

// cancelBtn.addEventListener("click", () => {
//     dialog.close();
// });

