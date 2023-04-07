import { MoveResultDescriptorProps } from "../interfaces/MoveResultDescriptor";

export class MoveResultCollection{
    moveResultDescriptors: MoveResultDescriptorProps[]
    constructor(props: MoveResultDescriptorProps[]){
        this.moveResultDescriptors = props
    }
}