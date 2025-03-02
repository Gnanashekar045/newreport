import React from "react";

const Header = () => {
    return (
        <div className="flex items-center justify-between text-white px-6 py-4 shadow-md">
            <div className="flex items-center space-x-4">
                <img className="w-12 h-12 object-cover" src="/src/assets/uynite-logo (1).avif" alt="Uynite Logo" />
                <h1 className="text-3xl font-semibold"><span className="text-4xl font-bold scale-x-150 text-[#4A5A5A]">Uynite</span> Admin Center</h1>
            </div>
            <h1 className="text-2xl cursor-pointer hover:underline m-0 mt-6">Log out</h1>
        </div>
    );
};

export default Header;
