import { Request, Response } from "express";

export const home = (req: Request, res: Response) => {
    res.render("pages/page", {
        banner: {
            title: "Todos os produtos",
        background: "banner.jpg",
        },
    });
};

export const vestidos = (req: Request, res: Response) => {
    res.render("pages/page", {
        banner: {
            title: "Vestidos",
        background: "bannerVestidos.jpeg",
        },
    });
};

export const sapatos = (req: Request, res: Response) => {
     res.render("pages/page", {
        banner: {
            title: "Sapatos",
        background: "bannerSapatos.jpeg",
        },
    });
};

export const joias = (req: Request, res: Response) => {
     res.render("pages/page", {
        banner: {
            title: "Joias",
        background: "bannerJoias.jpeg",
        },
    });
};