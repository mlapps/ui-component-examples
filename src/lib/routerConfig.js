import {AppInstance} from "@lightningjs/sdk/src/Application";
import {Colors} from "@lightningjs/sdk";
import { Splash } from "@/app/index.js";
import { ListAsColumn, ListAsColumnWithScroll, ListAsRow, ListAsRowWithScroll, ListCombo } from "../examples/list";
import { GridAsColumns, GridAsColumnsMosaic, GridAsColumnsWithScroll, GridAsRows, GridAsRowsMosaic, GridAsRowsWithScroll } from "../examples/grid";
import { CarouselAsColumn, CarouselAsRow } from "../examples/carousel";

const routes = [
    {
        path: 'splash',
        component: Splash,
        widgets: ['menu']
    },
    {
        path: 'list-row',
        component: ListAsRow,
        widgets: ['menu']
    },
    {
        path: 'list-row-with-scroll',
        component: ListAsRowWithScroll,
        widgets: ['menu']
    },
    {
        path: 'list-column',
        component: ListAsColumn,
        widgets: ['menu']
    },
    {
        path: 'list-column-with-scroll',
        component: ListAsColumnWithScroll,
        widgets: ['menu']
    },
    {
        path: 'list-combo',
        component: ListCombo,
        widgets: ['menu']
    },
    {
        path: 'carousel-row',
        component: CarouselAsRow,
        widgets: ['menu']
    },
    {
        path: 'carousel-column',
        component: CarouselAsColumn,
        widgets: ['menu']
    },
    {
        path: 'grid-rows',
        component: GridAsRows,
        widgets: ['menu']
    },
    {
        path: 'grid-rows-with-scroll',
        component: GridAsRowsWithScroll,
        widgets: ['menu']
    },
    {
        path: 'grid-columns',
        component: GridAsColumns,
        widgets: ['menu']
    },
    {
        path: 'grid-columns-with-scroll',
        component: GridAsColumnsWithScroll,
        widgets: ['menu']
    },
    {
        path: 'grid-rows-mosaic',
        component: GridAsRowsMosaic,
        widgets: ['menu']
    },
    {
        path: 'grid-columns-mosaic',
        component: GridAsColumnsMosaic,
        widgets: ['menu']
    }
]

export default {
    root: 'splash',
    beforeEachRoute: (from, to) => {
        const randomColor = `color${Math.floor(Math.random() * 5) + 1}`;
        AppInstance.themeColor = randomColor;
        AppInstance.background = Colors(randomColor).get();
        return true;
    },
    routes
}