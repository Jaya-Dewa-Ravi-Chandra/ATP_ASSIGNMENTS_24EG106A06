
                          // Available coupons
                          const coupons = {
                            'WELCOME10': { type: 'percentage', value: 10, minAmount: 1000 },
                            'FLAT500': { type: 'flat', value: 500, minAmount: 5000 },
                            'ELECTRONICS20': { type: 'percentage', value: 20, minAmount: 10000, category: 'electronics' }
                          };
                          
                          // TODO: Implement these functions
                          
                          export function validateCoupon(couponCode, cartTotal, cartItems) {
                            // 1. Check if coupon exists
                            if(couponCode=='WELCOME10'||'FLAT500'||'ELCTRONICS20')
                            {
                            // 2. Check minimum amount requirement
                               if(cartTotal>=coupons[couponCode].minAmount)
                               {
                            // 3. Check category requirement (if any)
                                 if(coupons[couponCode].category)
                                 {
                                    if(cartItems.find(obj=>obj.category==coupons.couponCode.category))
                                        return true
                                 }
                                 else
                                    return true
                               }
                            }
                            return false
                            // Return { valid: true/false, message: '...' }
                          }
                          
                          export function calculateDiscount(couponCode, cartTotal) {
                            // Calculate discount amount based on coupon type
                            let discount
                            if(coupons[couponCode].type=="percentage")
                                discount=coupons[couponCode].value*(cartTotal/100)
                            if(coupons[couponCode].type=="flat")
                                discount=coupons[couponCode].value
                            // Return discount amount
                            return discount
                          }
                          
                          export function applyDiscount(cartTotal, couponCode, cartItems) {
                            // 1. Validate coupon
                           if( validateCoupon(couponCode,cartTotal,cartItems))
                           {
                            // 2. If valid, calculate discount
                            let discountAmount=calculateDiscount(couponCode,cartTotal)
                            // 3. Return final amount and discount details
                            return {
                                originalTotal:cartTotal, 
                                discount: discountAmount, 
                                finalTotal: cartTotal-discountAmount,
                                message: `you saved ${discountAmount} on this bill`
                            }
                            // Return { 
                            //   originalTotal: ..., 
                            //   discount: ..., 
                            //   finalTotal: ...,
                            //   message: '...'
                            // }
                          }
                        }
