import image from "../assets/image.png";
function Account() {
  return (
    <div className="w-82.5 h-182.5 m-auto flex items-start justify-start bg-gray-50 border border-gray-200  ">
      <div className="flex flex-col w-full  ">
        <p className="p-6 pl-2 bg-white "> Account Settings</p>
        <div className="flex gap-3 bg-gray-200 items-center py-4">
          <img className="h-16 w-16 rounded-[50%]" src={image} alt="" />
          <span>Mary Doe</span>
          <span>Mary@Gmail.com</span>
        </div>
        <div className="flex text-start px-2 py-4 text-sm text-gray-700 border-b border-dotted border-gray-400">
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aut ipsa
            blanditiis doloribus, dolores amet error a quisquam pariatur
            explicabo,
          </p>
        </div>
      </div>
    </div>
  );
}

export default Account;
