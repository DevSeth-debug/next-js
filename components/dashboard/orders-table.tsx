import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { Calendar, ChevronDown, MoreHorizontal } from "lucide-react"

const orders = [
  {
    id: "#790841",
    customer: "Regina Cooper",
    amount: "$2,500",
    payment: "Credit Card",
    date: "12.09.2019",
    avatar: "RC",
  },
  {
    id: "#798894",
    customer: "Robert Edwards",
    amount: "$1,500",
    payment: "PayPal",
    date: "12.09.2019",
    avatar: "RE",
  },
  {
    id: "#790857",
    customer: "Gloria McKinney",
    amount: "$5,600",
    payment: "Credit Card",
    date: "12.09.2019",
    avatar: "GM",
  },
  {
    id: "#790687",
    customer: "Randall Fisher",
    amount: "$2,850",
    payment: "PayPal",
    date: "12.09.2019",
    avatar: "RF",
  },
]

export function OrdersTable() {
  return (
    <Card className="mt-6 dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg text-gray-900 dark:text-white">Last Orders</CardTitle>
        <div className="flex items-center gap-2 text-sm text-gray-500 dark:text-gray-400">
          <Calendar className="w-4 h-4" />
          <span>19 Aug - 25 Aug</span>
          <ChevronDown className="w-4 h-4" />
        </div>
      </CardHeader>
      <CardContent>
        <Table>
          <TableHeader>
            <TableRow className="dark:border-gray-700">
              <TableHead className="text-gray-600 dark:text-gray-400">Customer Name</TableHead>
              <TableHead className="text-gray-600 dark:text-gray-400">Order No.</TableHead>
              <TableHead className="text-gray-600 dark:text-gray-400">Amount</TableHead>
              <TableHead className="text-gray-600 dark:text-gray-400">Payment Type</TableHead>
              <TableHead className="text-gray-600 dark:text-gray-400">Date</TableHead>
              <TableHead></TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {orders.map((order, index) => (
              <TableRow key={index} className="dark:border-gray-700">
                <TableCell>
                  <div className="flex items-center gap-3">
                    <Avatar className="w-8 h-8">
                      <AvatarFallback className="bg-orange-500 text-white text-xs">{order.avatar}</AvatarFallback>
                    </Avatar>
                    <span className="font-medium text-gray-900 dark:text-white">{order.customer}</span>
                  </div>
                </TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">{order.id}</TableCell>
                <TableCell className="font-medium text-gray-900 dark:text-white">{order.amount}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">{order.payment}</TableCell>
                <TableCell className="text-gray-600 dark:text-gray-400">{order.date}</TableCell>
                <TableCell>
                  <Button
                    variant="ghost"
                    size="icon"
                    className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
                  >
                    <MoreHorizontal className="w-4 h-4" />
                  </Button>
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </CardContent>
    </Card>
  )
}
