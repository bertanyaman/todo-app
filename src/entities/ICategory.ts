import { ITask } from "./ITask"

export interface ICategory {
    key: string
    label: string,
    closable?: boolean,
    tasks?: ITask[]
}