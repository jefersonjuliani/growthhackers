import React from 'react';
import  useCase from '@/main/factories/usecases'
import { Board } from '@/presentation/components';


const makeBoard: React.FC = () => {
  return <Board loadBoard={useCase.makeRemoteLoadBoard()}/>;
}

export default makeBoard;