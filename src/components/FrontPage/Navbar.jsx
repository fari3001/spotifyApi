import '../Styles/Login.css';
import { ReactComponent as Logo } from '../Images/Logo.svg';
import axios from 'axios';
import {useEffect, useState} from 'react';


export function Navbar() {

const AUTH_ENDPOINT = "https://accounts.spotify.com/authorize"
const CLIENT_ID = "56a2465e4fd04548be442cc642ffe194"
const REDIRECT_URI = "http://localhost:3000"
const RESPONSE_TYPE = "token"

const [token, setToken] = useState("")

useEffect(() => {
  const hash = window.location.hash
  let token = window.localStorage.getItem("token")

  if (!token && hash) {
      token = hash.substring(1).split("&").find(elem => elem.startsWith("access_token")).split("=")[1]


      window.location.hash = ""
      window.localStorage.setItem("token", token)
  }

  setToken(token)

}, [])



const [searchKey, setSearchKey] = useState("")
const [artists, setArtists] = useState([])

const searchArtists = async (e) => {
  e.preventDefault()
  const {data} = await axios.get("https://api.spotify.com/v1/search", {
      headers: {
          Authorization: `Bearer ${token}`
      },
      params: {
          q: searchKey,
          type: "artist"
      }
  })

  setArtists(data.artists.items)
}

const renderArtists = () => {
  return artists.map(artist => (

      <div key={artist.id}>
          {artist.images.length ? <img width={"100%"} src={artist.images[0].url} alt=""/> : <div>No Image</div>}
          {artist.name}
      </div>
  ))
}
console.log(artists)

const logout = () => {
  setToken("")
  window.localStorage.removeItem("token")
  setArtists([])
}


    return (
        <div className="container" >
            <header className='navbar'>
              <a className='logo' href="https://www.spotify.com/au/"><Logo /></a>
              {!token ? 
              <nav>
                <ul>
                  <li>
                    <a href="https://www.facebook.com/">Premium</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/">Support</a>
                  </li>
                  <li>
                    <a href="https://www.facebook.com/">Download</a>
                  </li>
                  <li className='separator'>|</li>
                  <li>
                    <a href={`${AUTH_ENDPOINT}?client_id=${CLIENT_ID}&redirect_uri=${REDIRECT_URI}&response_type=${RESPONSE_TYPE}`}>Login</a>
                  </li>  
                </ul>
              </nav>
              : <button onClick={logout}>Logout</button> 
              }
              {token ? 
                         <form onSubmit={searchArtists}>
                         <input type="text" onChange={e => setSearchKey(e.target.value)}/>
                         <button type={"submit"}>Search</button>
                         </form> :
                         ""
              }

              {renderArtists()}
            </header>
        </div>
    );
}
