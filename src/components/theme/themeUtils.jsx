export const loadTheme = (theme) => {
    const existingLink = document.getElementById('theme-link');
    
    if (existingLink) {
      existingLink.href = theme === 'dark' ? '/darkMode.css' : '/lightMode.css';
      console.log('Created new link element for theme');
    } else {
      const link = document.createElement('link');
      link.id = 'theme-link';
      link.rel = 'stylesheet';
      link.href = theme === 'dark' ? '/darkMode.css' : '/lightMode.css';
      document.head.appendChild(link);
      console.log(`Updated theme link href to ${link.href}`);
    }
  };