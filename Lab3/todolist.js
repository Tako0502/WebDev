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
    if (input.value == "") {
      alert("Please enter a task");
      return;
    }
    const title = input.value,
      li = createListItem(),
      paragraf = li.querySelector("p");
    console.log(li);
    console.log(list);
    const chekcBox = li.querySelector("input[type=checkbox]");
    if (chekcBox) {
      chekcBox.addEventListener("click", function () {
        paragraf.classList.toggle("over-line");
      });
    }

    paragraf.innerText = title;
    li.querySelector("img").addEventListener("click", function () {
      list.removeChild(this.parentNode);
    });

    list.appendChild(li);
    input.value = "";
  });
});
