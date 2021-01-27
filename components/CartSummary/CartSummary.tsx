import React from 'react'
import { Segment, Button } from 'semantic-ui-react'
import {
  OnCaptureData,
  PayPalButton,
  ButtonStylingOptions,
  PaypalOptions,
} from 'react-paypal-button'

type CartSummaryProps = {
  totalAmount: number
}

const CartSummary = ({ totalAmount }: CartSummaryProps) => {
  const paypalOptions: PaypalOptions = {
    clientId:
      CLIENT_ID,
    intent: 'capture',
    currency: 'USD',
  }
  const buttonStyles: ButtonStylingOptions = {
    layout: 'vertical',
    shape: 'rect',
  }

  const handleSuccessPayment = (data: OnCaptureData) => {
    console.log(data)
    if (data.status === 'COMPLETED') {
      alert('Compra finalizada')
    }
  }
  return (
    <>
      <h3>CheckOut</h3>
      <Segment clearing size="large" as="section">
        <span>
          <strong>Sub total:</strong>
          {` ${totalAmount}`}
        </span>

        <PayPalButton
          paypalOptions={paypalOptions}
          buttonStyles={buttonStyles}
          amount={''}
          onPaymentStart={() => console.log('Start payment')}
          onPaymentSuccess={(data) => handleSuccessPayment(data)}
          onPaymentError={(error) => console.log(error)}
          onPaymentCancel={(data) => console.log(data)}
        ></PayPalButton>
      </Segment>
    </>
  )
}

export default CartSummary
