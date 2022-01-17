import { useState } from "react";
import AlbumArt from "../assets/images/lofi-girl-album-art.jpeg";
import { HeartIcon } from "@heroicons/react/outline";
import {
  RewindIcon,
  FastForwardIcon,
  PlayIcon,
  PauseIcon,
  ChevronDoubleRightIcon,
  VolumeUpIcon,
  DesktopComputerIcon,
  ViewListIcon,
  ArrowsExpandIcon,
  RefreshIcon,
  ArrowCircleUpIcon,
} from "@heroicons/react/solid";

function BottomNavbar() {
  const [onHoverAlbum, setOnHoverAlbum] = useState(false);
  const [play, setPlay] = useState(true);

  const onClickPlay = () => {
    setPlay(!play);
  };

  return (
    <div className="bg-zinc-800 w-full text-white grid grid-cols-3 p-5 absolute inset-x-0 bottom-0">
      <div className="grid grid-cols-footerLeft gap-2 items-center">
        <div
          className="w-16 h-16 relative"
          onMouseEnter={() => setOnHoverAlbum(true)}
          onMouseLeave={() => setOnHoverAlbum(false)}
        >
          <ArrowCircleUpIcon
            className={`w-8 h-8 absolute right-1 top-1 fill-zinc-700 stroke-white ${
              onHoverAlbum ? "" : "hidden"
            } hover:fill-zinc-900`}
          />
          <img className="cursor-pointer" src={AlbumArt} alt="album-art" />
        </div>
        <div>
          <p className="text-xs hover:underline cursor-pointer">companion</p>
          <p className="text-xs text-gray-400 hover:underline cursor-pointer">
            hi Jude, Towerz
          </p>
        </div>
        <div className="pl-5">
          <HeartIcon className="h-5 w-5 stroke-slate-400 hover:stroke-white" />
        </div>
      </div>
      <div className="">
        <div className="grid items-center grid-cols-3">
          <div className="grid grid-cols-1 mr-3">
            <ChevronDoubleRightIcon className="h-5 w-5 justify-self-end fill-slate-400 hover:fill-white" />
          </div>
          <div className="grid grid-cols-3 items-center gap-4">
            <RewindIcon className="h-5 w-5 justify-self-end fill-slate-400 hover:fill-white" />
            {play ? (
              <PlayIcon
                className="h-12 w-12 justify-self-center"
                onClick={onClickPlay}
              />
            ) : (
              <PauseIcon
                className="h-12 w-12 justify-self-center"
                onClick={onClickPlay}
              />
            )}
            <FastForwardIcon className="h-5 w-5 justify-self-start fill-slate-400 hover:fill-white" />
          </div>
          <div className="grid grid-cols-1 ml-3">
            <RefreshIcon className="h-5 w-5 fill-slate-400 hover:fill-white" />
          </div>
        </div>
        <div className="flex mt-2 justify-center items-baseline">
          <div className="">
            <p className="text-xs text-gray-400 mr-2">0:00</p>
          </div>
          <div className="w-full">
            <input
              class="rounded-lg overflow-hidden appearance-none bg-gray-400 h-1 w-full"
              type="range"
              min="1"
              max="100"
              step="1"
              value="15"
            />
          </div>
          <div className="">
            <p className="text-xs text-gray-400 ml-2">2:23</p>
          </div>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <ViewListIcon className="h-5 w-5" />
        <DesktopComputerIcon className="h-5 w-5" />
        <VolumeUpIcon className="h-5 w-5" />
        <input
          class="rounded-lg overflow-hidden appearance-none bg-gray-400 h-1"
          type="range"
          min="1"
          max="100"
          step="1"
          value="15"
        />
        <ArrowsExpandIcon className="h-5 w-5" />
      </div>
    </div>
  );
}

export default BottomNavbar;
