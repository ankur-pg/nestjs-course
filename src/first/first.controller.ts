import { Body, Controller, Delete, Get, HttpCode, HttpStatus, Param, Patch, Post, Query } from '@nestjs/common';
import { CreateCoffeeDto } from './dto/create-coffee.dto/create-coffee.dto';
import { UpdateCoffeeDto } from './dto/update-coffee.dto/update-coffee.dto';
import { FirstService } from './first.service';

@Controller('first')
export class FirstController {
    constructor(private readonly firstService: FirstService) {}

    @Get()
    findAll(@Query() paginationQuery) {
        return this.firstService.findAll()
    }

    @Get(':id')
    findOne(@Param() id: string) {
        return this.firstService.findOne(id)
    }

    @Post()
    @HttpCode(HttpStatus.GONE)
    create(@Body() createCoffeeDto: CreateCoffeeDto) {
        return this.firstService.create(createCoffeeDto)
    }

    @Patch(':id')
    update(@Param('id') id: string, @Body() updateCoffeeDto: UpdateCoffeeDto) {
        return `The id = ${id}`
    }

    @Delete(':id')
    remove(@Param('id') id: string) {}
}
