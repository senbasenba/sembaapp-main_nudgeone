import { useState, useEffect } from 'react';

type DateSelectionProps = {
  onSelect: (date: Date) => void;
  onBack: () => void;
};

export default function DateSelection({ onSelect, onBack }: DateSelectionProps) {
  const [availableDates, setAvailableDates] = useState<{ date: Date; formatted: string }[]>([]);

  useEffect(() => {
    const generateWeekDates = () => {
      const dates = [];
      const now = new Date();
      for (let i = 0; i < 7; i++) {
        const date = new Date(now);
        date.setDate(now.getDate() + i);
        dates.push({
          date,
          formatted: `${date.getMonth() + 1}月${date.getDate()}日 (${['日', '月', '火', '水', '木', '金', '土'][date.getDay()]})`
        });
      }
      return dates;
    };

    setAvailableDates(generateWeekDates());
  }, []);

  return (
    <div className="max-w-md mx-auto">
      <h2 className="text-xl font-semibold mb-4">日付</h2>
      <div className="space-y-2">
        {availableDates.map((date) => (
          <button
            key={date.formatted}
            className="w-full p-4 text-left border rounded-lg hover:bg-gray-50"
            onClick={() => onSelect(date.date)}
          >
            {date.formatted} · 16:00〜19:00
          </button>
        ))}
      </div>
      <div className="mt-4 flex justify-between">
        <button className="px-4 py-2 border rounded-lg" onClick={onBack}>戻る</button>
        <button className="px-4 py-2 bg-black text-white rounded-lg" onClick={() => onSelect(availableDates[0].date)}>次へ</button>
      </div>
    </div>
  );
}