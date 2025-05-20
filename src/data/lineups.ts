/** Tipagem para cada escalação */
export interface Lineup {
    userId: string
    championshipId: string
    round: number
    playerIds: string[]
    totalSpent: number
    totalPoints: number
  }
  
  /** Dados de exemplo de lineups */
  export const lineups: Lineup[] = [
    {
      userId: 'u1',
      championshipId: 'c1',
      round: 1,
      playerIds: ['p1', 'p2'],
      totalSpent: 27,
      totalPoints: 10,
    },
    // …
  ]
  