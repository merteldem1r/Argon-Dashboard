import { DesktopOutlined, InboxOutlined, SmileOutlined, TagsOutlined } from "@ant-design/icons";
import { Space, Typography } from "antd";
import React from "react";
import { CategoryItem } from "./CategoryItem.tsx";

export interface Category {
  name: string,
  description: string,
  iconElement: React.ReactNode
}

const INITIAL_CATEGORIES: Category[] = [
  { name: 'Devices', description: '250 in stock, 346+ sold', iconElement: <DesktopOutlined /> },
  { name: 'Tickets', description: '123 closed, 15 open', iconElement: <TagsOutlined /> },
  { name: 'Error logs', description: '1 is active, 40 closed', iconElement: <InboxOutlined /> },
  { name: 'Happy users', description: '+ 430', iconElement: <SmileOutlined /> },
]

export function Categories() {
  return (
    <section className="bg-white rounded-xl lg:col-span-2 p-4">
      <Space direction="vertical" className="w-full">
        <Typography.Title level={5}>Categories</Typography.Title>

        <Space direction="vertical" size="middle" className="w-full mt-[15px]">
          {INITIAL_CATEGORIES.map(category => {
            return <CategoryItem key={category.name} {...category} />
          })}
        </Space>
      </Space>
    </section>
  )
}