import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["form"]
  connect() {
    console.log("toggle is toggling")
  }

  pop() {
    this.formTarget.classList.toggle("d-none");
    // this.formTarget.classList.add("d-none");
    // this.formTarget.classList.remove("d-none");
  }
}

const button = document.querySelector("button")
const form = document.querySelector("form")

button.addEventListener("click", () => {
  form.classList.toggle("d-none");
});