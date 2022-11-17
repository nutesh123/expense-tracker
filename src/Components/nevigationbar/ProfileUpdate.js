import React from 'react'
import { Link } from 'react-router-dom'
function ProfileUpdate() {
  return (
    <div> <h4>Winners never quite, Quitters never win</h4>
      <p>Your profile is 64% Complete Complete profile have higher chances of landing a job <Link>Complete now</Link></p>
      <hr></hr>
      <form>
       <h4> Contact Details <button>Cancal</button> </h4>
        <label for='name'>Full Name</label>
        <input type='text' id='name'/>
        <label for='url'>Profile Photo url</label>
        <input type='text' id='url'/>
        <button>Update</button>
      </form>
    </div>
  )
}

export default ProfileUpdate