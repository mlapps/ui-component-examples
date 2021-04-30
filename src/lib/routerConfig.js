import {AppInstance} from "@lightningjs/sdk/src/Application";
import {Colors} from "@lightningjs/sdk";
import { Splash } from "@/app/index.js";
import { ListAsColumn, ListAsColumnWithScroll, ListAsRow, ListAsRowWithScroll, ListCombo } from "../examples/list";
import { GridAsColumns, GridAsColumnsMosaic, GridAsColumnsWithScroll, GridAsRows, GridAsRowsMosaic, GridAsRowsWithScroll } from "../examples/grid";
import { CarouselAsColumn, CarouselAsRow } from "../examples/carousel";


export default {
    root: 'splash',
    beforeEachRoute: () => {
        const randomColor = `color${Math.floor(Math.random() * 5) + 1}`;
        AppInstance.themeColor = randomColor;
        AppInstance.background = Colors(randomColor).get();
        return true;
    },
    routes: [
        {
            path: 'splash',
            component: Splash
        },
        {
            path: 'list-row',
            component: ListAsRow
        },
        {
            path: 'list-row-with-scroll',
            component: ListAsRowWithScroll
        },
        {
            path: 'list-column',
            component: ListAsColumn
        },
        {
            path: 'list-column-with-scroll',
            component: ListAsColumnWithScroll
        },
        {
            path: 'list-combo',
            component: ListCombo
        },
        {
            path: 'carousel-row',
            component: CarouselAsRow
        },
        {
            path: 'carousel-column',
            component: CarouselAsColumn
        },
        {
            path: 'grid-rows',
            component: GridAsRows
        },
        {
            path: 'grid-rows-with-scroll',
            component: GridAsRowsWithScroll
        },
        {
            path: 'grid-columns',
            component: GridAsColumns
        },
        {
            path: 'grid-columns-with-scroll',
            component: GridAsColumnsWithScroll
        },
        {
            path: 'grid-rows-mosaic',
            component: GridAsRowsMosaic
        },
        {
            path: 'grid-columns-mosaic',
            component: GridAsColumnsMosaic
        }
    ]
}