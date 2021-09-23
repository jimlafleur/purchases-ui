export const PurchaseHeadCells = [
    {id: 'name', label: 'Покупка'},
    {id: 'count',  label: 'Количество'},
    {id: 'coast',  label: 'Стоимость'},
    {id: 'categoryName',  label: 'Категория товара'},
];

export const PURCHASE_TITTLE = "Покупки"
export const PURCHASE_EDIT_DIALOG_TOOLTIP = "Редактировать покупку"
export const PURCHASE_DELETE_DIALOG_TOOLTIP = "Удалить покупку"
export const PURCHASE_DELETE_DIALOG_TITTLE = "Удаление покупки"
export const PURCHASE_EDIT_DIALOG_TITTLE = "Редактирование покупки"
export const PURCHASE_SAVE_TOOLTIP = "Сохранить покупку"

export const PURCHASE_REMOVED = "Покупка успешно удалена"

export const getEditDialogTittle = name => `Редактирование покупки '${name}'`

export const getDeleteMessage = name => `Вы действительно хотите удалить покупку '${name}'?`

// const editCoast = event => {
//     const newCoast = event.target.valueAsNumber
//     if (isNaN(newCoast) || newCoast < 0) {
//         setCoast(0)
//     } else {
//         setCoast(newCoast)
//     }
// }