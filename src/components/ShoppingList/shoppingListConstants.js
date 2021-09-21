import {isNotBlank} from "../../utils/utils";

export const ShoppingListHeadCells = [
    {id: 'name', label: 'Название списка'},
];

export const SHOPPING_LIST_TITTLE = "Списки покупок"
export const SHOPPING_LIST_EDIT_DIALOG_TOOLTIP = "Редактировать список покупок"
export const SHOPPING_LIST_DELETE_DIALOG_TOOLTIP = "Удалить список покупок"
export const SHOPPING_LIST_DELETE_DIALOG_TITTLE = "Удаление списка покупок"
export const SHOPPING_LIST_EDIT_DIALOG_TITTLE = "Редактирование списка покупок"
export const SHOPPING_LIST_SAVE_TOOLTIP = "Сохранить список покупок"

export const SHOPPING_LIST_ADDED = "Список покупок успешно добавлен"
export const SHOPPING_LIST_REMOVED = "Список покупок успешно удалён"
export const SHOPPING_LIST_EDITED = "Список покупок успешно изменён"
export const SHOPPING_LIST_ERROR = "Введите название списка"

export const getDeleteMessage = name => `Вы действительно хотите удалить список покупок '${name}'?`

export const validateShoppingList = shoppingList => isNotBlank(shoppingList.name)
