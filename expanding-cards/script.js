const panels = document.querySelectorAll('.panel');

const removeActiveClasses = () => {
  panels.forEach((panel) => {
    panel.classList.remove('active');
  });
};

panels.forEach((panel) => {
  panel.addEventListener('click', (evt) => {
    const { target } = evt;
    if (target.classList.contains('active')) return;

    removeActiveClasses();
    panel.classList.add('active');
  })
});
