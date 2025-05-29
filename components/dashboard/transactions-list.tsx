import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { Avatar, AvatarFallback } from "@/components/ui/avatar"
import { MoreHorizontal } from "lucide-react"

const transactions = [
  {
    name: "Devon Williamson",
    time: "08:00 AM",
    date: "19 August",
    amount: "+$1,400",
    type: "Payment",
    avatar: "DW",
  },
  {
    name: "Debra Wilson",
    time: "09:45 AM",
    date: "19 August",
    amount: "$800",
    type: "Refund",
    avatar: "DW",
  },
  {
    name: "Judith Black",
    time: "10:15 AM",
    date: "20 August",
    amount: "+$2,050",
    type: "Payment",
    avatar: "JB",
  },
  {
    name: "Philip Henry",
    time: "10:50 AM",
    date: "23 August",
    amount: "$650",
    type: "Payment",
    avatar: "PH",
  },
  {
    name: "Mitchell Cooper",
    time: "12:45 AM",
    date: "25 August",
    amount: "+$500",
    type: "Payment",
    avatar: "MC",
  },
]

export function TransactionsList() {
  return (
    <Card className="dark:bg-gray-800 dark:border-gray-700 transition-colors duration-300">
      <CardHeader className="flex flex-row items-center justify-between">
        <CardTitle className="text-lg text-gray-900 dark:text-white">Transactions</CardTitle>
        <Button
          variant="ghost"
          size="icon"
          className="dark:text-gray-300 dark:hover:bg-gray-700 transition-colors duration-200"
        >
          <MoreHorizontal className="w-4 h-4" />
        </Button>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {transactions.map((transaction, index) => (
            <div key={index} className="flex items-center gap-3">
              <Avatar className="w-8 h-8">
                <AvatarFallback className="bg-orange-500 text-white text-xs">{transaction.avatar}</AvatarFallback>
              </Avatar>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-medium truncate text-gray-900 dark:text-white">{transaction.name}</p>
                <p className="text-xs text-gray-500 dark:text-gray-400">
                  {transaction.time} — {transaction.date}
                </p>
              </div>
              <div className="text-right">
                <p
                  className={`text-sm font-medium ${
                    transaction.amount.startsWith("+") ? "text-green-500" : "text-gray-900 dark:text-white"
                  }`}
                >
                  {transaction.amount}
                </p>
                <p className="text-xs text-gray-500 dark:text-gray-400">{transaction.type}</p>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  )
}
