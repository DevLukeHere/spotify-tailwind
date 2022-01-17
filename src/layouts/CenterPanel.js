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

function CenterPanel() {
  return (
    <div className="bg-gradient-to-t from-slate-900 to-slate-700 pl-7 pt-3 pr-7 col-span-6">
      <div className="grid grid-cols-2 mb-8">
        <div className="grid grid-cols-2 content-center grid">
          <div className="w-8 h-8 bg-spotify-black rounded-full relative">
            <ChevronLeftIcon className="w-6 h-6 stroke-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
          </div>
          <div className="w-8 h-8 bg-spotify-black rounded-full relative">
            <ChevronRightIcon className="w-6 h-6 stroke-white absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
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
      <div className="grid-rows-3 grid">
        <div>
          <p className="font-semibold text-white text-3xl">Good afternoon</p>
        </div>
      </div>
    </div>
  );
}

export default CenterPanel;
