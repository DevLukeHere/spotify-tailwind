import {
  HomeIcon,
  SearchIcon,
  LibraryIcon,
  PlusIcon,
  HeartIcon,
} from "@heroicons/react/outline";

function LeftPanel() {
  return (
    <div className="bg-spotify-black pt-8 pl-2 pb-2 pr-2 h-screen col-start-1 col-end-4">
      <div className="mb-5">
        <div className="pl-4 pt-2 pb-2 rounded grid grid-cols-leftPanel gap-3 mb-3 cursor-pointer text-white stroke-white border-white bg-gray-600/50">
          <HomeIcon className="w-6 h-6" />
          <p className="self-center text-sm font-bold">Home</p>
        </div>
        <div className="pl-4 pt-2 pb-2 grid grid-cols-leftPanel gap-3 mb-3 cursor-pointer text-gray-400 hover:text-white hover:stroke-white">
          <SearchIcon className="w-6 h-6" />
          <p className="self-center text-sm font-semibold">Search</p>
        </div>
        <div className="pl-4 pt-2 pb-2 grid grid-cols-leftPanel gap-3 cursor-pointer text-gray-400 hover:text-white hover:stroke-white">
          <LibraryIcon className="w-6 h-6" />
          <p className="self-center text-sm font-semibold">Library</p>
        </div>
      </div>
      <div className="border-b border-solid border-gray-600 mb-5">
        <div className="pl-4 grid grid-cols-leftPanel cursor-pointer gap-3 mb-3 text-gray-400 hover:text-white hover:stroke-white">
          <PlusIcon className="w-6 h-6" />
          <p className="self-center text-sm font-semibold">Create Playlist</p>
        </div>
        <div className="pl-4 grid grid-cols-leftPanel cursor-pointer gap-3 mb-3 text-gray-400 hover:text-white hover:stroke-white">
          <HeartIcon className="w-6 h-6" />
          <p className="self-center text-sm font-semibold">Liked Songs</p>
        </div>
      </div>
      <div className="grid grid-rows-5 gap-2">
        <div className="text-gray-400 hover:text-white text-sm pl-4 pt-2">
          <p className="self-center">Pop Rock Run</p>
        </div>
        <div className="text-gray-400 hover:text-white text-sm pl-4 pt-2">
          <p className="self-center">Fun Run</p>
        </div>
        <div className="text-gray-400 hover:text-white text-sm pl-4 pt-2">
          <p className="self-center">Anime Fever</p>
        </div>
        <div className="text-gray-400 hover:text-white text-sm pl-4 pt-2">
          <p className="self-center">90s Anthem</p>
        </div>
      </div>
    </div>
  );
}

export default LeftPanel;
