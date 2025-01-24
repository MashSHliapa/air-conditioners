export function scrollToPage(section: string) {
  setTimeout(() => {
    const element = document.getElementsByClassName(section);
    if (element.length > 0) {
      element[0].scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  }, 100);
}
