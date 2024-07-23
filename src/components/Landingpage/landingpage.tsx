import { Button } from "@/components/ui/button"

export function Landingpage() {
  return (
    <div className="min-h-screen bg-cover bg-center text-white" >
    <header className="flex items-center content-center justify-between p-4 bg-black bg-opacity-80">
      <div className="flex items-center space-x-4">
        <nav className="flex space-x-4">
          <a href="#" className="text-white">Home</a>
          <a href="#" className="text-white">About</a>
          <a href="#" className="text-white">Assessment</a>
        </nav>
      </div>
      <div className="flex items-center space-x-4">
        <Button className="bg-red-600 text-white">Get Started</Button>
      </div>
    </header>
    <main className="flex flex-col items-center justify-center text-center text-white p-8">
      <h1 className="text-4xl font-bold">Welcome to FNAxiom Full Stack Internship</h1>
      <p className="mt-4">Join our comprehensive full stack internship program and kickstart your career in tech.</p>
      <Button className="mt-8 bg-red-600 text-white">Get Started</Button>
    </main>
    <section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 gap-4 p-8 bg-black bg-opacity-80">
      {[
        "Coding Challenge",
        "Project Submission",
        "Project Quiz",
        "Code Assessment",
        "Live Assessment",
        "Portfolio Assessment",
      ].map((title, index) => (
        <div key={index} className="text-center">
          <h2 className="text-xl font-bold">{title}</h2>
          <p className="mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla ac eros nec lorem.</p>
          <Button className="mt-4 bg-red-600 text-white">Get Started</Button>
        </div>
      ))}
    </section>
  </div>
  )
}
