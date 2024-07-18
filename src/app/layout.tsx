import { GoogleAnalytics } from '@next/third-parties/google'
import { Analytics } from '@vercel/analytics/react'
import type { Metadata } from 'next'

import { pretendard } from '@/ui/font'

export const metadata: Metadata = {
  title: 'Cally',
}

const RootLayout: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  return (
    <html lang="ko-KR" className={pretendard.className}>
      <body>
        {children}
        <Analytics />
      </body>
      <GoogleAnalytics gaId="G-SMM7P793N2" />
    </html>
  )
}

export default RootLayout
