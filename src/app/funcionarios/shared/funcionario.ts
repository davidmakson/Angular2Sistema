import {Address} from './address';

export class Funcionario {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: Address = new Address();
}
