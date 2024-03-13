export interface IAppProps{

}

export interface IGoalProps{
    text: string,
    id: string
}
export interface IGoalItemProps {
    goal: any,
    onDeleteGoal: any;
}

export interface IGoalInputProps{
    onAddGoal: (goal: string) => void;
    modalVisible: boolean,
    onCancel: () => void
}