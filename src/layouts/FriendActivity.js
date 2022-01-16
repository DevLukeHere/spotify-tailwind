import { UserAddIcon } from "@heroicons/react/outline";

function FriendActivity() {
  return (
    <div className="p-4 bg-spotify-black">
      <div className="text-white grid grid-cols-2">
        <p className="font-bold">Friend activity</p>
        <UserAddIcon className="w-5 h-5 place-self-end stroke-gray-400 hover:stroke-white" />
      </div>
    </div>
  );
}

export default FriendActivity;
