
import React from 'react'
import Image from 'next/image'
import axios from 'axios'
import 'bootstrap/dist/css/bootstrap.css'
// import consts from "../pages/const"
import useAPI from '../hooks/useAPI'
const consts = {
  APP_ID: '196508ba26c2db10',
  REGION: 'us',
  AUTH_KEY: '9da79cec26e6c1fba1d79b467515073cd154af56',
  UID: 'SUPERHERO1'
}
const addUser = async(uid) => {
  let user = JSON.parse(localStorage.getItem('user'))
  let userId = 'SUPERHERO1'
  const options = { headers: { appId: consts.APP_ID, apiKey: consts.API_KEY }}
  const res = await axios.post(`https://api-us.cometchat.io/v2.0/users/${userId}/friends`, { accepted: [uid]}, options)
}

function AddFriend() {
  const { data, loading, error } = useAPI('/users?perPage=100&page=1&withTags=false')

  if (loading) {
    return <li className="list-group-item">Loading...</li>
  }
  if (data) {
    return (
      <div className="card">
        <div className="card-body">
          <ul className="list-group">
            {
              loading ? "Loading" : (data.map((friend) => {
                return (

                <li key={friend.uid} className="list-group-item">
                  {friend.name}

                  <button className="btn btn-primary" style={{float: 'right'}} onClick={() => addUser(friend.uid)}>Add Friend</button>
                </li>
                )
              }))
            }
          </ul>
        </div>
      </div>
    )
  }
  if (error) {
    return <li className="list-group-item" style={{ color: red }}>Error!!!</li>
  }
}

export default AddFriend