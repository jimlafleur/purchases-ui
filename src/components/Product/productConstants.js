import {isNotBlank} from "../../utils/utils";

export const ProductHeadCells = [
    {id: 'name', numeric: false, disablePadding: true, label: 'Продукт'},
    {id: 'categoryName', numeric: false, disablePadding: false, label: 'Категория товара'},
];

export const PRODUCT_TITTLE = "Продукты"
export const PRODUCT_EDIT_DIALOG_TOOLTIP = "Редактировать продукт"
export const PRODUCT_DELETE_DIALOG_TOOLTIP = "Удалить продукт"
export const PRODUCT_DELETE_DIALOG_TITTLE = "Удаление продукта"
export const PRODUCT_EDIT_DIALOG_TITTLE = "Редактирование продукта"
export const PRODUCT_SAVE_TOOLTIP = "Сохранить продукт"

export const PRODUCT_ADDED = "Продукт успешно добавлен"
export const PRODUCT_REMOVED = "Продукт успешно удален"
export const PRODUCT_EDITED = "Продукт успешно изменен"
export const PRODUCT_ERROR = "Введите название продукта и выберите категорию товара"

export const getDeleteMessage = name => `Вы действительно хотите удалить продукт '${name}'? Данное действие также удалит все покупки, связанные с этом продуктом`

export const validateProduct = (product, params) => isNotBlank(product.name) && params.categoryId > 0