import { ChangeEvent, useEffect, useState } from 'react'

import CardList from './components/cardList/cardList.components'
import SearchBox from './components/searchBox/searchBox.components'

import './App.css'
import { getData } from './utils/fetchData.utils'

export type Monster = {
  id: string
  name: string
  email: string
}

const App = () => {
  const [searchString, setSearchString] = useState('')
  const [monsters, setMonsters] = useState<Monster[]>([])
  const [filteredMonster, setFilterdMonster] = useState(monsters)

  useEffect(() => {
    const fetchUsers = async () => {
      const users = await getData<Monster[]>(
        'https://jsonplaceholder.typicode.com/users'
      )
      setMonsters(users)
    }

    fetchUsers()
  }, [])

  useEffect(() => {
    const newFilteredMonster = monsters.filter(monster => {
      return monster.name.toLowerCase().includes(searchString)
    })
    setFilterdMonster(newFilteredMonster)
  }, [monsters, searchString])

  const onSearchChange = (event: ChangeEvent<HTMLInputElement>): void => {
    const searchString: string = event.target.value.toLowerCase()
    setSearchString(searchString)
  }

  return (
    <>
      <h1 className="app-title">Monster Rolodex</h1>
      <SearchBox
        onChangeHandler={onSearchChange}
        placeholder="Search Monsters"
        className="search-box"
      />
      <CardList monsters={filteredMonster} />
    </>
  )
}

// class app extends Component {
//   constructor() {
//     super();
//     this.state = {
//       monsters: [],
//       searchString: "",
//     };
//   }

//   componentDidMount() {
//     fetch("https://jsonplaceholder.typicode.com/users")
//       .then((res) => res.json())
//       .then((users) =>
//         this.setState(() => {
//           return { monsters: users };
//         }),
//       );
//   }

//   onSearchChange = (event) => {
//     const searchString = event.target.value.toLowerCase();
//     this.setState({ searchString });
//   };

//   render() {
//     const { monsters, searchString } = this.state;
//     const { onSearchChange } = this;
//     const filteredMonster = monsters.filter((monster) => {
//       return monster.name.toLowerCase().includes(searchString);
//     });

//     return (
//       <>
//         <h1 className="app-title">Monster Rolodex</h1>
//         <SearchBox
//           onChangeHandler={onSearchChange}
//           placeholder="Search Monsters"
//           className="search-box"
//         />
//         <CardList monsters={filteredMonster} />
//       </>
//     );
//   }
// }

export default App
