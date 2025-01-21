import React from "react";
import { IconX } from "@tabler/icons-react";

const Modal = ({ title, children, isOpen, onClose, onAction, actionLabel }) => {
  if (!isOpen) return null;

  return (
    <div className="fixed left-0 top-0 z-[80] flex h-full w-full items-center justify-center bg-[#13131a] bg-opacity-90">
      <div className="relative w-11/12 rounded-xl border border-neutral-800  bg-[#13131a]  shadow-sm md:w-1/2 lg:w-1/3 dark:border-gray-200 dark:bg-white">
        <div className="p-4 sm:p-7">
          <div className="text-center">
            <h2 className="block text-2xl font-bold text-neutral-200  dark:text-gray-800">
              {title}
            </h2>
          </div>

          <div className="mt-5">{children}</div>

          <div className="mt-4 flex justify-end space-x-2">
            <button
              onClick={onAction}
              className="inline-flex w-full items-center justify-center gap-x-2 rounded-lg border border-transparent bg-[#13131a] dark:bg-blue-600 px-4 py-2 text-sm font-semibold text-neutral-200 hover:bg-neutral-800 border-neutral-800 dark:hover:bg-blue-700 disabled:pointer-events-none disabled:opacity-50"
            >
              {actionLabel}
            </button>
          </div>
        </div>
        <button
          onClick={onClose}
          className="absolute right-4 top-4 text-neutral-200  hover:text-neutral-400  dark:text-gray-800 dark:hover:text-gray-600"
        >
          <IconX />
        </button>
      </div>
    </div>
  );
};

export default Modal;
