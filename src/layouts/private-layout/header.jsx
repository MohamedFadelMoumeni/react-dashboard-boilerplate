import { Menu, Transition } from "@headlessui/react";
import React, { Fragment, useContext, useState } from "react";
import { HiMenuAlt2 } from "react-icons/hi";
import { IoIosLogOut } from "react-icons/io";
import { useNavigate } from "react-router-dom";
import MobileMenu from "../../components/UI/mobile-menu";
import { AdminContext } from "../../context/admin.context";
const Header = () => {
  const { setAdmin } = useContext(AdminContext);
  const [open, setOpen] = useState(false);
  const navigate = useNavigate();
  return (
    <div className="w-full rounded-lg py-3 px-4 bg-white flex items-center justify-between md:justify-end shadow-lg shadow-gray-200">
      <div className="md:hidden relative">
        <HiMenuAlt2 size={20} onClick={() => setOpen(true)} />
        <MobileMenu isOpen={open} toggleDrawer={() => setOpen(!open)} />
      </div>
      <Menu as="div" className="relative inline-block text-left">
        <Menu.Button>
          <div className="flex items-center space-x-2 relative cursor-pointer">
            <div>
              <div className="w-9 h-9 bg-gray-200 rounded-full flex items-center justify-center">
                <p className="text-center font-medium">AD</p>
              </div>
              <div className="w-3 h-3 rounded-full bg-cyan-600 absolute -bottom-1 left-0" />
            </div>
          </div>
        </Menu.Button>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-52 origin-top-right divide-y divide-gray-100 rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
            <div className="px-1 py-1 ">
              <Menu.Item>
                {({ active }) => (
                  <button
                    onClick={() => setAdmin(null)}
                    className={`${
                      active ? "bg-cyan-600 text-white" : "text-gray-900"
                    } group flex w-full space-x-2 items-center rounded-md px-2 py-2 text-sm`}
                  >
                    <IoIosLogOut size={16} />
                    <p>Déconnecter</p>
                  </button>
                )}
              </Menu.Item>
            </div>
          </Menu.Items>
        </Transition>
      </Menu>
    </div>
  );
};

export default Header;
