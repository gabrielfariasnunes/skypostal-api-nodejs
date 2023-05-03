#### Requisição:

```h
GET http://127.0.0.1:9090/rastrear/{codigo_de_rastreio}
```

#### Execução:

```s
npm run start
```

#### Pacote encontrado

```json
[
  {
    "origem": "MIA",
    "data": "27/08/2022",
    "hora": "11:01",
    "status": "DATA DO RECEBIMENTO",
    "documento": 22661588
  },
  {
    "origem": "MIA",
    "data": "27/08/2022",
    "hora": "11:01",
    "status": "DOCUMENTACAO COMPLETA",
    "documento": 22661588
  },
  {
    "origem": "MIA",
    "data": "31/08/2022",
    "hora": "16:04",
    "status": "RECEBIDO EM MIAMI",
    "documento": 22661588
  },
  {
    "origem": "MIA",
    "data": "31/08/2022",
    "hora": "16:05",
    "status": "PROCESADO",
    "documento": 22661588
  },
  {
    "origem": "MIA",
    "data": "01/09/2022",
    "hora": "11:24",
    "status": "ENVIADO",
    "documento": 22661588
  },
  {
    "origem": "MIA",
    "data": "02/09/2022",
    "hora": "11:16",
    "status": "ATRASADO",
    "documento": 22661588
  },
  {
    "origem": "Brasil",
    "data": "06/09/2022",
    "hora": "10:03",
    "status": "CHEGOU NO PAIS",
    "documento": 22661588
  },
  {
    "origem": "CURITIBA",
    "data": "11/09/2022",
    "hora": "13:28",
    "status": "CUSTOMS ENTRY",
    "documento": 22661588
  },
  {
    "origem": "CURITIBA",
    "data": "06/09/2022",
    "hora": "12:55",
    "status": "ENVIO LIBERADO",
    "documento": 22661588
  },
  {
    "origem": "CURITIBA",
    "data": "06/09/2022",
    "hora": "16:28",
    "status": "ENTREGUE A TRANSPORTADORA LOCAL",
    "documento": 22661588
  },
  {
    "origem": "CURITIBA",
    "data": "06/09/2022",
    "hora": "16:28",
    "status": "EM TRANSITO",
    "documento": 22661588
  },
  {
    "origem": "CURITIBA",
    "data": "06/09/2022",
    "hora": "23:11",
    "status": "EM TRANSITO",
    "documento": 22661588
  },
  {
    "origem": "BELEM",
    "data": "12/09/2022",
    "hora": "16:12",
    "status": "EM TRANSITO",
    "documento": 22661588
  },
  {
    "origem": "BELEM",
    "data": "15/09/2022",
    "hora": "09:18",
    "status": "SAIU PARA ENTREGA",
    "documento": 22661588
  },
  {
    "origem": "BELEM",
    "data": "15/09/2022",
    "hora": "11:21",
    "status": "ENTREGUE",
    "documento": 22661588
  }
]
```

#### Error: pacote não encontrado

```json
{
  "error": "Pacote não encontrado ou código invalido!"
}
```
