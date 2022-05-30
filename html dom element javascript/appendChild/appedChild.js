const btn = document.getElementById('apped-Child');

btn.addEventListener('click', () => {
    const node = document.createElement("li");
    const textnode = document.createTextNode("Water");
    node.appendChild(textnode);
    document.getElementById("myList").appendChild(node);
});