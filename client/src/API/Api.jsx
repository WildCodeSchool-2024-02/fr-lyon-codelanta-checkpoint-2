const Api = async () => {
    try {
      const response = await fetch("http://localhost:3310/api/cupcakes");
      const data = await response.json();
      return data;
    } catch (error) {
      return [];
    }
  };

export default Api;