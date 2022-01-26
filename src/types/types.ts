export interface ITodosState{
  task: string,
  isComplited: boolean,
  id: number
}

export type ITodos = {
  tasks: ITodosState[],
  doneHandler: (id: number) => any,
  removeHandler: (id: number) => any
}

export type ITodo = {
  doneHandler: (id: number) => any,
  removeHandler: (id: number) => any,
  task: string,
  isComplited: boolean,
  id: number
}

export interface IModal {
  text: string,
  showing: boolean,
  setShure: (shure: boolean) => any
  setShowing: (showing: boolean) => any
}

// export interface IModalState{
//   showing: boolean
// }