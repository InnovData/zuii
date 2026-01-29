
export interface ButtonConfig {
  label: string;
  variant?: 'primary' | 'secondary';
  onClick?: () => void;
}

export const renderButton = (config: ButtonConfig): HTMLElement => {
  const btn = document.createElement('button');
  btn.innerText = config.label;

  // On utilise les CSS Modules
  btn.classList.add('z-btn');
  if (config.variant) {
    btn.classList.add(`is-${config.variant}`);
  }

  if (config.onClick) {
    btn.addEventListener('click', config.onClick);
  }

  return btn;
};
