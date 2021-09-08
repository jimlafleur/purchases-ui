export const isBlank = str => (!str || /^\s*$/.test(str))

export const isNotBlank = str => !isBlank(str)

