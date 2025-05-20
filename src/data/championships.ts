/** Tipagem para campeonatos */
export interface Championship {
    id: string
    name: string
    budget: number
  }
  
  /** Dados de exemplo de campeonatos */
  export const championships: Championship[] = [
    { id: 'c1', name: 'Copa Amadora 2025', budget: 100 },
    { id: 'c2', name: 'Liga dos Amigos', budget: 100 },
  ]
  