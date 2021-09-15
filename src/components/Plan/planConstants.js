import {isNotBlank} from "../../utils/utils";

export const PlanHeadCells = [
    {id: 'name', label: 'Название плана'},
    {id: 'shoppingListName', label: 'Список покупок'},
    {id: 'nearestDate', label: 'Ближайшая дата'},
    {id: 'planType', label: 'Тип плана'},
];

export const PLAN_TITTLE = "Планы"
export const PLAN_EDIT_DIALOG_TOOLTIP = "Редактировать план"
export const PLAN_DELETE_DIALOG_TOOLTIP = "Удалить план"
export const PLAN_DELETE_DIALOG_TITTLE = "Удаление плана"
export const PLAN_EDIT_DIALOG_TITTLE = "Редактирование плана"
export const PLAN_SAVE_TOOLTIP = "Сохранить план"

export const getDeleteMessage = name => `Вы действительно хотите удалить план '${name}'?`

export const validatePlan = category => isNotBlank(category.name) && isNotBlank(category.description)
