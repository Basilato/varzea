import { useEffect, useState } from 'react'
import { useParams, Link } from 'react-router-dom'
import { fetchTeams, fetchPlayers, Team, Player } from '../services/api'
import {
    Table,
    TableHeader,
    TableRow,
    TableHead,
    TableBody,
    TableCell,
} from '@/components/ui/table'
import { Button } from '@/components/ui/button'

export default function Championship(): JSX.Element {
    const { champId } = useParams<{ champId: string }>()
    const [teams, setTeams] = useState<Team[]>([])
    const [players, setPlayers] = useState<Player[]>([])

    useEffect(() => {
        if (!champId) return
        fetchTeams(champId)
            .then((data: Team[]) => setTeams(data))
            .catch(err => console.error('Erro ao buscar times', err))
    }, [champId])

    useEffect(() => {
        if (!champId) return
        fetchPlayers(champId)
            .then((data: Player[]) => setPlayers(data))
            .catch(err => console.error('Erro ao buscar jogadores', err))
    }, [champId])

    return (
        <div className="space-y-6 bg-gray-50 dark:bg-gray-900 p-6">
            <h2 className="text-2xl font-bold text-gray-900 dark:text-gray-100">
                Campeonato
            </h2>
            <div className="flex gap-8">
                {/* Times */}
                <div className="w-1/2">
                    <h3 className="text-xl mb-2 text-gray-800 dark:text-gray-200">Times</h3>
                    <Table className="bg-white dark:bg-gray-800">
                        <TableHeader className="bg-gray-100 dark:bg-gray-700">
                            <TableRow className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700">
                                <TableHead className="text-gray-900 dark:text-gray-100">
                                    Nome
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {teams.map(t => (
                                <TableRow
                                    key={t.id}
                                    className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700"
                                >
                                    <TableCell className="text-gray-900 dark:text-gray-100">
                                        {t.name}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                </div>

                {/* Jogadores */}
                <div className="w-1/2">
                    <h3 className="text-xl mb-2 text-gray-800 dark:text-gray-200">
                        Jogadores
                    </h3>
                    <Table className="bg-white dark:bg-gray-800">
                        <TableHeader className="bg-gray-100 dark:bg-gray-700">
                            <TableRow className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700">
                                <TableHead className="text-gray-900 dark:text-gray-100">
                                    Nome
                                </TableHead>
                                <TableHead className="text-gray-900 dark:text-gray-100">
                                    Posição
                                </TableHead>
                                <TableHead className="text-gray-900 dark:text-gray-100">
                                    Preço
                                </TableHead>
                            </TableRow>
                        </TableHeader>
                        <TableBody>
                            {players.map(p => (
                                <TableRow
                                    key={p.id}
                                    className="odd:bg-white even:bg-gray-50 dark:odd:bg-gray-800 dark:even:bg-gray-700"
                                >
                                    <TableCell className="text-gray-900 dark:text-gray-100">
                                        {p.name}
                                    </TableCell>
                                    <TableCell className="text-gray-900 dark:text-gray-100">
                                        {p.position}
                                    </TableCell>
                                    <TableCell className="text-gray-900 dark:text-gray-100">
                                        {p.price}
                                    </TableCell>
                                </TableRow>
                            ))}
                        </TableBody>
                    </Table>
                    <Button asChild className="mt-4">
                        <Link
                            to={`/c/${champId}/lineup`}
                            className="text-gray-900 dark:text-gray-100"
                        >
                            Escalar Time
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
