import Link from 'next/link'

export default function Navbar() {
  return (
    <nav className="bg-white shadow-lg">
      <div className="max-w-6xl mx-auto px-4">
        <div className="flex justify-between items-center py-4">
          <Link href="/" className="text-2xl font-bold text-primary">
            My Portfolio
          </Link>
          <div className="hidden md:flex space-x-8">
            <Link href="#projects" className="hover:text-secondary">Projects</Link>
            <Link href="#skills" className="hover:text-secondary">Skills</Link>
            <Link href="#contact" className="hover:text-secondary">Contact</Link>
          </div>
        </div>
      </div>
    </nav>
  )
}