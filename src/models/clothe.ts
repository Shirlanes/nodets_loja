type ClotheType = 'vestido' | 'sapato' | 'joia';

type Clothe = {
  type: ClotheType;
  image: string;
  name: string;
  color: string;
};

const data: Clothe[] = [
  {
    type: 'vestido',
    image: 'foto01.jpg',
    name: 'Vestido Midi',
    color: 'Rosê',
  },
  {
    type: 'vestido',
    image: 'foto02.jpg',
    name: 'Vestido Longo',
    color: 'Verde',
  },
  {
    type: 'vestido',
    image: 'foto03.jpg',
    name: 'Vestido Longo',
    color: 'Estampado',
  },
  {
    type: 'joia',
    image: 'foto04.jpg',
    name: 'Colar Perolas',
    color: 'Bege',
  },
  {
    type: 'joia',
    image: 'foto05.jpg',
    name: 'Colar Strass',
    color: 'Amarelo',
  },
  {
    type: 'joia',
    image: 'foto06.jpg',
    name: 'Colar Multiplo',
    color: 'Grafite',
  },
  {
    type: 'sapato',
    image: 'foto07.jpg',
    name: 'Sapatilha',
    color: 'Nude',
  },
  {
    type: 'sapato',
    image: 'foto08.jpg',
    name: 'Scarpin',
    color: 'Vermelho',
  },
  {
    type: 'sapato',
    image: 'foto09.jpg',
    name: 'Tenis',
    color: 'Azul',
  },
];

export const Clothe = {
  getAll: () => {
    return data;
  },

  getFromType: (type: ClotheType): Clothe[] => {
    return data.filter((item) => {
      if (item.type === type) {
        return true;
      } else {
        return false;
      }
    });
  },

  getFromName: (name: string): Clothe[] => {
    return data.filter((item) => {
      if (
        item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1
      ) {
        return true;
      } else {
        return false;
      }
    });
  },
};