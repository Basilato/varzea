import { ReactNode } from 'react'
import { Button } from './ui/button'
import { Link } from 'react-router-dom'


interface LayoutProps {
    children: ReactNode
}

export default function Layout({ children }: LayoutProps): JSX.Element {
    return (
        <div className="min-h-screen flex">
            <nav className="w-64 bg-gray-50 p-4">
                <h2 className="text-xl font-bold mb-6">Meu Fantasy</h2>
                <Link to="/" className="block mb-2">
                    🏆 Campeonatos
                </Link>
                <Button variant="ghost" asChild>
                    <Link to="/login">🔓 Sair</Link>
                </Button>
            </nav>
            <main className="flex-1 p-6 bg-white">{children}</main>
        </div>
    )
}
