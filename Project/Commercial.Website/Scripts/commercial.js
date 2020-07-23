import { ProductFilterInterface } from '../Views/Products/ProductFilter/product-filter';
import { widgetFunc } from '../Views/Widgets/CommercialWidget/commercial-widget';

document.addEventListener('DOMContentLoaded', () => {
    ProductFilterInterface.init();
});

widgetFunc();