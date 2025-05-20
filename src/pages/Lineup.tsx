import { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchPlayers, Player } from '../services/api'
import { Button } from '@/components/ui/button'

export default function Lineup(): JSX.Element {
    const { champId } = useParams<{ champId: string }>()
    const [players, setPlayers] = useState<Player[]>([])
    const [selected, setSelected] = useState<Player[]>([])
    const budget = 100 // TODO: obter do campeonato via mock

    useEffect(() => {
        if (!champId) return
        fetchPlayers(champId)
            .then((data: Player[]) => setPlayers(data))
            .catch(err => console.error('Erro ao buscar jogadores', err))
    }, [champId])

    const totalSpent = selected.reduce((sum, p) => sum + p.price, 0)

    const handleToggle = (p: Player): void => {
        setSelected(sel =>
            sel.some(x => x.id === p.id)
                ? sel.filter(x => x.id !== p.id)
                : [...sel, p]
        )
    }

    const positions: Player['position'][] = [
        'GOALKEEPER',
        'DEFENDER',
        'MIDFIELDER',
        'FORWARD',
    ]

    return (
        <div className="space-y-4 bg-white dark:bg-gray-800 p-6 rounded-lg shadow-md dark:shadow-lg">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Escalação
            </h2>
            <p className="text-gray-700 dark:text-gray-300">
                Budget: {totalSpent} / {budget}
            </p>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {positions.map(pos => (
                    <div key={pos}>
                        <h4 className="font-semibold text-gray-800 dark:text-gray-200">
                            {pos}
                        </h4>
                        {players
                            .filter(player => player.position === pos)
                            .map(player => (
                                <label
                                    key={player.id}
                                    className="flex items-center space-x-2 text-gray-900 dark:text-gray-100"
                                >
                                    <input
                                        type="checkbox"
                                        checked={selected.some(x => x.id === player.id)}
                                        onChange={() => handleToggle(player)}
                                        className="h-4 w-4 text-indigo-600 dark:text-indigo-400 border-gray-300 dark:border-gray-600 rounded"
                                    />
                                    <span>
                                        {player.name} ({player.price})
                                    </span>
                                </label>
                            ))}
                    </div>
                ))}
            </div>
            <Button
                disabled={totalSpent > budget}
                onClick={() => alert('Salvo!')}
                className="mt-4 w-full bg-indigo-600 dark:bg-indigo-500 hover:bg-indigo-700 dark:hover:bg-indigo-600 text-white"
            >
                Salvar Escalação
            </Button>
        </div>
    )
}
