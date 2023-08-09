import { Space, Table, Typography } from "antd";
import { ColumnsType } from "antd/es/table";
import { formatCurrency } from "../../../shared/utils/formatCurrency.ts";

interface Country {
  id: string,
  country: string,
  imageUrl: string,
  sales: number,
  value: number,
  bounce: number,
}

const INITIAL_COUNTRIES: Country[] = [
  {
    id: "xyz",
    country: 'United States',
    imageUrl: 'img/dashboard/countries/usa-flag.svg',
    sales: 2500,
    value: 230900,
    bounce: 29.9,
  },
  {
    id: "xty",
    country: 'Germany',
    imageUrl: 'img/dashboard/countries/germany-flag.svg',
    sales: 3900,
    value: 440000,
    bounce: 40.22,
  },
  {
    id: "vyd",
    country: 'Great Britain',
    imageUrl: 'img/dashboard/countries/uk-flag.svg',
    sales: 1400,
    value: 190700,
    bounce: 23.44,
  },
  {
    id: "sdf",
    country: 'Brazil',
    imageUrl: 'img/dashboard/countries/brazil-flag.svg',
    sales: 562,
    value: 143960,
    bounce: 32.14,
  },
]

export function SalesByCountry() {
  const columns: ColumnsType<Country> = [
    {
      dataIndex: 'imageUrl',
      key: 'imageUrl',
      render: url => (
        <img alt="" src={url} className="table-item min-w-[25px] max-w-[25px] mr-[-30px]" />
      ),
    },
    {
      title: 'Country',
      dataIndex: 'country',
      key: 'country',
      render: text => (
        <span className="text-xs table-item">{text}</span>
      ),
    },
    {
      title: 'Sales',
      dataIndex: 'sales',
      key: 'sales',
      render: text => (
        <span className="text-xs table-item">{text}</span>
      ),
    },
    {
      title: 'Value',
      dataIndex: 'value',
      key: 'value',
      render: num => (
        <span className="text-xs table-item">{formatCurrency(num)}</span>
      ),
    },
    {
      title: 'Bounce',
      dataIndex: 'bounce',
      key: 'bounce',
      render: text => (
        <span className="table-item">{text}%</span>
      ),
    },
  ];

  return (
    <section className="bg-white rounded-xl lg:col-span-3 sm:p-4">
      <Space direction="vertical" className="w-full">
        <Typography.Title className="ml-4 mt-4 sm:m-0" level={5}>Sales by Country</Typography.Title>
        <Table
          rowKey={obj => obj.id}
          dataSource={INITIAL_COUNTRIES}
          columns={columns}
          pagination={false}
          className=""
        />
      </Space>
    </section>
  )
}