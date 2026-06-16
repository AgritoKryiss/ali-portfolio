import { Download } from 'lucide-react'
import { trackEvent } from '../utils/analytics'

export function ResumeDownload() {
  const handleDownload = () => {
    trackEvent('resume_download')
    // Replace with your actual resume URL
    const link = document.createElement('a')
    link.href = '/Ali-Haider-Resume.pdf'
    link.download = 'Ali-Haider-Resume.pdf'
    document.body.appendChild(link)
    link.click()
    document.body.removeChild(link)
  }

  return (
    <button
      onClick={handleDownload}
      className="inline-flex items-center gap-2 bg-blue-600 hover:bg-blue-700 dark:bg-blue-700 dark:hover:bg-blue-600 text-white font-semibold py-2 px-6 rounded-lg transition"
    >
      <Download size={18} />
      Download Resume
    </button>
  )
}
