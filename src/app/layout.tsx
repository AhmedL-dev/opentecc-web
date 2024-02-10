import { type Metadata } from 'next'
import Head from 'next/head' // Import the Head component

import { RootLayout } from '@/components/RootLayout'

import '@/styles/tailwind.css'

export const metadata: Metadata = {
  title: {
    template: '%s - Studio',
    default: 'Opentecc - Transforming Visions into Tech Realities',
  },
}

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className="h-full bg-neutral-950 text-base antialiased">
      <Head>
        {/* Add the Sonetel chat widget script here */}
        <script async id="slcLiveChat" src="https://widget.sonetel.com/SonetelWidget.min.js" data-account-id="208458439"></script>
        {/* Here you can add other head elements like meta tags, additional scripts, etc. */}
      </Head>
      <body className="flex min-h-full flex-col">
        <RootLayout>{children}</RootLayout>
      </body>
    </html>
  )
}
