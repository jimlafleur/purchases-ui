import {isNotBlank} from "../../utils/utils";

export const headCells = [
    {id: 'name', numeric: false, disablePadding: true, label: 'Покупка'},
    {id: 'count', numeric: true, disablePadding: false, label: 'Количество'},
    {id: 'coast', numeric: true, disablePadding: false, label: 'Стоимость'},
    {id: 'categoryName', numeric: false, disablePadding: false, label: 'Категория товара'},
];

export const ShoppingListHeadCells = [
    {id: 'name', numeric: false, disablePadding: false, label: 'Название списка'},
];

const descendingComparator = (a, b, orderBy) => {
    if (b[orderBy] < a[orderBy]) {
        return -1;
    }
    if (b[orderBy] > a[orderBy]) {
        return 1;
    }
    return 0;
}

export const getComparator = (order, orderBy) => {
    return order === 'desc'
        ? (a, b) => descendingComparator(a, b, orderBy)
        : (a, b) => -descendingComparator(a, b, orderBy);
}

export const stableSort = (array, comparator) => {
    const stabilizedThis = array.map((el, index) => [el, index]);
    stabilizedThis.sort((a, b) => {
        const order = comparator(a[0], b[0]);
        if (order !== 0) return order;
        return a[1] - b[1];
    });
    return stabilizedThis.map((el) => el[0]);
}

export const SHOPPING_LIST_TITTLE = "Списки покупок"
export const SHOPPING_LIST_EDIT_DIALOG_TOOLTIP = "Редактировать список покупок"
export const SHOPPING_LIST_DELETE_DIALOG_TOOLTIP = "Удалить список покупок"
export const SHOPPING_LIST_DELETE_DIALOG_TITTLE = "Удаление списка покупок"
export const SHOPPING_LIST_EDIT_DIALOG_TITTLE = "Редактирование списка покупок"
export const SHOPPING_LIST_SAVE_TOOLTIP = "Сохранить список покупок"

export const getDeleteMessage = name => `Вы действительно хотите удалить список покупок '${name}'?`

export const validateShoppingList = shoppingList => isNotBlank(shoppingList.name)
