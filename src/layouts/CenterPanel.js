import {
  ChevronLeftIcon,
  ChevronRightIcon,
  ChevronDownIcon,
  PlayIcon,
  DownloadIcon,
  DotsHorizontalIcon,
  SearchIcon,
  ClockIcon,
} from "@heroicons/react/outline";
import ProfileImage from "../assets/images/mario-8bit.jpg";
import AlbumArt1 from "../assets/images/american-idiot.jpg";
import AlbumArt2 from "../assets/images/in-rainbows.jpeg";
import AlbumArt3 from "../assets/images/riot.jpeg";

function CenterPanel() {
  return (
    <div className="bg-gradient-to-t from-slate-900 to-slate-700 pl-7 pt-3 pr-7 col-span-6">
      <div className="grid grid-cols-2 mb-8">
        <div className="grid-cols-centerArrows gap-5 content-center grid">
          <div className="w-8 h-8 bg-spotify-black rounded-full relative">
            <ChevronLeftIcon className="w-6 h-6 stroke-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 cursor-pointer" />
          </div>
          <div className="w-8 h-8 bg-spotify-black/50 rounded-full relative">
            <ChevronRightIcon className="w-6 h-6 stroke-white/50 absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
        </div>

        <div className="bg-spotify-black p-2 rounded-full grid grid-cols-friendActivity gap-3">
          <img src={ProfileImage} alt="user" className="h-8 w-8 rounded-full" />
          <p className="text-white font-bold text-sm content-center grid">
            Mr. Mario
          </p>
          <div className="grid content-center">
            <ChevronDownIcon className="w-5 h-5 stroke-white" />
          </div>
        </div>
      </div>
      <div className="grid-rows-centerRow grid gap-5">
        <p className="font-semibold text-white text-3xl">Good afternoon</p>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-gray-400/20 cursor-pointer hover:bg-gray-400/40 grid grid-cols-centerRowAlbum rounded-sm">
            <img src={AlbumArt1} alt="album-art" className="w-20 h-20" />
            <p className="text-white font-semibold text-lg content-center grid pl-4">
              American Idiot
            </p>
            <div className="grid content-center">
              <PlayIcon className="h-12 w-12 stroke-spotify-green-primary" />
            </div>
          </div>
          <div className="bg-gray-400/20 cursor-pointer hover:bg-gray-400/40 grid grid-cols-centerRowAlbum rounded-sm">
            <img src={AlbumArt2} alt="album-art" className="w-20 h-20" />
            <p className="text-white font-semibold text-lg content-center grid pl-4">
              In Rainbows
            </p>
            <div className="grid content-center">
              <PlayIcon className="h-12 w-12 stroke-spotify-green-primary" />
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-5">
          <div className="bg-gray-400/20 cursor-pointer hover:bg-gray-400/40 grid grid-cols-centerRowAlbum rounded-sm">
            <img src={AlbumArt3} alt="album-art" className="w-20 h-20" />
            <p className="text-white font-semibold text-lg content-center grid pl-4">
              Riot!
            </p>
            <div className="grid content-center">
              <PlayIcon className="h-12 w-12 stroke-spotify-green-primary" />
            </div>
          </div>
        </div>
      </div>
      <div className="grid grid-rows-2 mt-10">
        <div className="grid grid-cols-2">
          <p className="font-semibold text-white text-2xl hover:underline cursor-pointer">
            Episodes for you
          </p>
          <p className="text-gray-400 text-sm hover:underline cursor-pointer grid content-center justify-self-end">
            SEE ALL
          </p>
        </div>
      </div>
    </div>
  );
}

export default CenterPanel;
