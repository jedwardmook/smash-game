declare module 'assets/charactersArray' {
  interface Character {
    name: string,
    image: string,
  }

  const charactersArray: Character[];
  export default charactersArray;
}