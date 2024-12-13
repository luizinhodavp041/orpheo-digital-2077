import React from "react";
import { Menu } from "lucide-react";

const Header = () => {
  return (
    <header className="fixed w-full bg-transparent px-6 pt-4">
      <div className="flex flex-col max-w-[1920px] mx-auto gap-4">
        <div className="text-center">
          <h1 className="text-white text-2xl font-light tracking-widest uppercase">
            Grupo Orpheo
          </h1>
        </div>

        <nav className="flex justify-between items-center">
          <button className="flex items-center gap-2 text-white border border-white rounded-md px-4 py-2 hover:bg-white/10 transition-colors">
            Menu
            <Menu className="w-5 h-5" />
          </button>

          <button className="text-white border border-white rounded-md px-4 py-2 hover:bg-white/10 transition-colors">
            Fale conosco
          </button>
        </nav>
      </div>
    </header>
  );
};

export default Header;
