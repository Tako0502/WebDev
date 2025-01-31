document.addEventListener("DOMContentLoaded", () => {
  const list = document.querySelector("#todolist"),
    addBtn = document.querySelector("#add-btn"),
    input = document.querySelector(".task-title");

  const createListItem = () => {
    return new DOMParser()
      .parseFromString(
        `
    <li class="tosolist-item">
      <input type="checkbox" />
      <p></p>
      <img
        src="https://static-00.iconduck.com/assets.00/trash-icon-462x512-njvey5nf.png"
        alt="trash icon" />
    </li>`,
        "text/html"
      )
      .querySelector("li.tosolist-item");
    //   const li = document.createElement("li"),
    //     input = document.createElement("input"),
    //     p = document.createElement("p"),
    //     img = document.createElement("img");
    //   li.appendChild(input).appendChild(p).appendChild(img);
  };

  addBtn.addEventListener("click", () => {
    const title = input.value,
      li = createListItem();
    console.log(li);
    console.log(list);
    li.querySelector("p").innerText = title;
    li.querySelector("img").addEventListener("click", function () {
      list.removeChild(this.parentNode);
    });

    list.appendChild(li);
  });
});
