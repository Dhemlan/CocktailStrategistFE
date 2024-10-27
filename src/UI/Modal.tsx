import { useEffect, useRef } from "react";
import { createPortal } from "react-dom";

interface ModalProps {
  children?: React.ReactNode;
  title: string;
}

function Modal({ children, title }: ModalProps) {
  const dialog = useRef<HTMLDialogElement>(null);

  useEffect(() => {
    const modal = dialog.current;
    modal!.showModal();
    return () => modal!.close();
  }, []);

  return createPortal(
    <dialog ref={dialog}>
      <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity"></div>

      <div className="fixed inset-0 z-10">
        <div className="flex min-h-full justify-center p-4 text-center sm:items-center">
          <div className="py-5 rounded-lg bg-slate-400 shadow-xl sm:w-full sm:max-w-lg">
            <h3 className="mb-2 font-semibold text-gray-900">{title}</h3>
            {children}
          </div>
        </div>
      </div>
    </dialog>,
    document.getElementById("modal")!,
  );
}

export default Modal;
