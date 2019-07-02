// src/pages/controller.ts
import { JsonController, Get, Param } from 'routing-controllers'
import pagesById, { Page } from './data'

type PageList = { pages: Page[] }

@JsonController()
export default class PageController {


    @Get('/pages')
    allPages(): PageList {
        // .. implement!
        return {pages: Object.values(pagesById)}
    }

    @Get('/pages/:id')
    getPage(
        @Param('id') id: number
    ): Page {
        return pagesById[id]
    }
}