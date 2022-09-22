import { Request, Response } from "express";
import { createMenuObject } from "../helpers/createMenuObject";
import { Clothe } from "../models/clothe";

export const search = (req: Request, res: Response) => {
    let query: string = req.query.q as string;

    let list = Clothe.getFromName(query);

    res.render('pages/page', {
        menu: createMenuObject(''),
        list,
    });
};