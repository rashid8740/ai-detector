export default function Header() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-gray-200 dark:border-border-dark bg-background-light/80 dark:bg-background-dark/80 backdrop-blur-md px-6 py-4">
      <div className="max-w-7xl mx-auto flex items-center justify-between">
        <div className="flex items-center gap-3">
          <div className="size-8 flex items-center justify-center rounded-lg bg-primary/20 text-primary">
            <span className="material-symbols-outlined">shield</span>
          </div>
          <h2 className="text-xl font-bold tracking-tight">AI Detect</h2>
        </div>
        <nav className="hidden md:flex items-center gap-8">
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
            History
          </a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
            API
          </a>
          <a className="text-sm font-medium hover:text-primary transition-colors" href="#">
            Settings
          </a>
        </nav>
        <div className="flex items-center gap-4">
          <button className="md:hidden p-2 text-gray-500 dark:text-gray-400">
            <span className="material-symbols-outlined">menu</span>
          </button>
          <div
            className="bg-center bg-no-repeat bg-cover rounded-full size-10 border-2 border-primary/20 cursor-pointer hover:border-primary transition-colors"
            style={{
              backgroundImage:
                'url("https://lh3.googleusercontent.com/aida-public/AB6AXuDNIq-IVg1JOR9OGa4DG0HZpfhv4jJtiH560WUM0mn7ineHSNt0OtOw0mpdFMX2TTOQROmwnArFpDXRkYGqotmLjBw6MKM9bvmAhArWERyyGWkLPIF6hmHF_Pf2FS_8WGtvoiBGJjl_jN3xtq6uvul0lRXvzzpN7elaYG1jszyXSzg-sD340juR2ORc4w58sIuvV19kdwp5xFhU-xmS78ehBAUm94OdENsXQZEVMdnnnXgVSl3LA_thRyHJiFGc_Ac3y4UliOoDAxLQ")',
            }}
            aria-label="User profile avatar showing abstract geometric shapes"
          />
        </div>
      </div>
    </header>
  )
}

