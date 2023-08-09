import { Space, Typography } from "antd";

export function Footer() {
  return (
    <footer className="flex justify-between mt-auto">
      <Typography.Text type="secondary">© 2023, made by Mert Eldemir for a better web.</Typography.Text>

      <Space size="large" className="text-[gray] text-sm">
        <span>Creative Team</span>
        <span>About Us</span>
        <span>Blog</span>
        <span>Licence</span>
      </Space>
    </footer>
  )
}