export interface MoveResultDescriptorProps {
    resultName: 'Weak Hit' | 'Strong Hit' | 'Miss',
    resultDescriptor: string
}

export interface MoveResultCollectionProps {
    moveResultDescriptors: MoveResultDescriptorProps[]
}