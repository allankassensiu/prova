import { BaseMine } from './baseMine';

describe('Bootcamp object', () => {
  it('Dado duas dimensões x e y, deve ser criada uma matriz de dimensões x e y com zeros ', () => {
    const x = 2;
    const y = 2;
    const result = new BaseMine(x, y);
    const expected = [[0, 0], [0, 0]];
    expect(result.camp).toEqual(expected);
  });

  it('Dado um campo 2x2. Quando setar uma bomba na posição 0,1, esta deve retornar -1', () => {
    const x = 2;
    const y = 2;
    const baseMine = new BaseMine(x, y);
    baseMine.setBomb(0, 1);
    expect(baseMine.camp[0][1]).toEqual(-1);
  });

  it('Dado um campo 2x2. Quando setar uma bomba na posição 0,0, o campo deve retornar [[-1,1],[1,1]]', () => {
    const x = 2;
    const y = 2;
    const baseMine = new BaseMine(x, y);
    baseMine.setBomb(0, 0);
    expect(baseMine.camp).toEqual([[-1, 1], [1, 1]]);
  });

  it('Dado um campo 2x2. Quando setar uma bomba na posição 1,1, o campo deve retornar [[1,1],[1,-1]]', () => {
    const x = 2;
    const y = 2;
    const baseMine = new BaseMine(x, y);
    baseMine.setBomb(1, 1);
    expect(baseMine.camp).toEqual([[1, 1], [1, -1]]);
  });

  it(`Dado um campo 3x3. Quando setar uma bomba na posição 0,0;o campo deve retornar [
    [-1,1,0],
    [1,1,0],
    [0,0,0]
  ]`, () => {
      const x = 3;
      const y = 3;
      const baseMine = new BaseMine(x, y);
      baseMine.setBomb(0, 0);
      expect(baseMine.camp).toEqual([[-1, 1, 0], [1, 1, 0], [0, 0, 0]]);
    });

  it(`Dado um campo 3x3. Quando setar uma bomba na posição 1,1;o campo deve retornar [
      [1,1,1],
      [1,-1,1],
      [1,1,1]
    ]`, () => {
      const x = 3;
      const y = 3;
      const baseMine = new BaseMine(x, y);
      baseMine.setBomb(1, 1);
      expect(baseMine.camp).toEqual([[1, 1, 1], [1, -1, 1], [1, 1, 1]]);
    });

  it(`Dado um campo 5x5. Quando setar uma bomba na posição 1,1;o campo deve retornar [
        [1,1,1,0,0],
        [1,-1,1,0,0],
        [1,1,1,0,0],
        [0,0,0,0,0],
        [0,0,0,0,0]
      ]`, () => {
      const x = 5;
      const y = 5;
      const baseMine = new BaseMine(x, y);
      baseMine.setBomb(1, 1);
      expect(baseMine.camp).toEqual([
        [1, 1, 1, 0, 0],
        [1, -1, 1, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ]);
    });

  it(`Dado um campo 5x5. Quando setar uma bomba na posição 1,1 e outra 1,2;o campo deve retornar [
      [1, 2, 2,1,0],
      [1,-1,-1,1,0],
      [1, 2, 2,1,0],
      [0, 0, 0,0,0],
      [0, 0, 0,0,0]
    ]`, () => {
      const x = 5;
      const y = 5;
      const baseMine = new BaseMine(x, y);
      baseMine.setBomb(1, 1);
      baseMine.setBomb(1, 2);
      expect(baseMine.camp).toEqual([
        [1, 2, 2, 1, 0],
        [1, -1, -1, 1, 0],
        [1, 2, 2, 1, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ]);
    });

  it('Dado um campo 1x1, aumentar para 2x1', () => {
    const baseMine = new BaseMine(1, 1);
    baseMine.x = 2;
    expect(baseMine.x).toEqual(2);
    expect(baseMine.y).toEqual(1);
  });

  it('Dado um campo 2x1, aumentar para 4x1', () => {
    const baseMine = new BaseMine(2, 1);
    baseMine.x = 4;
    expect(baseMine.x).toEqual(4);
    expect(baseMine.y).toEqual(1);
  });

  it('Dado um campo 4x1, diminuir para 2x1', () => {
    const baseMine = new BaseMine(4, 1);
    baseMine.x = 2;
    expect(baseMine.x).toEqual(2);
    expect(baseMine.y).toEqual(1);
  });

  it('Dado um campo 1x1, aumentar para 1x2', () => {
    const baseMine = new BaseMine(1, 1);
    baseMine.y = 2;
    expect(baseMine.x).toEqual(1);
    expect(baseMine.y).toEqual(2);
  });

  it('Dado um campo 1x2, aumentar para 1x4', () => {
    const baseMine = new BaseMine(1, 2);
    baseMine.y = 4;
    expect(baseMine.x).toEqual(1);
    expect(baseMine.y).toEqual(4);
  });

  it('Dado um campo 1x4, aumentar para 1x2', () => {
    const baseMine = new BaseMine(1, 4);
    baseMine.y = 2;
    expect(baseMine.x).toEqual(1);
    expect(baseMine.y).toEqual(2);
  });

  it('Dado um campo 3x3, aumentar para 5x5', () => {
    const baseMine = new BaseMine(3, 3);
    baseMine.x = 5;
    baseMine.y = 5;
    expect(baseMine.x).toEqual(5);
    expect(baseMine.y).toEqual(5);
  });

  it(`Dado um campo 2x2, aumentar para 5x5 e colocar uma bomba em 1,1, retornar [
    [1, 1, 1,0,0],
    [1,-1, 1,0,0],
    [1, 1, 1,0,0],
    [0, 0, 0,0,0],
    [0, 0, 0,0,0]
  ]`, () => {
      const baseMine = new BaseMine(2, 2);
      baseMine.x = 5;
      baseMine.y = 5;
      baseMine.setBomb(1, 1);
      expect(baseMine.camp).toEqual([
        [1, 1, 1, 0, 0],
        [1, -1, 1, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ]);
    });

  describe('Testes de visualização Dado um campo 5x5, com bomba em 1,1', () => {
    let baseMine: BaseMine;
    beforeEach(() => {
      baseMine = new BaseMine(5, 5);
      baseMine.setBomb(1, 1);
      expect(baseMine.camp).toEqual([
        [1, 1, 1, 0, 0],
        [1, -1, 1, 0, 0],
        [1, 1, 1, 0, 0],
        [0, 0, 0, 0, 0],
        [0, 0, 0, 0, 0]
      ]);
    });
    it('Mostrar a posição 0,0 como 1', () => {
      expect(baseMine.display(0, 0)).toEqual('1');
    });
    it('Mostrar a posição 0,3 como espaço vazio', () => {
      expect(baseMine.display(0, 3)).toEqual(' ');
    });
    it('Mostrar a posição 1,1 como *', () => {
      expect(baseMine.display(1, 1)).toEqual('*');
    });
  });

  it('Dado um campo 2x2, definir uma bomba 0x0 e desfazer a ação, retornar campo vazio', () => {
    const baseMine = new BaseMine(2, 2);
    baseMine.changeBomb(0, 0);
    expect(baseMine.camp).toEqual([[-1, 1], [1, 1]]);
    baseMine.changeBomb(0, 0);
    expect(baseMine.camp).toEqual([[0, 0], [0, 0]]);
    return baseMine;
  });
});
