import { isTemplateExpression } from "typescript";

type ClotheType = 'vestido' | 'sapato' | 'joia';

type Clothe = {
    type: ClotheType,
    image: string,
    name: string,
    color: string,

}

const data: Clothe[] = [
    {
    type: 'vestido',
    image: 'foto01.jpg',
    name: 'vestido Midi',
    color: 'Cor: Rosê',
    },
    {
    type: 'vestido',
    image: 'foto02.jpg',
    name: 'vestido Longo',
    color: 'Cor: Verde',
    },
    {
    type: 'vestido',
    image: 'foto03.jpg',
    name: 'vestido Longo',
    color: 'Cor: Estampado',
    },
    {
    type: 'joia',
    image: 'foto04.jpg',
    name: 'Colar de Pérolas',
    color: 'Cor: Bege',
    },
    {
    type: 'joia',
    image: 'foto05.jpg',
    name: 'Colar de Strass',
    color: 'Cor: Prata',
    },
    {
    type: 'joia',
    image: 'foto06.jpg',
    name: 'Colar Múltiplo',
    color: 'Cor: Grafite',
    },
    {
    type: 'sapato',
    image: 'foto07.jpg',
    name: 'Sapatilha',
    color: 'Cor: Branca',
    },
    {
    type: 'sapato',
    image: 'foto08.jpg',
    name: 'Scarpin',
    color: 'Cor: Vermelho',
    },
    {
    type: 'sapato',
    image: 'foto09.jpg',
    name: 'Tênis',
    color: 'Cor: Azul',
    }
];

export const Clothe = {

    getAll: () => {

    },

    getFromType: (type: ClotheType): Clothe[] => {
        return data.filter((item)=> {
            if (item.type == type) {
                return true;
            } else {
                return false;
            }
        });
    },

    getFromName: (name: string): Clothe[] => {
        return data.filter((item) => {
            if (
                item.name.toLocaleLowerCase().indexOf(name.toLocaleLowerCase()) > -1 ) {
                    return true;
                } else {
                    return false;
                }
        });
    },
};
