// JavaScript code to apply checkbox linethrough functionality using frontend js instead of the css:
//  li input:checked+span {
//     text-decoration: line-through;
//     text-decoration-color: #A683E3;
//   }
document.addEventListener("DOMContentLoaded", () => {
    const checkboxes = document.querySelectorAll('input[type="checkbox"]');

    checkboxes.forEach((checkbox, index) => {
    

        checkbox.addEventListener("change", () => {
            console.log("aaaaaaaaaa")
            const span = document.querySelector("#span"+index);
            console.log(span)
            if (span) { // Check if the span element exists
                if (checkbox.checked) {
                    span.style.textDecoration = "line-through";
                    span.style.textDecorationColor = "#A683E3";
                } else {
                    span.style.textDecoration = "none";
                }
            }
        });
    });
});
