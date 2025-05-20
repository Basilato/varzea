/** Posições possíveis dos jogadores */
export type Position = 'GOALKEEPER' | 'DEFENDER' | 'MIDFIELDER' | 'FORWARD'

/** Tipagem para cada jogador */
export interface Player {
  id: string
  name: string
  position: Position
  teamId: string
  price: number
}

/** Dados de exemplo de jogadores */
export const players: Player[] = [
    { id: 'p3',  name: 'Pedro Goleiro',     position: 'GOALKEEPER', teamId: 'team1', price: 18 },
    { id: 'p4',  name: 'Lucas Lateral',      position: 'DEFENDER',   teamId: 'team1', price: 12 },
    { id: 'p5',  name: 'Marcos Zagueiro',    position: 'DEFENDER',   teamId: 'team1', price: 14 },
    { id: 'p6',  name: 'Rafael Zagueiro',    position: 'DEFENDER',   teamId: 'team1', price: 13 },
    { id: 'p7',  name: 'Tiago Lateral',      position: 'DEFENDER',   teamId: 'team1', price: 11 },
    { id: 'p8',  name: 'André Volante',      position: 'MIDFIELDER', teamId: 'team1', price: 16 },
    { id: 'p9',  name: 'Bruno Meia',         position: 'MIDFIELDER', teamId: 'team1', price: 15 },
    { id: 'p10', name: 'Felipe Meia',        position: 'MIDFIELDER', teamId: 'team1', price: 14 },
    { id: 'p11', name: 'Carlos Atacante',    position: 'FORWARD',    teamId: 'team1', price: 17 },
    { id: 'p12', name: 'Diego Atacante',     position: 'FORWARD',    teamId: 'team1', price: 18 },
    { id: 'p13', name: 'Eduardo Atacante',   position: 'FORWARD',    teamId: 'team1', price: 16 },
    { id: 'p14', name: 'Gustavo Goleiro',    position: 'GOALKEEPER', teamId: 'team2', price: 17 },
    { id: 'p15', name: 'Henrique Lateral',   position: 'DEFENDER',   teamId: 'team2', price: 13 },
    { id: 'p16', name: 'Ivan Zagueiro',      position: 'DEFENDER',   teamId: 'team2', price: 14 },
    { id: 'p17', name: 'João Zagueiro',      position: 'DEFENDER',   teamId: 'team2', price: 12 },
    { id: 'p18', name: 'Karl Lateral',       position: 'DEFENDER',   teamId: 'team2', price: 11 },
    { id: 'p19', name: 'Leonardo Volante',   position: 'MIDFIELDER', teamId: 'team2', price: 15 },
    { id: 'p20', name: 'Murilo Meia',        position: 'MIDFIELDER', teamId: 'team2', price: 14 },
    { id: 'p21', name: 'Nicolas Meia',       position: 'MIDFIELDER', teamId: 'team2', price: 13 },
    { id: 'p22', name: 'Otávio Atacante',    position: 'FORWARD',    teamId: 'team2', price: 18 },
    { id: 'p23', name: 'Paulo Atacante',     position: 'FORWARD',    teamId: 'team2', price: 17 },
    { id: 'p24', name: 'Quintino Atacante',  position: 'FORWARD',    teamId: 'team2', price: 16 },
]
