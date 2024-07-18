import type { Metadata } from 'next'

import { pretendard } from '@/ui/font'

export const metadata: Metadata = {
  title: 'Cally',
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="ko-KR" className={pretendard.className}>
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
