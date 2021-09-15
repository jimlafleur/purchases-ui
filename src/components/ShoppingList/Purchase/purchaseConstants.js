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

export const getDeleteMessage = name => `Вы действительно хотите удалить категорию товара '${name}'? Данное действие также удалит все продукты и покупки, связанные с этой категорией`

// const editCoast = event => {
//     const newCoast = event.target.valueAsNumber
//     if (isNaN(newCoast) || newCoast < 0) {
//         setCoast(0)
//     } else {
//         setCoast(newCoast)
//     }
// }