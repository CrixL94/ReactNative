interface Person {
  age: number;
  firstMane: string;
  lastName: string;
  address: Address
}

interface Address{
  country: string;
  houseNo: number;
  street?: string
}

export const ObjectLiteral = () => {

    const person: Person = {
        age:29,
        firstMane:'Cristhian',
        lastName:'Lopez',
        address:{
          country: 'Honduras',
          houseNo: 2,
          // street: 'Principal'
        }
    }
  return (
    <>
    <h3>Objetos literales</h3>
    <pre>
      {JSON.stringify(person, null, 2)}
    </pre>
    </>
  )
}
