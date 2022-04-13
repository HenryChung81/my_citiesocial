import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['quantity']

  quantity_minus(event) {
    event.preventDefault()
    let quantity = Number(this.quantityTarget.value)
    if (quantity > 1) {
      this.quantityTarget.value = quantity - 1
    }
  }

  quantity_plus(event) {
    event.preventDefault()
    let quantity = Number(this.quantityTarget.value)
    this.quantityTarget.value = quantity + 1
  }
}
