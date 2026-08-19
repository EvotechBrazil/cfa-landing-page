## Checkout de lote bloqueado não pode morar no JS do cliente
**Área:** clinica / pricing · **Severidade:** alta · **Registrado:** 2026-08-19

O URL do Asaas de um lote fechado, se estiver em `src/lib/data.ts`, vai para o bundle e qualquer um abre o checkout. O 2º lote (R$ 230) fica só no `HANDOFF.md` até ser liberado. `checkoutHref()` só devolve href se `accessible` e `paymentUrl` existirem.

**Como notar:** `rg vx52t5dqas0ekm5b src/` tem de continuar vazio.
