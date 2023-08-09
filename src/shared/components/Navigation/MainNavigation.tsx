import React from "react";
import type { MenuProps } from "antd";
import { Menu, Space, Typography } from "antd";
import { CalendarOutlined, CloseOutlined, CodeSandboxOutlined, CreditCardOutlined, FileDoneOutlined, FormOutlined, FundProjectionScreenOutlined, UserOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { closeSideDrawer } from "../../features/sideDrawerSlice.ts";
import { AppDispatch } from "../../sharedStore.ts";

type MenuItem = Required<MenuProps>['items'][number];

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon: React.ReactNode,
): MenuItem {
  return { label, key, icon } as MenuItem;
}

const mainNavigationItems: MenuItem[] = [
  getItem('Dashboard', 'dashboard', <FundProjectionScreenOutlined style={{ color: '#5E72E4' }} />),
  getItem('Tables', 'tables', <CalendarOutlined style={{ color: '#FB6340' }} />),
  getItem('Billing', 'billing', <CreditCardOutlined style={{ color: '#2DCE89' }} />),
  getItem('Virtual Reality', 'virtual', <CodeSandboxOutlined style={{ color: '#11CDEF' }} />),
  getItem('RTL', 'rtl', <CodeSandboxOutlined style={{ color: '#F5365C' }} />),
]

const accountNavigationItems: MenuItem[] = [
  getItem('Profile', 'profile', <UserOutlined style={{ color: '#344767' }} />),
  getItem('Sign In', 'signIn', <FileDoneOutlined style={{ color: '#FB6340' }} />),
  getItem('Sign Up', 'signUp', <FormOutlined style={{ color: '#68DFF5' }} />),
]

export function MainNavigation() {
  const dispatch = useDispatch<AppDispatch>();

  return (
    <nav className="flex flex-col max-h-[450px] gap-4">
      <div className="flex justify-center pt-6 relative">
        <a
          className="flex gap-2 items-center"
          href="https://demos.creative-tim.com/argon-dashboard/pages/dashboard.html"
        >
          <img src="img/argon-logo.svg" alt="" className="w-[35px]" />
          <h1 className="text-[#435572]">Argon Dashboard 2</h1>
        </a>

        <button
          onClick={() => dispatch(closeSideDrawer())}
          className="close-menu-icon"
        >
          <CloseOutlined />
        </button>
      </div>

      <hr />

      <Space direction="vertical" className="main-nav-menu">
        <Menu
          defaultSelectedKeys={['dashboard']}
          mode="inline"
          items={mainNavigationItems}
        />

        <Typography.Title level={5} style={{ color: '#8F99AB', marginLeft: '20px' }}>Account pages</Typography.Title>

        <Menu
          mode="inline"
          items={accountNavigationItems}
        />
      </Space>
    </nav>
  )
}