function User(props){
  const {user}=props

  return(
    <div class="rounded-2xl shadow-2xl p-4 hover:scale-110">
      <img class="rounded-2xl flex mx-auto" src={user.image}></img>
      <h1 class="text-2xl text-blue-600">{user.name}</h1>
      <h2 class="text-amber-400">{user.email}</h2>
    </div>

  )
}
export default User