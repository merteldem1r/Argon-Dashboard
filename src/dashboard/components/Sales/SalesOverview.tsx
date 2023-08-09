import { Space, Typography } from "antd";
import { salesData } from "./salesData.ts";
import { Line, LineConfig } from '@ant-design/charts';
import { ArrowUpOutlined } from "@ant-design/icons";

export function SalesOverview() {
  const config: LineConfig = {
    data: salesData,
    padding: 'auto',
    xField: 'Date',
    yField: 'scales',
    xAxis: {
      // type: 'timeCat',
      tickCount: 12,
    },
  };

  return (
    <section className="bg-white rounded-xl lg:col-span-3 p-4">
      <Space direction="vertical" className="w-full">
        <Typography.Title level={5}>Sales Overview</Typography.Title>
        <Space size="small" align="center">
          <ArrowUpOutlined className="flex items-center text-green-500 text-xl" />
          <span className="text-[#67748E]"><b>4% more</b> in 2021</span>
        </Space>

        <Line {...config} style={{ maxHeight: '275px', marginTop: '15px' }} />
      </Space>
    </section>
  )
}