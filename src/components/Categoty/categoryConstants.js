import {isNotBlank} from "../../utils/utils";

export const CategoryHeadCells = [
    {id: 'name', label: 'Категория товара'},
    {id: 'description', label: 'Описание'},
];

export const CATEGORY_TITTLE = "Категории товаров"
export const CATEGORY_EDIT_DIALOG_TOOLTIP = "Редактировать категорию товара"
export const CATEGORY_DELETE_DIALOG_TOOLTIP = "Удалить категорию товара"
export const CATEGORY_DELETE_DIALOG_TITTLE = "Удаление категории товара"
export const CATEGORY_EDIT_DIALOG_TITTLE = "Редактирование категории товара"
export const CATEGORY_SAVE_TOOLTIP = "Сохранить категорию товара"

export const getDeleteMessage = name => `Вы действительно хотите удалить категорию товара '${name}'? Данное действие также удалит все продукты и покупки, связанные с этой категорией`

export const validateCategory = category => isNotBlank(category.name) && isNotBlank(category.description)
