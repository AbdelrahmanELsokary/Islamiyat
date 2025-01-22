function toggelTheme() {
  let them = document.getElementById('them');
  if (document.body.classList.contains('dark_mode')) {
    document.body.classList.remove('dark_mode');
    them.src = 'assets/icons/dark.webp';
  } else {
    document.body.classList.add('dark_mode');
    them.src = 'assets/icons/light.webp';
  }
}
them.onclick = () => {
  toggelTheme();
};
let dropDown = document.getElementById('drop_down');
let toggelMenu = document.getElementById('menu');
dropDown.onclick = () => {
  toggelMenu.classList.toggle('drop_down');
};
