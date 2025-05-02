const dialog = document.querySelector("dialog");
const showDialogBtn = document.querySelector(".add-btn");
const submitBtn = document.querySelector(".submit");
const cancelBtn = document.querySelector(".cancel");

showDialogBtn.addEventListener("click", () => {
    dialog.showModal();
});

// submitBtn.addEventListener("click", () => {
//     dialog.close();
// });

// cancelBtn.addEventListener("click", () => {
//     dialog.close();
// });

