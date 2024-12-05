import { DateTime } from 'luxon';
import { prisma } from './../src/utils/prisma';

async function main() {
  // Criar categorias
  const categorias = [
    { tipo: 'SUV', valorLocacao: 150.0 },
    { tipo: 'Sedan', valorLocacao: 100.0 },
    { tipo: 'Hatchback', valorLocacao: 80.0 },
    { tipo: 'Pickup', valorLocacao: 200.0 },
    { tipo: 'Conversível', valorLocacao: 250.0 },
    { tipo: 'Van', valorLocacao: 180.0 },
    { tipo: 'Coupé', valorLocacao: 120.0 },
    { tipo: 'Elétrico', valorLocacao: 300.0 },
    { tipo: 'Híbrido', valorLocacao: 250.0 },
    { tipo: 'Esportivo', valorLocacao: 500.0 },
  ];

  await prisma.categoria.createMany({
    data: categorias,
    skipDuplicates: true,
  });

  console.log('Categorias populadas com sucesso!');

  // Criar marcas
  const marcas = [
    { nome: 'Toyota' },
    { nome: 'Volkswagen' },
    { nome: 'Ford' },
    { nome: 'Chevrolet' },
    { nome: 'Honda' },
    { nome: 'Nissan' },
    { nome: 'Hyundai' },
    { nome: 'BMW' },
    { nome: 'Mercedes-Benz' },
    { nome: 'Audi' },
    { nome: 'Kia' },
    { nome: 'Peugeot' },
    { nome: 'Renault' },
    { nome: 'Fiat' },
    { nome: 'Jeep' },
    { nome: 'Subaru' },
    { nome: 'Mazda' },
    { nome: 'Porsche' },
    { nome: 'Tesla' },
    { nome: 'Volvo' },
    { nome: 'Lexus' },
    { nome: 'Land Rover' },
    { nome: 'Jaguar' },
    { nome: 'Suzuki' },
    { nome: 'Mitsubishi' },
    { nome: 'Ferrari' },
    { nome: 'Lamborghini' },
    { nome: 'Bugatti' },
    { nome: 'Rolls-Royce' },
    { nome: 'Bentley' },
    { nome: 'Aston Martin' },
    { nome: 'Alfa Romeo' },
    { nome: 'Chrysler' },
    { nome: 'Dodge' },
    { nome: 'Ram' },
    { nome: 'GMC' },
    { nome: 'Cadillac' },
    { nome: 'Infiniti' },
    { nome: 'Acura' },
    { nome: 'Seat' },
    { nome: 'Skoda' },
    { nome: 'Citroën' },
    { nome: 'Mini' },
    { nome: 'Genesis' },
    { nome: 'Opel' },
  ];

  await prisma.marca.createMany({
    data: marcas,
    skipDuplicates: true,
  });

  console.log('Marcas populadas com sucesso!');

  // Criar modelos e associá-los a categorias e marcas
  const modelos = [
    {
      nome: 'Corolla',
      anoModelo: DateTime.local().minus({ years: 2 }).toISO(),
      qtModelo: 10,
      categoriaId: 1,
      marcaId: 1,
    },
    {
      nome: 'Civic',
      anoModelo: DateTime.local().minus({ years: 3 }).toISO(),
      qtModelo: 8,
      categoriaId: 2,
      marcaId: 5,
    },
    {
      nome: 'Golf',
      anoModelo: DateTime.local().minus({ years: 4 }).toISO(),
      qtModelo: 5,
      categoriaId: 3,
      marcaId: 2,
    },
    {
      nome: 'F-150',
      anoModelo: DateTime.local().minus({ years: 5 }).toISO(),
      qtModelo: 6,
      categoriaId: 4,
      marcaId: 3,
    },
    {
      nome: 'Mustang',
      anoModelo: DateTime.local().minus({ years: 2 }).toISO(),
      qtModelo: 12,
      categoriaId: 10,
      marcaId: 3,
    },
    {
      nome: 'Model X',
      anoModelo: DateTime.local().minus({ years: 1 }).toISO(),
      qtModelo: 3,
      categoriaId: 8,
      marcaId: 19,
    },
  ];

  await prisma.modelo.createMany({
    data: modelos,
    skipDuplicates: true,
  });

  console.log('Modelos populados com sucesso!');

  // Criar veículos
  const veiculos = [
    {
      placa: 'ABC-1234',
      chassi: '1234567890ABCDEF',
      anoFabricacao: DateTime.local().minus({ years: 2 }).toISO(),
      cor: 'Preto',
      status: 'Disponível',
      modeloId: 1,
    },
    {
      placa: 'XYZ-5678',
      chassi: '2345678901BCDEFG',
      anoFabricacao: DateTime.local().minus({ years: 3 }).toISO(),
      cor: 'Prata',
      status: 'Locado',
      modeloId: 2,
    },
  ];

  await prisma.veiculo.createMany({
    data: veiculos,
    skipDuplicates: true,
  });

  console.log('Veículos populados com sucesso!');

  // Criar contratos
  const contratos = [
    {
      dataLocacao: DateTime.local().minus({ months: 1 }).toISO(),
      dataDevolucao: DateTime.local().plus({ months: 1 }).toISO(),
      valorCaucao: 500.0,
      valorTotal: 1500.0,
      status: 'Ativo',
    },
    {
      dataLocacao: DateTime.local().minus({ months: 2 }).toISO(),
      dataDevolucao: DateTime.local().plus({ months: 2 }).toISO(),
      valorCaucao: 700.0,
      valorTotal: 2000.0,
      status: 'Concluído',
    },
  ];

  await prisma.contratoLocacao.createMany({
    data: contratos,
    skipDuplicates: true,
  });

  console.log('Contratos populados com sucesso!');

  // Criar ocorrências
  const ocorrencias = [
    {
      descricao: 'Acidente com colisão traseira',
      dataOcorrencia: DateTime.local().minus({ months: 1 }).toISO(),
      valorOcorrencia: 300.0,
      contratoId: 1,
    },
    {
      descricao: 'Pneu furado durante locação',
      dataOcorrencia: DateTime.local().minus({ weeks: 3 }).toISO(),
      valorOcorrencia: 100.0,
      contratoId: 2,
    },
  ];

  await prisma.ocorrencia.createMany({
    data: ocorrencias,
    skipDuplicates: true,
  });

  console.log('Ocorrências populadas com sucesso!');

  // Criar pagamentos
  const pagamentos = [
    {
      data: DateTime.local().minus({ weeks: 1 }).toISO(),
      valorPago: 1500.0,
      formaPagamento: 'Cartão de Crédito',
      contratoId: 1,
    },
    {
      data: DateTime.local().minus({ months: 1 }).toISO(),
      valorPago: 2000.0,
      formaPagamento: 'Boleto Bancário',
      contratoId: 2,
    },
  ];

  await prisma.pagamento.createMany({
    data: pagamentos,
    skipDuplicates: true,
  });

  console.log('Pagamentos populados com sucesso!');

  // Criar manutenções
  const manutencoes = [
    {
      descricao: 'Troca de óleo',
      dataManutencao: DateTime.local().minus({ months: 2 }).toISO(),
      valorManutencao: 150.0,
      veiculoId: 1,
    },
    {
      descricao: 'Alinhamento e balanceamento',
      dataManutencao: DateTime.local().minus({ months: 1 }).toISO(),
      valorManutencao: 100.0,
      veiculoId: 2,
    },
  ];

  await prisma.manutencao.createMany({
    data: manutencoes,
    skipDuplicates: true,
  });

  console.log('Manutenções populadas com sucesso!');
}

main()
  .catch(e => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
