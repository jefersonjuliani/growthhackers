import React from 'react';
import { NotificationIndicator } from '@/presentation/components';
import  useCase from '@/main/factories/usecases'

interface Props  {
    menu: string
}

const makeNotificationIndicator: React.FC<Props> = ({menu}) => {

    return <NotificationIndicator number={useCase.makeRemoteLoadNotificationIndicator(menu)} />;
}

export default makeNotificationIndicator;