/** Tipagem para cada time */
export interface Team {
    id: string
    name: string
    championshipId: string
  }
  
  /** Dados de exemplo de times */
  export const teams: Team[] = [
    { id: 'team1', name: 'Amigos FC',        championshipId: 'c1' },
    { id: 'team1', name: 'Trupe do Gol',     championshipId: 'c1' },
    { id: 'team2', name: 'Só na Resenha',    championshipId: 'c2' },
  ]
  