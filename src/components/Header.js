const Title=()=>{
  return (
    <img className="logo"alt="logo" src="https://t3.ftcdn.net/jpg/02/41/30/72/240_F_241307210_MjjaJC3SJy2zJZ6B7bKGMRsKQbdwRSze.jpg"/>
   
  )
}

const Header = ()=>{
  return (
    <div className="header">
      <Title/>
      <div className="nav-bar-items">
        <ul>
          <li>Home</li>
          <li>Contact Us</li>
          <li>About</li>
          <li>Cart</li>
        </ul>
      </div>
    </div>
  )
}

export default Header;