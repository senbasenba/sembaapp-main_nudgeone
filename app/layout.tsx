import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import Image from 'next/image'
import Link from 'next/link'
import { Bell } from 'lucide-react'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: '1 WEEK STAY BY NUDGE\' ONE.',
  description: '1週間の滞在をご提供するサービス',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="ja">
      <body className={inter.className}>
        <header className="bg-[#006699] p-4">
          <div className="container mx-auto">
            <nav className="flex justify-between items-center">
              <div className="flex items-center gap-4">
                <Image
                  src="/Logo_1week.jpg"
                  alt="1 WEEK STAY BY NUDGE' ONE."
                  width={200}
                  height={50}
                  className="object-contain"
                  priority
                />
              </div>
              <div className="flex items-center gap-6">
                <Bell className="text-white h-5 w-5" />
                <Link href="/" className="text-white hover:text-gray-200">
                  ホーム
                </Link>
                <Link href="/search" className="text-white hover:text-gray-200">
                  検索
                </Link>
                <Link href="/favorites" className="text-white hover:text-gray-200">
                  お気に入り
                </Link>
                <Link href="/login" className="text-white hover:text-gray-200">
                  ログイン
                </Link>
              </div>
            </nav>
          </div>
        </header>
        <main>{children}</main>
      </body>
    </html>
  )
}