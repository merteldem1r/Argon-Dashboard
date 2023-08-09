import { useLocation } from "react-router-dom";
import { Space } from "antd";
import { BellOutlined, MenuOutlined, SearchOutlined, SettingOutlined, UserOutlined } from "@ant-design/icons";
import { openSideDrawer } from "../../../features/sideDrawerSlice.ts";
import { useDispatch } from "react-redux";
import { AppDispatch } from "../../../sharedStore.ts";

export function Header() {
  const { pathname } = useLocation();
  const dispatch = useDispatch<AppDispatch>();

  let pathName: string = pathname === '/' ? 'dashboard' : pathname;
  pathName = pathName[0].toUpperCase() + pathName.slice(1);

  return (
    <header className="sm:flex flex-col sm:flex-row items-start justify-between mb-8 text-white">
      <Space direction="vertical" className="text-sm text-white">
        <Space>
          <span className="opacity-70">Pages /</span>
          <span>{pathName}</span>
        </Space>
        <h2 className="text-lg text-white font-semibold">{pathName}</h2>
      </Space>

      <Space className="flex justify-between">
        <div className="flex items-center gap-2 bg-white p-2  max-w-[150px] md:max-w-[200px] rounded-md">
          <SearchOutlined className="flex items-center opacity-50 text-lg text-black" />
          <input
            type="text"
            className="bg-none w-full focus:outline-none text-black"
            placeholder="Type here..."
          />
        </div>

        <Space size="middle" align="center">
          <Space>
            <UserOutlined className="flex items-center" />
            <span className="font-semibold">Sign In</span>
          </Space>

          <MenuOutlined
            onClick={e => {
              e.stopPropagation()
              dispatch(openSideDrawer())
            }}
            className="flex items-center xl:hidden hover:scale-[1.2] transition-all"
          />

          <SettingOutlined className="flex items-center" />
          <BellOutlined className="flex items-center" />
        </Space>
      </Space>
    </header>
  )
}