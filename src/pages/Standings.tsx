import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { fetchLineups, Lineup } from '../services/api'
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from '@/components/ui/table'


export default function Standings(): JSX.Element {
    const { champId } = useParams<{ champId: string }>()
    const [lineups, setLineups] = useState<Lineup[]>([])

    useEffect(() => {
        if (!champId) return
        fetchLineups(champId)
            .then((data: Lineup[]) => setLineups(data))
            .catch(err => console.error('Erro ao buscar classificação', err))
    }, [champId])

    const sorted = [...lineups].sort((a, b) => b.totalPoints - a.totalPoints)

    return (
        <div>
            <h2 className="text-2xl font-bold mb-4">Classificação Geral</h2>
            <Table>
                <TableHeader>
                    <TableRow>
                        <TableHead>Posição</TableHead>
                        <TableHead>Usuário</TableHead>
                        <TableHead>Pontos</TableHead>
                    </TableRow>
                </TableHeader>
                <TableBody>
                    {sorted.map((l, i) => (
                        <TableRow key={l.id}>
                            <TableCell>{i + 1}</TableCell>
                            <TableCell>{l.userId}</TableCell>
                            <TableCell>{l.totalPoints}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </div>
    )
}
