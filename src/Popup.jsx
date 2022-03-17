import { useState } from "react";
import CustomPopup from "./CustomPopup";
import "./Popup.css"

function Popup() {
  const [visibility, setVisibility] = useState(true);

  const popupCloseHandler = (e) => {
    setVisibility(e);
  };

  const [firstname, setfirstname]=useState('')
  const [lastname, setlastname]=useState('')
  const[email,setemail]=useState('')
  const[password, setpassword]=useState('')

  function registeruser(event){
    event.preventDefault()

    var users=JSON.parse(localStorage.getItem('users') || "[]")
    var newuser={
      firstname:firstname,
      lastname:lastname,
      email:email,
      password:password,
    }

    users.push(newuser)
    localStorage.setItem('users', JSON.stringify(users))
    alert ('Registration is  Successful')
  }


  return (
    <div className="crea8">
      <button onClick={(e) => setVisibility(!visibility)}>Create New Account</button>

      <CustomPopup
        onClose={popupCloseHandler}
        show={visibility}
        title=""
      >
        <div className="form-fb">
        <h2>Sign Up</h2>
        <p>It's quick and easy</p>
        <hr />
        <form onSubmit={registeruser}>
          <input className="signup" type="text" placeholder="First Name" value={firstname} onChange={(e)=>{setfirstname(e.target.value)}}/>
          <input className="signup" type="text" placeholder="Last Name" value={lastname} onChange={(e)=>{setlastname(e.target.value)}}  />
          <input type="text" className="fullwd" name="email&number" placeholder="Mobile number or email address"  value={email} onChange={(e)=>{setemail(e.target.value)}} />
          <input type="password" className="fullwd" placeholder="Password" name=""  id="" value={password} onChange={(e)=>{setpassword(e.target.value)}} />
          <input type="submit" onClick={registeruser} className="btn btn-primary" value="Sign Up" />
        </form>
        </div>
      </CustomPopup>
    </div>
  );
}

export default Popup
