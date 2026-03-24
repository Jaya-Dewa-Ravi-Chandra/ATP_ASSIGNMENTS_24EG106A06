                          import { getProductById, checkStock, reduceStock, products } from './product.js';
                          
                          export let cartItems = [];
                          
                          // TODO: Implement these functions
                          
                          export function addToCart(productId, quantity) {
                            // 1. Get product details
                            let index=products.findIndex(obj=>obj.id==productId)
                            getProductById(productId)
                            // 2. Check stock availability
                            // 3. Check if product already in cart
                            if(checkStock(productId,quantity))
                            {
                              let cartProduct=cartItems.findIndex(obj=>obj.productId==productId)
                              if(cartProduct!==-1)
                              {
                                updateQuantity(productId,quantity)
                              }
                              else
                              {
                                cartItems.push({productId:productId,name:products[index].name,quantity:quantity,price:products[index].price})
                              }
                              return "added to cart successfully"
                            }
                            else
                            {
                              return "stock unavailable"
                            }
                            //    - If yes, update quantity
                            //    - If no, add new item
                            // 4. Return success/error message
                          }
                          
                          export function removeFromCart(productId) {
                            let index=products.findIndex(obj=>obj.id==productId)
                            let target=cartItems.findIndex(obj=>obj.name==products[index].name)
                            if(target)
                            {
                              console.log(`removed ${cartItems[target].name}`)
                              cartItems.splice(target,1)
                              return
                             
                            }
                            else
                              console.log("product not found")
                          }
                          
                          export function updateQuantity(productId, newQuantity) {
                            let target=cartItems.findIndex(obj=>obj.productId==productId)
                                cartItems[target].quantity=cartItems[target].quantity+newQuantity
                                return `${cartItems[target].name} quantity updated to ${cartItems[target].quantity}`
                          }              
                          export function getCartItems() {
                            return (cartItems)
                          }
                          
                          export function getCartTotal() {
                            // Calculate total price of all items in cart
                            return (cartItems.reduce((acc,obj)=>acc=acc+obj.quantity*obj.price,0))
                            // Return total
                          }
                          
                          export function clearCart() {
                            // Empty the cart
                            cartItems=[]

                          }
                          

 