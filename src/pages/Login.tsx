import { useState, ChangeEvent, FormEvent } from 'react'
import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'

export default function Login(): JSX.Element {
    const [email, setEmail] = useState<string>('')
    const [pass, setPass] = useState<string>('')

    const handleSubmit = (e: FormEvent<HTMLFormElement>): void => {
        e.preventDefault()
        // mock: localStorage.setItem('token','fake'); window.location='/'
    }

    const handleEmailChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setEmail(e.target.value)
    }

    const handlePassChange = (e: ChangeEvent<HTMLInputElement>): void => {
        setPass(e.target.value)
    }

    return (
        <form
            onSubmit={handleSubmit}
            className="max-w-sm mx-auto mt-20 space-y-6 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-lg"
        >
            <h1 className="text-2xl font-bold text-gray-900 dark:text-gray-100">Login</h1>

            <Input
                placeholder="E-mail"
                value={email}
                onChange={handleEmailChange}
                className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 rounded-md"
            />

            <Input
                type="password"
                placeholder="Senha"
                value={pass}
                onChange={handlePassChange}
                className="w-full bg-gray-100 dark:bg-gray-700 text-gray-900 dark:text-gray-100 placeholder-gray-500 dark:placeholder-gray-400 border border-gray-300 dark:border-gray-600 focus:ring-2 focus:ring-indigo-500 dark:focus:ring-indigo-400 focus:border-indigo-500 dark:focus:border-indigo-400 rounded-md"
            />

            <Button
                type="submit"
                className="w-full bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white"
            >
                Entrar
            </Button>
        </form>
    )
}
