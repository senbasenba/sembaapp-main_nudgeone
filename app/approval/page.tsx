import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import { Button } from "@/components/ui/button"
import { Label } from "@/components/ui/label"

export default function ApprovalPage() {
  return (
    <div className="container mx-auto py-6">
      <Card className="max-w-2xl mx-auto p-6">
        <h1 className="text-2xl font-bold mb-6">決済確認</h1>
        
        <div className="space-y-6">
          <div className="border-b pb-4">
            <h2 className="font-semibold mb-2">支払い方法を選択してください</h2>
            <RadioGroup defaultValue="credit" className="space-y-3">
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="credit" id="credit" />
                <Label htmlFor="credit">クレジットカード</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="bank" id="bank" />
                <Label htmlFor="bank">銀行振込</Label>
              </div>
              <div className="flex items-center space-x-2">
                <RadioGroupItem value="convenience" id="convenience" />
                <Label htmlFor="convenience">コンビニ支払い</Label>
              </div>
            </RadioGroup>
          </div>

          <div className="border-b pb-4">
            <h2 className="font-semibold mb-2">予約内容</h2>
            <div className="space-y-2 text-sm">
              <div className="flex justify-between">
                <span>宿泊期間</span>
                <span>2024/01/01 - 2024/01/07</span>
              </div>
              <div className="flex justify-between">
                <span>宿泊人数</span>
                <span>2名</span>
              </div>
              <div className="flex justify-between font-semibold">
                <span>合計金額</span>
                <span>¥70,000</span>
              </div>
            </div>
          </div>

          <div className="flex justify-end space-x-4">
            <Button variant="outline">戻る</Button>
            <Button>決済する</Button>
          </div>
        </div>
      </Card>
    </div>
  )
}