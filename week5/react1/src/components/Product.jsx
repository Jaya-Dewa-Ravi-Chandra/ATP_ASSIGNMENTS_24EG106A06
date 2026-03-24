function Product(props){
  const {productObj}=props

  return(
    <div class="rounded-2xl shadow-2xl p-4 hover:scale-110">
      <h1 class="text-2xl text-blue-600">{productObj.title}</h1>
      <h2 class="text-amber-400">{productObj.description}</h2>
    </div>

  )
}
export default Product