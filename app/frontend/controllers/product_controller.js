import { Controller } from 'stimulus'
import Rails from '@rails/ujs'

export default class extends Controller {
  static targets = ['quantity', 'sku', 'addToCartButton']

  add_to_cart(event) {
    event.preventDefault()

    let product_id = this.data.get('id')
    let quantity = this.quantityTarget.value
    let sku = this.skuTarget.value

    if (quantity > 0) {
      this.addToCartButtonTarget.classList.add('is-loading')
      let data = new FormData()
      data.append('id', product_id)
      data.append('quantity', quantity)
      data.append('sku', sku)

      Rails.ajax({
        url: '/api/v1/cart',
        data,
        type: 'POST',
        dataType: 'json',
        success: (response) => {
          if (response.status === 'ok') {
            let item_count = response.items || 0
            let event = new CustomEvent('addToCart', { detail: { item_count } })
            document.dispatchEvent(event)
          }
        },
        error: (err) => {
          console.log(err)
        },
        complete: () => {
          this.addToCartButtonTarget.classList.remove('is-loading')
        },
      })
    }
  }

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
