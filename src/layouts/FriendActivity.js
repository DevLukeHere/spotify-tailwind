import { useState } from "react";
import { UserAddIcon, MusicNoteIcon } from "@heroicons/react/outline";
import { PlayIcon } from "@heroicons/react/solid";
import ProfileImage1 from "../assets/images/aloy-user.png";
import ProfileImage2 from "../assets/images/master-chief-user.jpeg";
import ProfileImage3 from "../assets/images/kirby-user.jpeg";

function FriendActivity() {
  const [playOverlay, setPlayOverlay] = useState(false);
  const [playOverlay2, setPlayOverlay2] = useState(false);
  const [playOverlay3, setPlayOverlay3] = useState(false);

  return (
    <div className="p-4 bg-spotify-black col-end-13 col-span-3">
      <div className="text-white grid grid-cols-2 mb-10">
        <p className="font-bold">Friend activity</p>
        <UserAddIcon className="w-5 h-5 place-self-end stroke-gray-400 hover:stroke-white" />
      </div>
      <div className="grid grid-rows-5 gap-5">
        <div className="grid grid-cols-friendActivity gap-3">
          <div
            className="relative w-11 h-11 rounded-full"
            onMouseEnter={() => setPlayOverlay(true)}
            onMouseLeave={() => setPlayOverlay(false)}
          >
            {playOverlay ? (
              <PlayIcon className="absolute fill-white w-7 h-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            ) : null}
            <img
              className="object-cover rounded-full w-11 h-11 hover:opacity-50"
              src={ProfileImage1}
              alt="profile"
            />
          </div>
          <div className="">
            <p className="font-semibold text-gray-400 text-sm mb-1 cursor-pointer hover:underline hover:text-white">
              Aloy
            </p>
            <div className="grid grid-cols-artistAlbum gap-1 mb-1">
              <p className="text-gray-400 text-xs cursor-pointer hover:underline hover:text-white">
                Aqueduct
              </p>
              <div className="grid content-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <p className="text-gray-400 text-xs cursor-pointer hover:underline hover:text-white">
                Leavy
              </p>
            </div>
            <div className="grid grid-cols-leftPanel gap-1 mb-1">
              <div className="grid content-center">
                <MusicNoteIcon className="w-3 h-3 stroke-gray-400" />
              </div>
              <p className="text-gray-400 text-xs cursor-pointer hover:underline">
                Tales of a Flowing Forest
              </p>
            </div>
          </div>
          <div className="grid justify-items-end">
            <p className="text-gray-400 text-xs">1d</p>
          </div>
        </div>
        <div className="grid grid-cols-friendActivity gap-3">
          <div
            className="relative w-11 h-11 rounded-full"
            onMouseEnter={() => setPlayOverlay2(true)}
            onMouseLeave={() => setPlayOverlay2(false)}
          >
            {playOverlay2 ? (
              <PlayIcon className="absolute fill-white w-7 h-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            ) : null}
            <img
              className="object-cover rounded-full w-11 h-11 hover:opacity-50"
              src={ProfileImage2}
              alt="profile"
            />
          </div>
          <div className="">
            <p className="font-semibold text-gray-400 text-sm mb-1 cursor-pointer hover:underline hover:text-white">
              Master Chief
            </p>
            <div className="grid grid-cols-artistAlbum gap-1 mb-1">
              <p className="text-gray-400 text-xs cursor-pointer hover:underline hover:text-white">
                Low Rider
              </p>
              <div className="grid content-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <p className="text-gray-400 text-xs cursor-pointer hover:underline hover:text-white">
                Evil Needle
              </p>
            </div>
            <div className="grid grid-cols-leftPanel gap-1 mb-1">
              <div className="grid content-center">
                <MusicNoteIcon className="w-3 h-3 stroke-gray-400" />
              </div>
              <p className="text-gray-400 text-xs cursor-pointer hover:underline">
                Sound Escapes EP
              </p>
            </div>
          </div>
          <div className="grid justify-items-end">
            <p className="text-gray-400 text-xs">1w</p>
          </div>
        </div>
        <div className="grid grid-cols-friendActivity gap-3">
          <div
            className="relative w-11 h-11 rounded-full"
            onMouseEnter={() => setPlayOverlay3(true)}
            onMouseLeave={() => setPlayOverlay3(false)}
          >
            {playOverlay3 ? (
              <PlayIcon className="absolute fill-white w-7 h-7 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2" />
            ) : null}
            <img
              className="object-cover rounded-full w-11 h-11 hover:opacity-50"
              src={ProfileImage3}
              alt="profile"
            />
          </div>
          <div className="">
            <p className="font-semibold text-gray-400 text-sm mb-1 cursor-pointer hover:underline hover:text-white">
              Kirby
            </p>
            <div className="grid grid-cols-artistAlbum gap-1 mb-1">
              <p className="text-gray-400 text-xs cursor-pointer hover:underline hover:text-white">
                Wish
              </p>
              <div className="grid content-center">
                <div className="w-1 h-1 bg-white rounded-full"></div>
              </div>
              <p className="text-gray-400 text-xs cursor-pointer hover:underline hover:text-white">
                SwuM
              </p>
            </div>
            <div className="grid grid-cols-leftPanel gap-1 mb-1">
              <div className="grid content-center">
                <MusicNoteIcon className="w-3 h-3 stroke-gray-400" />
              </div>
              <p className="text-gray-400 text-xs cursor-pointer hover:underline">
                Cycles
              </p>
            </div>
          </div>
          <div className="grid justify-items-end">
            <p className="text-gray-400 text-xs">2d</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default FriendActivity;
