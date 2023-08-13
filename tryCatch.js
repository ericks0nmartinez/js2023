let load = false;

async function loadData() {
  try {
    const response = await fetch("https://jsonplaceholder.typicode.com/users");
    const data = await response.json();
    for (const item of data) {
      console.log(item.name);
    }
  } catch (error) {
    console.log(error.message);
    console.log("O programa falhou contate o administrador");
  } finally {
    load = true;
    console.log(load, "finally executou");
  }
}

loadData();
