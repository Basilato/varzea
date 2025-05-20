import { championships } from "@/data/championships"
import { lineups } from "@/data/lineups"
import { players } from "@/data/players"
import { teams } from "@/data/teams"


/** Tipagem dos dados vindos dos mocks */
export interface Championship {
  id: string
  name: string
  budget: number
}

export interface Team {
  id: string
  name: string
  championshipId: string
}

export interface Player {
  id: string
  name: string
  teamId: string
    position: 'GOALKEEPER' | 'DEFENDER' | 'MIDFIELDER' | 'FORWARD'
    price: number
}

export interface Lineup {
  id: string
  championshipId: string
  playerIds: string[]
    totalSpent: number
    totalPoints: number
    userId: string
    round: number
}

/** Busca todos os campeonatos */
export function fetchChampionships(): Promise<Championship[]> {
  return Promise.resolve(championships)
}

/** Busca times de um campeonato específico */
export function fetchTeams(champId: string): Promise<Team[]> {
  return Promise.resolve(
    teams.filter((t): t is Team => t.championshipId === champId)
  )
}

/** Busca jogadores (filtrando opcionalmente por campeonato) */
export function fetchPlayers(champId: string): Promise<Player[]> {
    // 1) coleta os IDs dos times que pertencem a esse campeonato
    const teamIds = teams
      .filter(t => t.championshipId === champId)
      .map(t => t.id)
  
    // 2) filtra apenas os jogadores cujo teamId está nessa lista
    const filtered = players.filter(p => teamIds.includes(p.teamId))
  
    return Promise.resolve(filtered)
  }

/** Busca escalações de um campeonato específico */
export function fetchLineups(champId: string): Promise<Lineup[]> {
  return Promise.resolve(
    lineups.filter((l): l is Lineup => l.championshipId === champId)
  )
}
