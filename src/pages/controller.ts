// src/pages/controller.ts
import { JsonController, Get, Param, Put, Body, Post } from 'routing-controllers'
import pagesById, { Page } from './data'
import { Http2SecureServer } from 'http2';

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

    @Put('/pages/:id')
    updatePage(
        @Param('id') id: number,
        @Body() body: Partial<Page>
    ): Page { 
        console.log(`Incoming PUT body param:`, body)
        return pagesById[id]
    }

    @Post('/pages')
    @HttpCode(201)
    createPage(
        @Body() body: Page
    ): Page{
        console.log(`Incoming POST body param:`, body)
        return body
    }
}