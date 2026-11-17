export function Footer() {
  return (
    <footer className="border-t border-border bg-card/30 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 relative">
                <svg viewBox="0 0 24 24" fill="none" className="w-full h-full text-primary">
                  <path
                    d="M12 2C12 2 8 6 8 10C8 12.2091 9.79086 14 12 14C14.2091 14 16 12.2091 16 10C16 6 12 2 12 2Z"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M12 14V22M8 18H16M10 22H14"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </div>
              <span className="text-xl font-semibold">oasis.</span>
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Your destination for premium hookah and refreshments
            </p>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Hours</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>Monday - Thursday: 4pm - 12am</p>
              <p>Friday - Saturday: 2pm - 2am</p>
              <p>Sunday: 2pm - 12am</p>
            </div>
          </div>

          <div className="space-y-4">
            <h3 className="font-semibold">Contact</h3>
            <div className="space-y-2 text-sm text-muted-foreground">
              <p>123 Main Street</p>
              <p>City, State 12345</p>
              <p>Phone: (555) 123-4567</p>
              <p>Email: info@oasishookah.com</p>
            </div>
          </div>
        </div>

        <div className="pt-8 border-t border-border text-center text-sm text-muted-foreground">
          <p>&copy; {new Date().getFullYear()} Oasis Hookah Lounge. All rights reserved.</p>
        </div>
      </div>
    </footer>
  )
}
