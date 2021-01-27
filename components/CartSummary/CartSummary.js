import React from 'react'
import { Segment } from 'semantic-ui-react'
import { PayPalButton } from 'react-paypal-button'

const CartSummary = ({ totalAmount }) => {
  const paypalOtions = {
    clientId:
      'ASMU3kWLU42pAQ9bEqC_PKO6YLQ7e4-5KrIwug4qgt9ZBeB3oxG6nBQ5SSbzZ-558dHxbtnYs3TyOwpk',
    intent: 'capture',
    currency: 'USD',
  }

  const buttonStyles = {
    layout: 'vertical',
    shape: 'rect',
  }

  const handlePaymentSuccess = () => {
    if (data.status === 'COMPLETED') {
      alert('Su compra ha sido realizada')
    }
  }
  return (
    <>
      <h3>Checkout</h3>
      <Segment clearing size="large" as="section">
        <span>
          <strong>Sub total:</strong>
          {` ${totalAmount}`}
        </span>

        <PayPalButton
          paypalOptions={paypalOtions}
          buttonStyles={buttonStyles}
          onPaymentStart={() => console.log('Start Payment')}
          onPaymentSuccess={(data) => handlePaymentSuccess(data)}
          onPaymentError={(error) => console.log(error)}
          onPaymentCancel={(data) => console.log(data)}
        />
      </Segment>
      <style jsx>{`
        h3 {
          display: flex;
          justify-content: center;
          align-items: center;
          margin: 0 auto;
        }
      `}</style>
    </>
  )
}

export default CartSummary
