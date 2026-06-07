//your JS code here. If required.
const output = document.getElementById("output");

output.innerHTML = `
<tr id="loading">
  <td colspan="2">Loading...</td>
</tr>
`;

function createPromise(name) {
  const time = Math.random() * 2 + 1; // 1 to 3 sec

  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        name,
        time
      });
    }, time * 1000);
  });
}

const p1 = createPromise("Promise 1");
const p2 = createPromise("Promise 2");
const p3 = createPromise("Promise 3");

Promise.all([p1, p2, p3]).then((results) => {
  output.innerHTML = "";

  results.forEach((result) => {
    output.innerHTML += `
      <tr>
        <td>${result.name}</td>
        <td>${result.time.toFixed(3)}</td>
      </tr>
    `;
  });

  const total = Math.max(...results.map(r => r.time));

  output.innerHTML += `
    <tr>
      <td>Total</td>
      <td>${total.toFixed(3)}</td>
    </tr>
  `;
});