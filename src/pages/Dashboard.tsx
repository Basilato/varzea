import { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { Button } from '@/components/ui/button'
import { Card } from '@/components/ui/card'
import { fetchChampionships } from '@/services/api'

interface Championship {
    id: string
    name: string
    budget: number
}

export default function Dashboard(): JSX.Element {
    const [champs, setChamps] = useState<Championship[]>([])
    const navigate = useNavigate()

    useEffect(() => {
        fetchChampionships()
            .then((data: Championship[]) => {
                setChamps(data)
            })
            .catch((err: unknown) => {
                console.error('Failed to fetch championships', err)
            })
    }, [])

    return (
        <div className="min-h-screen bg-gray-50 dark:bg-gray-900 p-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {champs.map(c => (
                    <Card
                        key={c.id}
                        className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700"
                    >
                        <h3 className="text-xl font-semibold text-gray-900 dark:text-gray-100">
                            {c.name}
                        </h3>
                        <p className="text-gray-700 dark:text-gray-300">
                            Budget: {c.budget} cartoletas
                        </p>
                        <Button
                            onClick={() => navigate(`/c/${c.id}`)}
                            className="mt-4 bg-blue-600 dark:bg-blue-500 hover:bg-blue-700 dark:hover:bg-blue-600"
                        >
                            Ver
                        </Button>
                    </Card>
                ))}
            </div>
        </div>
    )
}
