import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";

export const home = (req: Request, res: Response) => {
    res.render("pages/page", {
        menu: createMenuObject('all'),
        banner: {
            title: "Todos os produtos",
        background: "banner.jpg",
        },
    });
};

export const vestidos = (req: Request, res: Response) => {
    res.render("pages/page", {
         menu: createMenuObject('vestido'),
        banner: {
            title: "Vestidos",
        background: "bannerVestidos.jpeg",
        },
    });
};

export const sapatos = (req: Request, res: Response) => {
     res.render("pages/page", {
         menu: createMenuObject('sapato'),
        banner: {
            title: "Sapatos",
        background: "bannerSapatos.jpeg",
        },
    });
};

export const joias = (req: Request, res: Response) => {
     res.render("pages/page", {
         menu: createMenuObject('joia'),
        banner: {
            title: "Joias",
        background: "bannerJoias.jpeg",
        },
    });
};