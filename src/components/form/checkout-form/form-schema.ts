import { z } from 'zod'

export const formSchema = z.object({
  cep: z.string().min(1, 'CEP obrigatório'),
  street: z.string().min(1, 'Rua obrigatória'),
  streetNumber: z.string().min(1, 'Informe o número'),
  complement: z.string(),
  neighborhood: z.string().min(1, 'Informe o bairro'),
  city: z.string().min(1, 'Informe a cidade'),
  uf: z.string().min(1, 'Informe o estado'),
  paymentMethod: z.enum(['credit-card', 'debit-card', 'money'], {
    invalid_type_error: 'Informe um método de pagamento',
  }),
})

export type FormSchema = z.infer<typeof formSchema>
