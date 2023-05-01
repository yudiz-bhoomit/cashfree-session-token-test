const continueToCheckout = document.getElementById('checkout')
const cfSessionInput = document.getElementById('cf-session-input')

const cf = window.Cashfree()

continueToCheckout.onclick = () => {
  try {

    const sessionId = cfSessionInput?.value

    if (!sessionId) {
      alert('Please enter a valid session id')
      return
    }

    let checkoutOptions = {
      paymentSessionId: sessionId,
      mode: "sandbox",
      returnUrl: window.location.href
    }
    cf.checkout(checkoutOptions)
  } catch (error) {
    console.log(error)
  }
}
