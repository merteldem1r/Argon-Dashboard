import { useDispatch, useSelector } from "react-redux";
import { MainNavigation } from "./MainNavigation.tsx";
import { useEffect } from "react";
import { closeSideDrawer } from "../../features/sideDrawerSlice.ts";
import { AppDispatch, RootState } from "../../sharedStore.ts";

export function SideMenu() {
  const { isSideDrawerOpen } = useSelector((store: RootState) => store.sideDrawer);
  const dispatch = useDispatch<AppDispatch>()

  const closeSideDrawerFn = () => dispatch(closeSideDrawer());

  useEffect(() => {
    window.addEventListener('click', closeSideDrawerFn)

    return () => {
      window.removeEventListener('click', closeSideDrawerFn)
    }
  }, []);

  return (
    <aside
      onClick={e => e.stopPropagation()}
      className={`side-menu xl:block ${!isSideDrawerOpen && 'hidden'}`}
    >
      <div className="bg-white rounded-2xl h-full relative">

        <MainNavigation />

        <div className="flex flex-col gap-4 bg-white absolute w-full bottom-0 px-3 mb-4">
          <div className="flex flex-col items-center">
            <img src="img/need-help.svg" className="w-[125px]" alt="" />
            <span className="text-md text-[#344767]">Need help?</span>
            <span className="text-sm text-[#344767] opacity-70">Please check our docs</span>
          </div>

          <div className="flex flex-col gap-4">
            <button className="bg-[#344767] w-full p-2 rounded-md text-sm text-white">Documentation</button>
            <button className="bg-main-blue w-full p-2 rounded-md text-sm text-white">Upgrade to pro</button>
          </div>
        </div>
      </div>
    </aside>
  )
}