export default function RecentScans() {
  return (
    <div className="mt-12">
      <h3 className="text-lg font-bold mb-4 flex items-center gap-2">
        <span className="material-symbols-outlined text-gray-500">history</span>
        Recent Scans
      </h3>
      <div className="overflow-x-auto">
        <table className="w-full text-left text-sm border-collapse">
          <thead>
            <tr className="border-b border-gray-200 dark:border-border-dark text-gray-500 dark:text-gray-400">
              <th className="py-3 px-2 font-medium">File Name</th>
              <th className="py-3 px-2 font-medium">Type</th>
              <th className="py-3 px-2 font-medium">Result</th>
              <th className="py-3 px-2 font-medium text-right">Date</th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-200 dark:divide-border-dark">
            <tr className="group hover:bg-white/5 transition-colors">
              <td className="py-3 px-2 font-medium flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-gray-400">
                  description
                </span>
                project_proposal_v2.docx
              </td>
              <td className="py-3 px-2 text-gray-500">Text</td>
              <td className="py-3 px-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400">
                  <span className="size-1.5 rounded-full bg-green-500"></span>
                  Human Written (98%)
                </span>
              </td>
              <td className="py-3 px-2 text-right text-gray-500">2 mins ago</td>
            </tr>
            <tr className="group hover:bg-white/5 transition-colors">
              <td className="py-3 px-2 font-medium flex items-center gap-2">
                <span className="material-symbols-outlined text-base text-gray-400">image</span>
                profile_pic_candidate.jpg
              </td>
              <td className="py-3 px-2 text-gray-500">Image</td>
              <td className="py-3 px-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-800 dark:bg-red-900/30 dark:text-red-400">
                  <span className="size-1.5 rounded-full bg-red-500"></span>
                  AI Generated (92%)
                </span>
              </td>
              <td className="py-3 px-2 text-right text-gray-500">1 hr ago</td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}

