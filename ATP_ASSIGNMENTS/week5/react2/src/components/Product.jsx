function Product(props){
  const {product}=props

  return(
    <div class="rounded-2xl shadow-2xl p-4 hover:scale-110">
      <h1 class="text-2xl text-blue-600">{product.title}</h1>
      <h2 class="text-amber-400">{product.description}</h2>
    </div>

  )
}
export default Product