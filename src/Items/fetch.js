import { ref } from "vue";

const fetcheddata=ref(null)
fetch('https://mocki.io/v1/3fb1488d-bbdb-4ddd-9a03-a0d2efc98597')
  .then(response => response.json())
  .then(data => fetcheddata.value=data);

export default fetcheddata