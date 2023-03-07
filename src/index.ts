enum ACCOUNT {
  ADMIN = 'admin',
  NORMAL = 'normal',
}

type Person = {
  id: string,
  name: string,
  email: string,
  password: string,
  role: ACCOUNT
}

// ALIASES PERMISSÃO

type adminAccount = {
  account: string,
  permission: boolean
}

type normalAccount = {
  account: string,
  permission: boolean
}

// CRIACÃO DA PESSOA

const Rodolfo : Person = {
  id: '38',
  name: 'Rodolfo Freitas',
  email: 'rodolfo@gmail.com',
  password: '234344',
  role:ACCOUNT.ADMIN
}


type adminPerson = Person & adminAccount
type normalPerson = Person & normalAccount
type unionPerson = normalPerson | adminPerson

const adminPersonArray : Array <adminPerson> =[]
const normalPersonArray : Array <normalPerson> =[]
const unionPersonArray : Array <unionPerson> =[]

const userNormal_1 :normalPerson ={
  id: '0022',
  name: 'Antonio',
  email: 'antonio@gmail.com',
  password: '1234556',
  role: ACCOUNT.NORMAL,
  account: 'DrAntonio',
  permission: false
}

const userAdmin_1 : adminPerson ={
  id: 'd3333',
  name: 'Chay',
  email: 'chay@gmail.com',
  password: '444555',
  role: ACCOUNT.ADMIN,
  account: 'Dra Chay',
  permission: true
}

unionPersonArray.push(userNormal_1)
unionPersonArray.push(userAdmin_1)

console.table(unionPersonArray)