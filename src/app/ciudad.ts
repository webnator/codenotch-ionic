export class Ciudad {
  nombre: string
  codigo: string
  pais: string
  temperatura?: Temperatura
  marea: number
  periodo: number
}

export class Temperatura {
  valor: number
  tipo: string
}
