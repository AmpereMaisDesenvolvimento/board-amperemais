import { z } from 'zod'

export const SaleSchema = z.object({
  id: z.string({}),
  chave: z.string({}),
  cliente: z.string({}),
  data: z.string({}),
  dataVenda: z.string({}),
  modelo: z.enum(['DV', '55', '65', '3A', '02']),
  movimento: z.enum(['RECEITAS']),
  natureza: z.enum(['SN08', 'SN03', 'SN11', 'SN20', 'SN04', 'SN09', 'SN02', 'COND', 'SN99', 'SN01', 'SN05']),
  parceiro: z.string({}),
  serie: z.string(),
  situacao: z.enum(['00', '04', '02', '05']),
  tipo: z.enum(['Devolucao de compra', 'Outras Saidas Nao Especificadas', 'Remessa para conserto', 'Condicional', 'Venda de produtos']),
  valor: z.number({}),
  vendedor: z.string({}),
  idCliente: z.string({}),
})

export type TSale = z.infer<typeof SaleSchema>
