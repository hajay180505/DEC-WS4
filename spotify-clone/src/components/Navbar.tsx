import spotifyLogo from '../assets/images/spotify_icon.svg'

export default function Navbar() {
  return <>
    <div className='bg-slate-500 flex-col'>
      <img src={spotifyLogo} alt="okok" className='w-14 h-14'/>
      <div className="bg-slate-300">
        <p>home</p>
        <p>search bar with explore</p>
      </div>
      <p>install app</p>
      <p>notif</p>
      <p>profile</p>
    </div>
  </>
}