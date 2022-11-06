import { ITask } from "./ITask"

export interface ICategory {
    id: string
    label: string,
    closable?: boolean,
    tasks?: ITask[]
}