import { Get, HttpStatus, Controller, Res, Param } from '@nestjs/common';
import { Response } from "express";

@Controller('cats')
export class CatsController {

    @Get()
    findAll(@Res() res: Response) {
        return res.status(HttpStatus.OK).json({
            message: 'all cats',
            status: 'ok'
        });
    }

    @Get(':catName')
    findOne(@Param('catName') catName: String, @Res() res: Response) {
        return res.status(HttpStatus.OK).json({
            message: `Hello cat: ${catName}`,
            status: 'ok'
        });
    }

}
