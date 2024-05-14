const Api = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon/");
      const data = await response.json();
      return data;
    } catch (error) {
      return [];
    }
  };

export default Api;