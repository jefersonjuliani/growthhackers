import { ComponentType } from 'react';

interface routeInterface {
  id?: string,
  path: string,
  name: string,
  alt?: string,
  icon?: string,
  iconHover?:string,
  layout: string,
  component?:ComponentType,
  redirect: Boolean,
  }


  export default routeInterface;