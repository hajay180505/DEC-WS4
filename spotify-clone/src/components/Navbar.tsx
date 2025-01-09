import spotifyLogo from '../assets/images/spotify_icon.svg'

export default function Navbar() {
  return (
    <>
      <div className='bg-black flex flex-row items-center'>
        <div className="mr-auto">
          <img src={spotifyLogo} alt="Spotify Logo" className='w-12 h-12 invert-0' />
        </div>
        <div className="flex justify-between items-center px-4 my-4">
          <div className="p-2 bg-slate-700/60 rounded-full mr-3 w-100">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="#ffffff" className="size-6 ">
              <path stroke-linecap="round" stroke-linejoin="round" d="m2.25 12 8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
            </svg>
          </div>
          <div className="bg-slate-700/60 rounded-full p-2 px-4 flex flex-row gap-2 ">
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="#ffffff" className="size-6">
              <path strokeLinecap="round" strokeLinejoin="round" d="m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z" />
            </svg>
            <input className='text-gray-200 text-sm bg-inherit opacity-60 w-[300px]' placeholder='What do you want to listen to?'
              type="text" name="search" id="search " />
          </div>
        </div>
        <div className='flex space-x-4 ml-auto'>
          <p className='text-white'>install app</p>
          <p className='text-white'>notif</p>
          <p className='text-white'>profile</p>
        </div>
      </div>
    </>
  );
}