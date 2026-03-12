
                          import { reduceStock ,products} from './product.js';
                          import { getCartItems, getCartTotal, clearCart, cartItems } from './cart.js';
                          import { applyDiscount, calculateDiscount, validateCoupon } from './discount.js';
                          
                          // TODO: Implement these functions
                          
                          export function processPayment(paymentMethod, couponCode = null) {
                            // 1. Get cart items and total
                            let discount=0
                            let status=""
                            let cartTotal=getCartTotal()
                            let Items=getCartItems()
                            // 2. Apply discount if coupon provided
                            if(couponCode)
                            {
                                if(validateCoupon(couponCode,getCartTotal(),cartItems))
                                    discount=calculateDiscount(couponCode,cartTotal)
                                    console.log(applyDiscount(cartTotal,couponCode,cartItems))
                            }
                            
                            // 3. Validate payment method (card/upi/cod)

                            // 4. Process payment (simulate)
                            if(validatePaymentMethod(paymentMethod))
                            {
                                status="success"
                                console.log("Payment Successful")
                            }
                            else
                            {
                                status="failed"
                                console.log("Payment Failed")
                            }
                            //5. Reduce stock for all items
                            for(let items of cartItems)
                            {
                                reduceStock(items.productId,items.quantity)
                            }
                            // 6. Clear cart
                            clearCart()
                            // 7. Generate order summary 
                             let a={
                               orderId: generateOrderId(),
                               items: Items,
                               subtotal: cartTotal,
                               discount: discount,
                               total: cartTotal-discount,
                               paymentMethod: paymentMethod,
                               status:status,
                               message: 'Thank you for shopping'
                             }
                             return a
                          }
                          
                          export function validatePaymentMethod(method) {
                            if(method=="upi" || "card" || "cod")
                                return true
                            else
                                return false
                          }
                          
                          function generateOrderId() {
                            // Generate random order ID
                            return 'ORD' + Date.now();
                          }
