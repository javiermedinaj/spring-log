import DataFetching from "@/components/DataFetching"

export default function DocumentationPage() {
  return (
    <div className="p-4">
      <h1 className="text-2xl font-bold">Documentation</h1>
      <div className="mt-6 space-y-6">
        <section>
          <h2 className="text-xl font-semibold mb-3">Getting Started</h2>
          <p className="text-gray-600">
            Welcome to our project documentation. Here you'll find everything you need to get started.
          </p>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Navigation Guide</h2>
          <ul className="list-disc pl-6 text-gray-600 space-y-2">
            <li>Use the sidebar menu to navigate between different sections</li>
            <li>Click on the cards to view detailed information</li>
            <li>Use the search bar at the top to find specific content</li>
          </ul>
        </section>

        <section>
          <h2 className="text-xl font-semibold mb-3">Key Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="p-4 bg-slate-800 rounded-lg">
              <h3 className="font-bold mb-2">Dashboard Overview</h3>
              <p className="text-sm text-gray-200">View all your important data at a glance</p>
            </div>
            <div className="p-4 bg-slate-800 rounded-lg">
              <h3 className="font-bold mb-2">Data Management</h3>
              <p className="text-sm text-gray-200">Easily manage and organize your information</p>
            </div>
          </div>
        </section>
      </div>
    </div>
  )
}