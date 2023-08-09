import { Update } from "./UpdatesList.tsx";
import { Space, Typography } from "antd";
import { useMemo } from "react";

type UpdateItemProps = Update;

export function UpdateItem({ name, count, alteration, imageUrl }: UpdateItemProps) {
  const percentage: string = alteration.slice(0, 4);
  const iconBg = useMemo<string>(() => {
    switch (name) {
      case 'money':
        return 'bg-money-icon'
      case 'clients':
        return 'bg-clients-icon'
      case 'users':
        return 'bg-users-icon'
      case 'sales':
        return 'bg-sales-icon'
      default:
        return 'bg-green'
    }
  }, [name])

  return (
    <div className="flex justify-between items-start bg-white px-4 py-3 rounded-xl">
      <Space size="small" direction="vertical">
        <Typography.Title style={{ color: '#75748E' }} level={5}>{name.toUpperCase()}</Typography.Title>
        <Typography.Title style={{ fontWeight: 'bold', marginTop: "-15px" }} level={4}>{count}</Typography.Title>

        <div>
          <span className={
            percentage.startsWith('+')
              ? 'text-green-500 font-semibold'
              : 'text-red-500 font-semibold'
          }
          >
            {percentage}
          </span>
          <span>{alteration.slice(4)}</span>
        </div>
      </Space>

      <div className={`update-img-box ${iconBg}`}>
        <img src={imageUrl} alt="" className="white-icon w-[28px]" />
      </div>
    </div>
  )
}