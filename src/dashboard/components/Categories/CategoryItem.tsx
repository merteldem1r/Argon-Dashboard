import { RightOutlined } from "@ant-design/icons";
import { Typography } from "antd";
import { Category } from "./Categories.tsx";

type CategoryItemProps = Category;

export function CategoryItem({ name, description, iconElement }: CategoryItemProps) {
  return (
    <div className="w-full flex items-center justify-between">
      <div className="flex gap-5 items-center">
        <div className="category-icon">
          {iconElement}
        </div>

        <div className="flex flex-col">
          <Typography.Text strong>{name}</Typography.Text>
          <span>{description}</span>
        </div>
      </div>

      <div>
        <RightOutlined />
      </div>
    </div>
  )
}