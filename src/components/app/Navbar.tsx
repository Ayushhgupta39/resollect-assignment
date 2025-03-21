import { Avatar, AvatarFallback, AvatarImage } from "../ui/avatar";

function Navbar() {
  return (
    <nav className="w-full p-4 flex flex-row items-center justify-between">
      <div>
        <img
          className="size-16"
          src="https://www.resollect.com/assets/company-logo-BU8PUDQC.png"
          alt=""
        />
      </div>
      <div className="flex flex-row items-center gap-2">
        <div>
          <Avatar>
            <AvatarImage src="https://github.com/shadcn.png" />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
        </div>
        <div>
          <p className="text-base font-semibold">Tushar</p>
          <p className="text-sm text-gray-400">Tushar@resollect.com</p>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
