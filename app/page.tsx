import Header from '@/components/Header'
import UploadArea from '@/components/UploadArea'
import RecentScans from '@/components/RecentScans'

export default function Home() {
  return (
    <>
      <Header />
      <main className="flex-1 layout-container w-full max-w-7xl mx-auto px-4 md:px-6 py-8">
        <div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-10">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight tracking-tight mb-3">
              Unified Content Analysis
            </h1>
            <p className="text-gray-600 dark:text-gray-400 text-lg leading-relaxed font-body">
              Upload any media file to verify authenticity. Our engine now detects AI patterns across text, images, and video in a single, streamlined interface.
            </p>
          </div>
        </div>
        <UploadArea />
        <RecentScans />
      </main>
    </>
  )
}

