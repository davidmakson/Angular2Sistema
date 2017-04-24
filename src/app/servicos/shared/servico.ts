import {Address} from './address';

export class Servico {
  id: number;
  name: string;
  phone: string;
  email: string;
  address: Address = new Address();
}
