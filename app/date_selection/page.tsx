'use client'

import { useState } from 'react'
import { useRouter } from 'next/navigation'
import { Button } from "@/components/ui/button"
import { Card } from "@/components/ui/card"
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group"
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import { ChevronDown } from 'lucide-react'

export default function Component() {
  const router = useRouter()
  const [selectedDate, setSelectedDate] = useState<string>("")
  
  const availableDates = [
    { date: "11月16日 (土)", time: "16:00〜19:00" },
    { date: "11月17日 (日)", time: "16:00〜19:00" },
    { date: "11月18日 (月)", time: "16:00〜19:00" },
    { date: "11月20日 (水)", time: "16:00〜19:00" },
    { date: "11月21日 (木)", time: "16:00〜19:00" },
  ]

  const handleNext = () => {
    router.push('/guest_selector')
  }

  return (
    <div className="min-h-screen bg-gray-100 p-4 sm:p-6 lg:p-8 flex items-center justify-center">
      <Card className="w-full max-w-4xl mx-auto rounded-3xl overflow-hidden">
        <div className="flex flex-col lg:flex-row">
          <div className="lg:w-1/2 p-6 lg:p-8 space-y-6">
            {/* Header */}
            <div className="flex items-center justify-between">
              <Button variant="ghost" className="text-sm sm:text-base font-medium text-gray-600">
                終了
              </Button>
              <div className="text-sm sm:text-base text-gray-600">
                23:47
              </div>
            </div>

            {/* Title */}
            <div className="text-center lg:text-left space-y-2">
              <h1 className="text-2xl sm:text-3xl lg:text-4xl font-semibold">日付</h1>
              <p className="text-sm sm:text-base text-gray-600">
                ご都合のよい日付をお選びください。
              </p>
            </div>

            {/* Date Selection */}
            <div className="space-y-4 sm:space-y-6">
              <Select>
                <SelectTrigger className="w-full p-3 sm:p-4 text-left border rounded-xl text-sm sm:text-base">
                  <div className="flex justify-between items-center">
                    <SelectValue placeholder="予約可能な日付" />
                    <ChevronDown className="h-4 w-4 sm:h-5 sm:w-5" />
                  </div>
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="all">すべての日付</SelectItem>
                  <SelectItem value="available">予約可能な日付のみ</SelectItem>
                </SelectContent>
              </Select>

              <RadioGroup
                value={selectedDate}
                onValueChange={setSelectedDate}
                className="space-y-3 sm:space-y-4"
              >
                {availableDates.map((slot, index) => (
                  <label
                    key={index}
                    className="flex items-center justify-between p-3 sm:p-4 bg-white rounded-xl border cursor-pointer hover:bg-gray-50 transition-colors"
                  >
                    <div className="space-y-1">
                      <div className="font-medium text-sm sm:text-base">{slot.date}</div>
                      <div className="text-xs sm:text-sm text-gray-500">{slot.time}</div>
                    </div>
                    <RadioGroupItem value={`${index}`} className="h-4 w-4 sm:h-5 sm:w-5" />
                  </label>
                ))}
              </RadioGroup>
            </div>
          </div>

          <div className="lg:w-1/2 bg-gray-50 p-6 lg:p-8 flex flex-col justify-center">
            <div className="space-y-4">
              <h2 className="text-xl sm:text-2xl font-semibold">予約の詳細</h2>
              <p className="text-sm sm:text-base text-gray-600">
                選択された日付: {selectedDate ? availableDates[parseInt(selectedDate)].date : "未選択"}
              </p>
              <p className="text-sm sm:text-base text-gray-600">
                時間: {selectedDate ? availableDates[parseInt(selectedDate)].time : "未選択"}
              </p>
              {/* 追加の予約詳細をここに記述 */}
            </div>

            {/* Next Button */}
            <div className="mt-6 sm:mt-8">
              <Button
                className="w-full bg-black text-white rounded-xl py-4 sm:py-6 text-sm sm:text-base transition-opacity"
                disabled={!selectedDate}
                onClick={handleNext}
              >
                次へ
              </Button>
            </div>
          </div>
        </div>
      </Card>
    </div>
  )
}