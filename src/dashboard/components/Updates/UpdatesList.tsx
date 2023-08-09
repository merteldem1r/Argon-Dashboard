import { UpdateItem } from "./UpdateItem.tsx";

export interface Update {
  id: number,
  name: string,
  count: string,
  alteration: string,
  imageUrl: string
}

const INITIAL_UPDATES: Update[] = [
  { id: 1, name: 'money', count: '$53,000', alteration: '+55% since yesterday', imageUrl: 'img/dashboard/updates/money-icon.svg' },
  { id: 12, name: 'users', count: '2,300', alteration: '+3% since last week', imageUrl: 'img/dashboard/updates/world-icon.svg' },
  { id: 123, name: 'clients', count: '+3,462', alteration: '-2% since last quarter', imageUrl: 'img/dashboard/updates/user-icon.svg' },
  { id: 1234, name: 'sales', count: '$103,430', alteration: '+5% than last month', imageUrl: 'img/dashboard/updates/cart-icon.svg' },
]

export function UpdatesList() {

  return (
    <div className="grid xl:grid-rows-1 sm:grid-rows-2 grid-rows-4 grid-flow-col gap-6">
      {INITIAL_UPDATES.map(update => {
        return <UpdateItem key={update.id} {...update} />
      })}
    </div>
  )
}